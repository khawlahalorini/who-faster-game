
$(document).ready(function () {
    $(window).on("unload", function () {
        localStorage.clear();
    })
    var count = 0;
    var x, y, z, a, equ1, equ2;

    $("button").click(function () {
        if (count == 0) {
            console.log("count0")
            $(".player").text(sessionStorage.getItem("player1") + " your turn")
        }
        count++;
        $("#mainBtn").hide()
        var start = 15;
        var score = 0;

        var createRandom = function () {
            x = Math.floor(Math.random() * 12);
            y = Math.floor(Math.random() * 12);
            z = Math.floor(Math.random() * 12);
            a = Math.floor(Math.random() * 12);
            equ1 = x + y;
            equ2 = z + a;
            $(".eq1").text(x + "+" + y).addClass("design").attr('id', 'design1').show();
            $(".eq2").html(z + "+" + a).addClass("design").attr('id', 'design2').show();
            $(".eq3").html(" Equals").addClass("design").attr('id', 'design3').show();
        }
        createRandom();
        $('.timer').show();

        $(".eq1").unbind().click(function () {
            if (equ1 > equ2) {
                score++
            }
            else {
                $(this).effect("shake");
            }
            createRandom();
        });

        $(".eq2").unbind().click(function () {
            if (equ1 < equ2) {
                score++
            }
            else {
                $(this).effect("shake");
            }
            createRandom();
        });

        $(".eq3").unbind().click(function () {
            if (equ1 == equ2) {
                score++
            }
            else {
                $(this).effect("shake");
            }
            createRandom();
        });
        var myVar = setInterval(function () {
            if (start == 0) {
                $("#mainBtn").show()
                clearInterval(myVar)
                $(".eq1").hide()
                $(".eq2").hide()
                $(".eq3").hide()
                $('.timer').hide();
                if (count == 1) {
                    sessionStorage.setItem("score1", score);
                    $(".player").text(sessionStorage.getItem("player2") + " your turn")
                    console.log("count1")
                }
                if (count == 2) {
                    sessionStorage.setItem("score2", score);
                    $("#mainBtn").hide()
                    $(".player").hide()
                    $(".result").text("Congratulations " + result()).css("font-size","120px");
                }
                stop();
            }
            $('.timer').text(start-- + " Seconds");
        }, 1000);
    })
 result=function(){
    if ( sessionStorage.getItem("score1")> sessionStorage.getItem("score2")){
        return sessionStorage.getItem("player1") 
    }
    else if ( sessionStorage.getItem("score1")< sessionStorage.getItem("score2")){
        return sessionStorage.getItem("player2") 
    }
    else{
        return "you are equals"
    }
 }

});
