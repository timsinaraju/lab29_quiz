// console.log('Hello from the console')
// var firstName = "Raju";
// var lastName = "Timsina"
//
// firstName="Ram"
// console.log(2+3);
// console.log(firstName+ " " +lastName);

// var user = {
//   firstName: "Raju",
//   lastName: "Timsina"
// };

// console.log("Hello, " + user.firstName);

//   greeting("Raju");
//   greeting("Govinda");
//   greeting("Ram");
//
//   var user = {
//     first: "Raju",
//     last: "Timsina",
//     login: function(){
//       console.log("Welcome, " + this.first+" --- You)
//     }
//  }
//
// function greeting(name){
//   console.log("Hello, " + name);
// }

var questions = [{
  title: 'What color is Squirtle?',
  answers: ['Blue', 'Red', 'Yellow', 'Purple'],
  correct: 0
},
{
  title: 'What color is Cat?',
  answers: ['Blue', 'Red', 'Yellow', 'Purple'],
  correct: 1
},
{
  title: 'What color is Dog?',
  answers: ['Blue', 'Red', 'Yellow', 'Purple'],
  correct: 2
},
{
  title: 'What color is Horse?',
  answers: ['Blue', 'Red', 'Yellow', 'Purple'],
  correct: 3
}];

var score = 0;
var currentQuestion = 0;

$(document).ready(function(){
  displayQuestion();

  $('ul').on('click', 'li', function(e){
    $('.selected').removeClass('selected');
    $(e.currentTarget).addClass('selected');
    $('a').addClass('ready');
  });

  $('a').click(function(e){
    e.preventDefault();
    if($(e.currentTarget).hasClass('ready')){
      var guess = $('.selected').attr("id");
      checkAnswer(guess);
    } else if ($(e.currentTarget).hasClass('restart')){
      currentQuestion = 0;
      score= 0;
      $(e.currentTarget).removeClass('restart').text('Submit Answer');
      displayQuestion();
    } else{
      alert('You must select an answer!!!! Please');
    }
  });
});

function displayQuestion(){
  if(currentQuestion < questions.length){
    updateScore();
    var question = questions[currentQuestion];
    $('h2').text(question.title);
    $('ul').html('');
    for (var i = 0; i < question.answers.length; i++) {
      $('ul').append('<li id="'+i+'">'+question.answers[i]+'</li>');
   }
 } else {
   showSummary();
 }
}

function showSummary(){
  $('.score span').text(score);
  $('ul').html('');
  $('.ready').removeClass('ready').addClass('restart').text('Restart Quiz');
  $('h2').text('Congratulations! You scored' + (score/questions.length)*100 + '%');
}

function checkAnswer(guess){
  var question = questions[currentQuestion];
  if(question.correct == guess){
    score++;
  }
  currentQuestion++;
  displayQuestion();
}

function updateScore(){
  $('.questions span').text((currentQuestion+1) + "/" + questions.length);
  $('.score span').text(score);
}
