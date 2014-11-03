define([
], function() {
    'use strict';

    ////////////////////////////
    // GOOD PARTS OF JAVASCRIPT
    ////////////////////////////

    // Easily create generic method for specific object type
    Function.prototype.method = function(name, func) {
        this.prototype[name] = func;
        return this;
    };

    String.method('newMethod', function() {
        return 'doing new string functionality!';
    });
    Number.method('newMethod', function() {
        return 'doing new number functionality!';
    });

    return {
        test: function() {
            var target;
            target = 'TEST';
            console.log('METHOD - ' + target.newMethod());

            target = 42;
            console.log('METHOD - ' + target.newMethod());
        }
    };

});
