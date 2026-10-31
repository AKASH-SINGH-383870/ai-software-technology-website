const fs = require('fs');
const path = require('path');

// 1. Scan all files in src/ for any remaining /images/.../*.svg references
function walk(dir) {
  let results = [];
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      results = results.concat(walk(full));
    } else if (/\.(ts|tsx)$/.test(f)) {
      results.push(full);
    }
  }
  return results;
}

const srcFiles = walk('src');
const remainingSvgRefs = [];
const allReaddyUrls = new Set();

for (const file of srcFiles) {
  const txt = fs.readFileSync(file, 'utf8');
  const svgMatches = txt.match(/\/images\/[^"'\s`]+\.svg/g);
  if (svgMatches) {
    remainingSvgRefs.push({ file, matches: svgMatches });
  }
  const readdyMatches = txt.match(/https:\/\/readdy\.ai\/api\/search-image\?[^"'\s`]+/g);
  if (readdyMatches) {
    for (const u of readdyMatches) allReaddyUrls.add(u);
  }
}

console.log('Remaining /images/*.svg references in src/:', remainingSvgRefs.length);
if (remainingSvgRefs.length > 0) {
  console.log(JSON.stringify(remainingSvgRefs, null, 2));
}
console.log('Total unique Readdy URLs restored in src/:', allReaddyUrls.size);

// 2. Test GET status of all unique Readdy URLs
async function verifyAll() {
  const urls = Array.from(allReaddyUrls);
  const results = {};
  let idx = 0;
  const concurrency = 12;

  async function worker() {
    while (idx < urls.length) {
      const current = urls[idx++];
      try {
        const res = await fetch(current, {
          method: 'GET',
          signal: AbortSignal.timeout(12000),
        });
        // Cancel body download once headers arrive to save bandwidth/time
        if (res.body) {
          try { await res.body.cancel(); } catch {}
        }
        results[current] = {
          status: res.status,
          contentType: res.headers.get('content-type') || '',
        };
      } catch (e) {
        results[current] = { status: 0, error: String(e) };
      }
    }
  }

  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  fs.writeFileSync('backup-before-image-restore/verified_get_results.json', JSON.stringify(results, null, 2));

  let ok200 = 0;
  let err400 = 0;
  let errOther = 0;
  const okSeqs = [];
  const missingSeqs = [];

  for (const [u, info] of Object.entries(results)) {
    const m = u.match(/[?&]seq=([^&]+)/);
    const seq = m ? m[1] : u;
    if (info.status === 200) {
      ok200++;
      okSeqs.push(seq);
    } else if (info.status === 400) {
      err400++;
      missingSeqs.push(seq);
    } else {
      errOther++;
      missingSeqs.push(seq + ':' + info.status);
    }
  }

  console.log(`GET Verification Complete -> 200 OK: ${ok200}, 400 Hash Not Found: ${err400}, Other: ${errOther}`);
  console.log('400/Missing seqs:', missingSeqs.join(', '));
}

verifyAll();
