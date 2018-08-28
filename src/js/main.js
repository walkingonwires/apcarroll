(function () {
    'use strict';

    var $ = require('jquery'),
        options = require('./options');

    $(document).ready(function () {
        var currentContent = null,
            waitToChange = false;

        $(window).bind('mousewheel touchmove DOMMouseScroll', function (e) {
            if (e) e.preventDefault();
            if (!waitToChange) {
                waitToChange = true;
                _iterate();
                _appendLink();
                setTimeout(function () {
                    waitToChange = false;
                }, 175)
            }
        });

        function _iterate () {
            if (currentContent === null) {
                currentContent = 0;
                return;
            }
            currentContent = (currentContent < (options.length -1)) ? currentContent+1 : 0;
        }

        function _appendLink () {
            var isEmail = (options[currentContent].name === 'email'),
                mailTo =  isEmail ? 'mailto:' : '',
                target = isEmail ? '_self' : '_blank';
            $('.content').empty().append(
                '<a href="' +
                mailTo + options[currentContent].value +
                '" target="' + target +'">' +
                options[currentContent].name +
                '</a>');
        }
    });
})();


