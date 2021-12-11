const irc = require("matrix-org-irc")

// This is the config, edit it how you'd like.
var config = {
	channels: ["#freenode"],  // Channels the bot will join on join.
	server: "webchat.freenode.net", // The URL for the IRC server.
	nickName: "Goldy", // The nickname the bot will use.
  userName: "GoldBot", // The internal username.
  realName: "Gold Bot", // The "real name" used for the bot.
	prefix: "!" // The prefix used before commands, example: ping => !ping
};

var bot = new irc.Client(config.server, config.botName, {
	channels: config.channels,
	userName: config.userName,
	realName: config.realName,
	retryCount: 3
});

// Commands
bot.addListener("message", function(from, to, text, message) {
  
	if (text.startsWith(config.prefix)) {
			switch (text) {
          
			  case "ping":
				  bot.say(to, "Pong!")
				break;  
          
        case "pong":
				  bot.say(to, 'Ping!')
				break; 
          
		  }
	}
  
});

// Sends a message once the bot has joined all channels without issue.
bot.addListener("registered", function() {
	console.log("The bot has entered the channel(s)!")
})
