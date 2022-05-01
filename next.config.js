const path = require('path');
const loaderUtils = require('loader-utils');

const hashOnlyIdent = (context, _, exportName) => loaderUtils.getHashDigest(Buffer.from(`filePath:${path.relative(context.rootContext, context.resourcePath).replace(/\\+/g, '/')}#className:${exportName}`,), 'md4', 'hex', 8,).replace(/^(-?\d|--)/, 'css-$1');

module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  webpack(config, { dev }) {
    const rules = config.module.rules
      .find((rule) => typeof rule.oneOf === 'object')
      .oneOf.filter((rule) => Array.isArray(rule.use));

 
    if(!dev)
      rules.forEach((rule) => {
        rule.use.forEach((moduleLoader) => {
          if (
            moduleLoader.loader?.includes('css-loader') &&
            !moduleLoader.loader?.includes('postcss-loader')
          )
            moduleLoader.options.modules.getLocalIdent = hashOnlyIdent;
        });
      });
      return config;
  },
  distDir: 'build',
  images: {
    domains: [
      'cdn.boteric.fr',
      "cdn.discordapp.com"
    ],
  }
};