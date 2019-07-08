
//Write instructions in html
//"Press start button to start the disney trivia game"
//Create button in html (Bootstrap)
//Make instructions and start button disappear once the game starts (display: none?)
//Create variable with array of questions 
//Array of correct answers
//For loop
//Create timer that starts when the start button is pressed
//Each question will have a reset time counting down
//Page should automatically move to the next page (displaying correct answer 
//even if any answer wasn't selected)
//SetTimeout method for correct answer page for 5 seconds before next question appears
//Repeat steps until each question is shown
//Button: Play again? (Without reloading the page)

$(document).ready(function () {
    var directionsText = document.getElementById('directions-text');
    $("#directions-text").html("Press the START button to begin the trivia game!")
    $("#start-btn").html("Start")

    $(".questions").hide();

    // start.addEventListener("click",start);

    $("#start-btn").click(function () {
        $(".questions").show();

    });

    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unanswered = 0;

    var timerID;

    // var questionTime = 15;
    // var count = 0;

    // function counter() {
    //     if (count <= questionTime) {
    //         counter.
    //     }
    // }

    // var counter = 0;

    // function setUp () {
    //     $("#timer").html(counter);

    // function timeIt () {
    //     counter++;
    //     timer.html(counter);
    // }

    //     setInterval(timeIt, 1000);
    // }

    // setUp(counter);
    // timeIt(counter);



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
                { choice: "It means no worries for the rest of your days" },
                { choice: "It means no worries for the rest of your life" },
                { choice: "It means you don't need to worry" }
            ],
            correct: 0
        }
    ];
    setQuestion(0)

    function setQuestion(questionNum) {


        var ques = questions[questionNum].question

        var questionHTML = "<p>" + ques + "</p>"

        for (var i = 0; i < questions[questionNum].choices.length; i++) {
            questionHTML += "<button class='choices' id='c" + i + "'>" + questions[questionNum].choices[i].choice + "</button>"
        }


        $(".questions").html(questionHTML); 


        $(".choices").on("click", function () {
            answer(this.innerText);
        });
    }

    var currentQ = 0;

    function timer(){
        clearTimeout(timerID);
        timerID = setTimeout(changeQ, 1000 * 2);


        if(timerID === ""){
            clearTimeout(timerID);            
        } else {
            console.log(timerID)
        }
    }

    function answer(userChoice) {

        var correctChoiceIndex = questions[currentQ].correct
        var correctChoice = questions[currentQ].choices[correctChoiceIndex].choice

        if (userChoice === correctChoice) {

            timer();
            $(".answers").html("Good job! The correct answer is: " + userChoice)
            correctAnswers++
            
        }

        else {
            timer();
            $(".answers").html("Nice try! The correct answer is: " + correctChoice)
            wrongAnswers++
        }
        // changeQ();
        //How do I make the multiple choice only be able to click one choice?
    }

    function changeQ() {
        // clearTimeout(timerID);
        if (currentQ === questions.length - 1) {
            $("#playAgain").html("Thanks for playing Disney Lyric Trivia")
            $(".questions").hide()
            $(".answers").hide()
            $("#correct-text").html("Correct: " + correctAnswers)
            $("#wrong-text").html("Wrong: " + wrongAnswers)
            $("#unanswered-text").html("Unanswered: " + unanswered)
            // $("#playAgain-btn").html()
        }
        else {
            currentQ++;
            setQuestion(currentQ)
        }
        // autoChangeQ = setTimeout (autoChangeQues,15000);
        // showProgress = setTimeout (showTimeChange,1000);
        // currentSec = 0;

    }

    // function fiveSeconds() {
    //     $(".answers").append("Good job! The correct answer is: " + userChoice);
    // }

    // var currentSec = 0;

    // function showTimeChange () {
    //     currentSec+=1;
    //     $("#time").html(currentSec);
    // }

    // function autoChangeQues() {
    //     clearTimeout(autoChangeQ); 
    //     clearTimeout(showProgress);    
    //     answer("");
    // }

    // var autoChangeQ; 
    // var showProgress;

});

//         timer: 15, //(timer for each question: 15 seconds)
