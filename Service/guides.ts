import type { DocsByLocale } from "./docTypes";
import { guidesFr } from "./guides.fr";
import { guidesEn } from "./guides.en";

/** Guides de fond, indexés par locale. */
export const guides: DocsByLocale = {
    en: guidesEn,
    fr: guidesFr
};

export default guides;
