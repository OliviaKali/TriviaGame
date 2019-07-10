$(document).ready(function() {
    var counter = 10;
    var timer;
  
    var currentQ = 0;
  
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unanswer = 0;
  
    var directionsText = document.getElementById("directions-text");
    $("#directions-text").html("Press the START button to begin the trivia game!");
  
    $("#reset-btn").hide();
    
  
    $("#start-btn").click(function() {
      $("#directions-text").hide();
      $("#start-btn").hide();
      console.log("clicked");
      setQuestion();
      $("#time").html("<h4>" + "Time-left: " + counter + "</h4>");
  
      timer = setInterval(function() {
        counter -= 1;
        console.log(counter);
        $("#time").html("<h4>" + "Time-left: " + counter + "</h4>");
  
        if (counter === 0) {
          stop();
          $(".questions").hide();
          $(".answers").hide();
          $("#time").hide();
          $("#playAgain").text(
            "Thanks for playing Disney Lyric Trivia " + "<br>" +
            "Correct: " + correctAnswers + "<br>" + "Wrong: " + wrongAnswers);
          $("#reset-btn").show();
          // $("#correct-text").text("Correct: " + correctAnswers);
  
          function finishQuiz() {
              for (var i = 0; i < questions.length; i++) {
                  // loop through array to check all answers at once
                  if (questions[i].userChoice === questions[i].correct) {
                      correctAnswers++
                  } else {
                      wrongAnswers++
                  }
              }
              // write html to page
              console.log(correctAnswers)
              console.log(wrongAnswers)
              // $("#correct-text").html("Correct: " + correctAnswers)
              // $("#wrong-text").html("Wrong: " + wrongAnswers)
              }
        }
  
      
      // finishQuiz();
      // console.log(correctAnswers)
      // console.log(wrongAnswers)
  
        //   if (counter === 0) {
        //     //finish quiz
        //     clearInterval(timer);
        //   }
      }, 1000);
  
      function stop() {
        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        clearInterval(timer);
      }
    });
  
    var questions = [
      {
        question:
          "What is the next lyric in the Mulan song, Reflection: Look at me/ I will never pass for a perfect bride/ Or a perfect daughter",
        choices: [
          "Can it be I'm not meant to play this role",
          "Can it be I'm not meant to play this part",
          "Can it be I'm not meant to be a bride"
        ],
        correct: "Can it be I'm not meant to play this part",
        userChoice: ""
      },
      {
        question:
          "What is the next lyric in song, Part of your World, from The Little Mermaid: What would I give if I could live/____",
        choices: ["Out of these waters", "Out of the oceans", "Out of the sea"],
        correct: "Out of these waters",
        userChoice: ""
      },
      {
        question:
          "What is the next line in A Whole New World from Aladdin? 'I'm in a whole new world with you./ Unbelievable ___'",
        choices: [
          "Unbelievable beauty",
          "Unbelievable sights",
          "Unbelievable views"
        ],
        correct: "Unbelievable sights",
        userChoice: ""
      },
      {
        question: "What is the first line in Hercules's I Can Go the Distance",
        choices: [
          "I have often wished",
          "I have often thought",
          "I have often dreamed"
        ],
        correct: "I have often dreamed",
        userChoice: ""
      },
      {
        question:
          "What phrase is repeated constantly in the song, Hakuna Matata, from the Lion King?",
        choices: [
          "It means no worries for the rest of your days",
          "It means no worries for the rest of your life",
          "It means you don't need to worry"
        ],
        correct: "It means no worries for the rest of your days",
        userChoice: ""
      }
    ];
  
    function setQuestion() {
      for (var i = 0; i < questions.length; i++) {
        $(".questions").append(`<h3>${questions[i].question}</h3>`);
  
        for (var j = 0; j < questions[i].choices.length; j++) {
          $(".questions").append(
            `<div class="form-check form-check-inline my-2">
                  <input class="form-check-input" name="${i}" type="radio" value="${
              questions[i].choices[j]
            }">
                  <label class="form-check-label answers" for="${
                    questions[i].choices[j]
                  }">${questions[i].choices[j]}</label>
                  </div>`
          );
        }
      }
  
      $(".questions").on("change", ".form-check-input", function () {
        console.log(this);
        var questionIndex = $(this).attr("name");
        var answer = $(this).val();
        questions[questionIndex].userChoice = answer;
        console.log(questions);
  
  
      });
    
  
      
    }
  
  
  
  });
  