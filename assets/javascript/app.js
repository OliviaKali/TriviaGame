
//     var triviaStats = {
//         correct: 0,
//         incorrect: 0,
//         unanswered: 0,
//         timer: 15, //(timer for each question: 15 seconds)
//     }

// var directionsText = document.getElementById('directions-text');


//Disney Lyric Trivia Game
//Five questions- How well do you know song lyrics from your favorite Disney movies?
//Mulan-Reflection
//A Little Mermaid- Part of your World
//Aladdin- A Whole New World
//Hercules- Go the Distance
//
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
                { choice: "Out of these waters?" },
                { choice: "Out of the oceans" },
                { choice: "Out of the sea" }
            ],
            correct: 0
        }
    ];
setQ(0)

    function setQ (questionNum) {
    var q1 = questions[questionNum].question
    var questionHTML = "<p>" + q1 + "</p>"
        for (var i = 0; i < questions[questionNum].choices.length; i++){
        questionHTML += "<button class='choices' id='c"+i+"'>" + questions[questionNum].choices[i].choice + "</button>"
        }
    var score = 0;
    $(".questions").html(questionHTML)

    $(".choices").on("click", function(){
        answer(this.innerText);
    });
}

var currentQ = 0;


    function answer(userChoice) {
        var correctChoiceIndex = questions[currentQ].correct
        var correctChoice = questions[currentQ].choices[correctChoiceIndex].choice
        if (userChoice === correctChoice) {
            $(".answers").html("Correct")
        }
        else {
            $(".answers").html("Wrong")
        }
        changeQ();
    }

    function changeQ(){
        if (currentQ === questions.length-1) {
            alert ("finished")
        }
        else {
            currentQ++;
            setQ(currentQ)
        }
        autoChangeQ = setTimeout (autoChangeQues,15000);
        showProgress = setTimeout (showTimeChange,1000);
        currentSec = 0;

    }



var currentSec = 0;

function showTimeChange () {
    currentSec+=1;
    $("#time").html(currentSec);
}

function autoChangeQues() {
    clearTimeout(autoChangeQ); 
    clearTimeout(showProgress);    
    answer("");
}

var autoChangeQ; 
var showProgress;

    


    // for (var i = 0; i < questions.length; i++){

    // }
});



// Pick a theme for the trivia game
//Trivia based on a specific TV show?
//The Office Trivia?
// Make up 5 multiple choice questions
// Write instructions in html
// Make timer that starts once the player clicks start button
// Make the page display the next question once the timer is up 
//make the page display the next page, once play has submitted their answer
//regardless of it the player submitted an answer 
//(Next page is shows correct answer to the question)

// Add click function in js


// var questions = [
//     {
//         question1: "What is the next lyric in the 'Mulan' song Reflection: Look at me/ I will never pass for a perfect bride/ Or a perfect daughter" 
//         choiceA: "Can it be I'm not meant to play this role",
//         choiceB: "Can it be I'm not meant to play this part",
//         choiceC: "Can it be I'm not meant to be a bride",
//         correct: "B"
//     },
    // {
    //     question2: "What is the next lyric in song, Part of your World, from The Little Mermaid: What would I give if I could live/____",
    //     choiceA: "Out of these waters?",
    //     choiceB: "Out of the oceans",
    //     choiceC: "Out of the sea",
    //     correct: "A"
    // },
    // {
    //     question3: "What is the next line in A Whole New World from Aladdin? 'I'm in a whole new world with you./ Unbelievable ___'",
    //     choiceA: "Unbelievable beauty",
    //     choiceB: "Unbelievable sights",
    //     choiceC: "Unbelievable views",
    //     correct: "B"
    // },
    // {
    //     question4: "What is the first line in Hercules's I Can Go the Distance",
    //     choiceA: "I have often wished",
    //     choiceB: "I have often thought",
    //     choiceC: "I have often dreamed",
    //     correct: "C"
    // },
    // {
    //     question5: "What phrase is repeated constantly in the song, Hakuna Matata, from the Lion King?",
    //     choiceA: "It means no worries for the rest of your days",
    //     choiceB: "It means no worries for the rest of your life",
    //     choiceC: "It means you don't need to worry",
    //     correct: "A"
    // }
// ];