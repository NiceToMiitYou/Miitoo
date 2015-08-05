
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

        // Apply only if in production
        var maxAge = (process.env.NODE_ENV === 'production') ? assets.maxAge || 0 : 0;

        // Expose the static folder
        miitoo.app.use(miitoo.express.static(assetsFolder, {
            maxAge: maxAge
        }));
    }

    if(Array.isArray(assets.folders))
    {
        // Expose each folders
        assets.forEach(function(asset) {
            expose(asset);
        });
    }
    else
    {
        // Expose only one folder
        expose(assets.folders);
    }
};
