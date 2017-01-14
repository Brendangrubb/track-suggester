$(document).ready(function() {

  $("#survey-questions").submit(function(event){
    event.preventDefault();

    var question1Input = $("#question1").val();
    var question2Input = $("#question2").val();
    var question3Input = $("#question3").val();
    var question4Input = $("#question4").val();
    var question5Input = $("#question5").val();



    if (question1Input === "question1Design") {
      $("#intro-text").slideUp();
      $("#survey-questions").slideUp();
      $("#suggestion1").fadeIn(1000);
      $(".quiz-again").fadeIn(4000);
    } else if (question2Input === "question2Java") {
      $("#intro-text").slideUp();
      $("#survey-questions").slideUp();
      $("#suggestion2").fadeIn(1000);
      $(".quiz-again").fadeIn(4000);
    } else if (question3Input === "question3C-sharp") {
      $("#intro-text").slideUp();
      $("#survey-questions").slideUp();
      $("#suggestion3").fadeIn(1000);
      $(".quiz-again").fadeIn(4000);
    } else if (question4Input === "question4C-sharp") {
      $("#intro-text").slideUp();
      $("#survey-questions").slideUp();
      $("#suggestion3").fadeIn(1000);
      $(".quiz-again").fadeIn(4000);
    } else if (question5Input === "question5Design")
    $("#intro-text").slideUp();
    $("#survey-questions").slideUp();
    $("#suggestion1").fadeIn(1000);
    $(".quiz-again").fadeIn(4000);

  })












})
