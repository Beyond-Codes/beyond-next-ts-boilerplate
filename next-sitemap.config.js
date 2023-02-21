/** @type {import('next-sitemap').IConfig} */

const siteURL = process.env.NEXT_PUBLIC_APP_URL;
const siteSubPathPrefix = process.env.NEXT_PUBLIC_APP_PATH_PREFIX;

module.exports = {
  siteUrl: `${siteURL || 'https://example.com'}${siteSubPathPrefix || ''}`,
  generateIndexSitemap: false,
  generateRobotsTxt: true,
  changefreq: false,
  priority: false,
};
