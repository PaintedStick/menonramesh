$(document).ready(function() {
    // Read more button functionality
    $("#read-more-btn").click(function() {
        var fullArticle = $("#full-article");
        var preview = $("#preview");
        var button = $(this);

        if (fullArticle.css('display') === 'none') {
            fullArticle.show();
            preview.hide();
            button.text("Read Less");
        } else {
            fullArticle.hide();
            preview.show();
            button.text("Read More");
        }
    });

    // Initialize Slick slider
    $('.post-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]

    });
});