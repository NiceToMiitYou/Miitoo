/**
 * The default configuration of Miitoo
 *
 * @author Tacyniak Boris <boris.tacyniak@free.fr>
 */

module.exports = {
    // The default port of Miitoo if no one is provided
    port: process.env.PORT || 8080,

    // Public assets of the site
    assets: 'public/',

    // Default configuration for primus
    primus: {
        // Define if primus is runing by default
        enabled: true,

        // Primus port
        port: process.env.PORT || 8080,

        // Use primus transformer
        transformer: 'sockjs'
    }
};