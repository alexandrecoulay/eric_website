import type { Doc } from "./docTypes";

/**
 * Long-form guides, English. Same slugs as the French file so the hreflang
 * cluster stays a plain one-to-one mapping.
 */
export const guidesEn: Doc[] = [
    {
        slug: "moderate-a-discord-server",
        title: "How to moderate a Discord server",
        metaTitle: "How to moderate a Discord server — method and tools",
        description: "A complete method for moderating a Discord server: role hierarchy, permissions, a sanction scale, auto-moderation and how to organise the moderation team.",
        keywords: "moderate a discord server, discord moderation, discord server rules, discord moderation team, discord sanctions",
        intro: [
            "Moderating a Discord server depends less on tools than on three decisions taken before any incident happens: what is forbidden, who decides, and what follows a repeat offence.",
            "This guide describes an organisation that works for a server of a few dozen to a few thousand members, then the tools that automate it."
        ],
        sections: [
            {
                heading: "1. Write rules that can actually be applied",
                paragraphs: [
                    "A rule is applicable when two different moderators, reading the same message, reach the same decision. \"Be respectful\" does not meet that bar; \"no insults aimed at a person, no sexual content, no promoting other servers without prior agreement\" does.",
                    "Five to eight rules are enough. Beyond that nobody reads them, and unenforced rules weaken the ones that matter: a server where one rule is visibly never applied becomes a server where the others get tested."
                ]
            },
            {
                heading: "2. Set the role hierarchy",
                paragraphs: [
                    "Discord forbids a member — and a bot — from acting on anyone whose highest role sits above their own. This is the source of the vast majority of \"the bot doesn't respond\" reports from administrators.",
                    "The order to respect, top to bottom: administrators, the bot's role, moderators, level and decorative roles, verified members, @everyone. The bot's role must sit above everything it needs to act on, including the roles it grants automatically."
                ]
            },
            {
                heading: "3. Define a sanction scale",
                paragraphs: [
                    "Without a written scale, the sanction depends on the mood of whichever moderator is present, and that is what members hold against a team most often. A common scale:"
                ],
                list: [
                    "First minor breach: a public reminder, with no formal record.",
                    "Repeated or more serious breach: a recorded warning, with a reason.",
                    "Third warning: a temporary exclusion, or a kick depending on severity.",
                    "Illegal content, clear harassment, a raid: immediate ban, skipping the scale."
                ]
            },
            {
                heading: "4. Keep a record",
                paragraphs: [
                    "History is what lets you handle a repeat offence without reconstructing the facts each time. A warning kept with its reason, its author and its date answers on its own the question \"is this the first time?\", which determines the sanction.",
                    "With Eric, *warn @member reason records the warning and *getwarn @member shows the member's full history. Both commands require the Kick Members permission, which in practice reserves them for the team."
                ]
            },
            {
                heading: "5. Automate what is mechanical",
                paragraphs: [
                    "Auto-moderation handles the simple case: a message containing a term from the server's list triggers a warning and a notification, without waiting for a moderator to be online. That is what covers the quiet hours, when incidents most often happen with no witness.",
                    "It does not replace a moderator for anything else. A message can be hostile without containing any filterable term, and a filtered term can appear in a quotation or a joke between regulars. The list should stay short and target what is indefensible in context."
                ]
            },
            {
                heading: "6. Organise the team",
                list: [
                    "A staff-only channel, where moderation notifications land and contentious cases are discussed before a decision.",
                    "A reporting channel for members, distinct from direct messages to moderators, which leave no record the team can consult.",
                    "An explicit rule about which decisions need a second moderator's opinion — typically bans.",
                    "Enough moderators to cover the hours the server is actually active, rather than a long list of inactive roles."
                ]
            }
        ],
        faq: [
            {
                question: "How many moderators does a Discord server need?",
                answer: "Coverage matters more than headcount. A server active in the evening needs moderators present in the evening. In practice two or three active moderators beat a dozen honorary, inactive ones."
            },
            {
                question: "Should a problematic member be kicked or banned?",
                answer: "A kick allows a return with an invite: it suits a member who oversteps without meaning harm. A ban, permanent until lifted, is for harassment, illegal content and raids."
            },
            {
                question: "Why can't my moderation bot sanction certain members?",
                answer: "Because their highest role sits above the bot's role in the server hierarchy. Discord then refuses the action, whichever bot it is. Move the bot's role above the roles concerned."
            }
        ],
        updated: "2026-08-25"
    },
    {
        slug: "protect-from-raids",
        title: "Protecting a Discord server from raids and fake accounts",
        metaTitle: "Protect a Discord server from raids — a verification method",
        description: "How to protect a Discord server from a raid or a wave of fake accounts: Discord's verification level, an @everyone role with no access, manual approval of arrivals, and what to do during the incident.",
        keywords: "protect discord server raid, discord anti raid, discord fake accounts, discord verification, secure discord server",
        intro: [
            "A raid means having a large number of accounts join a server in a short time, to flood its channels or mass-mention its members.",
            "The right defence is not detecting the raid as it starts, but making sure a freshly arrived account cannot write anything until a human has let it in."
        ],
        sections: [
            {
                heading: "The layer Discord provides",
                paragraphs: [
                    "In the server settings, the verification level sets conditions on writing: a verified email address, an account older than five minutes, or membership of the server for more than ten minutes. The highest level requires a verified phone number.",
                    "This layer is free, immediate, and stops the least sophisticated waves. It is not enough on its own: aged, verified accounts are resold, and a prepared raid uses them."
                ]
            },
            {
                heading: "Close the server by default",
                paragraphs: [
                    "This is the most effective measure, and the most often skipped. Remove from the @everyone role the permission to view channels, except for a single landing channel. An account joining the server then has nothing to flood.",
                    "Real access comes from a separate role, granted only after verification. Until that role is given, the newcomer sees a closed door — however many accounts arrived at the same time."
                ]
            },
            {
                heading: "Approve arrivals by hand",
                paragraphs: [
                    "With Eric's verification module, each arrival posts a validation request in a staff-only channel. A moderator reacts to accept, and the access role is granted automatically.",
                    "The value of this approach is that it rests on no heuristic. Automatic filters — account age, missing avatar, suspicious username pattern — are worked around by preparing accounts in advance. A moderator watching forty identical requests arrive in two minutes is not fooled."
                ]
            },
            {
                heading: "What to prepare before the incident",
                list: [
                    "An access role distinct from @everyone, with channel permissions that genuinely depend on it.",
                    "The bot's role placed above the access role in the hierarchy.",
                    "A validation channel visible to staff only.",
                    "Discord's verification level set to at least medium.",
                    "A written instruction for the team: who raises the verification level, and when."
                ]
            },
            {
                heading: "During a raid",
                list: [
                    "Immediately raise the server's verification level to its maximum: this blocks writing from accounts without a verified phone number.",
                    "Suspend active invites if the raid arrives through a publicly shared link.",
                    "Ban rather than kick: a kick lets them return with the same invite.",
                    "Do not delete the messages before collecting the account identifiers, which are needed to report them to Discord.",
                    "Restore the settings once the wave has passed, or genuine new members stay locked out."
                ]
            }
        ],
        faq: [
            {
                question: "How do I stop fake accounts from joining a Discord server?",
                answer: "You do not stop them joining: Discord does not allow it. You stop them acting, by removing channel access from the @everyone role and granting the access role only after a moderator approves."
            },
            {
                question: "Is Discord's verification level enough against a raid?",
                answer: "Not on its own. It stops improvised waves, but aged accounts verified by email and phone are resold. Combine it with a server closed by default and human approval of arrivals."
            },
            {
                question: "What should I do immediately during a raid?",
                answer: "Raise the verification level to maximum, suspend publicly shared invites, ban rather than kick, and collect the account identifiers before deleting messages so you can report them to Discord."
            }
        ],
        updated: "2026-08-25"
    },
    {
        slug: "leveling-system",
        title: "Setting up a levelling system on Discord",
        metaTitle: "Discord levelling system — how to set it up and tune it",
        description: "How to set up a levelling system on a Discord server: what it is actually for, which roles to attach to which thresholds, and the settings that make it counterproductive.",
        keywords: "discord leveling system, discord xp, discord role per level, discord server engagement, discord leaderboard",
        intro: [
            "A levelling system grants experience to members who post, and shows that progression as a level, a profile card and a leaderboard.",
            "Its real value is not the number on display: it is giving the team an objective criterion for opening the server up gradually, and giving members a reason to come back."
        ],
        sections: [
            {
                heading: "What it is actually for",
                paragraphs: [
                    "On an open server, every newcomer has the same access as a member who has been there two years. A levelling system grades that access with no manual arbitration: a free-talk channel opens at level 5, the ability to post links at level 10, a regulars' channel at level 25.",
                    "It is also an indirect anti-spam filter. A throwaway account will never reach level 10, and the channels that matter stay out of reach without a single rule being written."
                ]
            },
            {
                heading: "Choosing the thresholds",
                paragraphs: [
                    "The usual mistake is setting the first threshold too high. A member who sees nothing change in their first three weeks concludes the system is not for them.",
                    "A progression that works gives a visible first reward quickly, then spaces the next ones out:"
                ],
                list: [
                    "Level 5: a coloured role with no particular permission. Reached in a few days, it signals the system exists.",
                    "Level 10: access to one or two additional channels.",
                    "Level 25: the right to post links or images where that was restricted.",
                    "Level 50 and beyond: a recognition role, with no extra rights, for established members."
                ]
            },
            {
                heading: "Setting it up with Eric",
                list: [
                    "Enable the Levels module in the dashboard for the server concerned.",
                    "Create the roles matching the chosen thresholds.",
                    "Attach each role to its level in the module.",
                    "Place the bot's role above every role it will grant, or Discord will refuse the assignment.",
                    "Check with *disprole that the mappings are right, and with *level that the card renders."
                ]
            },
            {
                heading: "Settings that make it counterproductive",
                list: [
                    "Rewarding message count without a cap encourages flooding: channels fill with one-word messages.",
                    "Announcing every level-up in the main channel turns conversation into a notification feed. A dedicated channel fixes it.",
                    "Tying moderation permissions to a level: seniority is not judgement, and a noisy member reaches a high level faster than a thoughtful one.",
                    "Resetting counters to balance a leaderboard: the surest way to lose the most invested members."
                ]
            }
        ],
        faq: [
            {
                question: "What is a levelling system for on Discord?",
                answer: "To grade access to the server with no manual arbitration — opening channels or rights as a member gets involved — and to give a reason to come back. It is also an indirect filter: a throwaway account never reaches a high level."
            },
            {
                question: "At what level should the first role be granted?",
                answer: "Low enough to be reached in a few days, typically level 5, and with no particular permission. A first threshold set too high makes members conclude the system is not for them."
            },
            {
                question: "Should moderation rights come with levels?",
                answer: "No. A level measures activity, not judgement. A very talkative member progresses faster than a thoughtful but quiet one, and moderation rights should stay a decision of the team."
            }
        ],
        updated: "2026-08-25"
    },
    {
        slug: "bot-permissions",
        title: "Permissions and role hierarchy: why a Discord bot fails",
        metaTitle: "Discord bot permissions — understanding the role hierarchy",
        description: "Understanding permissions and the role hierarchy on Discord: why a bot cannot ban, grant a role or delete messages, and how to fix the configuration.",
        keywords: "discord bot permissions, discord role hierarchy, discord bot not working, discord missing permissions, discord bot role",
        intro: [
            "Almost every \"the bot doesn't work\" report from administrators comes down to two causes, and neither is a fault in the bot: a missing permission, or a role misplaced in the hierarchy.",
            "This guide explains both, in the order you should check them."
        ],
        sections: [
            {
                heading: "Two mechanisms, not to be confused",
                paragraphs: [
                    "A permission determines what a bot is allowed to do on the server: ban, manage messages, manage roles. It is set on the bot's role, and can be overridden channel by channel.",
                    "The hierarchy determines who it can do it to. Discord forbids a bot from acting on a member whose highest role sits above its own, and from manipulating a role placed above its own — even with the Administrator permission.",
                    "So a bot can hold every permission and still fail. That is the most common case, and the most confusing, because nothing in the permission settings hints at it."
                ]
            },
            {
                heading: "Diagnosis, in order",
                list: [
                    "Does the action fail for everyone, or only for some members? For everyone, it is a permission; for some only, it is the hierarchy.",
                    "Open Server Settings, Roles, and check the bot's role carries the permission matching the action.",
                    "Check the position of the bot's role in the list: it must sit above the roles of the members targeted and above the roles it grants.",
                    "Check the permissions of the channel involved: a channel can locally deny what the role globally allows.",
                    "Check the action is not forbidden by Discord itself — a server owner cannot be kicked or banned by anyone."
                ]
            },
            {
                heading: "Which permissions to grant, by function",
                list: [
                    "Moderation: Kick Members, Ban Members, Manage Messages.",
                    "Levels with automatic roles: Manage Roles, and the bot's role above the granted roles.",
                    "Welcome and verification: Manage Roles, View Channels, Send Messages in the welcome and validation channels.",
                    "Polls: Add Reactions, on top of sending messages.",
                    "Auto-moderation: Manage Messages, and read access to the monitored channels."
                ]
            },
            {
                heading: "What the Administrator permission does not do",
                paragraphs: [
                    "Giving a bot Administrator grants every permission at once, but changes nothing about the hierarchy. An administrator bot sitting at the bottom of the role list is still unable to act on half the server.",
                    "It is also a poor default: a permission a bot does not use is a permission it should not hold, and Administrator includes deleting channels and altering the server. Better to grant the permissions matching the modules actually enabled."
                ]
            }
        ],
        faq: [
            {
                question: "Why can't my Discord bot grant a role?",
                answer: "Either it lacks the Manage Roles permission, or — far more often — the role it needs to grant sits above its own in the server hierarchy. Discord forbids a bot from manipulating a role higher than its own, even with Administrator."
            },
            {
                question: "Should I give a Discord bot the Administrator permission?",
                answer: "No, barring a specific reason. It does not help with the hierarchy, which is the most frequent cause of failure, and it grants rights — deleting channels, altering the server — the bot has no use for. Grant the permissions matching the enabled modules."
            },
            {
                question: "How do I tell a permission problem from a hierarchy problem?",
                answer: "Look at who the action fails on. If it fails for every member, a permission is missing. If it fails only for some — typically moderators and administrators — it is the position of the bot's role in the hierarchy."
            }
        ],
        updated: "2026-08-25"
    },
    {
        slug: "choose-a-discord-bot",
        title: "How to choose a Discord bot for your server",
        metaTitle: "Choosing a Discord bot — criteria and pitfalls",
        description: "The criteria that actually matter when choosing a Discord bot: feature scope, pricing model, data handling, language, and what a bot's advertised server count is worth.",
        keywords: "choose discord bot, best discord bot, discord bot comparison, free discord bot, discord bot features",
        intro: [
            "\"Which is the best Discord bot\" has no general answer, because servers do not have the same needs. It has one as soon as you restate it as five criteria.",
            "This guide lists them, including the ones where this site does not have the advantage."
        ],
        sections: [
            {
                heading: "1. Scope, and how many bots you end up adding",
                paragraphs: [
                    "A bot covering moderation, levels, welcome and alerts saves you from running four. That matters more than it looks: each extra bot adds a configuration to maintain, a role hierarchy to arbitrate, and a point of failure.",
                    "Conversely, a specialised bot usually does better on its own ground than a generalist. The practical rule: a generalist for the base, a specialist only where the need is genuinely sharp."
                ]
            },
            {
                heading: "2. The pricing model",
                paragraphs: [
                    "Many widely used bots place behind a subscription the features you discover to be essential afterwards — message customisation, the number of automatic roles, alert frequency.",
                    "Check this before configuring the server, not after: migrating a levelling system from one bot to another loses every member's accumulated progression, which is what makes the initial choice hard to reverse."
                ]
            },
            {
                heading: "3. Data handling",
                paragraphs: [
                    "A moderation bot reads your server's message content. Two questions to ask: is that content stored, and is it used to train a model?",
                    "The answer belongs in an accessible privacy policy. Its absence is itself a signal, as is a policy that stays vague about retention or about how to request deletion."
                ]
            },
            {
                heading: "4. Language",
                paragraphs: [
                    "A bot whose messages, errors and documentation are English-only works poorly on a server where part of the membership does not read English. The point shows up less in the commands than in the automatic messages: welcome, warnings, permission refusals.",
                    "Eric runs in French and English, chosen per server, including for the names of some commands."
                ]
            },
            {
                heading: "5. What a server count does not tell you",
                paragraphs: [
                    "Bots readily advertise a seven-figure server count. That figure measures past visibility and ease of adding, not the quality of the service: a bot added and then forgotten counts as much as one in active use.",
                    "The useful indicators are elsewhere: support response time, update frequency, and whether there is a help server where you can see how problems are actually handled."
                ]
            }
        ],
        faq: [
            {
                question: "What is the best Discord bot?",
                answer: "It depends on the server. The deciding criteria are the scope of features covered, what is reserved for a paid tier, how message content is handled, the language of automatic messages, and support quality. A bot's advertised server count is not one of them."
            },
            {
                question: "One generalist bot or several specialised ones?",
                answer: "A generalist for the base — moderation, welcome, levels — then a specialist only where the need is genuinely sharp. Each extra bot adds a configuration to maintain and a role hierarchy to arbitrate."
            },
            {
                question: "Can I switch Discord bots without losing everything?",
                answer: "For moderation and welcome, yes: it is a matter of reconfiguring. For levels, no: members' accumulated progression does not transfer between bots. That is where the initial choice is least reversible."
            }
        ],
        updated: "2026-08-25"
    }
];

export default guidesEn;
