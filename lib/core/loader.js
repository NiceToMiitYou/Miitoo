/**
 * Load dependencies
 */
// External dependencies
var requireAll = require('require-all');

/**
 * loadLoader function
 * 
 * @author Tacyniak Boris <boris.tacyniak@free.fr>
 */
module.exports = function loadLoader() {
    // Self reference
    var miitoo = this;

    // Define a loader, here just requireAll
    miitoo.load = requireAll;
};
