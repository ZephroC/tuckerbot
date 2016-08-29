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
'NOMFuP. N-O-M-F-P. Not My Fucking Problem. I quite like that. Did you like that %s?',
'Come the fuck in or fuck the fuck off.',
'HEY! GET BACK TO WORK, ALL OF YOU!',
'Did you have a nice Poofmas?',
'Oh, here he is! Dead man walking!',
'Your fucking girlfriend. Jesus Christ...',
'You were like a sweaty octopus trying to unhook a bra!',
'Shut it! You\'re using all the minutes on my \"Talk until you get head cancer\" tariff!',
'EAT THE FUCKING CHEESE! EAT THE CHEESE, %s!',
'Do you know ninety percent of household dust is made of dead human skin? That\'s what you are, to me.',
'Listen, if you\'re not a prostitute or a pizza guy, fuck off!',
'You know what you are? You\'re a fucking human dartboard, and Eric fucking Bristow is on the oche flinging a million darts of human shit right at you.',
'You know what you sounded like? You sounded like a fucking Nazi Julie Andrews!',
'You know, if I could, I\'d fucking punch you into paralysis!',
'You are a boring F-star-star-CUNT.',
'No offense, son, but you look like you should still be at school with your head down a fucking toilet.',
'SHUT IT, Love Actually! Do you want me to hole-punch your face?!',
'Kiss my sweaty balls, you fat fuck!',
'Oh, I\'m really sorry, you won\'t hear anymore swearing from us, YOU MASSIVE GAY SHITE! FUCK OFF!',
'I have to say, I have never seen anyone sweat so much in my entire life. And I\'ve been in a sauna with Pavarotti!',
'You take the piss out of Jolson again, and I will remove your iPod from its tiny nano sheath and push it up your COCK! And then I\'ll plug some speakers up your arse and put it on shuffle with my fucking fist! And every time I hear something that I don\'t like, which will be every time that something comes on, I will skip to the next track by crushing YOUR balls!',
'Have you ever travelled like, a hundred miles per hour, head first, through a tunnel full of pig shit?',
'I am going to rip your fucking head off, and shit right down into your neck, and then I\'m going to stick your FUCKING head back on AND SHIT ON THAT!',
'You\'re the fucking shittest James Bond ever! You\'re David fucking Niven!',
' I\'m not leaving it to you. You couldn\'t organize a bum-rape in a barracks.',
'You\'re like that coffee machine, you know: "from bean to cup, you fuck up".',
'Oi, twat-features! I mean that, literally.',
'I will tear your fucking skin off, I will wear it to your mother\'s birthday party, and I will rub your nuts up and down her leg whilst whistling Bohemian fucking Rhapsody, right?!',
'Are you producing porn for the visually impaired? Because what I\'m hearing on my is %s being roundly fucked.',
'When I need your advice I\'ll give you the special signal, which is me being sectioned under the fucking Mental Health Act!',
'This takes the bloody biscuit. And you\'ve pissed on that biscuit and I\'ve got to eat it. Well, here\'s the news, %s, I will not eat the pissy biscuit!',
'You\'re getting a coffwee. Coffee with wee in it.',
'When is a party not a party? When it\'s at your house',
'Starting with you, you frat fuck. You get sarcastic with me again, and I will stuff so much cotton wool down your fucking throat it\'ll come out your arse like the wee tail on a Playboy Bunny!',
'If it isn\'t Humpty Numpty, sitting on top of a collapsing wall like some clueless... egg cunt. Now I\'m finished.',
'Okay, I am putting you on a probationary period from today until the end of recorded time.',
'Jesus my neice is funnier than you and she makes jokes about poo.',
'You\'re fucked, like Caligula\'s favourite watermelon',
'Break a leg %s and your neck and a wrist it doesn\'t really matter.',
'If you want to see something illegal, pass me the fucking stapler',
'One of the many, many things that baffles me about %s is that they remain unmurdered',
'%s is army slang for stand up buggery',
'I\'ll have a pint of fuck off and die you miserable tosser',
'Clueless. Egg. Cunt.',
'Make like a tree and go fuck yourself',
'It\'s not my fault you\'re dressed up like a dead geisha'
];
return responses[Math.floor(Math.random() * responses.length)];
}

function get_greeting() {
    var responses = [
    'Come the fuck in or fuck the fuck off.',
    'Hey, dickhead, Happy New Queer!'
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

function get_wisdom() {
    var responses = [
    'Well, you know me, I\'m a man of principle. I like to know whether I\'m lying to save the skin of a tosser or a moron.',
    'HEY! GET BACK TO WORK, ALL OF YOU!',
    'Hey, I\'m going to have a swear box installed on Monday. \n Fucking joking, you twat!',
    'Well half an hour ago you were in with a shot! This is half an hour hence! We\'ve fucking time-travelled, yes? We\'re in a weird and wonderful world where everything is different! Maybe, outside, the polar ice caps have melted, maybe there\'s fucking robots knocking about and Davina McCall\'s the new Pope! Maybe, you can download rice! I want you, right now, to think about your future, okay?',
    'Tucker\'s Law: "If some cunt can fuck something up that cunt will pick the worst fucking time to fucking fuck up because that cunt\'s a cunt!" I\'ve got that embroidered on a tea-towel at home!',
    'Well Strictly Come Dancing isn\'t strictly dancing, is it? There\'s also a bit at the beginning when an old man dribbles.',
    'you tell them nothing except where the toilets are, but you lie about that.',
    'We are in a prison drama. This is like The Shawshank Redemption, only with more tunneling through shit and no fucking redemption.',
    'Shouldn\'t that be "Of fuck\'s sake"?',
    'There\'s no happiness without order. It\'s a Nazi quote, but nonetheless stands the test of time.',
    'The one about the fucking hairdresser, the space hairdresser and the cowboy. The guy, he\'s got a tin foil pal and a pedal bin. His father\'s a robot and he\'s fucking fucked his sister. Lego! They\'re all made of fucking Lego. \n Star Wars?',
    'A pony isn\'t a baby horse, it\'s a foal, a fucking foal is a baby horse.',
    'Time is a leash on the dog of ideas.',
    'it was all going to piss in a kettle here',
    'You bought a bank out of social embarrassment? I sometimes buy "The Big Issue" out of social embarrassment, I don\'t buy a FUCKING BANK!',
    'This is so fucking us!',
    'Can you send me out a crymail? We do give a toss; we\'re sorry for your loss.',
    'You are not going to try and talk me down off a ledge, are you? Cause I gotta tell you I am really tired and the pavement looks like a nice, warm, splatty bed right now.',
    'I\'m not pulling anything out of my magic hat. The rabbits are falling to pieces, their fucking heads are coming off and frightening the kids. So somebody else is going to have to help out.',
    'You can\'t know Malcolm, because Malcolm is not here! Malcolm fucking left the building fucking years ago! This is a fucking husk, I am a fucking host for this fucking job. Do you want this job?',
    'It\'s been a bit like renovating an old, old house, yeah? You can take out a sexist beam here, a callous window there, replace the odd homophobic roof tile. But after a while you realise that this renovation is doomed. Because the foundations are built on what I can only describe as a solid bed of cunts.',
    'I\'m here, I\'m there, I\'m fucking everywhere. I\'m the egg man.',
    'Climb the mountain of conflict',
    'I don\'t want to have to read you the riot act here. But I am going to have to read you some extracts from the riot act. Like "Section 1, Paragraph 1: Don\'t leave your boss twisting in the wind, then burst in late, smelling like a pissed seaside donkey."',
    'What did you expect?! THEY\'RE BUILDERS! Have you ever seen a film where the hero is a builder? No! BECAUSE THEY NEVER FUCKING TURN UP IN THE NICK OF TIME!',
    'Maiming is what I prefer. Psychologically.',
    'Now do excuse me, I\'ve got work to do. Don\'t ever call me fucking English again.',
    'Opera? IT\'S JUST VOWELS! Subsidised, foreign fucking vowels!',
    'I categorically did not knowingly tell the truth. Even though I knowingly might not have done.',
    'What is this tiny font? Is it to match your sub-atomic thoughts?',
    'There is a difference between allowing someone\'s natural tittishness to come through, and just exploiting it through camera work here!',
    'If you were to go out and tell the truth it would be morally repugnant',
    'Fuck you all up the wrongun',
    'Hand rolled on the thigh of a Cuban virgin, with big tits and four kids',
    'I like my high horse\n I look good on it\n Like a Knight',
    'Jesus Christ on a crystal meth binge',
    'Difficult\n Difficult\n Lemon Difficult',
    'Knowledge is porrige',
    'Just another day at the fuck office',
    'There\'s nothing that you know that I don\'t know. \n I\'m Doctor Fucking Know',
    'I may as well be talking to fucking gees',
    'I promise I will never call an 8 year old girl a cunt again',
    'Curly Wurlys should be the size of a small ladder',
    'It\'s on.\n It\'s on like fat Pat\'s thong!',
    'I\'m here in an angry capacity',
    'How much shit is there on the menu and what flavour is it?',
    'Fucking upper classholes',
    'Somebody get me a fucking fanta!',
    'What is this Tinker Tailor Soldier Cunt?'
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

function constructUserNameString(name) {
    return '<@'+name + '> ';
}

function enrichMessage(message, name) {
    if(message.includes('%s'))
        return message.replace('%s', constructUserNameString(name));
    else
        return constructUserNameString(name) + message;
}

controller.hears(['Tucker me!'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {

//    bot.api.reactions.add({
//        timestamp: message.ts,
//        channel: message.channel,
//        name: 'robot_face',
//    }, function(err, res) {
//        if (err) {
//            bot.botkit.log('Failed to add emoji reaction :(', err);
//        }
//    });

    if (message.user) {
            bot.reply(message, enrichMessage(get_response(),message.user))
    } else {
        bot.reply(message, get_response());
    }
});

controller.hears(['Tucker Wisdom!'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {

//    bot.api.reactions.add({
//        timestamp: message.ts,
//        channel: message.channel,
//        name: 'robot_face',
//    }, function(err, res) {
//        if (err) {
//            bot.botkit.log('Failed to add emoji reaction :(', err);
//        }
//    });
    bot.reply(message, get_wisdom());
});

controller.hears(['Tucker <@(.*)>( *)!'], 'direct_message,direct_mention,mention,ambient', function(bot, message) {
    var name = message.match[1];
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
            bot.reply(message, enrichMessage(get_response(),name))
        } else {
            bot.reply(message, get_response());
        }
    });
});

controller.on('user_channel_join',function(bot,message) {
    bot.reply('Welcome to ' + message.channel + ' ' + constructUserNameString(message.user));
    bot.reply(message, enrichMessage(get_greeting(),message.user))


});

controller.on('bot_channel_join', function (bot, message) {
    var responses = ['The Kraken awakes!','Morning comrades! How goes the revolution? Our tanks on their lawns at last. Fuck-a-doodle-doo!',     'I\'m here, I\'m there, I\'m fucking everywhere. I\'m the egg man.',
    'Just another day at the fuck office'];
  bot.reply(message,responses[Math.floor(Math.random() * responses.length)] );
});