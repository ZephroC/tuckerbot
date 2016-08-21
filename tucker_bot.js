var Botkit = require('botkit');
var util = require('util')

var os = require('os');

if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}


var controller = Botkit.slackbot({
    debug: false
});

var bot = controller.spawn({
    token: process.env.token
}).startRTM();

function get_response(){
var responses = [
'You\'re as useless as a marzipan dildo!',
'Fuck off back to your match reports, ya twat!!!',
'Feet off the furniture, you Oxbridge twat. You\'re not in a punt now.',
'NOMFuP. N-O-M-F-P. Not My Fucking Problem. I quite like that. Did you like that?',
'Come the fuck in or fuck the fuck off.',
'HEY! GET BACK TO WORK, ALL OF YOU!',
'Did you have a nice Poofmas?',
'Oh, here he is! Dead man walking!',
'Your fucking girlfriend. Jesus Christ...',
'You were like a sweaty octopus trying to unhook a bra!',
'Shut it! You\'re using all the minutes on my \"Talk until you get head cancer\" tariff!',
'EAT THE FUCKING CHEESE! EAT THE CHEESE, NICHOLSON!',
'Do you know ninety percent of household dust is made of dead human skin? That\'s what you are, to me.',
'Listen, if you\'re not a prostitute or a pizza guy, fuck off!',
'You know what you are? You\'re a fucking human dartboard, and Eric fucking Bristow is on the oche flinging a million darts of human shit right at you.',
'You know what you sounded like? You sounded like a fucking Nazi Julie Andrews!',
'You know, if I could, I\'d fucking punch you into paralysis!',
'You are a boring F-star-star-CUNT.',
'I\'m here, I\'m there, I\'m fucking everywhere. I\'m the egg man.',
'No offense, son, but you look like you should still be at school with your head down a fucking toilet.',
'SHUT IT, Love Actually! Do you want me to hole-punch your face?!',
'Kiss my sweaty balls, you fat fuck!'
];
return responses[Math.floor(Math.random() * responses.length)];
}

controller.hears(['Tucker me!'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {

    bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'robot_face',
    }, function(err, res) {
        if (err) {
            bot.botkit.log('Failed to add emoji reaction :(', err);
        }
    });

    if (message.user) {
        bot.reply(message, '<@'+message.user + '> ' + get_response())
    } else {
        bot.reply(message, get_response());
    }
});

controller.hears(['Tucker <@(.*)>( *)!'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
    var name = message.match[1];
    bot.botkit.log(util.inspect(message))


    bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'robot_face',
    }, function(err, res) {
        if (err) {
            bot.botkit.log('Failed to add emoji reaction :(', err);
        }
    });



    controller.storage.users.get(name, function(err, user) {
        if (name) {
            bot.reply(message, '<@'+name+'> ' + get_response())
        } else {
            bot.reply(message, get_response());
        }
    });
});