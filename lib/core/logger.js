/**
 * Load dependencies
 */
// External dependencies
var winston = require('winston');

/**
 * loadLogger function
 * 
 * @author Tacyniak Boris <boris.tacyniak@free.fr>
 */
module.exports = function loadLogger() {
    // Self reference
    var miitoo = this;

    // Add colors to winston
    winston.addColors({
        debug: 'green',
        error: 'red',
        info: 'blue',
        warn: 'yellow'
    });

    var logger = new (winston.Logger)({
        transports: [
            new (winston.transports.Console)({
                level: (process.env.NODE_ENV === 'production') ? 'warn' : 'silly',
                colorize: true
            })
        ]
    });

    // Define a logger
    miitoo.logger = logger;
};
