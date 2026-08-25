import type { Doc } from "./docTypes";

/**
 * Module documentation, English.
 *
 * Command names differ from the French file on purpose: the bot translates them
 * with the server's language, so *leaderboard here is *classement there. Both
 * files describe the same behaviour, taken from the bot's source.
 */
export const modulesEn: Doc[] = [
    {
        slug: "level",
        title: "Levelling and XP system",
        metaTitle: "Discord levelling system — XP, level cards and automatic roles",
        description: "How the Eric bot's levelling system works: earning experience, generated profile cards, the server leaderboard and roles granted automatically at a level threshold.",
        keywords: "discord leveling system, discord xp bot, discord automatic role by level, discord rank card, discord leaderboard",
        intro: [
            "The levelling module grants experience to members who take part in the server's conversations, then shows that progression as a generated profile card and a leaderboard.",
            "It does two things: it gives a reason to come back and post, and it lets you open channels or roles gradually as a member gets involved."
        ],
        sections: [
            {
                heading: "How experience is earned",
                paragraphs: [
                    "Every message sent in a server channel earns its author experience. Bot messages are ignored, and experience is counted separately per server: a member present on two servers has two independent progressions.",
                    "Reaching the next level requires a threshold that grows with each level, so progression slows naturally and a high level stays a signal of sustained presence."
                ]
            },
            {
                heading: "Commands",
                commands: [
                    {
                        syntax: "*level {@member}",
                        description: "Shows the profile card: avatar, name, current level and a progress bar towards the next one. Without a mention, it shows the card of whoever sent the message."
                    },
                    {
                        syntax: "*leaderboard",
                        description: "Shows the server's members ranked by accumulated experience."
                    },
                    {
                        syntax: "*disprole",
                        description: "Lists the roles configured as level rewards and the threshold each one is granted at."
                    }
                ]
            },
            {
                heading: "Granting roles automatically",
                paragraphs: [
                    "In the dashboard's Levels module, any server role can be attached to a level. As soon as a member reaches it, the bot grants the role with no moderator involved.",
                    "This is the usual way to reserve channels for established members, or to mark regulars visually. The bot needs a role placed above the roles it grants in the server hierarchy, otherwise Discord refuses the operation."
                ]
            },
            {
                heading: "Customising the profile card",
                paragraphs: [
                    "The background image of the level card is chosen from the personal area of the dashboard. It applies to that member's card, on every server where the module is active."
                ]
            }
        ],
        faq: [
            {
                question: "How do I enable a levelling system on a Discord server?",
                answer: "Sign in to the dashboard at boteric.fr/dashboard, select the server and enable the Levels module. Counting starts immediately for subsequent messages; history from before activation is not backfilled."
            },
            {
                question: "Can a role be granted automatically at a given level?",
                answer: "Yes. In the dashboard's Levels module, attach a role to a threshold. The role is granted as soon as the member reaches that level. The bot's role must sit above the granted role in the server hierarchy."
            },
            {
                question: "Is experience shared across servers?",
                answer: "No. Progression belongs to each server. A global leaderboard exists separately, but it does not affect levels or roles on any given server."
            }
        ],
        updated: "2026-08-25"
    },
    {
        slug: "moderation",
        title: "Moderation and sanctions",
        metaTitle: "Moderate a Discord server — warnings, kicks and bans",
        description: "The Eric bot's moderation commands: warnings with history, kick, ban and bulk message deletion, with the Discord permission each one requires.",
        keywords: "discord moderation bot, discord warn command, discord ban bot, bulk delete discord messages, discord warning history",
        intro: [
            "The moderation module covers manual sanctions: warn, kick, ban, and delete messages in bulk. Every action is logged to the moderation channel configured for the server.",
            "Warnings are kept with their reason, their author and their date, so a repeat offence can be handled knowing the member's history rather than by guesswork."
        ],
        sections: [
            {
                heading: "Commands",
                commands: [
                    {
                        syntax: "*warn <@member> <reason>",
                        description: "Records a warning against the mentioned member, with the given reason. It is added to their history and announced in the moderation channel.",
                        permission: "Requires: Kick Members"
                    },
                    {
                        syntax: "*getwarn <@member>",
                        description: "Shows the mentioned member's warning history: reason, moderator and date for each.",
                        permission: "Requires: Kick Members"
                    },
                    {
                        syntax: "*kick <@member> <reason>",
                        description: "Removes the member from the server. They can rejoin with a valid invite.",
                        permission: "Requires: Kick Members"
                    },
                    {
                        syntax: "*ban <@member> <reason>",
                        description: "Bans the member from the server. The ban stands until lifted manually from Discord.",
                        permission: "Requires: Ban Members"
                    },
                    {
                        syntax: "*clear <number> {@member}",
                        description: "Deletes the given number of messages in the current channel, between 1 and 99. With a mention, only that member's messages are removed among those examined.",
                        permission: "Requires: Manage Messages"
                    }
                ]
            },
            {
                heading: "What Discord enforces, and the bot cannot work around",
                paragraphs: [
                    "Bulk deletion only works on messages under fourteen days old. That is a Discord API limit, shared by every bot. Older messages must be deleted one at a time.",
                    "A bot cannot sanction a member whose highest role sits above its own in the server hierarchy. When a command fails on a moderator or an administrator, that is almost always why: the bot's role needs to be moved up."
                ]
            },
            {
                heading: "Where the alerts go",
                paragraphs: [
                    "The channel receiving moderation notifications is chosen in the dashboard. Pointing it at a staff-only channel avoids publishing warning reasons, which often carry the context of the incident."
                ]
            }
        ],
        faq: [
            {
                question: "How do I warn a member on Discord?",
                answer: "Type *warn followed by the member's mention and the reason, for example *warn @member repeated spam. The warning is stored in their history and announced in the moderation channel. The command requires the Kick Members permission."
            },
            {
                question: "How do I delete several messages at once on Discord?",
                answer: "Type *clear followed by the number of messages to remove, between 1 and 99. Add a mention to remove only one member's messages. Discord forbids bulk deletion of messages older than fourteen days."
            },
            {
                question: "Why can't the bot ban a member?",
                answer: "In nearly every case the target's role sits above the bot's role in the server hierarchy, and Discord refuses the action. Move the bot's role above the roles it needs to act on."
            }
        ],
        updated: "2026-08-25"
    },
    {
        slug: "automoderation",
        title: "Auto-moderation",
        metaTitle: "Discord auto-moderation — filter forbidden words automatically",
        description: "How to set up the Eric bot's auto-moderation: a per-server forbidden word list, an automatic warning to the author and a notification to the moderation team.",
        keywords: "discord auto moderation, discord word filter, discord profanity filter bot, automatic moderation discord",
        intro: [
            "Auto-moderation examines each published message and compares it against a list of forbidden words or phrases defined by the server. On a match, the author receives an automatic warning and the moderation team is notified.",
            "The list belongs to the server: there is no global list imposed on anyone. A gaming server and a professional one do not draw the line in the same place, and each defines its own."
        ],
        sections: [
            {
                heading: "How a match is established",
                paragraphs: [
                    "A single-word entry is compared against the message's words taken individually: the term must appear as a whole word, so an innocuous word containing the forbidden sequence does not trigger an alert.",
                    "A multi-word entry is searched as a phrase across the whole message, which allows targeting a specific turn of phrase rather than an isolated term."
                ]
            },
            {
                heading: "What happens on a match",
                list: [
                    "A warning is recorded automatically against the author, with the matched term or terms as its reason.",
                    "A notification is posted in the server's configured moderation channel.",
                    "The warning joins the member's history, readable with *getwarn."
                ]
            },
            {
                heading: "Configuration",
                paragraphs: [
                    "The module is enabled in the dashboard, Auto-moderation section, where the list of terms and the destination channel for alerts are set. It is disabled by default: no message is examined until an administrator enables it.",
                    "Message content is never kept. Only the forbidden term that triggered the alert — which comes from the server's own list — is stored as the reason of the warning."
                ]
            }
        ],
        faq: [
            {
                question: "How do I filter profanity automatically on Discord?",
                answer: "Enable the Auto-moderation module in the dashboard, enter the list of terms to filter and choose the channel that will receive alerts. Each matching message triggers an automatic warning and a notification to moderators."
            },
            {
                question: "Does the bot store the messages it examines?",
                answer: "No. The message is compared against the list in memory and then discarded. Only the forbidden term that triggered the alert is kept as the warning's reason."
            },
            {
                question: "Can the word list differ per server?",
                answer: "Yes, and that is the default: each server defines its own list. There is no global list applied across servers."
            }
        ],
        updated: "2026-08-25"
    },
    {
        slug: "welcome",
        title: "Welcome and member verification",
        metaTitle: "Discord welcome message and verification — onboarding new members",
        description: "Set up a welcome message and manual verification of newcomers on a Discord server with the Eric bot: moderator approval and automatic access role assignment.",
        keywords: "discord welcome message, discord member verification, discord anti raid bot, discord auto role on join",
        intro: [
            "On every arrival, the bot posts a personalised welcome message in the channel chosen by the administrator.",
            "A second, optional mechanism adds a human validation step: a newcomer only gains access once a moderator approves them. It is the most effective filter against waves of automated accounts, because it rests on no heuristic that can be worked around."
        ],
        sections: [
            {
                heading: "The welcome message",
                paragraphs: [
                    "The destination channel is chosen in the dashboard, Welcome module. The message is sent as soon as Discord reports the arrival. Bot accounts added to the server are ignored."
                ]
            },
            {
                heading: "Moderator verification",
                paragraphs: [
                    "When verification is enabled, a member's arrival posts a validation request in a staff-only channel. A moderator reacts to accept or refuse.",
                    "On acceptance, the bot grants the configured access role automatically. Until validation happens the member holds no role and therefore sees only what is open to everyone — the server's permission setup remains what actually determines what they can see."
                ]
            },
            {
                heading: "Setting the filter up correctly",
                list: [
                    "Remove read access to the server's channels from the @everyone role, except for an optional landing channel.",
                    "Create an access role with normal read and write permissions, and designate it in the dashboard.",
                    "Place the bot's role above the access role in the hierarchy, or Discord will refuse to let it grant the role.",
                    "Designate a validation channel visible only to the moderation team."
                ]
            }
        ],
        faq: [
            {
                question: "How do I welcome members automatically on Discord?",
                answer: "Enable the Welcome module in the dashboard and choose the welcome channel. The bot posts a personalised message there whenever a member joins."
            },
            {
                question: "How do I protect a Discord server from automated accounts?",
                answer: "Enable verification: every arrival creates a validation request in a staff-only channel, and the access role is granted only after a moderator approves. Combined with an @everyone role that has no read access, it is the most reliable filter, because it rests on no automatic detection that can be worked around."
            },
            {
                question: "Can a new member see the server before being validated?",
                answer: "They see whatever the server's permissions open to the @everyone role. For verification to act as a real filter, remove read access from @everyone on the server's channels, except possibly a landing channel."
            }
        ],
        updated: "2026-08-25"
    },
    {
        slug: "ai",
        title: "AI assistant and image analysis",
        metaTitle: "Discord AI bot — conversational assistant and explicit image detection",
        description: "The Eric bot's artificial intelligence module: a generated answer when a member mentions the bot, and optional detection of explicit images with an alert to moderators.",
        keywords: "discord ai bot, discord chatbot, discord chatgpt bot, discord explicit image detection, discord image moderation",
        intro: [
            "The artificial intelligence module covers two distinct functions, enabled separately: an assistant that answers when a member mentions the bot, and analysis of posted images meant to flag explicit content.",
            "Both are disabled by default and only act once an administrator enables them on the server."
        ],
        sections: [
            {
                heading: "The conversational assistant",
                paragraphs: [
                    "Mentioning the bot in a message triggers an answer generated from the text following the mention. There is no command to remember: the mention is enough.",
                    "The text is sent to the model provider for the time it takes to produce the answer, with retention disabled, and is then kept nowhere. It is not used to train a model."
                ]
            },
            {
                heading: "Explicit image detection",
                paragraphs: [
                    "When the module is active, images attached to messages are analysed, and those identified as explicit raise an alert in the configured moderation channel.",
                    "It is decision support, not a verdict: automatic image classification produces both false positives and false negatives, and the sanction stays with a moderator."
                ]
            },
            {
                heading: "What the module does not do",
                list: [
                    "It does not read messages that do not mention the bot.",
                    "It keeps no conversation history from one message to the next.",
                    "It takes no sanction of its own following an image analysis."
                ]
            }
        ],
        faq: [
            {
                question: "How do I talk to the bot's AI on Discord?",
                answer: "Mention the bot in a channel where the artificial intelligence module has been enabled, writing your question after the mention. The answer is posted as a reply to your message."
            },
            {
                question: "Are AI conversations stored?",
                answer: "No. The message is sent to the model provider with retention disabled, for the time it takes to generate the answer, and is kept neither by the provider nor by us. It is not used to train a model."
            },
            {
                question: "Does the bot delete explicit images automatically?",
                answer: "No. It flags the image to moderators in the configured channel. The decision and the sanction stay human, because automatic image classification errs in both directions."
            }
        ],
        updated: "2026-08-25"
    },
    {
        slug: "twitch",
        title: "Twitch alerts",
        metaTitle: "Twitch alert on Discord — announce a stream going live",
        description: "Set up the Eric bot's Twitch notifications: an announcement posted in a Discord channel as soon as a followed channel goes live.",
        keywords: "twitch alert discord, twitch notification discord, discord twitch bot, go live announcement discord",
        intro: [
            "The Twitch module posts an announcement in a Discord channel as soon as a channel followed by the server starts broadcasting.",
            "It is aimed at communities built around one or several streamers, for whom going live is the event that brings members back to the server."
        ],
        sections: [
            {
                heading: "Configuration",
                list: [
                    "Enable the Twitch module in the dashboard.",
                    "Name the channel or channels to follow.",
                    "Choose the Discord channel that will receive the announcements."
                ]
            },
            {
                heading: "How it works",
                paragraphs: [
                    "The bot queries the Twitch API for the state of the followed channels and posts an announcement when one goes live. The delay between the actual start of the broadcast and the announcement depends on how often that query runs; it is measured in minutes, not seconds.",
                    "One announcement is posted per broadcast: a brief drop in the stream does not produce a new notification on every resume."
                ]
            }
        ],
        faq: [
            {
                question: "How do I get a Discord notification when a streamer goes live?",
                answer: "Enable the Twitch module in the dashboard, name the channel to follow and the destination Discord channel. The bot posts an announcement there as soon as the stream starts."
            },
            {
                question: "Can several Twitch channels be followed on one server?",
                answer: "Yes, multiple channels can be followed from the server's dashboard."
            }
        ],
        updated: "2026-08-25"
    },
    {
        slug: "utilities",
        title: "Utility commands",
        metaTitle: "Eric bot utility commands — polls, information, emojis",
        description: "The Eric Discord bot's utility commands: polls with reactions, member and server information, avatar and emoji display, text encoding and search.",
        keywords: "discord poll command, discord poll bot, discord member info, discord avatar command, discord utility bot",
        intro: [
            "These commands belong to no moderation or progression module: they are a server's day-to-day tools, from a poll to showing an avatar at full size."
        ],
        sections: [
            {
                heading: "Polls",
                commands: [
                    {
                        syntax: "*poll \"question\"",
                        description: "Posts a yes-or-no poll and adds the thumbs-up and thumbs-down reactions automatically.",
                        permission: "Requires: Administrator"
                    },
                    {
                        syntax: "*poll \"question\" \"choice 1\" \"choice 2\"",
                        description: "Posts a multiple-choice poll. Each option must be wrapped in straight quotes; the bot adds one reaction per choice.",
                        permission: "Requires: Administrator"
                    }
                ]
            },
            {
                heading: "Information",
                commands: [
                    {
                        syntax: "*uinfo {@member}",
                        description: "Shows a member's information: identifier, account creation date, join date and roles. Without a mention, shows your own."
                    },
                    {
                        syntax: "*server",
                        description: "Shows information about the current server."
                    },
                    {
                        syntax: "*avatar {@member}",
                        description: "Shows the avatar at full size. Without a mention, shows your own."
                    },
                    {
                        syntax: "*stats",
                        description: "Shows the bot's statistics."
                    }
                ]
            },
            {
                heading: "Emojis",
                commands: [
                    {
                        syntax: "*emoji <name>",
                        description: "Shows the emoji with that name at full size. With no argument, shows a random one."
                    },
                    {
                        syntax: "*guide {random}",
                        description: "Links to the list of available emojis. With the random argument, shows one at random."
                    }
                ]
            },
            {
                heading: "Text and search",
                commands: [
                    {
                        syntax: "*encode <text>",
                        description: "Encodes the given text. The original message is deleted once the reply is sent."
                    },
                    {
                        syntax: "*decode <text>",
                        description: "Decodes previously encoded text. The original message is deleted once the reply is sent."
                    },
                    {
                        syntax: "*google <query>",
                        description: "Returns a search link for the given terms."
                    },
                    {
                        syntax: "*npm <package>",
                        description: "Returns the link to the given npm package."
                    }
                ]
            },
            {
                heading: "Miscellaneous",
                commands: [
                    { syntax: "*help", description: "Links to this documentation." },
                    { syntax: "*color", description: "Generates a colour and shows it as an image." },
                    { syntax: "*face", description: "Sends an ASCII face." },
                    { syntax: "*compatibilite <name> <name>", description: "Computes a compatibility score between two first names. A novelty command, nothing more." },
                    { syntax: "*bug <description>", description: "Sends a bug report to the bot's team." }
                ]
            }
        ],
        faq: [
            {
                question: "How do I create a poll on Discord?",
                answer: "Type *poll followed by the question in straight quotes for a yes-or-no poll, or the question then each option in quotes for multiple choice. The bot adds the matching reactions automatically. The command requires the Administrator permission."
            },
            {
                question: "How do I show someone's avatar on Discord?",
                answer: "Type *avatar followed by the member's mention. Without a mention, the command shows your own avatar at full size."
            }
        ],
        updated: "2026-08-25"
    }
];

export default modulesEn;
