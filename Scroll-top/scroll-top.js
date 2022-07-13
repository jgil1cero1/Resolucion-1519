$(document).ready(function(){
    // scrool - to top btn
    $("#s4-workspace").on("scroll", function(){
        // scroll to top btn
        if ($("#s4-workspace").scrollTop() >= 400) {
            $("#scrollUp").fadeIn(200);
        } else {
            $("#scrollUp").fadeOut(200);
        }
    });
});

// scroll - to top btn
$("#scrollUp").on("click", function () {
    $("#s4-workspace").animate({ scrollTop: 0 }, 200);
});