var heroin = require('heroin-js');

var configurator = heroin(process.env.HEROKU_API_TOKEN, {logLevel: 'INFO'});

configurator({
    name: 'diabetium-server',
    region: 'eu',
    maintenance: false,
    stack: 'cedar-14',
    config_vars: {
        HEROKU_API_TOKEN: process.env.HEROKU_API_TOKEN,
        NODE_ENV: 'production'
    },
    addons: {},
    collaborators: [
        'mk.chomik@gmail.com'
    ]
});