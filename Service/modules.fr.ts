import type { Doc } from "./docTypes";

/**
 * Documentation des modules, en français.
 *
 * Syntaxes, permissions et noms de commandes sont relevés dans le code du bot
 * (src/api/DiscordBot/messages.js et les fichiers de commandes) : les commandes
 * portent un nom traduit selon la langue du serveur, d'où *classement en français
 * et *leaderboard en anglais. Le préfixe par défaut est *, modifiable par serveur.
 */
export const modulesFr: Doc[] = [
    {
        slug: "level",
        title: "Système de niveaux et d'XP",
        metaTitle: "Système de niveaux Discord — configurer l'XP et les rôles automatiques",
        description: "Comment fonctionne le système de niveaux du bot Eric : gain d'expérience, cartes de profil générées en image, classement du serveur et rôles attribués automatiquement par palier.",
        keywords: "système de niveaux discord, bot xp discord, rôle automatique niveau discord, carte de niveau discord, classement discord",
        intro: [
            "Le module de niveaux attribue de l'expérience aux membres qui participent aux discussions du serveur, puis matérialise cette progression par une carte de profil générée en image et un classement.",
            "Il sert deux choses : donner une raison de revenir écrire sur le serveur, et permettre d'ouvrir progressivement des salons ou des rôles à mesure qu'un membre s'implique."
        ],
        sections: [
            {
                heading: "Comment l'expérience est gagnée",
                paragraphs: [
                    "Chaque message envoyé dans un salon du serveur rapporte de l'expérience à son auteur. Les messages des bots sont ignorés, et l'expérience est comptabilisée séparément pour chaque serveur : un membre présent sur deux serveurs y a deux progressions indépendantes.",
                    "Le passage au niveau suivant demande un palier d'expérience qui augmente à chaque niveau, de sorte que la progression ralentit naturellement et qu'un niveau élevé reste un signal de présence réelle sur la durée."
                ]
            },
            {
                heading: "Les commandes",
                commands: [
                    {
                        syntax: "*level {@membre}",
                        description: "Affiche la carte de profil : avatar, pseudo, niveau atteint et barre de progression vers le niveau suivant. Sans mention, la carte affichée est celle de l'auteur du message."
                    },
                    {
                        syntax: "*classement",
                        description: "Affiche le classement des membres du serveur par expérience accumulée."
                    },
                    {
                        syntax: "*disprole",
                        description: "Liste les rôles configurés comme récompenses de niveau et le palier auquel chacun est attribué."
                    }
                ]
            },
            {
                heading: "Attribuer des rôles automatiquement",
                paragraphs: [
                    "Dans le tableau de bord, module Niveaux, chaque rôle du serveur peut être associé à un niveau. Dès qu'un membre atteint ce niveau, le bot lui attribue le rôle sans intervention d'un modérateur.",
                    "C'est le mécanisme habituel pour réserver certains salons aux membres établis, ou pour distinguer visuellement les habitués. Le bot doit disposer d'un rôle placé au-dessus des rôles qu'il attribue dans la hiérarchie du serveur, sans quoi Discord lui refuse l'opération."
                ]
            },
            {
                heading: "Personnaliser la carte de profil",
                paragraphs: [
                    "L'image de fond de la carte de niveau se choisit depuis l'espace personnel du tableau de bord. Elle s'applique à la carte du membre qui l'a choisie, sur les serveurs où le module est actif."
                ]
            }
        ],
        faq: [
            {
                question: "Comment activer le système de niveaux sur un serveur Discord ?",
                answer: "Connectez-vous au tableau de bord sur boteric.fr/dashboard, sélectionnez le serveur puis activez le module Niveaux. Le comptage démarre immédiatement pour les messages suivants ; l'historique antérieur à l'activation n'est pas rattrapé."
            },
            {
                question: "Peut-on donner un rôle automatiquement à un niveau donné ?",
                answer: "Oui. Dans le module Niveaux du tableau de bord, associez un rôle à un palier. Le rôle est attribué dès que le membre atteint ce niveau. Le rôle du bot doit être placé au-dessus du rôle attribué dans la hiérarchie du serveur."
            },
            {
                question: "L'expérience est-elle commune à tous les serveurs ?",
                answer: "Non. La progression est propre à chaque serveur. Un classement global existe par ailleurs, mais il n'influence pas les niveaux ni les rôles d'un serveur donné."
            }
        ],
        updated: "2026-08-25"
    },
    {
        slug: "moderation",
        title: "Modération et sanctions",
        metaTitle: "Modérer un serveur Discord — avertissements, expulsions, bannissements",
        description: "Les commandes de modération du bot Eric : avertissements avec historique, expulsion, bannissement et suppression de messages en masse, avec les permissions Discord exigées pour chacune.",
        keywords: "bot modération discord, commande warn discord, bannir discord bot, purger messages discord, historique avertissement discord",
        intro: [
            "Le module de modération couvre les sanctions manuelles : avertir, expulser, bannir, et supprimer des messages en masse. Chaque action est consignée dans le salon de modération configuré pour le serveur.",
            "Les avertissements sont conservés avec leur motif, leur auteur et leur date, ce qui permet de traiter une récidive en connaissant l'historique du membre plutôt qu'au jugé."
        ],
        sections: [
            {
                heading: "Les commandes",
                commands: [
                    {
                        syntax: "*warn <@membre> <raison>",
                        description: "Enregistre un avertissement contre le membre mentionné, avec le motif indiqué. L'avertissement est ajouté à son historique et annoncé dans le salon de modération.",
                        permission: "Permission requise : Expulser des membres"
                    },
                    {
                        syntax: "*getwarn <@membre>",
                        description: "Affiche l'historique des avertissements du membre mentionné : motif, modérateur et date de chacun.",
                        permission: "Permission requise : Expulser des membres"
                    },
                    {
                        syntax: "*kick <@membre> <raison>",
                        description: "Expulse le membre du serveur. Il peut le rejoindre à nouveau avec une invitation valide.",
                        permission: "Permission requise : Expulser des membres"
                    },
                    {
                        syntax: "*ban <@membre> <raison>",
                        description: "Bannit le membre du serveur. Le bannissement persiste jusqu'à sa levée manuelle depuis Discord.",
                        permission: "Permission requise : Bannir des membres"
                    },
                    {
                        syntax: "*purge <nombre> {@membre}",
                        description: "Supprime le nombre de messages indiqué dans le salon courant, entre 1 et 99. Avec une mention, seuls les messages de ce membre sont supprimés parmi ceux examinés.",
                        permission: "Permission requise : Gérer les messages"
                    }
                ]
            },
            {
                heading: "Ce que Discord impose, et que le bot ne peut pas contourner",
                paragraphs: [
                    "La suppression en masse ne fonctionne que sur des messages de moins de quatorze jours : c'est une limite de l'API de Discord, commune à tous les bots. Au-delà, les messages doivent être supprimés un par un.",
                    "Un bot ne peut pas sanctionner un membre dont le rôle le plus élevé se situe au-dessus du sien dans la hiérarchie du serveur. Si une commande échoue sur un modérateur ou un administrateur, c'est presque toujours cette raison : il faut remonter le rôle du bot."
                ]
            },
            {
                heading: "Où arrivent les alertes",
                paragraphs: [
                    "Le salon qui reçoit les notifications de modération se choisit dans le tableau de bord. Y placer un salon réservé à l'équipe évite d'exposer publiquement les motifs d'avertissement, qui contiennent souvent le contexte de l'incident."
                ]
            }
        ],
        faq: [
            {
                question: "Comment avertir un membre sur Discord ?",
                answer: "Tapez *warn suivi de la mention du membre et du motif, par exemple *warn @membre spam répété. L'avertissement est enregistré dans son historique et annoncé dans le salon de modération. La commande exige la permission Expulser des membres."
            },
            {
                question: "Comment supprimer plusieurs messages d'un coup sur Discord ?",
                answer: "Tapez *purge suivi du nombre de messages à supprimer, entre 1 et 99. Ajoutez une mention pour ne supprimer que les messages d'un membre précis. Discord interdit la suppression en masse des messages de plus de quatorze jours."
            },
            {
                question: "Pourquoi le bot ne parvient-il pas à bannir un membre ?",
                answer: "Dans la quasi-totalité des cas, le rôle du membre visé est placé au-dessus du rôle du bot dans la hiérarchie du serveur. Discord interdit alors l'action. Remontez le rôle du bot au-dessus des rôles qu'il doit pouvoir sanctionner."
            }
        ],
        updated: "2026-08-25"
    },
    {
        slug: "automoderation",
        title: "Automodération",
        metaTitle: "Automodération Discord — filtrer les mots interdits automatiquement",
        description: "Comment configurer l'automodération du bot Eric : liste de mots interdits propre au serveur, avertissement automatique de l'auteur et notification de l'équipe de modération.",
        keywords: "automodération discord, filtre mots interdits discord, bot anti insulte discord, modération automatique discord",
        intro: [
            "L'automodération examine chaque message publié et le compare à une liste de mots ou d'expressions interdits définie par le serveur. En cas de correspondance, l'auteur reçoit un avertissement automatique et l'équipe de modération est notifiée.",
            "La liste appartient au serveur : il n'existe pas de liste globale imposée. Un serveur de jeu et un serveur professionnel n'ont pas les mêmes seuils, et c'est à chacun de définir les siens."
        ],
        sections: [
            {
                heading: "Comment la correspondance est établie",
                paragraphs: [
                    "Une entrée composée d'un seul mot est comparée aux mots du message pris isolément : le terme doit apparaître comme un mot entier, ce qui évite qu'un mot anodin contenant la séquence interdite déclenche une alerte.",
                    "Une entrée composée de plusieurs mots est recherchée comme expression dans l'ensemble du message, ce qui permet de viser une tournure précise plutôt qu'un terme isolé."
                ]
            },
            {
                heading: "Ce qui se passe lors d'une correspondance",
                list: [
                    "Un avertissement est enregistré automatiquement contre l'auteur, avec pour motif le ou les termes ayant déclenché l'alerte.",
                    "Une notification est publiée dans le salon de modération configuré pour le serveur.",
                    "L'avertissement rejoint l'historique du membre, consultable avec *getwarn."
                ]
            },
            {
                heading: "Configuration",
                paragraphs: [
                    "Le module s'active dans le tableau de bord, section Automodération. On y saisit la liste des termes et le salon destinataire des alertes. Le module est désactivé par défaut : aucun message n'est analysé tant qu'un administrateur ne l'a pas activé.",
                    "Le contenu des messages n'est jamais conservé. Seul le terme interdit ayant déclenché l'alerte, qui provient de la liste du serveur lui-même, est enregistré comme motif de l'avertissement."
                ]
            }
        ],
        faq: [
            {
                question: "Comment filtrer les insultes automatiquement sur Discord ?",
                answer: "Activez le module Automodération dans le tableau de bord, saisissez la liste des termes à filtrer et désignez le salon qui recevra les alertes. Chaque message correspondant déclenche un avertissement automatique et une notification aux modérateurs."
            },
            {
                question: "Le bot enregistre-t-il les messages qu'il analyse ?",
                answer: "Non. Le message est comparé à la liste en mémoire puis abandonné. Seul le terme interdit ayant déclenché l'alerte est conservé comme motif de l'avertissement."
            },
            {
                question: "Peut-on avoir une liste de mots différente par serveur ?",
                answer: "Oui, et c'est le fonctionnement par défaut : chaque serveur définit sa propre liste. Il n'existe aucune liste globale appliquée à tous les serveurs."
            }
        ],
        updated: "2026-08-25"
    },
    {
        slug: "welcome",
        title: "Accueil et vérification des nouveaux membres",
        metaTitle: "Message de bienvenue et vérification Discord — accueillir les nouveaux membres",
        description: "Configurer le message de bienvenue et la vérification manuelle des arrivants sur un serveur Discord avec le bot Eric : validation par un modérateur et attribution automatique du rôle d'accès.",
        keywords: "message de bienvenue discord, vérification membre discord, bot anti raid discord, rôle automatique arrivée discord",
        intro: [
            "À chaque arrivée sur le serveur, le bot publie un message de bienvenue personnalisé dans le salon choisi par l'administrateur.",
            "Un second mécanisme, optionnel, ajoute une étape de validation humaine : le nouvel arrivant n'obtient l'accès au serveur qu'après l'approbation d'un modérateur. C'est le filtre le plus efficace contre les vagues de comptes automatisés, parce qu'il ne repose sur aucune heuristique contournable."
        ],
        sections: [
            {
                heading: "Le message de bienvenue",
                paragraphs: [
                    "Le salon de destination se choisit dans le tableau de bord, module Accueil. Le message est envoyé dès que Discord signale l'arrivée du membre. Les comptes de bots ajoutés au serveur sont ignorés."
                ]
            },
            {
                heading: "La vérification par un modérateur",
                paragraphs: [
                    "Lorsque la vérification est activée, l'arrivée d'un membre déclenche la publication d'une demande de validation dans un salon réservé à l'équipe. Un modérateur réagit pour accepter ou refuser.",
                    "À l'acceptation, le bot attribue automatiquement le rôle d'accès configuré. Tant que la validation n'a pas eu lieu, le membre reste sans rôle et ne voit donc que les salons ouverts à tous — la configuration des permissions du serveur reste ce qui détermine réellement ce qu'il peut voir."
                ]
            },
            {
                heading: "Mettre en place le filtre correctement",
                list: [
                    "Retirer au rôle @everyone l'accès en lecture aux salons du serveur, à l'exception d'un éventuel salon d'accueil.",
                    "Créer un rôle d'accès disposant des permissions de lecture et d'écriture normales, et le désigner dans le tableau de bord.",
                    "Placer le rôle du bot au-dessus du rôle d'accès dans la hiérarchie, faute de quoi Discord lui refusera l'attribution.",
                    "Désigner un salon de validation visible de la seule équipe de modération."
                ]
            }
        ],
        faq: [
            {
                question: "Comment souhaiter la bienvenue automatiquement sur Discord ?",
                answer: "Activez le module Accueil dans le tableau de bord et choisissez le salon de bienvenue. Le bot y publie un message personnalisé dès qu'un membre rejoint le serveur."
            },
            {
                question: "Comment protéger un serveur Discord des comptes automatisés ?",
                answer: "Activez la vérification : chaque arrivée génère une demande de validation dans un salon réservé au staff, et le rôle d'accès n'est attribué qu'après l'approbation d'un modérateur. Combinée à un rôle @everyone sans accès en lecture, c'est le filtre le plus fiable, car il ne repose sur aucune détection automatique contournable."
            },
            {
                question: "Le nouveau membre voit-il le serveur avant sa validation ?",
                answer: "Il voit ce que les permissions du serveur ouvrent au rôle @everyone. Pour que la vérification serve réellement de filtre, il faut retirer à @everyone l'accès en lecture aux salons, à l'exception éventuelle d'un salon d'accueil."
            }
        ],
        updated: "2026-08-25"
    },
    {
        slug: "ai",
        title: "Assistant IA et analyse d'images",
        metaTitle: "Bot Discord IA — assistant conversationnel et détection d'images explicites",
        description: "Le module d'intelligence artificielle du bot Eric : réponse générée lorsqu'un membre mentionne le bot, et détection optionnelle des images à caractère explicite avec alerte aux modérateurs.",
        keywords: "bot discord ia, chatbot discord, bot discord chatgpt, détection image explicite discord, modération image discord",
        intro: [
            "Le module d'intelligence artificielle recouvre deux fonctions distinctes, activables séparément : un assistant qui répond lorsqu'un membre mentionne le bot, et une analyse des images publiées destinée à signaler les contenus explicites.",
            "Les deux sont désactivées par défaut et n'entrent en action que si un administrateur les active sur le serveur."
        ],
        sections: [
            {
                heading: "L'assistant conversationnel",
                paragraphs: [
                    "Mentionner le bot dans un message déclenche une réponse générée à partir du texte qui suit la mention. Il n'y a pas de commande à retenir : la mention suffit.",
                    "Le texte est transmis au fournisseur du modèle le temps de produire la réponse, avec la rétention désactivée, puis n'est conservé nulle part. Il n'est pas utilisé pour entraîner un modèle."
                ]
            },
            {
                heading: "La détection d'images explicites",
                paragraphs: [
                    "Lorsque le module est actif, les images jointes aux messages sont analysées et celles identifiées comme explicites déclenchent une alerte dans le salon de modération configuré.",
                    "C'est une aide à la décision, pas un verdict : la classification automatique d'images produit des faux positifs comme des faux négatifs, et la sanction reste prise par un modérateur."
                ]
            },
            {
                heading: "Ce que le module ne fait pas",
                list: [
                    "Il ne lit pas les messages qui ne mentionnent pas le bot.",
                    "Il ne conserve aucun historique de conversation d'un message à l'autre.",
                    "Il ne prend aucune sanction de lui-même à la suite d'une analyse d'image."
                ]
            }
        ],
        faq: [
            {
                question: "Comment parler à l'IA du bot sur Discord ?",
                answer: "Mentionnez le bot dans un salon où le module d'intelligence artificielle a été activé, en écrivant votre question à la suite de la mention. La réponse est publiée en réponse à votre message."
            },
            {
                question: "Les conversations avec l'IA sont-elles enregistrées ?",
                answer: "Non. Le message est transmis au fournisseur du modèle avec la rétention désactivée, le temps de générer la réponse, et n'est conservé ni par le fournisseur ni de notre côté. Il n'est pas utilisé pour entraîner un modèle."
            },
            {
                question: "Le bot supprime-t-il les images explicites automatiquement ?",
                answer: "Non. Il signale l'image aux modérateurs dans le salon configuré. La décision et la sanction restent humaines, parce que la classification automatique d'images produit des erreurs dans les deux sens."
            }
        ],
        updated: "2026-08-25"
    },
    {
        slug: "twitch",
        title: "Alertes Twitch",
        metaTitle: "Alerte Twitch sur Discord — prévenir le serveur d'un passage en direct",
        description: "Configurer les notifications Twitch du bot Eric : une annonce publiée dans un salon Discord dès qu'une chaîne suivie par le serveur passe en direct.",
        keywords: "alerte twitch discord, notification twitch discord, bot twitch discord, annonce live discord",
        intro: [
            "Le module Twitch publie une annonce dans un salon Discord dès qu'une chaîne suivie par le serveur commence à diffuser.",
            "Il s'adresse aux communautés construites autour d'un ou plusieurs streamers, pour qui le passage en direct est l'événement qui ramène les membres sur le serveur."
        ],
        sections: [
            {
                heading: "Configuration",
                list: [
                    "Activer le module Twitch dans le tableau de bord.",
                    "Indiquer la ou les chaînes à suivre.",
                    "Choisir le salon Discord qui recevra les annonces."
                ]
            },
            {
                heading: "Fonctionnement",
                paragraphs: [
                    "Le bot interroge l'API de Twitch pour connaître l'état des chaînes suivies et publie une annonce au passage en direct. Le délai entre le début effectif de la diffusion et l'annonce dépend de la fréquence de cette interrogation ; il se compte en minutes, pas en secondes.",
                    "Une seule annonce est publiée par diffusion : une coupure brève de la chaîne ne provoque pas de nouvelle notification à chaque reprise."
                ]
            }
        ],
        faq: [
            {
                question: "Comment recevoir une notification Discord quand un streamer est en direct ?",
                answer: "Activez le module Twitch dans le tableau de bord, indiquez la chaîne à suivre et le salon Discord de destination. Le bot y publie une annonce dès le passage en direct."
            },
            {
                question: "Peut-on suivre plusieurs chaînes Twitch sur un même serveur ?",
                answer: "Oui, plusieurs chaînes peuvent être suivies depuis le tableau de bord du serveur."
            }
        ],
        updated: "2026-08-25"
    },
    {
        slug: "utilities",
        title: "Commandes utilitaires",
        metaTitle: "Commandes utilitaires du bot Eric — sondages, informations, émojis",
        description: "Les commandes utilitaires du bot Discord Eric : sondages avec réactions, informations sur un membre ou sur le serveur, affichage d'avatars et d'émojis, encodage de texte et recherche.",
        keywords: "commande sondage discord, bot sondage discord, info membre discord, commande avatar discord, bot utilitaire discord",
        intro: [
            "Ces commandes ne relèvent d'aucun module de modération ou de progression : ce sont les outils du quotidien d'un serveur, du sondage à l'affichage d'un avatar en grand format."
        ],
        sections: [
            {
                heading: "Sondages",
                commands: [
                    {
                        syntax: "*sondage \"question\"",
                        description: "Publie un sondage à réponse oui ou non et ajoute automatiquement les réactions pouce en haut et pouce en bas.",
                        permission: "Permission requise : Administrateur"
                    },
                    {
                        syntax: "*sondage \"question\" \"choix 1\" \"choix 2\"",
                        description: "Publie un sondage à choix multiples. Chaque proposition doit être entourée de guillemets droits ; le bot ajoute une réaction par choix.",
                        permission: "Permission requise : Administrateur"
                    }
                ]
            },
            {
                heading: "Informations",
                commands: [
                    {
                        syntax: "*uinfo {@membre}",
                        description: "Affiche les informations d'un membre : identifiant, date de création du compte, date d'arrivée sur le serveur et rôles. Sans mention, affiche celles de l'auteur."
                    },
                    {
                        syntax: "*serveur",
                        description: "Affiche les informations du serveur courant."
                    },
                    {
                        syntax: "*avatar {@membre}",
                        description: "Affiche l'avatar en grand format. Sans mention, affiche celui de l'auteur."
                    },
                    {
                        syntax: "*stats",
                        description: "Affiche les statistiques du bot."
                    }
                ]
            },
            {
                heading: "Émojis",
                commands: [
                    {
                        syntax: "*emote <nom>",
                        description: "Affiche en grand l'émoji portant ce nom. Sans argument, affiche un émoji au hasard."
                    },
                    {
                        syntax: "*guide {random}",
                        description: "Renvoie vers la liste des émojis disponibles. Avec l'argument random, affiche un émoji tiré au hasard."
                    }
                ]
            },
            {
                heading: "Texte et recherche",
                commands: [
                    {
                        syntax: "*encode <texte>",
                        description: "Encode le texte fourni. Le message d'origine est supprimé après l'envoi de la réponse."
                    },
                    {
                        syntax: "*decode <texte>",
                        description: "Décode un texte précédemment encodé. Le message d'origine est supprimé après l'envoi de la réponse."
                    },
                    {
                        syntax: "*google <recherche>",
                        description: "Renvoie un lien de recherche pour les termes fournis."
                    },
                    {
                        syntax: "*npm <paquet>",
                        description: "Renvoie le lien du paquet npm indiqué."
                    }
                ]
            },
            {
                heading: "Divers",
                commands: [
                    {
                        syntax: "*help",
                        description: "Renvoie vers cette documentation."
                    },
                    {
                        syntax: "*color",
                        description: "Génère une couleur et l'affiche sous forme d'image."
                    },
                    {
                        syntax: "*face",
                        description: "Envoie un visage en ASCII."
                    },
                    {
                        syntax: "*compatibilite <prénom> <prénom>",
                        description: "Calcule un score de compatibilité entre deux prénoms. Commande fantaisiste, sans autre usage."
                    },
                    {
                        syntax: "*bug <description>",
                        description: "Transmet un rapport de bug à l'équipe du bot."
                    }
                ]
            }
        ],
        faq: [
            {
                question: "Comment créer un sondage sur Discord ?",
                answer: "Tapez *sondage suivi de la question entre guillemets droits pour un sondage oui ou non, ou de la question puis de chaque proposition entre guillemets pour un choix multiple. Le bot ajoute automatiquement les réactions correspondantes. La commande exige la permission Administrateur."
            },
            {
                question: "Comment afficher l'avatar de quelqu'un sur Discord ?",
                answer: "Tapez *avatar suivi de la mention du membre. Sans mention, la commande affiche votre propre avatar en grand format."
            }
        ],
        updated: "2026-08-25"
    }
];

export default modulesFr;
