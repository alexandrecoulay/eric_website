const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.boteric.fr',
      "cdn.discordapp.com"
    ],
  },
  distDir: 'build'
})