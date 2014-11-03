(function(require) {
    'use strict';
    require([
        'modules/method',
        'modules/create',
        'modules/superior',
        'modules/encapsulation'
        ],
    function (
        Method,
        Create,
        Superior,
        Encapsulation
        )
    {
        Method.test();
        Create.test();
        Superior.test();
        Encapsulation.test();
    });

})(require);