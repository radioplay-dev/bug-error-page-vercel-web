/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "en-gb", "sv-se"],
    defaultLocale: "en",
  },
}

module.exports = nextConfig
