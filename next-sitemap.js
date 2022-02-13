/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://laisbeunardeau.art/',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
