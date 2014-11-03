define([], function() {
    return  function() {
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
});