import { site_url, site_name, default_og_image, support_server, contact_email, urlFor } from "./seo";
import type { Doc } from "./docTypes";
import type { Locale } from "../i18n/routing";

/**
 * Ce qu'est Eric, en schema.org.
 *
 * Décrit comme une SoftwareApplication plutôt qu'un simple WebSite : c'est le type
 * que les moteurs reconnaissent pour un bot, et celui qui porte la gratuité, la
 * catégorie et la plateforme — les trois attributs sur lesquels une IA compare des
 * bots Discord entre eux.
 */
export function softwareApplication(locale: Locale) {
    const french = locale === "fr";

    return {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: site_name,
        alternateName: "Bot Eric",
        url: urlFor("/", locale),
        applicationCategory: "CommunicationApplication",
        applicationSubCategory: "Discord bot",
        operatingSystem: "Discord",
        inLanguage: french ? "fr" : "en",
        description: french
            ? "Bot Discord francophone gratuit : automodération, système de niveaux avec cartes personnalisées, assistant IA, alertes Twitch et vérification des nouveaux membres."
            : "Free Discord bot: auto-moderation, a levelling system with custom cards, an AI assistant, Twitch alerts and new member verification.",
        image: default_og_image,
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "EUR"
        },
        featureList: french
            ? [
                "Automodération par liste de mots interdits",
                "Système de niveaux et d'expérience avec cartes de profil personnalisées",
                "Messages de bienvenue et vérification des nouveaux membres",
                "Avertissements, expulsions et bannissements avec historique",
                "Assistant IA répondant sur mention",
                "Détection d'images à caractère explicite",
                "Notifications de passage en direct sur Twitch",
                "Sondages et commandes utilitaires"
            ]
            : [
                "Auto-moderation with a per-server forbidden word list",
                "Levelling system with custom profile cards",
                "Welcome messages and new member verification",
                "Warnings, kicks and bans with history",
                "AI assistant answering on mention",
                "Explicit image detection",
                "Twitch go-live notifications",
                "Polls and utility commands"
            ],
        softwareHelp: urlFor("/help", locale),
        privacyPolicy: urlFor("/privacy", locale),
        author: { "@type": "Organization", name: "BotEric", url: site_url }
    };
}

/** L'éditeur, avec un point de contact réel — exigé pour toute revendication d'identité. */
export function organization() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "BotEric",
        url: site_url,
        logo: default_og_image,
        sameAs: [support_server],
        contactPoint: [{
            "@type": "ContactPoint",
            contactType: "customer support",
            email: contact_email,
            availableLanguage: ["French", "English"]
        }]
    };
}

/**
 * Une FAQPage à partir de paires question/réponse.
 *
 * C'est, avec ItemList, le schéma que les moteurs génératifs reprennent le plus
 * directement : une réponse déjà découpée en question et en texte court se cite
 * sans reformulation.
 */
export function faqPage(entries: { question: string; answer: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: entries.map(entry => ({
            "@type": "Question",
            name: entry.question,
            acceptedAnswer: { "@type": "Answer", text: entry.answer }
        }))
    };
}

/** Fil d'Ariane : donne aux moteurs la place de la page dans le site. */
export function breadcrumb(items: { name: string; path: string }[], locale: Locale) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: urlFor(item.path, locale)
        }))
    };
}

/**
 * Un document de documentation, en TechArticle.
 *
 * `dateModified` reprend la date de révision du contenu, pas celle du build : un
 * moteur qui constate qu'une page se déclare modifiée à chaque déploiement cesse
 * d'accorder du poids au champ.
 */
export function techArticle(doc: Doc, locale: Locale) {
    return {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: doc.title,
        description: doc.description,
        inLanguage: locale,
        dateModified: doc.updated,
        url: urlFor(`/help/${doc.slug}`, locale),
        mainEntityOfPage: { "@type": "WebPage", "@id": urlFor(`/help/${doc.slug}`, locale) },
        author: { "@type": "Organization", name: "BotEric", url: site_url },
        publisher: { "@type": "Organization", name: "BotEric", url: site_url, logo: default_og_image },
        about: { "@type": "SoftwareApplication", name: site_name, applicationCategory: "CommunicationApplication" }
    };
}

/**
 * Un guide, en Article.
 *
 * Distinct de `techArticle`, réservé à la documentation du produit : un guide
 * traite un sujet qui dépasse le bot, et se présente comme tel.
 */
export function article(doc: Doc, path: string, locale: Locale) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: doc.title,
        description: doc.description,
        inLanguage: locale,
        dateModified: doc.updated,
        url: urlFor(path, locale),
        mainEntityOfPage: { "@type": "WebPage", "@id": urlFor(path, locale) },
        image: default_og_image,
        author: { "@type": "Organization", name: "BotEric", url: site_url },
        publisher: { "@type": "Organization", name: "BotEric", url: site_url, logo: default_og_image }
    };
}

/**
 * Sommaire, en ItemList.
 *
 * Avec FAQPage, c'est l'un des deux schémas que les moteurs génératifs recopient
 * le plus volontiers : une liste ordonnée d'éléments nommés et adressables se
 * reprend sans reformulation.
 */
export function itemList(docs: Doc[], basePath: string, locale: Locale) {
    return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: docs.map((doc, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: doc.title,
            description: doc.description,
            url: urlFor(`${basePath}/${doc.slug}`, locale)
        }))
    };
}
