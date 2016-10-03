/*-----滑動 動畫只顯示一次-----*/
kissuiScrollAnim.setOptions({ 
  'autoReset': false,
  'triggerOnInit': false
})

/*-----回到頂端-----*/
if ($('#gotop').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#gotop').addClass('show');
            } else {
                $('#gotop').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#gotop').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}