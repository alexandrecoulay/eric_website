const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    // ssr and displayName are configured by default
    styledComponents: true,
    /*concurrentFeatures: true,
    serverComponents: true,*/
  },
  images: {
    domains: [
      'cdn.boteric.fr',
      "cdn.discordapp.com"
    ],
  },
  distDir: 'build'
})