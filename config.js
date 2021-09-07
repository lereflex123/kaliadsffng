module.exports = {
	/* The token of your Discord Bot */
	token: "ODc2MDIxOTA5OTkxNjA0MjI0.YReA-w.384FtNZx23JoAb83iQIPvjolxTM",
	/* For the support server */
	support: {
		id: "875863377816191016", // The ID of the support server
		logs: "876545586252357672", // And the ID of the logs channel of your server (new servers for example)
	},
	/* Dashboard configuration */
	dashboard: {
		enabled: true, // whether the dashboard is enabled or not
		secret: "PadlgHT6emRrG_tJtG-RZ8wwmjgW7Ssf", // Your discord client secret
		baseURL: "http://localhost:8080/", // The base URl of the dashboard
		logs: "876545586252357672", // The channel ID of logs
		port: 8080, // Dashboard port
		expressSessionPassword: "IL0v3Atlanta ", // Express session password (it can be what you want)
		failureURL: "http://localhost:8080" // url on which users will be redirected if they click the cancel button (discord authentication)
	},
	mongoDB: "mongodb+srv://salut:dfNHbaR4g2YmQsdk@cluster.8xqmj.mongodb.net/Speak?retryWrites=true&w=majority", // The URl of the mongodb database
	prefix: "*", // The default prefix for the bot
	/* For the embeds (embeded messages) */
	embed: {
		color: "#0091fc", // The default color for the embeds
		footer: "Luna | Project" // And the default footer for the embeds
	},
	/* Bot's owner informations */
	owner: {
		id: "795310576783851520", // The ID of the bot's owner
		name: "D3X73R©™#0001 " // And the name of the bot's owner
	},
	/* DBL votes webhook (optional) */
	votes: {
		port: 5000, // The port for the server
		password: "XXXXXXXXXXX", // The webhook auth that you have defined on discordbots.org
		channel: "XXXXXXXXXXX" // The ID of the channel that in you want the votes logs
	},
	/* The API keys that are required for certain commands */
	apiKeys: {
		// BLAGUE.XYZ: https://blague.xyz/
		blagueXYZ: "XXXXXXXXXXX",
		// FORTNITE TRN: https://fortnitetracker.com/site-api
		fortniteTRN: "XXXXXXXXXXX",
		// FORTNITE FNBR: https://fnbr.co/api/docs
		fortniteFNBR: "XXXXXXXXXXX",
		// DBL: https://discordbots.org/api/docs#mybots
		dbl: "XXXXXXXXXXX",
		// AMETHYSTE: https://api.amethyste.moe
		amethyste: "XXXXXXXXXXX",
		// SENTRY: https://sentry.io (this is not required and not recommended - you can delete the field)
		sentryDSN: "XXXXXXXXXXX"
	},
	/* The others utils links */
	others: {
		github: "https://github.com/Androz2091", // Founder's github account
		donate: "https://patreon.com/Androz2091" // Donate link
	},
	/* The Bot status */
	status: [
		{
			name: "help on {serversCount} servers",
			type: "LISTENING"
		},
		{
			name: "version 1.4",
			type: "PLAYING"
		}
	]
};
