/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.bmwrepairnh.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: [
      "https://www.bmwrepairnh.com/sitemap.xml",
    ],
  },
  changefreq: "monthly",
  priority: 0.7,
  exclude: [],
  outDir: "./public",
};
