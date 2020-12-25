$(document).ready(function(){

$("#player1").text(sessionStorage.getItem("player1"))
$("#player2").text(sessionStorage.getItem("player2"))

$(window).on("unload", function(){
    localStorage.clear();
})
});
