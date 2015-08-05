/**
 * The default configuration of Miitoo
 *
 * @author Tacyniak Boris <boris.tacyniak@free.fr>
 */

module.exports = {
    // The default port of Miitoo if no one is provided
    port: process.env.PORT || 8080,

    // Public assets of the site
    assets: {
        // The list of folders
        folders: 'public/',

        // Setup the max-age to 31 days
        maxAge: 31 * 24 * 60 * 60 * 1000
    },

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