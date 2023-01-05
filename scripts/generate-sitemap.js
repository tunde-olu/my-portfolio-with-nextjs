const sitemap = require('nextjs-sitemap-generator');

const path = require('path');

sitemap({
  baseUrl: 'https://tunde-olu.vercel.app',
  pagesDirectory: path.resolve(__dirname, '../pages'),
  targetDirectory: 'public/',
  ignoredExtensions: ['js', 'map', 'png', 'svg', 'icon', 'jpg', 'jpeg'],
  ignoredPaths: ['404', 'favicon', 'vercel', 'resume', 'index'], // Exclude everything that isn't static page
  extraPaths: ['/'],
});
