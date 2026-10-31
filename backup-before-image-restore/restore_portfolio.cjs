const fs = require('fs');
const vm = require('vm');

function evalTsxCache(cacheFile, extraContext = {}) {
  const raw = JSON.parse(fs.readFileSync('backup-before-image-restore/tsx-0/' + cacheFile, 'utf8')).code;
  const mod = { exports: {} };
  const sandbox = {
    module: mod,
    exports: mod.exports,
    require: (id) => {
      if (id.includes('portfolioExtended')) return extraContext.portfolioExtended || {};
      if (id.includes('portfolioNew')) return extraContext.portfolioNew || {};
      return require(id);
    },
    Object,
    Array,
  };
  vm.runInNewContext(raw, sandbox);
  return mod.exports;
}

const extExports = evalTsxCache('17934-7327d49b4391b93b799838f745dfe1abf73f10fd');
const newExports = evalTsxCache('17934-cda373e2d7e13aed2c55848236fbc79ae004fc79');
const pfExports = evalTsxCache('17934-b81045add77904962a1967c4dc0405f39f74cece', {
  portfolioExtended: extExports,
  portfolioNew: newExports,
});

const allProjects = [
  ...Object.values(pfExports).filter(Array.isArray).flat(),
  ...Object.values(extExports).filter(Array.isArray).flat(),
  ...Object.values(newExports).filter(Array.isArray).flat(),
];

// Deduplicate by id
const byId = new Map();
for (const p of allProjects) {
  if (p && p.slug) byId.set(p.id, p);
}
const uniqueProjects = Array.from(byId.values());
console.log('Total unique portfolio projects loaded from 17:10 cache:', uniqueProjects.length);

const svgToOriginalUrl = {};
for (const p of uniqueProjects) {
  const slug = p.slug;
  if (p.image) svgToOriginalUrl[`/images/portfolio/${slug}.svg`] = p.image;
  if (p.mobileImage) svgToOriginalUrl[`/images/portfolio/${slug}-mobile.svg`] = p.mobileImage;
  if (p.dashboardImage) svgToOriginalUrl[`/images/portfolio/${slug}-dashboard.svg`] = p.dashboardImage;
  if (Array.isArray(p.gallery) && p.gallery.length > 0) {
    svgToOriginalUrl[`/images/portfolio/${slug}-gallery-1.svg`] = p.gallery[0];
    if (p.gallery[1]) svgToOriginalUrl[`/images/portfolio/${slug}-gallery-2.svg`] = p.gallery[1];
  }
}

console.log('Mapped SVG keys for portfolio:', Object.keys(svgToOriginalUrl).length);

const pfFiles = [
  'src/mocks/portfolio.ts',
  'src/mocks/portfolioExtended.ts',
  'src/mocks/portfolioNew.ts',
];

for (const file of pfFiles) {
  let txt = fs.readFileSync(file, 'utf8');
  let count = 0;

  // First restore exact multi-image gallery arrays per project slug
  for (const p of uniqueProjects) {
    const slug = p.slug;
    if (Array.isArray(p.gallery) && p.gallery.length > 0) {
      const galleryPattern = /gallery:\s*\[[\s\S]*?\]/g;
      txt = txt.replace(galleryPattern, (block) => {
        if (!block.includes(`/images/portfolio/${slug}-gallery-`)) return block;
        let gIdx = 0;
        return block.replace(/\/images\/portfolio\/[^"'\s`]+\.svg/g, () => {
          const replacement = p.gallery[gIdx] || p.gallery[0];
          gIdx++;
          count++;
          return replacement;
        });
      });
    }
  }

  txt = txt.replace(/\/images\/portfolio\/[^"'\s`]+\.svg/g, (match) => {
    if (svgToOriginalUrl[match]) {
      count++;
      return svgToOriginalUrl[match];
    }
    return match;
  });

  fs.writeFileSync(file, txt, 'utf8');
  console.log(`${file}: restored ${count} portfolio image references`);
}
