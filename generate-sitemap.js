const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const activities = [
  { slug: 'karate' },
  { slug: 'hantverk' },
  { slug: 'arabiska' },
  { slug: 'syverkstad' },
  { slug: 'engelska' },
  { slug: 'spejare' },
  { slug: 'valfardsaktiviteter' }
];

const hostname = 'https://skurupskif.se';

async function generateSitemap() {
  const links = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/activities', changefreq: 'weekly', priority: 0.9 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.8 },
    ...activities.map(activity => ({
      url: `/activities/${activity.slug}`,
      changefreq: 'weekly',
      priority: 0.9
    }))
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
