/**
 * Load dependencies
 */
// External dependencies
var Primus = require('primus'),
    Rooms  = require('primus-rooms');

/**
 * loadPrimus function
 * 
 * @author Tacyniak Boris <boris.tacyniak@free.fr>
 */
module.exports = function loadPrimus() {
    // Self reference
    var miitoo = this;

    miitoo.once('after:start', function() {
        // Instanciate primus
        var primus = new Primus(miitoo.server, miitoo.config.primus);

        // Enable rooms in primus
        primus.use('rooms', Rooms);

        // Declare stop event listener
        miitoo.once('before:stop', function() {
            primus.destroy();
        });

        // Register primus in the injector
        miitoo.injector.register('Primus', primus, true);

        // Define the getter for primus
        Object.defineProperty(miitoo, 'primus', {
            get: function() {
                return primus;
            },
            configurable: false
        });
    });
};