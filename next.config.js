const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.boteric.fr',
      "cdn.discordapp.com"
    ],
  }
})