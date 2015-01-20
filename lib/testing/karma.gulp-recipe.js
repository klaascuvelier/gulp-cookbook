'use strict';

/**
 * @param fullPath karma wants a full path
 * @returns {Function}
 */
function karma(fullPath)
{
    var karmaServer = require('karma').server;

    /**
     * @param {Function} callback
     */
    return function karmaRecipe(callback)
    {
        karmaServer.start({
            configFile: fullPath,
            singleRun: true
        }, callback);
    }
}

module.exports = karma;