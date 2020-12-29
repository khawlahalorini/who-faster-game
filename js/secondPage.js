$(document).ready(function () {

    $("#player1").text(sessionStorage.getItem("player1"))
    $("#player2").text(sessionStorage.getItem("player2"))

    $(window).on("unload", function () {
        localStorage.clear();
    })


    $("div").hover(
        function () {
            $(this).css("filter", "none")
        },
        function () {
            $(this).css("filter", "blur(3px)")
        })

    $(".comparison").click(function(){
        window.location.replace("../html/comparisonPage.html")
    })


    
});
