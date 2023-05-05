$('.b-menu').click(function () {
    $('nav').addClass('ativo');
});

$('.meio a').click(function (e) {
    e.preventDefault();
    $('nav').removeClass('ativo');
});