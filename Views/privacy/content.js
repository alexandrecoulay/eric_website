export const LAST_UPDATE = "2026-08-25";

export const CONTACT_EMAIL = "contact@trenderapp.com";

export const SUPPORT_SERVER = "https://discord.gg/p3Sj432";

const content = {
    en: {
        title: "Privacy Policy",
        subtitle: `Last updated: ${LAST_UPDATE}`,
        intro: [
            "Eric is a Discord bot operated from boteric.fr. This policy explains which data the bot and its web dashboard collect, why they are collected, how long they are kept and how you can have them deleted.",
            "By adding Eric to a Discord server, the administrator of that server accepts this policy on behalf of the server. Individual members may exercise their rights over their own data at any time using the contact details at the end of this page."
        ],
        sections: [
            {
                title: "Data we collect",
                intro: "We only store what is required for the modules enabled by the server administrators to work:",
                list: [
                    "Discord identifiers: user ID, server ID, channel ID, role ID and message ID. These are public identifiers provided by the Discord API.",
                    "Levelling data: experience points, level and the date the entry was created, per user and per server.",
                    "Moderation data: warnings, with the moderator who issued them, the reason and the date.",
                    "Server configuration: prefix, language, enabled modules, welcome and verification channels, level roles, the list of words filtered by the auto-moderation module, and Twitch channels being followed.",
                    "Profile customisation: the background images chosen for level cards, stored on Google Cloud Storage.",
                    "Dashboard session: an authentication token issued through Discord OAuth2, used to let you manage your servers."
                ]
            },
            {
                title: "Data we do not collect",
                intro: "We never store:",
                list: [
                    "the content of your messages,",
                    "your email address or your password,",
                    "the full member list of your servers,",
                    "your voice conversations,",
                    "any payment details."
                ]
            },
            {
                title: "How message content is handled",
                intro: "Eric reads message content in memory, at the moment a message is received, and then discards it. It is never written to our database. This reading is required for:",
                list: [
                    "recognising prefix commands and their arguments,",
                    "comparing the message against the list of forbidden words configured by the server, when auto-moderation is enabled,",
                    "answering a question when a member explicitly mentions the bot, when the AI module is enabled,",
                    "reading the options of a poll."
                ],
                outro: "When the auto-moderation module triggers a warning, only the forbidden word that matched, which comes from the list configured by the server itself, is kept as the reason of the warning. The original message is not kept."
            },
            {
                title: "Third party services",
                intro: "Some features rely on external providers. Data is only sent to them when the corresponding module is enabled by a server administrator:",
                list: [
                    "OpenAI: when a member mentions the bot, the text of that message is sent to generate an answer. When the explicit image detection module is enabled, the image is sent to be analysed. These calls are configured with retention disabled: the request is not kept by the provider, and data sent through the API is not used to train its models. We do not keep a copy.",
                    "Twitch: the identifier of the channels followed by a server is sent to check whether they are streaming.",
                    "Google Cloud Storage: the images used for level cards are stored there.",
                    "Discord: authentication of the web dashboard goes through Discord OAuth2."
                ],
                outro: "We never sell, rent or share your data with advertisers, and we do not use it to train or fine tune any machine learning model."
            },
            {
                title: "How long we keep your data",
                intro: "Data is kept for as long as the bot is used on a server.",
                paragraphs: [
                    "We do not automatically delete a server's data when the bot is removed from it, and this is a deliberate choice. A removal is very often temporary: server maintenance, an accidental removal by an administrator, a migration, or a change of moderation team. An automatic deletion would, in those cases, destroy the progression and levels accumulated by every member over sometimes several years, along with the whole configuration of the server, with no way to restore them. Keeping the data allows a server that adds the bot again to immediately recover its settings and its members' progression.",
                    "The data kept in that situation is strictly the data listed above: identifiers and counters. No message content is involved.",
                    "Data is deleted at any time on request, as described below."
                ]
            },
            {
                title: "Your rights",
                intro: "You may ask us at any time to:",
                list: [
                    "access the data we hold about you or about your server,",
                    "correct it,",
                    "delete it,",
                    "export it in a readable format."
                ],
                outro: "A server administrator may request deletion of the data of the server they administer. Any member may request deletion of their own personal data. Requests are answered within 30 days, and in practice much sooner."
            },
            {
                title: "Security",
                paragraphs: [
                    "Data is stored in a MongoDB database hosted on our own private server. Access is restricted by authentication and limited to the people operating the bot. An automatic backup runs every day. Traffic between the dashboard and our API goes through HTTPS.",
                    "No system is perfectly secure. Should a breach affect your data, we will inform the administrators of the affected servers as quickly as possible."
                ]
            },
            {
                title: "Children",
                paragraphs: [
                    "Eric follows the Discord Terms of Service, which require users to be at least 13 years old, or older where local law requires it. We do not knowingly collect data from anyone below that age. If you believe a child has provided us with data, contact us and we will delete it."
                ]
            },
            {
                title: "Changes to this policy",
                paragraphs: [
                    "This policy may be updated to reflect new features or legal requirements. The date at the top of this page always indicates the last update. Significant changes are announced on our support server."
                ]
            },
            {
                title: "Contact",
                intro: "For any question or any request regarding your data:",
                list: [
                    `Email: ${CONTACT_EMAIL}`,
                    `Support server: ${SUPPORT_SERVER}`
                ]
            }
        ]
    },
    fr: {
        title: "Politique de confidentialité",
        subtitle: `Dernière mise à jour : ${LAST_UPDATE}`,
        intro: [
            "Eric est un bot Discord opéré depuis boteric.fr. Cette politique explique quelles données le bot et son tableau de bord web collectent, pourquoi elles sont collectées, combien de temps elles sont conservées et comment en demander la suppression.",
            "En ajoutant Eric à un serveur Discord, l'administrateur de ce serveur accepte cette politique au nom du serveur. Chaque membre peut exercer ses droits sur ses propres données à tout moment via les coordonnées indiquées en bas de cette page."
        ],
        sections: [
            {
                title: "Données que nous collectons",
                intro: "Nous ne stockons que ce qui est nécessaire au fonctionnement des modules activés par les administrateurs du serveur :",
                list: [
                    "Identifiants Discord : identifiant utilisateur, identifiant du serveur, du salon, du rôle et du message. Ce sont des identifiants publics fournis par l'API Discord.",
                    "Données de niveau : points d'expérience, niveau et date de création de l'entrée, par utilisateur et par serveur.",
                    "Données de modération : avertissements, avec le modérateur qui les a émis, le motif et la date.",
                    "Configuration du serveur : préfixe, langue, modules activés, salons de bienvenue et de vérification, rôles de niveau, liste des mots filtrés par l'automodération et chaînes Twitch suivies.",
                    "Personnalisation du profil : les images de fond choisies pour les cartes de niveau, stockées sur Google Cloud Storage.",
                    "Session du tableau de bord : un jeton d'authentification émis via Discord OAuth2, qui vous permet de gérer vos serveurs."
                ]
            },
            {
                title: "Données que nous ne collectons pas",
                intro: "Nous ne stockons jamais :",
                list: [
                    "le contenu de vos messages,",
                    "votre adresse e-mail ni votre mot de passe,",
                    "la liste complète des membres de vos serveurs,",
                    "vos conversations vocales,",
                    "aucune donnée de paiement."
                ]
            },
            {
                title: "Traitement du contenu des messages",
                intro: "Eric lit le contenu des messages en mémoire, au moment de leur réception, puis l'abandonne. Il n'est jamais écrit en base de données. Cette lecture est nécessaire pour :",
                list: [
                    "reconnaître les commandes à préfixe et leurs arguments,",
                    "comparer le message à la liste de mots interdits configurée par le serveur, lorsque l'automodération est activée,",
                    "répondre à une question lorsqu'un membre mentionne explicitement le bot, lorsque le module IA est activé,",
                    "lire les options d'un sondage."
                ],
                outro: "Lorsque l'automodération déclenche un avertissement, seul le mot interdit ayant provoqué l'alerte, issu de la liste configurée par le serveur lui-même, est conservé comme motif de l'avertissement. Le message d'origine n'est pas conservé."
            },
            {
                title: "Services tiers",
                intro: "Certaines fonctionnalités reposent sur des prestataires externes. Des données ne leur sont transmises que si le module correspondant est activé par un administrateur du serveur :",
                list: [
                    "OpenAI : lorsqu'un membre mentionne le bot, le texte de ce message est transmis pour générer une réponse. Lorsque le module de détection d'images explicites est activé, l'image est transmise pour être analysée. Ces appels sont configurés avec la rétention désactivée : la requête n'est pas conservée par le fournisseur, et les données transmises via l'API ne sont pas utilisées pour entraîner ses modèles. Nous n'en conservons aucune copie.",
                    "Twitch : l'identifiant des chaînes suivies par un serveur est transmis pour vérifier si elles sont en direct.",
                    "Google Cloud Storage : les images utilisées pour les cartes de niveau y sont stockées.",
                    "Discord : l'authentification du tableau de bord passe par Discord OAuth2."
                ],
                outro: "Nous ne vendons, ne louons et ne partageons jamais vos données avec des annonceurs, et nous ne les utilisons pas pour entraîner ou affiner un quelconque modèle d'apprentissage automatique."
            },
            {
                title: "Durée de conservation",
                intro: "Les données sont conservées tant que le bot est utilisé sur un serveur.",
                paragraphs: [
                    "Nous ne supprimons pas automatiquement les données d'un serveur lorsque le bot en est retiré, et ce choix est volontaire. Un retrait est très souvent temporaire : maintenance du serveur, retrait accidentel par un administrateur, migration, ou changement d'équipe de modération. Une suppression automatique détruirait dans ces cas la progression et les niveaux accumulés par tous les membres sur parfois plusieurs années, ainsi que l'intégralité de la configuration du serveur, sans possibilité de restauration. Conserver les données permet à un serveur qui réinvite le bot de retrouver immédiatement ses réglages et la progression de ses membres.",
                    "Les données conservées dans cette situation sont strictement celles énumérées plus haut : des identifiants et des compteurs. Aucun contenu de message n'est concerné.",
                    "Les données sont supprimées à tout moment sur demande, comme indiqué ci-dessous."
                ]
            },
            {
                title: "Vos droits",
                intro: "Vous pouvez à tout moment nous demander :",
                list: [
                    "d'accéder aux données que nous détenons sur vous ou sur votre serveur,",
                    "de les corriger,",
                    "de les supprimer,",
                    "de les exporter dans un format lisible."
                ],
                outro: "Un administrateur de serveur peut demander la suppression des données du serveur qu'il administre. Tout membre peut demander la suppression de ses propres données personnelles. Les demandes sont traitées sous 30 jours, et en pratique bien plus rapidement."
            },
            {
                title: "Sécurité",
                paragraphs: [
                    "Les données sont stockées dans une base MongoDB hébergée sur notre propre serveur privé. L'accès est restreint par authentification et limité aux personnes qui exploitent le bot. Une sauvegarde automatique est effectuée chaque jour. Les échanges entre le tableau de bord et notre API passent par HTTPS.",
                    "Aucun système n'est parfaitement sûr. En cas de violation affectant vos données, nous en informerons les administrateurs des serveurs concernés dans les meilleurs délais."
                ]
            },
            {
                title: "Mineurs",
                paragraphs: [
                    "Eric respecte les conditions d'utilisation de Discord, qui imposent aux utilisateurs d'avoir au moins 13 ans, ou davantage lorsque la loi locale l'exige. Nous ne collectons pas sciemment de données concernant une personne en dessous de cet âge. Si vous pensez qu'un enfant nous a transmis des données, contactez-nous et nous les supprimerons."
                ]
            },
            {
                title: "Modifications de cette politique",
                paragraphs: [
                    "Cette politique peut être mise à jour pour refléter de nouvelles fonctionnalités ou des obligations légales. La date en haut de cette page indique toujours la dernière mise à jour. Les changements significatifs sont annoncés sur notre serveur de support."
                ]
            },
            {
                title: "Contact",
                intro: "Pour toute question ou toute demande concernant vos données :",
                list: [
                    `E-mail : ${CONTACT_EMAIL}`,
                    `Serveur de support : ${SUPPORT_SERVER}`
                ]
            }
        ]
    }
};

export default content;
