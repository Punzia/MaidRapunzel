const tmi = require('tmi.js');



const client = new tmi.Client({
    options: { debug: true },
    identity: {
        username: 'username',
        password: 'oauth:secret-password'
    },
    channels: ['streamer-chat']
});

client.connect();

client.on('message', (channel, tags, message, self) => {
    if (self || !message.startsWith('$')) return;

    const args = message.slice(1).split(' ');
    const command = args.shift().toLowerCase();
    if (command === 'echo') {
        client.say(channel, `@${tags.username}, you said: "${args.join(' ')}"`);
    }
    if (command === 'dev') {
        client.say(channel,
            `
             [Website] - https://punzia.tech
             [GitHub] - https://github.com/Punzia
        `);
    }
    if (command === 'echo') {
        client.say(channel, `@${tags.username}, you said: "${args.join(' ')}"`);
    }
    if (command === 'maid') {
        client.say(channel, `Hello there! I'm Rapunzel your maid!`);
    }
    if (command === 'drops') {
        client.say(channel, `watch the stream to get apex loading screens here ~ https://www.twitch.tv/drops/inventory 
        <3`)
    }
    if (command === 'vibe') {
        client.say(channel, `Listen to this vibe ~ https://www.youtube.com/watch?v=hufJE-CmvBo GlitchCat`)
    }
    if (command === 'mercy') {
        client.say(channel,`MercyWing1 PinkMercy MercyWing2`)
    }

});
		