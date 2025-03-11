$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 5000
    });
});

$('.menu a[href^="#"]').click(function(event) {
    event.preventDefault();
    const destino = $($(this).attr('href'));
    $('html, body').animate({
        scrollTop: destino.offset().top
    }, 1000);
});



