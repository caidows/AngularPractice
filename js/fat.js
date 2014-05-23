$(function() {
    var length = 3;
    var count = 0;
    var standard = $('ul li:first');
    $('ul li').each(function() {
        var translateX = standard.outerWidth(true)*parseInt(count%length);
        var translateY = standard.outerHeight(true)*parseInt(count/length);
        count++;
        $(this).css('-webkit-transform', 'translate3d('+translateX+'px, '+ translateY+'px, 0px)');
    });
});