$('.main-slider > .side-btns > div').click(function () {
    
    var $slider = $(this).closest('.main-slider');
    var $current = $slider.find('>.slides > .active');
    var $post;
    var index = $(this).index();
    
    if (index == 0) {
        $post=$current.prev();
    }
    else {
        $post = $current.next();
    }
    
    if ($post.length == 0) {
        if (index == 0) {
        $post=$slider.find('>.slides > .slide:last-child');
    }
    else {
        $post=$slider.find('>.slides > .slide:first-child');
    }
    }
    
    $current.removeClass('active');
    $post.addClass('active');
    
});

function slider_init () {
    $('.main-slider > .side-btns > div:last-child').click();
}

setInterval(slider_init, 5000);