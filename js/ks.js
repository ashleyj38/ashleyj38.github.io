//jquery functions
$(function () { // doc ready

    // // nav scroller
    // var navbar = $('.navbar');
    // var lastScrollTop = 0;

    // $(window).scroll(function () {
    //     var st = $(this).scrollTop();
    //     // Scroll down
    //     console.log(st);

    //     if (st > 200) {
    //         navbar.removeClass('navbar-dark').addClass('navbar-light');
    //         $('#ks-nav-logo').attr("src","/img/ks-logo-231f20-large@2x.png");
    //         navbar.css('background-color','rgba(255, 255, 255, 0.95)');
    //         $('#ks-contact-us-nav').removeClass('nav-contact-us-dark').addClass('nav-contact-us-light');
    //     } else {
    //         console.log("change back area");
    //         navbar.removeClass('navbar-light').addClass('navbar-dark');
    //         $('#ks-nav-logo').attr("src","/img/ks-logo-white@2x.png");
    //         navbar.css('background-color','rgba(255, 255, 255, 0)');
    //         $('#ks-contact-us-nav').removeClass('nav-contact-us-light').addClass('nav-contact-us-dark');
    //     }
    // });

});

// google map
function initMap() {
    var myLatlng = new google.maps.LatLng(35.2318794,-80.8456071);

    var mapOptions = {
        center: myLatlng,
        zoom: 14,
        scrollwheel: false,
        styles:
        [{
            "featureType":"water",
            "elementType":"geometry",
            "stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]
        }]
    };

    var map = new google.maps.Map(document.querySelector('.ks-map'), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        animation: google.maps.Animation.DROP,
    });
}
