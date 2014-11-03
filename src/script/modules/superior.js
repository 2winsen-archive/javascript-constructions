define([
], function() {
    'use strict';

    ////////////////////////////
    // GOOD PARTS OF JAVASCRIPT
    ////////////////////////////

    // Possibility to call superior method of an parent object
    // i.e. tricky part that superior function first is stored in function variable, with correct this
    Object.method('superior', function(name) {
        var that = this, method = that[name];
        return function() {
            return method.apply(that, arguments);
        };
    });

    var figure = {
        numberOfSides: 'unknown',
        getNumberOfSides: function() {
            return this.numberOfSides;
        }
    }

    return {
        test: function() {
            var superior_getNumberOfSides = figure.superior('getNumberOfSides');
            var square = Object.create2(figure);
            square.numberOfSides = 4;
            console.log('SUPERIOR - square: ' + square.numberOfSides + ' ; ' + 'figure: ' + superior_getNumberOfSides());
        }
    };

});
