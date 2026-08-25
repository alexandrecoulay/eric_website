import type { Locale } from "../i18n/routing";

/**
 * Questions/réponses de la page d'aide.
 *
 * Elles ne sont pas décoratives : ce sont les formulations sous lesquelles la
 * question est réellement posée à un moteur — « comment ajouter un bot de
 * modération sur Discord », « quel bot pour les niveaux » — et une FAQPage
 * schema.org est le format que les moteurs génératifs reprennent le plus
 * directement, parce que la réponse y est déjà découpée et courte.
 *
 * Règle en éditant : une réponse tient en deux à quatre phrases, répond
 * complètement, et n'affirme rien que le bot ne fasse réellement.
 */
export function helpFaq(locale: Locale): { question: string; answer: string }[] {
    if (locale === "fr") {
        return [
            {
                question: "Comment ajouter le bot Eric à un serveur Discord ?",
                answer: "Rendez-vous sur https://boteric.fr/bot/invite, choisissez le serveur puis validez les permissions demandées. Il faut disposer de la permission « Gérer le serveur » sur le serveur visé. Le bot est opérationnel immédiatement après l'ajout, avec ses modules désactivés par défaut."
            },
            {
                question: "Le bot Eric est-il gratuit ?",
                answer: "Oui, toutes les fonctionnalités décrites sur cette page sont gratuites et sans limite de serveurs : modération, niveaux, assistant IA, alertes Twitch et utilitaires."
            },
            {
                question: "Comment configurer l'automodération sur un serveur Discord ?",
                answer: "Connectez-vous au tableau de bord sur https://boteric.fr/dashboard, sélectionnez le serveur, ouvrez le module d'automodération et activez-le. Vous y définissez la liste des mots interdits ainsi que le salon où les alertes de modération sont envoyées. Chaque correspondance déclenche un avertissement automatique et une notification à l'équipe de modération."
            },
            {
                question: "Comment fonctionne le système de niveaux ?",
                answer: "Les membres gagnent de l'expérience en écrivant dans les salons du serveur. La commande de niveau affiche une carte de profil générée en image avec l'avatar, le pseudo, le niveau et une barre de progression, et la commande de classement affiche le palmarès du serveur. Les administrateurs peuvent associer des rôles à des paliers de niveau, attribués automatiquement."
            },
            {
                question: "Comment souhaiter la bienvenue aux nouveaux membres ?",
                answer: "Activez le module d'accueil dans le tableau de bord et choisissez le salon de bienvenue. Vous pouvez aussi activer la vérification : à chaque arrivée, le bot demande au nouveau membre de réagir avec un emoji tiré au hasard, et lui attribue le rôle d'accès s'il réagit correctement."
            },
            {
                question: "Le bot Eric parle-t-il français ?",
                answer: "Oui. Eric est un bot francophone : toutes ses réponses, ses messages d'erreur et sa documentation existent en français et en anglais. La langue se choisit par serveur dans le tableau de bord."
            },
            {
                question: "Le bot Eric enregistre-t-il le contenu des messages ?",
                answer: "Non. Le contenu des messages est lu en mémoire pour reconnaître les commandes et appliquer l'automodération, puis abandonné. Il n'est jamais écrit en base de données et n'est jamais utilisé pour entraîner un modèle. Le détail figure sur https://boteric.fr/privacy."
            },
            {
                question: "Comment recevoir une alerte Discord quand une chaîne Twitch passe en direct ?",
                answer: "Activez le module Twitch dans le tableau de bord, indiquez la chaîne à suivre et le salon de destination. Le bot y publie une notification à chaque passage en direct."
            }
        ];
    }

    return [
        {
            question: "How do I add the Eric bot to a Discord server?",
            answer: "Go to https://boteric.fr/bot/invite, pick the server and confirm the requested permissions. You need the Manage Server permission on the target server. The bot works immediately after being added, with its modules disabled by default."
        },
        {
            question: "Is the Eric bot free?",
            answer: "Yes. Every feature described on this page is free and available on any number of servers: moderation, levels, the AI assistant, Twitch alerts and utilities."
        },
        {
            question: "How do I set up auto-moderation on a Discord server?",
            answer: "Sign in to the dashboard at https://boteric.fr/dashboard, select the server, open the auto-moderation module and enable it. There you define the list of forbidden words and the channel where moderation alerts are sent. Each match issues an automatic warning and notifies the moderation team."
        },
        {
            question: "How does the levelling system work?",
            answer: "Members earn experience by posting in the server's channels. The level command returns a generated profile card with the avatar, name, level and a progress bar, and the leaderboard command shows the server ranking. Administrators can attach roles to level thresholds, granted automatically."
        },
        {
            question: "How do I welcome new members?",
            answer: "Enable the welcome module in the dashboard and choose the welcome channel. You can also enable verification: on each arrival the bot asks the new member to react with a randomly chosen emoji, and grants the access role if they react correctly."
        },
        {
            question: "Does the Eric bot speak French?",
            answer: "Yes. Eric is a French-speaking bot: all of its replies, error messages and documentation exist in both French and English. The language is chosen per server in the dashboard."
        },
        {
            question: "Does the Eric bot store message content?",
            answer: "No. Message content is read in memory to recognise commands and apply auto-moderation, then discarded. It is never written to a database and never used to train a model. The details are at https://boteric.fr/privacy."
        },
        {
            question: "How do I get a Discord alert when a Twitch channel goes live?",
            answer: "Enable the Twitch module in the dashboard, name the channel to follow and the destination channel. The bot posts a notification there each time the channel goes live."
        }
    ];
}
