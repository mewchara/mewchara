$('.li1').mousemove(function (e) {
    $('span', this).css({left: e.pageX - 100, top: e.pageY + 10});
});