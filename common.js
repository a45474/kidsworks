$('a').click(function() {
    if ( $(this).attr('href') == '#' ) {
        return false;
    }
});