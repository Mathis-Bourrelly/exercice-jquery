$(document).ready(function() {
    $("li:eq(0)").on("click",function (){
        $.mobile.changePage("page1.html",{
            transition: "slide",
        });
    });
    $("li:eq(1)").on("click",function (){
        $.mobile.changePage("page2.html",{
            transition: "slide",
        });
    });
    styles = { 'height': '20px', 'font-size': '20px' };
    $('.ui-btn').css(styles);
    $(document).on("pagechange",function() {
        styles = { 'height': '20px', 'font-size': '20px' };
        $('.ui-btn').css(styles);
    });
});
