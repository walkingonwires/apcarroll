var $ = require('jquery'),
    template = require('../../templates/pages/labs.hbs');

module.exports = function (ctx, next) {
    $('.page-content').html(
        template({
            data: 'Labs Template'
        })
    );
};