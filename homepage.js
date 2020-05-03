$(function() {
    $.scrollify({
        section:".page",
        updateHash: true,
        touchScroll: true,
        setHeights: false,
        interstitialSection:".footer",
        before:function(i,page) {
            $('html').attr('data-current-index', i);
            var ref = page[i].attr("data-section-name");
            $(".pagination .active").removeClass("active");
            $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
        },
        afterRender:function() {
            $(".top-bar > .inner > .main-menu > .cell > a").on("click", $.scrollify.move);
            $('html').attr('data-current-index', 0);
            $('.page-1').addClass('active');
            $('.page-1').addClass('visited');
        }
    });
});

$('.top-bar > .inner > .main-menu > .cell:nth-of-type(2) > a').click(function (){
    alert('준비 중 입니다^^.');
});

$('.top-bar > .inner > .main-menu > .cell:nth-of-type(3) > a').click(function (){
    alert('곧 많은 소식을 만날 수 있으실 거예요~');
});