$('a[href^=\\#]').click(function() {
    var speed = 800;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var current_pos = $("#content").scrollTop();
    var position = target.offset().top+current_pos;
    $('#content').stop().animate({scrollTop:position}, speed, 'swing');
    return false;
});