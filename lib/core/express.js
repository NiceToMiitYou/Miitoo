/**
 * Load dependencies
 */
// External dependencies
var express = require('express');

/**
 * loadExpress function
 * 
 * @author Tacyniak Boris <boris.tacyniak@free.fr>
 */
module.exports = function loadExpress() {
    // Self reference
    var miitoo = this;

    // Load needed variable
    var server = {};
    var app    = express();

    // Is initialized
    var initialized = false;

    // Set x-powered-by
    app.set('x-powered-by', false);

    // Declare start event listener
    miitoo.once('private:start', function() {
        // Emit before start
        miitoo.emit('before:start');

        server = app.listen(miitoo.config.port, function() {
            // Emit after start
            miitoo.emit('after:start');
        });
    });

    // Start the server
    miitoo.start = function(cb) {
        // If not initialized only
        if(true === initialized)
        {
            throw new Error('Server has already been initialized!');
        }

        // Server initialized
        initialized = true;

        // Emit start
        miitoo.emit('private:start');

        if(typeof cb === 'function')
        {
            cb();    
        }
    };

    // Declare stop event listener
    miitoo.once('private:stop', function() {
        // Emit before stop
        miitoo.emit('before:stop');

        server.close(function() {
            // Emit after stop
            miitoo.emit('after:stop');
        });
    });

    // Stop the server
    miitoo.stop = function(cb) {
        // If initialized only
        if(false === initialized)
        {
            throw new Error('Server is not initialized!');
        }

        // Emit stop
        miitoo.emit('private:stop');

        if(typeof cb === 'function')
        {
            cb();
        }
    };

    // Register the application
    miitoo.injector.register('Express', express, true);

    // Register the application
    miitoo.injector.register('ExpressApp', app, true);

    // Register the router
    miitoo.injector.register('ExpressRouter', express.router);

    // Define the getter for initialized
    Object.defineProperty(miitoo, 'initialized', {
        get: function() {
            return initialized;
        },
        configurable: false
    });

    // Define the getter for express
    Object.defineProperty(miitoo, 'express', {
        get: function() {
            return express;
        },
        configurable: false
    });

    // Define the getter for app
    Object.defineProperty(miitoo, 'app', {
        get: function() {
            return app;
        },
        configurable: false
    });

    // Define the getter for server
    Object.defineProperty(miitoo, 'server', {
        get: function() {
            return server;
        },
        configurable: false
    });
};
