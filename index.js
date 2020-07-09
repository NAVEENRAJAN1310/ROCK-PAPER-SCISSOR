
var count_computer = 0;
var count_player = 0;
var playerSelected;
var valueSelected = false;
var callComDisplay;
var callPlayDIsplay;

    function computerDisplay() {
    if (count_computer < 3) {
        $("#computer-display").text(count_computer + 1);
        count_computer++;
    }
    else{
        $("#computer-display").text("?");
            $(".gameText").text("Computer Selected one. Please click on any one below")
        clearInterval(callComDisplay);
    }

    }

    function playerDisplay(){
        if (count_player < 3) {
            $("#player-display").text(count_player + 1);
            count_player++;
        } else {
            clearInterval();
        }
    }

    function changeLogic(playerSelected, computerSelected, winner) {
        setTimeout(() => {
            $(".gameText").text("You selected " + playerSelected.toUpperCase() + " and Result is ")
        }, 3000);

        callPlayDIsplay = setInterval(playerDisplay,1000);
        $("#player-display").detach();
        $("#computer-display").detach();
        $("#player").append("<img  class=\"images-inside\" src=\"images/" + playerSelected + ".png\" alt=\"" + playerSelected + "\">");
        $("#computer").append("<img  class=\"images-inside\" src=\"images/" + computerSelected + ".png\" alt=\"" + computerSelected + "\">");
        $(".gameText").text(winner + " Wins");
    }

    function gamePlay(playerSelected) {
        var randomNum = Math.round(Math.random() * 3);

        var computerSelected = "rock";

        if (randomNum == 0) {
            computerSelected = "rock";
        } else if (randomNum == 1) {
            computerSelected = "paper";
        } else {
            computerSelected = "scissor";
        }

        if ((playerSelected === "rock" && computerSelected === "paper") || (playerSelected === "paper" && computerSelected === "scissor") || (playerSelected === "scissor" && computerSelected === "rock")) {
            changeLogic(playerSelected, computerSelected, "Computer");
        } else if ((computerSelected === "rock" && playerSelected === "paper") || (computerSelected === "paper" && playerSelected === "scissor") || (computerSelected === "scissor" && playerSelected === "rock")) {
            changeLogic(playerSelected, computerSelected, "Player");
        } else {
            changeLogic(playerSelected, computerSelected, "No one");
        }

    }

    $("#start-button").click(() => {
        $("#gamePlay").removeAttr("hidden");

        setTimeout(() => {
            $(".gameText").text("Computer Thinking")
        }, 1000);

        callComDisplay = setInterval(computerDisplay, 1000);
        // if (count_computer > 3) {
        //     $("#computer-display").text("?");
        //     $(".gameText").text("Computer Selected one. Please click on any one below")
        //     clearInterval(callComDisplay);
        // }
    });

    $("#rock").click(() => {
            if (!valueSelected) {
                playerSelected = "rock";
                valueSelected = true;
                $("#rock").addClass("images-border");
                gamePlay(playerSelected);

            } else {
                alert("You already Selected value " + playerSelected);
            }

    })

    $("#paper").click(() => {
            if (!valueSelected) {
                playerSelected = "paper";
                valueSelected = true;
                $("#paper").addClass("images-border");
                gamePlay(playerSelected);
            } else {
                alert("You already Selected value " + playerSelected);
            }
    })

    $("#scissor").click(() => {
            if (!valueSelected) {
                playerSelected = "scissor";
                valueSelected = true;
                $("#scissor").addClass("images-border");
                gamePlay(playerSelected);
            } else {
                alert("You already Selected value " + playerSelected);
            }
    })

    