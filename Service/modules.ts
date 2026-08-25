import type { DocsByLocale } from "./docTypes";
import { modulesFr } from "./modules.fr";
import { modulesEn } from "./modules.en";

/** Documentation des modules, indexée par locale. */
export const modules: DocsByLocale = {
    en: modulesEn,
    fr: modulesFr
};

export default modules;
