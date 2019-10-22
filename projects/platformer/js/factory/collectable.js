/*eslint-disable no-shadow-global */
(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    let opspark = window.opspark;
    window.opspark.collectable = window.opspark.collectable || {};
    
    opspark.collectable.factory = function (game) {
        game.collectable = game.add.group();
        game.collectable.enableBody = true;
          ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        collectable.create(type.steve, 250, 180,4, 0.8);
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
        function create(type, x, y, gravity, bounce) {
            var collectable = game.collectable.create(x, y, type.assetKey);
            collectable.type = type;
            collectable.create(type.steve, 250, 150, 4, 0.8);
            /*
             * Extra adjustments or configuration.
             */
            switch (type.assetKey) {
                case 'db':
                    collectable.body.height = 44;
                    break;
                    
                case 'grace':
                case 'kennedi':
                    collectable.scale.x = collectable.scale.y = 0.9;
                    break;
                
                default:
                    // code
            }
            if (gravity) collectable.body.gravity.y = gravity;
            if (bounce) collectable.body.bounce.y = bounce + Math.random() * 0.2;
        }
        opspark.collectable.create = create;
    };
})(window);