/**
 * Load dependencies
 */
// External dependencies
var events = require('events');
var _      = require('lodash');

// Internal dependencies
var Injector = require('./injector');

// Core dependencies
var loadAssets  = require('./core/assets');
var loadExpress = require('./core/express');
var loadLoader  = require('./core/loader');
var loadLogger  = require('./core/logger');
var loadPrimus  = require('./core/primus');
var loadProcess = require('./core/process');

// Default configuration
var configuration = require('./configuration');

/**
 * Miitoo Class
 * 
 * @param Object option
 * 
 * @author Tacyniak Boris <boris.tacyniak@free.fr>
 */
function Miitoo(options) {
    // Generate the configuration by merging the default configuration
    var config = _.defaults(options || {}, configuration);

    // Get the project path
    config.root_path = process.env.PWD;

    // Remove memory-leak warning about max listeners
    // See: http://nodejs.org/docs/latest/api/events.html#events_emitter_setmaxlisteners_n
    this.setMaxListeners(0);

    // Expose the configuration
    this.config = config;

    // Declare the dependency injector of Miitoo
    this.injector = new Injector();

    // Create an alias for the injector
    this.register = this.injector.register;
    this.resolve  = this.injector.resolve;
    this.get      = this.injector.get;

    // Load all core dependencies
    loadProcess.apply(this);
    loadLogger.apply(this);
    loadLoader.apply(this);
    loadExpress.apply(this);

    if(true === config.primus.enabled)
    {
        loadPrimus.apply(this);
    }

    if(config.assets)
    {
        loadAssets.apply(this);
    }

    this.injector.register('Lodash', _, true);

    global.miitoo = this;
}

// Inherit EventEmitter
Miitoo.prototype = Object.create(events.EventEmitter.prototype);

module.exports = Miitoo;