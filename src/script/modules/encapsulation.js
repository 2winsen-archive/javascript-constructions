define([
    'modules/encapsulation-requirejs'
], function(EncapsulationRequireJS) {
    'use strict';

    ////////////////////////////
    // GOOD PARTS OF JAVASCRIPT
    ////////////////////////////

    var ObjectPrototype = function() {
        // PRIVATE
        var a = 10;
        var decA = function() {
            a--;
        };
        // PUBLIC
        return {
            incA: function() {
                a++;
                // Just to allow cascading
                return this;
            },
            getA: function() {
                return a;
            },
        };
    };

    return {
        test: function() {
            var o1 = new ObjectPrototype();
            var o2 = new ObjectPrototype();
            console.log('ENCAPSULATION - o1: ' + o1.incA().incA().getA() + ' ; ' + 'o2: ' + o2.getA());

            var o21 = new EncapsulationRequireJS();
            var o22 = new EncapsulationRequireJS();
            console.log('ENCAPSULATION REQUIRE JS - o2.1: ' + o21.incA().incA().getA() + ' ; ' + 'o2.2: ' + o22.getA());
        }
    };

});
