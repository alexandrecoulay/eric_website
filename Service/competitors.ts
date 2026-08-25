import type { Doc, DocsByLocale } from "./docTypes";

/**
 * Pages de comparaison.
 *
 * Règle d'écriture, et elle n'est pas négociable : tout ce qui est affirmé
 * d'Eric est vérifiable dans le code du bot ; sur les autres bots, on ne
 * s'avance que sur un positionnement public stable et notoire, jamais sur un
 * détail de fonctionnalité ou un tarif — ceux-là changent sans préavis et une
 * affirmation fausse sur un produit tiers est un problème, pas une approximation.
 *
 * La valeur de ces pages tient donc au cadre de décision et aux éléments
 * vérifiables du côté d'Eric, pas à un tableau de cases cochées.
 */

/** Identifiants d'URL des concurrents traités. */
export const competitorSlugs = ["mee6", "dyno", "carl-bot", "probot"] as const;

export type CompetitorSlug = (typeof competitorSlugs)[number];

const names: Record<CompetitorSlug, string> = {
    "mee6": "MEE6",
    "dyno": "Dyno",
    "carl-bot": "Carl-bot",
    "probot": "ProBot"
};

/** Positionnement public de chaque bot, en une phrase, sans détail susceptible de changer. */
const positioning: Record<CompetitorSlug, { fr: string; en: string }> = {
    "mee6": {
        fr: "MEE6 est l'un des bots Discord les plus répandus, connu avant tout pour son système de niveaux et pour son offre payante.",
        en: "MEE6 is one of the most widely deployed Discord bots, known above all for its levelling system and its paid tier."
    },
    "dyno": {
        fr: "Dyno est un bot généraliste très répandu, dont la modération et l'automodération constituent le cœur historique.",
        en: "Dyno is a widely deployed general-purpose bot whose moderation and auto-moderation features are its historical core."
    },
    "carl-bot": {
        fr: "Carl-bot est connu pour ses rôles par réaction et ses journaux d'événements détaillés.",
        en: "Carl-bot is known for its reaction roles and its detailed event logging."
    },
    "probot": {
        fr: "ProBot est surtout connu pour ses messages de bienvenue en image et son interface multilingue.",
        en: "ProBot is best known for its image-based welcome messages and its multilingual interface."
    }
};

function buildFr(slug: CompetitorSlug): Doc {
    const name = names[slug];

    return {
        slug,
        title: `Eric ou ${name} : comment choisir`,
        metaTitle: `Alternative à ${name} — comparer avec le bot Discord Eric`,
        description: `Comparer le bot Discord Eric et ${name} : périmètre des fonctions, modèle gratuit ou payant, traitement du contenu des messages et langue. Les critères qui décident réellement.`,
        keywords: `alternative ${name.toLowerCase()}, ${name.toLowerCase()} vs eric, comparatif bot discord, remplacer ${name.toLowerCase()}, bot discord gratuit`,
        intro: [
            `${positioning[slug].fr} Eric est un bot francophone gratuit qui couvre la modération, les niveaux, l'accueil, un assistant IA et les alertes Twitch.`,
            `Cette page ne prétend pas trancher à votre place. Elle énumère les critères qui décident réellement, et détaille ce qu'Eric fait précisément sur chacun — c'est la partie que nous pouvons affirmer sans réserve.`
        ],
        sections: [
            {
                heading: "Ce que nous pouvons affirmer, et ce que nous ne pouvons pas",
                paragraphs: [
                    `Tout ce qui est écrit ici sur Eric est vérifiable : les commandes, leur syntaxe et les permissions qu'elles exigent sont documentées module par module, et notre politique de confidentialité dit exactement quelles données sont conservées.`,
                    `Sur ${name}, nous nous en tenons à son positionnement public. Les fonctionnalités et les tarifs d'un bot changent sans préavis, et publier un tableau comparatif figé revient à publier des informations fausses quelques mois plus tard. Pour les détails à jour, la source qui fait foi est le site de ${name}.`
                ]
            },
            {
                heading: "Les critères qui décident",
                list: [
                    "Le périmètre : combien de bots devrez-vous ajouter au total pour couvrir vos besoins ? Chaque bot supplémentaire ajoute une configuration à tenir et une hiérarchie de rôles à arbitrer.",
                    "Le modèle économique : quelles fonctions sont réservées à un abonnement ? À vérifier avant de configurer le serveur, car migrer un système de niveaux fait perdre la progression de tous les membres.",
                    "Le traitement des données : le contenu des messages est-il conservé, et sert-il à entraîner un modèle ? La réponse doit figurer dans une politique de confidentialité accessible.",
                    "La langue : les messages automatiques — bienvenue, avertissements, refus de permission — sont-ils lus par tous vos membres ?",
                    "Le support : existe-t-il un serveur d'entraide où l'on voit comment les problèmes sont réellement traités ?"
                ]
            },
            {
                heading: "Ce qu'Eric fait, précisément",
                list: [
                    "Modération : avertissements conservés avec motif, auteur et date, consultables par membre ; expulsion, bannissement, suppression de messages en masse. Chaque commande exige la permission Discord correspondante.",
                    "Automodération : liste de mots interdits propre à chaque serveur, avertissement automatique et notification à l'équipe. Aucune liste globale imposée.",
                    "Niveaux : expérience par serveur, carte de profil générée en image, classement, et rôles attribués automatiquement aux paliers configurés.",
                    "Accueil : message de bienvenue, et vérification optionnelle où l'arrivant doit réagir avec un emoji tiré au hasard pour obtenir le rôle d'accès, une mauvaise réaction entraînant son expulsion.",
                    "Assistant IA : réponse générée sur mention, sans rétention chez le fournisseur et sans usage pour l'entraînement.",
                    "Twitch : annonce dans un salon Discord au passage en direct d'une chaîne suivie.",
                    "Gratuité : aucune fonction n'est réservée à un abonnement, et il n'y a pas de limite de serveurs.",
                    "Langue : français et anglais, choisis par serveur, y compris pour le nom de certaines commandes."
                ]
            },
            {
                heading: "Le contenu des messages, chez Eric",
                paragraphs: [
                    "Le contenu des messages est lu en mémoire pour reconnaître les commandes et appliquer l'automodération, puis abandonné. Il n'est jamais écrit en base de données et n'est jamais utilisé pour entraîner un modèle.",
                    "Ce qui est conservé se limite à des identifiants Discord, des compteurs d'expérience, les avertissements de modération et la configuration du serveur. Ces données sont maintenues après le retrait du bot, volontairement, pour qu'un serveur qui le réinvite retrouve ses réglages et la progression de ses membres ; elles sont supprimées sur demande."
                ]
            },
            {
                heading: "Faire coexister les deux",
                paragraphs: [
                    `Rien n'oblige à choisir. Deux bots peuvent cohabiter sur un serveur, à condition de ne pas activer la même fonction des deux côtés — deux systèmes d'automodération produisent des avertissements en double, et deux systèmes de niveaux tiennent deux comptes divergents.`,
                    `La transition la moins coûteuse consiste à ajouter Eric, à n'activer que les modules que ${name} ne couvre pas chez vous, puis à réévaluer une fois l'usage constaté.`
                ]
            }
        ],
        faq: [
            {
                question: `Existe-t-il une alternative gratuite à ${name} ?`,
                answer: `Eric est gratuit, sans fonction réservée à un abonnement et sans limite de serveurs. Il couvre la modération, l'automodération, les niveaux avec rôles automatiques, l'accueil et la vérification, un assistant IA et les alertes Twitch. Pour savoir ce qui est payant chez ${name} aujourd'hui, consultez son site : cela change sans préavis.`
            },
            {
                question: `Peut-on utiliser Eric et ${name} sur le même serveur ?`,
                answer: `Oui. Il faut seulement éviter d'activer la même fonction des deux côtés : deux automodérations produisent des avertissements en double, et deux systèmes de niveaux tiennent des comptes divergents.`
            },
            {
                question: `Que perd-on en changeant de bot Discord ?`,
                answer: `La modération et l'accueil se reconfigurent sans perte. Les niveaux, non : la progression accumulée par les membres ne se transfère pas d'un bot à un autre. C'est le point à trancher avant de configurer un serveur, pas après.`
            }
        ],
        updated: "2026-08-25"
    };
}

function buildEn(slug: CompetitorSlug): Doc {
    const name = names[slug];

    return {
        slug,
        title: `Eric or ${name}: how to choose`,
        metaTitle: `${name} alternative — compared with the Eric Discord bot`,
        description: `Comparing the Eric Discord bot and ${name}: feature scope, free or paid model, message content handling and language. The criteria that actually decide.`,
        keywords: `${name.toLowerCase()} alternative, ${name.toLowerCase()} vs eric, discord bot comparison, replace ${name.toLowerCase()}, free discord bot`,
        intro: [
            `${positioning[slug].en} Eric is a free, French- and English-speaking bot covering moderation, levels, welcome, an AI assistant and Twitch alerts.`,
            `This page does not claim to decide for you. It lists the criteria that actually settle the question, and sets out precisely what Eric does on each — that is the part we can state without reservation.`
        ],
        sections: [
            {
                heading: "What we can state, and what we cannot",
                paragraphs: [
                    `Everything written here about Eric is verifiable: its commands, their syntax and the permissions they require are documented module by module, and our privacy policy states exactly which data is kept.`,
                    `About ${name} we stick to its public positioning. A bot's features and pricing change without notice, and publishing a frozen comparison table amounts to publishing false information a few months later. For current details, ${name}'s own site is the source of record.`
                ]
            },
            {
                heading: "The criteria that decide",
                list: [
                    "Scope: how many bots will you end up adding to cover your needs? Each extra bot adds a configuration to maintain and a role hierarchy to arbitrate.",
                    "Pricing model: which features sit behind a subscription? Check before configuring the server, because migrating a levelling system loses every member's progression.",
                    "Data handling: is message content stored, and is it used to train a model? The answer belongs in an accessible privacy policy.",
                    "Language: are the automatic messages — welcome, warnings, permission refusals — readable by all of your members?",
                    "Support: is there a help server where you can see how problems are actually handled?"
                ]
            },
            {
                heading: "What Eric does, precisely",
                list: [
                    "Moderation: warnings kept with reason, author and date, readable per member; kick, ban, bulk message deletion. Each command requires the matching Discord permission.",
                    "Auto-moderation: a forbidden word list belonging to each server, an automatic warning and a notification to the team. No global list is imposed.",
                    "Levels: per-server experience, a generated profile card, a leaderboard, and roles granted automatically at configured thresholds.",
                    "Welcome: a welcome message, and optional verification where the newcomer must react with a randomly chosen emoji to be granted the access role, a wrong reaction resulting in a kick.",
                    "AI assistant: a generated answer on mention, with no retention at the provider and no use for training.",
                    "Twitch: an announcement in a Discord channel when a followed channel goes live.",
                    "Free: no feature is reserved for a subscription, and there is no server limit.",
                    "Language: French and English, chosen per server, including the names of some commands."
                ]
            },
            {
                heading: "Message content, with Eric",
                paragraphs: [
                    "Message content is read in memory to recognise commands and apply auto-moderation, then discarded. It is never written to a database and never used to train a model.",
                    "What is kept is limited to Discord identifiers, experience counters, moderation warnings and server configuration. That data is retained after the bot is removed, deliberately, so a server re-adding it recovers its settings and its members' progression; it is deleted on request."
                ]
            },
            {
                heading: "Running both",
                paragraphs: [
                    `Nothing forces a choice. Two bots can coexist on a server, provided the same function is not enabled on both sides — two auto-moderation systems produce duplicate warnings, and two levelling systems keep diverging counts.`,
                    `The cheapest transition is to add Eric, enable only the modules ${name} does not cover for you, and reassess once you have seen it in use.`
                ]
            }
        ],
        faq: [
            {
                question: `Is there a free alternative to ${name}?`,
                answer: `Eric is free, with no feature reserved for a subscription and no server limit. It covers moderation, auto-moderation, levels with automatic roles, welcome and verification, an AI assistant and Twitch alerts. For what is paid on ${name} today, check its own site: that changes without notice.`
            },
            {
                question: `Can Eric and ${name} run on the same server?`,
                answer: `Yes. You only need to avoid enabling the same function on both: two auto-moderation systems produce duplicate warnings, and two levelling systems keep diverging counts.`
            },
            {
                question: `What is lost when switching Discord bots?`,
                answer: `Moderation and welcome reconfigure with no loss. Levels do not: members' accumulated progression does not transfer between bots. That is the point to settle before configuring a server, not after.`
            }
        ],
        updated: "2026-08-25"
    };
}

export const competitors: DocsByLocale = {
    en: competitorSlugs.map(buildEn),
    fr: competitorSlugs.map(buildFr)
};

export const competitorNames = names;

export default competitors;
