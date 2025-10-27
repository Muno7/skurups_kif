const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const hostname = 'https://skurupskif.se'; // <-- replace with your domain

async function generateSitemap() {
  const links = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/activities', changefreq: 'weekly', priority: 0.9 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.8 },
    // Add other important routes here
  ];

  const stream = new SitemapStream({ hostname });
  const writeStream = createWriteStream('./public/sitemap.xml');
  stream.pipe(writeStream);

  links.forEach(link => stream.write(link));
  stream.end();

  await streamToPromise(stream);
  console.log('✅ Sitemap generated successfully!');
}

generateSitemap();
