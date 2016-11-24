(function () {
    'use strict';

    var $ = require('jquery'),
        options = require('./options');

    $(document).ready(function () {
        var currentContent = null,
            waitToChange = false;

        $(window).bind('mousewheel touchmove', function (e) {
            if (e) e.preventDefault();
            if (!waitToChange) {
                waitToChange = true;
                _iterate();
                $('.content').text(options[currentContent].name);
                _bindTargetOpen();
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

        function _bindTargetOpen () {
            $('body').off('click').on('click', function () {
                if (options[currentContent].name !== 'email') {
                    window.location.href = options[currentContent].value;
                } else {
                    var win = window.open(options[currentContent].value, '_blank');
                    win.focus();
                }
            });

        }
    });
})();


