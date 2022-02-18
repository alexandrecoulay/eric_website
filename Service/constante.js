export const baseapiurl = process.env.NEXT_PUBLIC_BASE_API_URL
export const basecdnurl = process.env.NEXT_PUBLIC_CDN_URL
export const websitebaseurl = process.env.NEXT_PUBLIC_WEBSITE_URL
export const discordcdnurl = "https://cdn.discordapp.com"
export const inviteboturl = `https://discord.com/oauth2/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&scope=bot&permissions=${process.env.NEXT_PUBLIC_PERMISSIONS}`
export const oauth2url = `${process.env.NEXT_PUBLIC_DISCORD_API_URL}/oauth2/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&redirect_uri=${baseapiurl}/discord/callback&response_type=code&scope=${process.env.NEXT_PUBLIC_SCOPES}`