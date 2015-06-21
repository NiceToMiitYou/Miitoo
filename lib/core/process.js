
/**
 * loadProcess function
 * 
 * @author Tacyniak Boris <boris.tacyniak@free.fr>
 */
module.exports = function loadProcess() {
    // Self reference
    var miitoo = this;

    // Clean exit
    process.on('SIGINT', function() {
        if(true === miitoo.initialized)
        {
            miitoo.stop();
        }
        setTimeout(function() {
            process.exit();
        }, 1000);
    });
};