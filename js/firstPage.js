$(document).ready(function () {

    // store the players name ;
    const store = function () {
        var player1 = $("#player1").val()
        var player2 = $("#player2").val()
        sessionStorage.setItem("player1", player1);
        sessionStorage.setItem("player2", player2);
        window.location.replace("../html/secondPage.html")
    }

        $("button").click(function(){
            if($("#player1").val()!='' && $("#player2").val()!=''){
                store();
            }
            else{
                $(".fill").text("please fill your name")
            }
        })
    

});