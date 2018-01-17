/*
  Slidemenu
*/
(function() {
    var $body = $('body');
    var $menu_trigger = $body.find('.menu-trigger');

    if ( typeof $menu_trigger !== 'undefined' ) {
        $menu_trigger.click(function () {
            $body.hasClass('menu-active') ? $body.removeAttr('class') : $body.addClass('menu-active')
        })
    }

}).call(this);