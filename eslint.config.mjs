import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescriptConfig from "eslint-config-next/typescript";

/**
 * Config plate d'ESLint 9.
 *
 * eslint-config-next 16 expose directement des configs plates ; il n'y a plus
 * besoin de passer par FlatCompat et l'ancien .eslintrc.json. `next lint` ayant
 * disparu de Next 16, eslint est appelé directement — d'où les ignores explicites,
 * sans lesquels il parcourrait la sortie de build.
 */
const eslintConfig = [
    { ignores: ["build/**", ".next/**", "node_modules/**"] },
    ...coreWebVitals,
    ...typescriptConfig,
    {
        rules: {
            // Le code hérité en .jsx n'est pas typé : l'exiger ici ne produirait
            // que du bruit sur des fichiers que la migration ne touche pas.
            "@typescript-eslint/no-explicit-any": "off",
            "react-hooks/exhaustive-deps": "warn"
        }
    }
];

export default eslintConfig;
