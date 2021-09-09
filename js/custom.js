$('.navbar-up .bars').bind('click', () => {
    $('.navbar-up .bars').toggleClass('active');
    $('.navbar-up .nav-parent').toggleClass('active');
    $(document.body).toggleClass('active');
});

$(function () {
    $('.navbar-up ul li a').click(function (e) {
        e.preventDefault();
        $('html, body').animate(
            {
                scrollTop: $($(this).data('scroll')).offset().top - 50,
            },
            1000
        );
    });
    $('.fa-chevron-up').click(function () {
        $('*').animate({ scrollTop: 0 }, 1030);
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $('.fa-chevron-up').fadeIn();
        } else {
            $('.fa-chevron-up').fadeOut();
        }
        if ($(window).scrollTop() <= 0) {
            $('.navbar-up').removeClass('resize');
        } else {
            $('.navbar-up').addClass('resize');
        }
        $('.navbar-up ul li a').each(function () {
            if ($(window).scrollTop() >= $($(this).data('scroll')).offset().top - 110) {
                $(this).parent().addClass('active').siblings().removeClass('active');
            }
        });
    });
});

$('.portfolio ul li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
});
mixitup('.portfolio');
