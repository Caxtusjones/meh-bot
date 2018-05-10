var Discord = require('discord.io');
var auth = require('./auth.json');

var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

var rps_array = ["rock","paper","scissor"];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function rps(userInput, computerInput) {
  if (userInput == computerInput){
   return "tie";
  } else if (userInput == 0) {
    if(computerInput == 1 ){
      return "lose"
    } else {
      return "win"; }
   } else if (userInput == 1) {
     if (computerInput == 0) {
       return "win";
     } else {
       return "lose"
       
     }
   } else {
     if (computerInput == 0) {
       return "lose";  
     } else {
       return "win";
     }
   }
  }  

bot.on('ready', function (evt) {
    console.log('Connected');
    console.log('Logged in as: ');
    console.log(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
	if  (message.substring(0,1) == '!') {
		var command = message.substring(1);
		switch (command) {
			case "rock":
			result = getRandomInt(3)
			bot.sendMessage({
				to: channelID,
				message: rps_array[result] + "," + rps(0, result)
			});
			break;
			case "paper":
			result = getRandomInt(3)
			bot.sendMessage({
				to: channelID,
				message: rps_array[result] + "," + rps(0, result)
			});
			break;
			case "scissor":
			result = getRandomInt(3)
			bot.sendMessage({
				to: channelID,
				message: rps_array[result] + "," + rps(0, result)
			});
			break;

		}
	}
    
});