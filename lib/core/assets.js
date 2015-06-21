
/**
 * loadAssets function
 * 
 * @author Tacyniak Boris <boris.tacyniak@free.fr>
 */
module.exports = function loadAssets() {
    // Self reference
    var miitoo = this;

    // Var the list of assets
    var assets = miitoo.config.assets;

    // Expose assets folders
    if(!assets)
    {
        return;
    }

    // Expose a single folder
    function expose(folder) {
        // Define the static folder
        var assetsFolder = miitoo.config.root_path + '/' + folder;

        // Expose the static folder
        miitoo.app.use(miitoo.express.static(assetsFolder));
    }

    if(Array.isArray(assets))
    {
        // Expose each folders
        assets.forEach(function(asset) {
            expose(asset);
        });
    }
    else
    {
        // Expose only one folder
        expose(assets);
    }
};
