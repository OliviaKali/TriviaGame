$(document).ready(function() {
  var counter = 120;
  var timer;

  var correctAnswers = 0;
  var wrongAnswers = 0;

  var directionsText = document.getElementById("directions-text");
  $("#directions-text").html(
    "Press the START button to begin the trivia game!"
  );

  $("#reset-btn").hide();
  $("#submit-btn").hide();
  $("#disneyPic2").hide();

  $("#start-btn").click(function() {
    $("#directions-text").hide();
    $("#start-btn").hide();
    $("#disneyPic1").hide();
    setQuestion();
    $("#time").html("<h4>" + "Time-left: " + counter + "</h4>");
    $("#submit-btn").show();


    timer = setInterval(function() {
      counter -= 1;
      $("#time").html("<h4>" + "Time Left: " + counter + "</h4>");

      if (counter === 0) {
        stop();
        $(".questions").hide();
        $(".answers").hide();
        $("#time").hide();
        $("#playAgain").text("Thanks for playing Disney Lyric Trivia!");
        $("#reset-btn").show();
        $("#submit-btn").hide();
        finishQuiz();
        $("#disneyPic2").show();
      }
    }, 1000);

    function stop() {
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
        "What is the next line in song, Part of your World, from The Little Mermaid: What would I give if I could live _____",
      choices: ["Out of these waters", "Out of the oceans", "Out of the sea"],
      correct: "Out of these waters",
      userChoice: ""
    },
    {
      question:
        "What is the next line in A Whole New World from Aladdin: I'm in a whole new world with you./ _______",
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

    $(".questions").on("change", ".form-check-input", function() {
      var questionIndex = $(this).attr("name");
      var answer = $(this).val();
      questions[questionIndex].userChoice = answer;
    });
  }

  function finishQuiz() {
    for (var i = 0; i < questions.length; i++) {
      if (questions[i].userChoice === questions[i].correct) {
        correctAnswers++;
      } else {
        wrongAnswers++;
      }
    }
    $("#correct-text").text("Correct: " + correctAnswers);
    $("#wrong-text").text("Wrong: " + wrongAnswers);
  }

  $("#submit-btn").click(function() {
    stop();
    $(".questions").hide();
    $(".answers").hide();
    $("#time").hide();
    $("#playAgain").text("Thanks for playing Disney Lyric Trivia!");
    $("#reset-btn").show();
    $("#submit-btn").hide();
    finishQuiz();
    $("#disneyPic2").show();
  });

  $("#reset").click(function() {
    location.reload();
  });

});
