const fs = require('fs');
const vm = require('vm');

const audit = JSON.parse(fs.readFileSync('backup-before-image-restore/url_audit.json', 'utf8'));
const seqToUrl = {};
for (const url of Object.keys(audit)) {
  const m = url.match(/[?&]seq=([^&]+)/);
  if (m) seqToUrl[m[1]] = url;
}

function evalTsxCache(cacheFile) {
  const raw = JSON.parse(fs.readFileSync('backup-before-image-restore/tsx-0/' + cacheFile, 'utf8')).code;
  const mod = { exports: {} };
  const sandbox = { module: mod, exports: mod.exports, require, Object, Array };
  vm.runInNewContext(raw, sandbox);
  return mod.exports;
}

const blogExports = evalTsxCache('17934-36416bb0814d419d0c587f8104972f88558c3cf1');
const serviceExports = evalTsxCache('17934-e242c4399741ca2f4bd922fcd0e1c1bc5a1df14f');
const csExports = evalTsxCache('17934-78ceceb8aac8e11047756a37d5a5d3ca8f93ad16');

const blogMap = {};
for (const post of blogExports.blogPosts) {
  blogMap[post.slug] = post.image;
}

const serviceMap = {};
for (const srv of serviceExports.servicesData) {
  serviceMap[srv.slug] = srv.bannerImage;
}

const csMap = {};
for (const cs of csExports.caseStudies) {
  csMap[cs.slug] = cs.image;
}

console.log('Loaded maps -> blogs:', Object.keys(blogMap).length, 'services:', Object.keys(serviceMap).length, 'caseStudies:', Object.keys(csMap).length);

// 1. Restore blog.ts
let blogTxt = fs.readFileSync('src/mocks/blog.ts', 'utf8');
let blogCount = 0;
blogTxt = blogTxt.replace(/\/images\/blogs\/([^"'\s`]+)\.svg/g, (match, slug) => {
  if (blogMap[slug]) {
    blogCount++;
    return blogMap[slug];
  }
  return match;
});
fs.writeFileSync('src/mocks/blog.ts', blogTxt, 'utf8');
console.log('Restored blog.ts:', blogCount);

// 2. Restore services.ts
let srvTxt = fs.readFileSync('src/mocks/services.ts', 'utf8');
let srvCount = 0;
srvTxt = srvTxt.replace(/\/images\/services\/([^"'\s`]+)\.svg/g, (match, slug) => {
  if (serviceMap[slug]) {
    srvCount++;
    return serviceMap[slug];
  }
  return match;
});
fs.writeFileSync('src/mocks/services.ts', srvTxt, 'utf8');
console.log('Restored services.ts:', srvCount);

// 3. Restore caseStudies.ts
let csTxt = fs.readFileSync('src/mocks/caseStudies.ts', 'utf8');
let csCount = 0;
csTxt = csTxt.replace(/\/images\/case-studies\/([^"'\s`]+)\.svg/g, (match, slug) => {
  if (csMap[slug]) {
    csCount++;
    return csMap[slug];
  }
  return match;
});
fs.writeFileSync('src/mocks/caseStudies.ts', csTxt, 'utf8');
console.log('Restored caseStudies.ts:', csCount);

// 4. Restore industryDetails.ts
const indSeqMap = {
  'healthcare-hero': 'industry-healthcare-hero',
  'healthcare-casestudy': 'cs-healthcare-medlife',
  'finance-hero': 'industry-finance-hero',
  'finance-casestudy': 'cs-finance-prime',
  'manufacturing-hero': 'industry-manufacturing-hero',
  'manufacturing-casestudy': 'cs-manufacturing-apex',
  'education-hero': 'industry-education-hero',
  'education-casestudy': 'cs-education-edulearn',
  'retail-hero': 'industry-retail-hero',
  'retail-casestudy': 'cs-retail-shopnow',
  'hospitality-hero': 'industry-hospitality-hero',
  'hospitality-casestudy': 'cs-hospitality-vista',
  'construction-hero': 'industry-construction-hero',
  'construction-casestudy': 'cs-construction-metro',
  'real-estate-hero': 'industry-realestate-hero',
  'real-estate-casestudy': 'cs-realestate-propview',
};
let indTxt = fs.readFileSync('src/mocks/industryDetails.ts', 'utf8');
let indCount = 0;
indTxt = indTxt.replace(/\/images\/industries\/([^"'\s`]+)\.svg/g, (match, key) => {
  const seq = indSeqMap[key];
  if (seq && seqToUrl[seq]) {
    indCount++;
    return seqToUrl[seq];
  }
  return match;
});
fs.writeFileSync('src/mocks/industryDetails.ts', indTxt, 'utf8');
console.log('Restored industryDetails.ts:', indCount);

// 5. Restore company.ts
const compSeqMap = {
  'vikram-singh': 'testimonial-vikram',
  'priya-agarwal': 'testimonial-priya',
  'rajesh-khanna': 'testimonial-rajesh',
};
let compTxt = fs.readFileSync('src/mocks/company.ts', 'utf8');
let compCount = 0;
compTxt = compTxt.replace(/\/images\/testimonials\/([^"'\s`]+)\.svg/g, (match, key) => {
  const seq = compSeqMap[key];
  if (seq && seqToUrl[seq]) {
    compCount++;
    return seqToUrl[seq];
  }
  return match;
});
fs.writeFileSync('src/mocks/company.ts', compTxt, 'utf8');
console.log('Restored company.ts:', compCount);

// 6. Restore TestimonialsCarousel.tsx
const tcSeqMap = {
  'vikram-singh': 'test-vikram-2',
  'priya-agarwal': 'test-priya-2',
  'rajesh-khanna': 'test-rajesh-2',
  'ananya-desai': 'test-ananya',
  'arjun-mehta': 'test-arjun',
};
let tcTxt = fs.readFileSync('src/pages/home/components/TestimonialsCarousel.tsx', 'utf8');
let tcCount = 0;
tcTxt = tcTxt.replace(/\/images\/testimonials\/([^"'\s`]+)\.svg/g, (match, key) => {
  const seq = tcSeqMap[key];
  if (seq && seqToUrl[seq]) {
    tcCount++;
    return seqToUrl[seq];
  }
  return match;
});
fs.writeFileSync('src/pages/home/components/TestimonialsCarousel.tsx', tcTxt, 'utf8');
console.log('Restored TestimonialsCarousel.tsx:', tcCount);

// 7. Restore ai-features/page.tsx
const aiSeqMap = {
  chat: 'ai-chat-assistant',
  estimator: 'ai-estimator',
  recommendation: 'ai-recommendation',
  lead: 'ai-lead-qual',
  support: 'ai-support',
  analyzer: 'ai-analyzer',
};
let aiTxt = fs.readFileSync('src/pages/ai-features/page.tsx', 'utf8');
let aiCount = 0;
aiTxt = aiTxt.replace(/\/images\/ai-features\/([^"'\s`]+)\.svg/g, (match, key) => {
  const seq = aiSeqMap[key];
  if (seq && seqToUrl[seq]) {
    aiCount++;
    return seqToUrl[seq];
  }
  return match;
});
fs.writeFileSync('src/pages/ai-features/page.tsx', aiTxt, 'utf8');
console.log('Restored ai-features/page.tsx:', aiCount);
