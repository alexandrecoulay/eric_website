const path = require('path');
const crypto = require('crypto');

/**
 * Nom de classe CSS Modules réduit à un hash, sans le chemin du fichier.
 *
 * Utilisait `loader-utils` avec l'algorithme md4 : OpenSSL 3, embarqué depuis Node 17,
 * ne l'expose plus et `crypto.createHash('md4')` lève ERR_OSSL_EVP_UNSUPPORTED. On passe
 * par sha256, disponible partout, tronqué à 8 caractères comme avant.
 */
const hashOnlyIdent = (context, _, exportName) => {
  const filePath = path.relative(context.rootContext, context.resourcePath).replace(/\\+/g, '/');
  const hash = crypto
    .createHash('sha256')
    .update(`filePath:${filePath}#className:${exportName}`)
    .digest('hex')
    .slice(0, 8);

  // Un nom de classe ne peut pas commencer par un chiffre ni par deux tirets.
  return hash.replace(/^(-?\d|--)/, 'css-$1');
};

module.exports = {
  // Serveur autonome : l'image de prod n'embarque que les dépendances réellement
  // atteintes par le build, au lieu de tout node_modules. En Next 12.1 l'option
  // est encore sous `experimental` ; elle passe à la racine (`output`) en 12.2.
  experimental: {
    outputStandalone: true,
  },
  swcMinify: true,
  reactStrictMode: true,
  webpack(config, { dev }) {
    const rules = config.module.rules
      .find((rule) => typeof rule.oneOf === 'object')
      .oneOf.filter((rule) => Array.isArray(rule.use));

    if (!dev) {
      rules.forEach((rule) => {
        rule.use.forEach((moduleLoader) => {
          if (
            moduleLoader.loader?.includes('css-loader') &&
            !moduleLoader.loader?.includes('postcss-loader')
          )
            moduleLoader.options.modules.getLocalIdent = hashOnlyIdent;
        });
      });
    }

    return config;
  },
  distDir: 'build',
  images: {
    domains: [
      'cdn.boteric.fr',
      'cdn.discordapp.com',
      'cdn.trenderapp.com'
    ],
  }
};
