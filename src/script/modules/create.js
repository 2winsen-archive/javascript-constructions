define([
], function() {
    'use strict';

    ////////////////////////////
    // GOOD PARTS OF JAVASCRIPT
    ////////////////////////////

    // Easily create an object that is descendant of parent
    // create2 since just create is already implemented in modern browsers
    Object.create2 = function(parent) {
        var F = function() {};
        F.prototype = parent;
        return new F();
    }

    var figure = {
        numberOfSides: 'unknown'
    }

    return {
        test: function() {
            var square = Object.create2(figure);
            square.numberOfSides = 4;
            console.log('CREATE - square: ' + square.numberOfSides + ' ; ' + 'figure: ' + figure.numberOfSides);
        }
    };

});
