/*eslint-disable no-undef */
(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    let opspark = window.opspark;
    window.opspark.platform = window.opspark.platform || {};
    
    opspark.platform.factory = function (game) {
        game.platforms = game.add.group();
        game.platforms.enableBody = true;
         ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        platform.create(400,460);
        platform.create(420,440);
        platform.create(410,420);
        platform.create(430,350);
        platform.create(460,480);
         ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
                                                                                                             
        function create(x, y, scaleX, scaleY, immovable) {
            var platform = game.platforms.create(x, y, 'platform');
            platform.scale.setTo(scaleX || 1, scaleY || 1);
            platform.body.immovable = immovable || true;
            return platform;
        }
        opspark.platform.create = create;
    };
})(window);