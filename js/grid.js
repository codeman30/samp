   //***ISOTOPE***
    // init Isotope
    setTimeout(function () {
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            layoutMode: 'masonry'
        });
        $('.grid-item').css({
            opacity: 0,
            visibility: "visible"
        }).animate({
            opacity: 1
        }, 'slow');
    }, 2000);
    // filter items on button click
    $('.filter-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $gridd.isotope({
            filter: filterValue
        });
    });

    var $gridd = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'masonry'
    });


    // change is-checked class on buttons
    $('.btn-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });