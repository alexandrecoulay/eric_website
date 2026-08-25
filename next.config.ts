import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
    // Serveur autonome : l'image de production n'embarque que les dépendances
    // réellement atteintes par le build, au lieu de tout node_modules.
    output: "standalone",
    reactStrictMode: true,
    distDir: "build",
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            { protocol: "https", hostname: "cdn.boteric.fr", pathname: "/**" },
            { protocol: "https", hostname: "cdn.discordapp.com", pathname: "/**" },
            { protocol: "https", hostname: "cdn.trenderapp.com", pathname: "/**" }
        ]
    },
    async redirects() {
        return [
            // Adresses conventionnelles d'une politique de confidentialité. Un agent
            // ou un formulaire qui cherche la page essaie celles-ci avant d'abandonner.
            { source: "/privacy-policy", destination: "/privacy", permanent: true },
            { source: "/confidentialite", destination: "/fr/privacy", permanent: true },
            // La page d'aide était l'unique documentation ; /commands est le nom que
            // lui donnent les liens externes.
            { source: "/commands", destination: "/help", permanent: true }
        ];
    }
};

export default withNextIntl(nextConfig);
