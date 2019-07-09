$(document).ready(function () {
    var directionsText = document.getElementById('directions-text');
    $("#directions-text").html("Press the START button to begin the trivia game!")
    $("#start-btn").html("Start")
    $(".questions").hide();
    $("#reset-btn").hide();

    $("#start-btn").click(function () {
        $(".questions").show();
        $("#directions-text").hide();
        $("#start-btn").hide();
        // setInterval(myTimer, 15 * 1000)

    });

    $("#reset").click(function () {
        location.reload();
    });

    var correctAnswers = 0;
    var wrongAnswers = 0;
    // var unanswered = questions.length - (correctAnswers + wrongAnswers);

    var questions = [
        {
            question: "What is the next lyric in the Mulan song, Reflection: Look at me/ I will never pass for a perfect bride/ Or a perfect daughter",
            choices: [
                { choice: "Can it be I'm not meant to play this role" },
                { choice: "Can it be I'm not meant to play this part" },
                { choice: "Can it be I'm not meant to be a bride" }
            ],
            correct: 1
        },
        {
            question: "What is the next lyric in song, Part of your World, from The Little Mermaid: What would I give if I could live/____",
            choices: [
                { choice: "Out of these waters" },
                { choice: "Out of the oceans" },
                { choice: "Out of the sea" }
            ],
            correct: 0
        },
        {
            question: "What is the next line in A Whole New World from Aladdin? 'I'm in a whole new world with you./ Unbelievable ___'",
            choices: [
                { choice: "Unbelievable beauty" },
                { choice: "Unbelievable sights" },
                { choice: "Unbelievable views" }
            ],
            correct: 1
        },
        {
            question: "What is the first line in Hercules's I Can Go the Distance",
            choices: [
                { choice: "I have often wished" },
                { choice: "I have often thought" },
                { choice: "I have often dreamed" }
            ],
            correct: 2
        },
        {
            question: "What phrase is repeated constantly in the song, Hakuna Matata, from the Lion King?",
            choices: [
                { choice: "It means no worries for the rest of your days", },
                { choice: "It means no worries for the rest of your life", },
                { choice: "It means you don't need to worry", }
            ],
            correct: 0
        }
    ];
    setQuestion(0)

    function setQuestion(questionNum) {
        timer();
        var ques = questions[questionNum].question
        var questionHTML = "<p>" + ques + "</p>"
        for (var i = 0; i < questions[questionNum].choices.length; i++) {
            questionHTML += "<button class='choices' id='c" + i + "'>" + questions[questionNum].choices[i].choice + "</button>"
        }

        $(".questions").html(questionHTML)

        $(".choices").on("click", function () {
            answer(this.innerText);
        });
    }

    var currentQ = 0;
    var timerID;

    function timer() {
        clearTimeout(timerID);
        timerID = setTimeout(changeQ, 1000 * 10);
        if (timerID === "") {
            clearTimeout(timerID);
        }
        //else {
        //     console.log(timerID)
        // }
    }

    function answer(userChoice) {
        var correctChoiceIndex = questions[currentQ].correct
        var correctChoice = questions[currentQ].choices[correctChoiceIndex].choice
        if (userChoice === correctChoice) {
            $(".answers").html("Good job! The correct answer is: " + userChoice)
            correctAnswers++;
            // timer();
        }
        // if else (userChoice === "") {
        //if timer goes down to zero, change question
        //unanswered++;
        //     $(".answers").html("Nice try! The correct answer is: " + correctChoice)
        // }
        else {
            $(".answers").html("Nice try! The correct answer is: " + correctChoice)
            wrongAnswers++;
            // timer();
        }
        // setTimeout(fiveSeconds, 1000 * 5);
        // changeQ();
    }


    

    function changeQ() {
        if (currentQ === questions.length - 1) {
            $("#playAgain").html("Thanks for playing Disney Lyric Trivia" + "<br>" +
                "Correct: " + correctAnswers + "<br>" + "Wrong: " + wrongAnswers +
                "<br>" + "Unanswered: " + unanswered)
            $(".questions").hide()
            $(".answers").hide()
            $("#reset-btn").show();
            // $("#correct-text").html("Correct: " + correctAnswers)
            // $("#wrong-text").html("Wrong: " + wrongAnswers)
            // $("#unanswered-text").html("Unanswered: " + unanswered)
        }
        else {
            currentQ++;
            setQuestion(currentQ)
        }

    }

});

