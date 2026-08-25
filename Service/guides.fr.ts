import type { Doc } from "./docTypes";

/**
 * Guides de fond, en français.
 *
 * Ils ne parlent pas du bot en premier lieu : ils traitent le problème que se
 * pose l'administrateur — modérer, filtrer les arrivées, comprendre pourquoi une
 * commande échoue — et le bot n'y apparaît que comme un moyen parmi ce qui est
 * décrit. C'est la différence entre un site vendeur et une source citable ; un
 * guide qui ne fait que vanter le produit ne se cite pas.
 */
export const guidesFr: Doc[] = [
    {
        slug: "moderate-a-discord-server",
        title: "Comment modérer un serveur Discord",
        metaTitle: "Comment modérer un serveur Discord — méthode et outils",
        description: "Méthode complète pour modérer un serveur Discord : hiérarchie des rôles, permissions, échelle de sanctions, automodération et organisation de l'équipe de modération.",
        keywords: "modérer un serveur discord, modération discord, règles serveur discord, équipe de modération discord, sanction discord",
        intro: [
            "Modérer un serveur Discord tient moins aux outils qu'à trois décisions prises avant qu'un incident survienne : ce qui est interdit, qui décide, et ce qui se passe en cas de récidive.",
            "Ce guide décrit une organisation qui fonctionne pour un serveur de quelques dizaines à quelques milliers de membres, puis les outils qui l'automatisent."
        ],
        sections: [
            {
                heading: "1. Écrire des règles applicables",
                paragraphs: [
                    "Une règle est applicable quand deux modérateurs différents, lisant le même message, aboutissent à la même décision. « Restez respectueux » ne remplit pas ce critère ; « pas d'insultes visant une personne, pas de contenu à caractère sexuel, pas de promotion d'autres serveurs sans accord préalable » le remplit.",
                    "Cinq à huit règles suffisent. Au-delà, personne ne les lit, et les règles inappliquées affaiblissent celles qui comptent : un serveur où l'on constate qu'une règle n'est jamais appliquée devient un serveur où l'on teste les autres."
                ]
            },
            {
                heading: "2. Poser la hiérarchie des rôles",
                paragraphs: [
                    "Discord interdit à un membre — et à un bot — d'agir sur quelqu'un dont le rôle le plus élevé se situe au-dessus du sien. C'est la source de la grande majorité des « le bot ne répond pas » signalés par les administrateurs.",
                    "L'ordre à respecter, du haut vers le bas : administrateurs, rôle du bot, modérateurs, rôles de niveau et rôles décoratifs, membres vérifiés, @everyone. Le rôle du bot doit être au-dessus de tout ce sur quoi il doit pouvoir agir, y compris les rôles qu'il attribue automatiquement."
                ]
            },
            {
                heading: "3. Définir une échelle de sanctions",
                paragraphs: [
                    "Sans échelle écrite, la sanction dépend de l'humeur du modérateur présent, et c'est ce que les membres reprochent le plus à une équipe. Une échelle courante :"
                ],
                list: [
                    "Premier manquement mineur : rappel à l'ordre public, sans trace formelle.",
                    "Manquement répété ou plus sérieux : avertissement enregistré, avec motif.",
                    "Troisième avertissement : exclusion temporaire, ou expulsion selon la gravité.",
                    "Contenu illégal, harcèlement caractérisé, raid : bannissement immédiat, sans passer par l'échelle."
                ]
            },
            {
                heading: "4. Garder une trace",
                paragraphs: [
                    "L'historique est ce qui permet de traiter une récidive sans reconstituer les faits à chaque fois. Un avertissement conservé avec son motif, son auteur et sa date répond seul à la question « est-ce la première fois ? », qui détermine la sanction.",
                    "Avec Eric, *warn @membre motif enregistre l'avertissement et *getwarn @membre affiche l'historique complet du membre. Les deux commandes exigent la permission Expulser des membres, ce qui les réserve de fait à l'équipe."
                ]
            },
            {
                heading: "5. Automatiser ce qui est mécanique",
                paragraphs: [
                    "L'automodération traite le cas simple : un message contenant un terme figurant sur la liste du serveur déclenche un avertissement et une notification, sans attendre qu'un modérateur soit connecté. C'est ce qui couvre les heures creuses, où les incidents se produisent le plus souvent sans témoin.",
                    "Elle ne remplace pas un modérateur pour tout le reste. Un message peut être hostile sans contenir aucun terme filtrable, et un terme filtré peut apparaître dans une citation ou une plaisanterie entre habitués. La liste doit rester courte et viser ce qui est indéfendable en contexte."
                ]
            },
            {
                heading: "6. Organiser l'équipe",
                list: [
                    "Un salon réservé au staff, où arrivent les notifications de modération et où les cas litigieux se discutent avant décision.",
                    "Un canal de signalement pour les membres, distinct des messages privés aux modérateurs, qui ne laissent aucune trace consultable par l'équipe.",
                    "Une règle explicite sur les décisions qui exigent l'avis d'un second modérateur — typiquement le bannissement.",
                    "Assez de modérateurs pour couvrir les tranches horaires réellement actives, plutôt qu'une longue liste de rôles inactifs."
                ]
            }
        ],
        faq: [
            {
                question: "Combien de modérateurs faut-il sur un serveur Discord ?",
                answer: "Le nombre compte moins que la couverture horaire. Un serveur actif le soir a besoin de modérateurs présents le soir. En pratique, deux à trois modérateurs actifs valent mieux qu'une dizaine de rôles honorifiques inactifs."
            },
            {
                question: "Faut-il bannir ou expulser un membre problématique ?",
                answer: "L'expulsion permet de revenir avec une invitation : elle convient à un membre qui dépasse les bornes sans intention de nuire. Le bannissement, permanent jusqu'à sa levée, se réserve au harcèlement, au contenu illégal et aux raids."
            },
            {
                question: "Pourquoi mon bot de modération ne peut-il pas sanctionner certains membres ?",
                answer: "Parce que leur rôle le plus élevé se situe au-dessus du rôle du bot dans la hiérarchie du serveur. Discord refuse alors l'action, quel que soit le bot. Remontez le rôle du bot au-dessus des rôles concernés."
            }
        ],
        updated: "2026-08-25"
    },
    {
        slug: "protect-from-raids",
        title: "Protéger un serveur Discord des raids et des faux comptes",
        metaTitle: "Protéger un serveur Discord des raids — méthode de vérification",
        description: "Comment protéger un serveur Discord d'un raid ou d'une vague de faux comptes : niveau de vérification Discord, rôle @everyone sans accès, validation manuelle des arrivées et réaction pendant l'incident.",
        keywords: "protéger serveur discord raid, anti raid discord, faux comptes discord, vérification discord, sécuriser serveur discord",
        intro: [
            "Un raid consiste à faire rejoindre un serveur par un grand nombre de comptes en peu de temps, pour inonder les salons ou mentionner massivement les membres.",
            "La bonne défense n'est pas de détecter le raid quand il commence, mais de faire en sorte qu'un compte fraîchement arrivé ne puisse rien écrire tant qu'un humain ne l'a pas laissé entrer."
        ],
        sections: [
            {
                heading: "La couche que Discord fournit",
                paragraphs: [
                    "Dans les paramètres du serveur, le niveau de vérification impose des conditions à l'écriture : adresse e-mail vérifiée, ancienneté du compte de plus de cinq minutes, ou appartenance au serveur depuis plus de dix minutes. Le niveau le plus élevé exige un numéro de téléphone vérifié.",
                    "Cette couche est gratuite, immédiate, et arrête les vagues les moins sophistiquées. Elle ne suffit pas seule : des comptes anciens et vérifiés se revendent, et un raid préparé les utilise."
                ]
            },
            {
                heading: "Fermer le serveur par défaut",
                paragraphs: [
                    "C'est la mesure la plus efficace, et la plus souvent négligée. Retirez au rôle @everyone la permission de voir les salons, à l'exception d'un unique salon d'accueil. Un compte qui rejoint le serveur n'a alors rien à inonder.",
                    "L'accès réel passe par un rôle distinct, attribué seulement après une vérification. Tant que ce rôle n'est pas donné, l'arrivant ne voit qu'une porte fermée — quel que soit le nombre de comptes arrivés en même temps."
                ]
            },
            {
                heading: "Exiger une action de l'arrivant",
                paragraphs: [
                    "Avec le module de vérification d'Eric, chaque arrivée publie dans le salon de vérification une demande adressée au nouveau membre : réagir avec un emoji précis pour obtenir le rôle d'accès. Le bot ajoute cet emoji ainsi qu'un emoji de refus, et n'accepte la réaction que si elle vient de la personne visée.",
                    "L'emoji d'acceptation est tiré au hasard à chaque arrivée. C'est ce qui fait le filtre : un script qui réagit à tout, ou qui a appris un emoji fixe, tombe sur celui de refus et se fait expulser. Un compte préparé à l'avance ne contourne rien, puisqu'il n'y a rien à préparer — il faut lire le message au moment où il arrive.",
                    "Cette approche a un coût qu'il faut connaître : l'expulsion est immédiate et automatique. Un membre légitime qui clique sur la mauvaise réaction se retrouve dehors, et devra être réinvité."
                ]
            },
            {
                heading: "Ce qu'il faut préparer avant l'incident",
                list: [
                    "Un rôle d'accès distinct de @everyone, et des permissions de salon qui en dépendent réellement.",
                    "Le rôle du bot placé au-dessus du rôle d'accès dans la hiérarchie.",
                    "Un salon de vérification visible de tous, arrivants compris : c'est là qu'ils doivent réagir.",
                    "Le niveau de vérification de Discord réglé au moins sur « moyen ».",
                    "Une consigne écrite pour l'équipe : qui monte le niveau de vérification et à quel moment."
                ]
            },
            {
                heading: "Pendant un raid",
                list: [
                    "Monter immédiatement le niveau de vérification du serveur au maximum : cela bloque l'écriture des comptes sans téléphone vérifié.",
                    "Suspendre les invitations en cours si le raid passe par un lien diffusé publiquement.",
                    "Bannir plutôt qu'expulser : une expulsion laisse revenir avec la même invitation.",
                    "Ne pas supprimer les messages avant d'avoir relevé les identifiants des comptes, utiles pour un signalement à Discord.",
                    "Rétablir les réglages une fois la vague passée, sinon les vrais nouveaux membres restent bloqués."
                ]
            }
        ],
        faq: [
            {
                question: "Comment empêcher les faux comptes de rejoindre un serveur Discord ?",
                answer: "On ne les empêche pas de rejoindre : Discord ne le permet pas. On les empêche d'agir, en retirant au rôle @everyone l'accès aux salons et en n'attribuant le rôle d'accès qu'après une réaction correcte de l'arrivant à un emoji tiré au hasard."
            },
            {
                question: "Le niveau de vérification de Discord suffit-il contre un raid ?",
                answer: "Non, seul. Il arrête les vagues improvisées, mais des comptes anciens, vérifiés par e-mail et par téléphone, se revendent. Il faut le combiner à un serveur fermé par défaut et à une validation humaine des arrivées."
            },
            {
                question: "Que faire immédiatement pendant un raid ?",
                answer: "Monter le niveau de vérification au maximum, suspendre les invitations diffusées publiquement, bannir plutôt qu'expulser, et relever les identifiants des comptes avant de supprimer les messages, pour pouvoir les signaler à Discord."
            }
        ],
        updated: "2026-08-25"
    },
    {
        slug: "leveling-system",
        title: "Mettre en place un système de niveaux sur Discord",
        metaTitle: "Système de niveaux Discord — comment le mettre en place et le régler",
        description: "Comment mettre en place un système de niveaux sur un serveur Discord : à quoi il sert réellement, quels rôles attribuer à quels paliers, et les erreurs de réglage qui le rendent contre-productif.",
        keywords: "système de niveaux discord, xp discord, rôle par niveau discord, engagement serveur discord, classement discord",
        intro: [
            "Un système de niveaux attribue de l'expérience aux membres qui écrivent, et matérialise cette progression par un niveau, une carte de profil et un classement.",
            "Son intérêt réel n'est pas le chiffre affiché : c'est de donner à l'équipe un critère objectif pour ouvrir progressivement le serveur, et aux membres une raison de revenir."
        ],
        sections: [
            {
                heading: "À quoi ça sert vraiment",
                paragraphs: [
                    "Sur un serveur ouvert, chaque nouvel arrivant a le même accès qu'un membre présent depuis deux ans. Un système de niveaux permet de graduer cet accès sans arbitrage manuel : un salon de discussion libre s'ouvre au niveau 5, la possibilité de publier des liens au niveau 10, un salon d'habitués au niveau 25.",
                    "C'est aussi un filtre anti-spam indirect. Un compte jetable n'atteindra jamais le niveau 10, et les salons qui comptent restent hors de sa portée sans qu'aucune règle n'ait à être écrite."
                ]
            },
            {
                heading: "Choisir les paliers",
                paragraphs: [
                    "L'erreur habituelle est de placer le premier palier trop haut. Un membre qui ne voit aucun changement pendant ses trois premières semaines conclut que le système ne le concerne pas.",
                    "Une progression qui fonctionne donne une première récompense visible rapidement, puis espace les suivantes :"
                ],
                list: [
                    "Niveau 5 : un rôle coloré, sans permission particulière. Il est atteint en quelques jours et signale que le système existe.",
                    "Niveau 10 : l'accès à un ou deux salons supplémentaires.",
                    "Niveau 25 : le droit de publier des liens ou des images là où c'était restreint.",
                    "Niveau 50 et au-delà : un rôle de reconnaissance, sans droit supplémentaire, pour les membres installés."
                ]
            },
            {
                heading: "Mise en place avec Eric",
                list: [
                    "Activer le module Niveaux dans le tableau de bord pour le serveur concerné.",
                    "Créer les rôles correspondant aux paliers choisis.",
                    "Associer chaque rôle à son niveau dans le module.",
                    "Placer le rôle du bot au-dessus de tous les rôles qu'il devra attribuer, sinon Discord refusera l'attribution.",
                    "Vérifier avec *disprole que les associations sont correctes, et avec *level que la carte s'affiche."
                ]
            },
            {
                heading: "Les réglages qui le rendent contre-productif",
                list: [
                    "Récompenser la quantité de messages sans limite incite au flood : les salons se remplissent de messages d'un mot.",
                    "Annoncer chaque passage de niveau dans le salon principal transforme la conversation en fil de notifications. Un salon dédié règle le problème.",
                    "Lier des permissions de modération à un niveau : l'ancienneté n'est pas un critère de jugement, et un membre bruyant atteint un niveau élevé plus vite qu'un membre pertinent.",
                    "Remettre les compteurs à zéro pour équilibrer un classement : c'est le meilleur moyen de faire partir les membres les plus investis."
                ]
            }
        ],
        faq: [
            {
                question: "À quoi sert un système de niveaux sur Discord ?",
                answer: "À graduer l'accès au serveur sans arbitrage manuel — ouvrir des salons ou des droits à mesure qu'un membre s'implique — et à donner une raison de revenir. C'est aussi un filtre indirect : un compte jetable n'atteint jamais un niveau élevé."
            },
            {
                question: "À quel niveau donner le premier rôle ?",
                answer: "Assez bas pour être atteint en quelques jours, typiquement le niveau 5, et sans permission particulière. Un premier palier trop haut fait conclure au membre que le système ne le concerne pas."
            },
            {
                question: "Faut-il donner des droits de modération avec les niveaux ?",
                answer: "Non. Le niveau mesure l'activité, pas le jugement. Un membre très bavard progresse plus vite qu'un membre pertinent mais discret, et les droits de modération doivent rester une décision de l'équipe."
            }
        ],
        updated: "2026-08-25"
    },
    {
        slug: "bot-permissions",
        title: "Permissions et hiérarchie des rôles : pourquoi un bot Discord échoue",
        metaTitle: "Permissions bot Discord — comprendre la hiérarchie des rôles",
        description: "Comprendre les permissions et la hiérarchie des rôles sur Discord : pourquoi un bot n'arrive pas à bannir, à attribuer un rôle ou à supprimer des messages, et comment corriger la configuration.",
        keywords: "permission bot discord, hiérarchie rôles discord, bot discord ne fonctionne pas, permission manquante discord, rôle bot discord",
        intro: [
            "La quasi-totalité des « le bot ne fonctionne pas » signalés par les administrateurs se ramène à deux causes, et aucune n'est un défaut du bot : une permission absente, ou un rôle mal placé dans la hiérarchie.",
            "Ce guide explique les deux mécanismes, dans l'ordre où il faut les vérifier."
        ],
        sections: [
            {
                heading: "Les deux mécanismes, à ne pas confondre",
                paragraphs: [
                    "La permission détermine ce qu'un bot a le droit de faire sur le serveur : bannir, gérer les messages, gérer les rôles. Elle se règle sur le rôle du bot, et peut être modifiée salon par salon.",
                    "La hiérarchie détermine sur qui il peut le faire. Discord interdit à un bot d'agir sur un membre dont le rôle le plus élevé se situe au-dessus du sien, et de manipuler un rôle placé au-dessus du sien — même avec la permission Administrateur.",
                    "Un bot peut donc avoir toutes les permissions et échouer quand même. C'est le cas le plus fréquent, et le plus déroutant, parce que rien dans les réglages de permissions ne le laisse deviner."
                ]
            },
            {
                heading: "Diagnostic, dans l'ordre",
                list: [
                    "L'action échoue-t-elle sur tout le monde, ou seulement sur certains membres ? Sur tout le monde, c'est une permission ; sur certains seulement, c'est la hiérarchie.",
                    "Ouvrir Paramètres du serveur, Rôles, et vérifier que le rôle du bot porte la permission correspondant à l'action.",
                    "Vérifier la position du rôle du bot dans la liste : il doit être au-dessus des rôles des membres visés et des rôles qu'il attribue.",
                    "Vérifier les permissions du salon concerné : un salon peut refuser localement ce que le rôle autorise globalement.",
                    "Vérifier que l'action n'est pas interdite par Discord lui-même — un propriétaire de serveur ne peut être ni expulsé ni banni par personne."
                ]
            },
            {
                heading: "Les permissions à donner, par fonction",
                list: [
                    "Modération : Expulser des membres, Bannir des membres, Gérer les messages.",
                    "Niveaux avec rôles automatiques : Gérer les rôles, et le rôle du bot au-dessus des rôles attribués.",
                    "Accueil et vérification : Gérer les rôles, Voir les salons, Envoyer des messages dans le salon de bienvenue et dans le salon de validation.",
                    "Sondages : Ajouter des réactions, en plus de l'envoi de messages.",
                    "Automodération : Gérer les messages, et l'accès en lecture aux salons surveillés."
                ]
            },
            {
                heading: "Ce que la permission Administrateur ne fait pas",
                paragraphs: [
                    "Donner Administrateur à un bot accorde toutes les permissions d'un coup, mais ne change rien à la hiérarchie. Un bot administrateur placé en bas de la liste des rôles reste incapable d'agir sur la moitié du serveur.",
                    "C'est par ailleurs un mauvais réglage par défaut : une permission qu'un bot n'utilise pas est une permission qu'il ne devrait pas avoir, et Administrateur inclut la suppression de salons et la modification du serveur. Mieux vaut accorder les permissions correspondant aux modules réellement activés."
                ]
            }
        ],
        faq: [
            {
                question: "Pourquoi mon bot Discord n'arrive-t-il pas à attribuer un rôle ?",
                answer: "Soit il lui manque la permission Gérer les rôles, soit — bien plus souvent — le rôle qu'il doit attribuer est placé au-dessus du sien dans la hiérarchie du serveur. Discord interdit à un bot de manipuler un rôle supérieur au sien, même avec la permission Administrateur."
            },
            {
                question: "Faut-il donner la permission Administrateur à un bot Discord ?",
                answer: "Non, sauf raison précise. Elle n'aide pas sur la hiérarchie, qui est la cause la plus fréquente des échecs, et elle accorde des droits — suppression de salons, modification du serveur — dont le bot n'a pas l'usage. Accordez les permissions correspondant aux modules activés."
            },
            {
                question: "Comment savoir si le problème vient d'une permission ou de la hiérarchie ?",
                answer: "Regardez sur qui l'action échoue. Si elle échoue sur tous les membres, c'est une permission manquante. Si elle n'échoue que sur certains — typiquement les modérateurs et les administrateurs — c'est la position du rôle du bot dans la hiérarchie."
            }
        ],
        updated: "2026-08-25"
    },
    {
        slug: "choose-a-discord-bot",
        title: "Comment choisir un bot Discord pour son serveur",
        metaTitle: "Choisir un bot Discord — critères et pièges à éviter",
        description: "Les critères qui comptent réellement pour choisir un bot Discord : périmètre des fonctions, modèle économique, traitement des données, langue, et ce que vaut le nombre de serveurs affiché.",
        keywords: "choisir bot discord, meilleur bot discord, comparatif bot discord, bot discord gratuit, bot discord français",
        intro: [
            "La question « quel est le meilleur bot Discord » n'a pas de réponse générale, parce que les serveurs n'ont pas les mêmes besoins. Elle en a une dès qu'on la reformule en cinq critères.",
            "Ce guide les énumère, y compris ceux sur lesquels ce site n'a pas l'avantage."
        ],
        sections: [
            {
                heading: "1. Le périmètre, et le nombre de bots que vous ajoutez",
                paragraphs: [
                    "Un bot qui couvre modération, niveaux, accueil et alertes évite d'en cumuler quatre. Cela compte plus qu'il n'y paraît : chaque bot supplémentaire ajoute une configuration à tenir, une hiérarchie de rôles à arbitrer et un point de panne.",
                    "À l'inverse, un bot spécialisé fait généralement mieux sur son domaine qu'un bot généraliste. La règle pratique : un généraliste pour le socle, un spécialisé seulement là où le besoin est réellement pointu."
                ]
            },
            {
                heading: "2. Le modèle économique",
                paragraphs: [
                    "Beaucoup de bots répandus placent derrière un abonnement des fonctions que l'on découvre indispensables après coup — la personnalisation des messages, le nombre de rôles automatiques, la fréquence des alertes.",
                    "Vérifiez ce point avant de configurer le serveur, pas après : migrer un système de niveaux d'un bot à un autre fait perdre la progression accumulée par tous les membres, et c'est ce qui rend le choix initial difficilement réversible."
                ]
            },
            {
                heading: "3. Le traitement des données",
                paragraphs: [
                    "Un bot de modération lit le contenu des messages de votre serveur. Deux questions à poser : ce contenu est-il stocké, et est-il utilisé pour entraîner un modèle ?",
                    "La réponse doit figurer dans une politique de confidentialité accessible. Son absence est en soi un signal, comme l'est une politique qui reste vague sur la durée de conservation ou sur la manière de demander une suppression."
                ]
            },
            {
                heading: "4. La langue",
                paragraphs: [
                    "Un bot dont les messages, les erreurs et la documentation sont en anglais fonctionne mal sur un serveur francophone dont une partie des membres ne lit pas l'anglais. Le point se vérifie moins sur les commandes que sur les messages automatiques : bienvenue, avertissements, refus de permission.",
                    "Eric fonctionne en français et en anglais, choisi par serveur, y compris pour le nom de certaines commandes."
                ]
            },
            {
                heading: "5. Ce que le nombre de serveurs ne dit pas",
                paragraphs: [
                    "Les bots affichent volontiers un nombre de serveurs à sept chiffres. Ce chiffre mesure une notoriété passée et une facilité d'ajout, pas la qualité du service : un bot ajouté puis oublié compte autant qu'un bot activement utilisé.",
                    "Les indicateurs utiles sont ailleurs : le temps de réponse du support, la fréquence des mises à jour, et l'existence d'un serveur d'entraide où l'on voit comment les problèmes sont réellement traités."
                ]
            }
        ],
        faq: [
            {
                question: "Quel est le meilleur bot Discord ?",
                answer: "La question dépend du serveur. Les critères qui tranchent sont le périmètre des fonctions couvertes, ce qui est réservé à un abonnement payant, le traitement du contenu des messages, la langue des messages automatiques, et la qualité du support. Le nombre de serveurs affiché par un bot n'est pas un de ces critères."
            },
            {
                question: "Vaut-il mieux un bot généraliste ou plusieurs bots spécialisés ?",
                answer: "Un généraliste pour le socle — modération, accueil, niveaux — puis un spécialisé uniquement là où le besoin est réellement pointu. Chaque bot supplémentaire ajoute une configuration à maintenir et une hiérarchie de rôles à arbitrer."
            },
            {
                question: "Peut-on changer de bot Discord sans tout perdre ?",
                answer: "Pour la modération et l'accueil, oui : il suffit de reconfigurer. Pour les niveaux, non : la progression accumulée par les membres ne se transfère pas d'un bot à un autre. C'est le point sur lequel le choix initial est le moins réversible."
            }
        ],
        updated: "2026-08-25"
    }
];

export default guidesFr;
