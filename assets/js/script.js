$(document).ready(function(){
    $(".topnav a").click(function() {
        $(".topnav a").removeClass('active');
        $(this).addClass('active');
    })

    var $gallerycontainer = $(".imagegallerycontainer");
    var $allelements = $gallerycontainer.find('li');
    var filterimage = {};

    function filterElements(filterclass) {
        if(filterimage.hasOwnProperty(filterclass)) {
            var $filteredImages = filterimage[filterclass];
        } else {
            $filteredImages = $gallerycontainer.find('.'+filterclass);
            filterimage[filterclass] = $filteredImages;
        }

        $allelements.not($filteredImages).hide();
        $filteredImages.fadeIn();
    }

    $(".tabscontainer a").click(function() {
        var filterclass = $(this).attr('id');
        filterElements(filterclass);
        $('.tabscontainer a').removeClass('activefilter');
        $(this).addClass('activefilter');
    })

    filterElements('allimage');


    $(".menu").click(function() {
        $('nav ul').toggleClass('topnavchange');
        $(".bar1").toggleClass("bar1change");
        $(".bar3").toggleClass("bar3change");
        $(".bar2").toggle();
        $("html").toggleClass('stopscroll');
        $("main,footer").toggleClass('hidecontent');
    })
});