/*
*Author: Anderson Barreto Furlan
*/
(function ($) {
    $.alert = function(options) {
        var settings = $.extend({
            class: 'default',
            title: 'Alerta',
            message: 'Alerta',
            effect: ''
        }, options );
        if(!$('#modal-alert').length){
            var $md = $('<div class="modal '+settings.effect+'" id="modal-alert" tabindex="-1" role="dialog"></div>');
            var $mdd = $('<div class="modal-dialog modal-sm"></div>');
            var $mdc = $('<div class="modal-content"></div>');
            var $mdh = $('<div class="modal-header"><div>');
            $mdh.html('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
            $mdh.append('<h4 class="modal-title"></h4>');
            var $mdb = $('<div class="modal-body"></div>');
            var $mdf = $('<div class="modal-footer"></div>');
            $mdf.html('<button type="button" class="btn btn-outline" data-dismiss="modal">OK</button>');
            $mdc.html($mdh)
            .append($mdb)
            .append($mdf);
            $mdd.html($mdc);
            $md.html($mdd);

            $('body').append($md);
        } else {
            var $md = $("#modal-alert");
        }
        $md.find('.modal-title').html(settings.title);
        $md.find('.modal-body').html(settings.message);
        $md.removeClass()
        .addClass('modal '+settings.effect+' modal-'+settings.class)
        .modal('show');
    };
}(jQuery));

