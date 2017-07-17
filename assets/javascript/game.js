$(document).ready(function(){

  var randomNum = Math.floor(Math.random()*102)+19;
  $('#random-number').html(randomNum);

  var userScore = 0;
  var newDivScore = $('<div>');
  newDivScore.html(userScore);
  $('#user-score').append(newDivScore);

  var winCounter = 0;
  $('#wins').html(winCounter);
  var lossCounter = 0;
  $('#losses').html(lossCounter);

  var gemOneValue = $('#gem-one').val(Math.floor(Math.random()*12)+1);
  var gemTwoValue = $('#gem-two').val(Math.floor(Math.random()*12)+1);
  var gemThreeValue = $('#gem-three').val(Math.floor(Math.random()*12)+1);
  var gemFourValue = $('#gem-four').val(Math.floor(Math.random()*12)+1);

  gemOneValue = $('#gem-one').val();
  gemTwoValue = $('#gem-two').val();
  gemThreeValue = $('#gem-three').val();
  gemFourValue = $('#gem-four').val();


  function consoleLogScore(){
  console.log('-----------------------');
  console.log('Random Number: ' + randomNum);
  console.log('gemOneValue: ' + gemOneValue + '  gemTwoValue: ' + gemTwoValue + '  gemThreeValue: ' + gemThreeValue + '  gemFourValue: ' + gemFourValue);
  console.log('Wins: ' + winCounter + '  Losses: ' + lossCounter);
  console.log('User Score: ' + userScore);
  console.log('-----------------------');
}
  consoleLogScore();

  
  $('.gem-button').click(function(){

    userScore = userScore + parseInt($(this).val());
    newDivScore.html(userScore);
    $('#user-score').append(newDivScore);

    console.log('User Score: ' + userScore);

    if(userScore > randomNum){
      lossCounter++;
      $('#losses').html(lossCounter);
      console.log('Wins: ' + winCounter + '  Losses: ' + lossCounter);

      userScore = 0;
      newDivScore.html(userScore);
      $('#user-score').append(newDivScore);

      alert('You lose, try again?');

      randomNum = Math.floor(Math.random()*102)+19;
      $('#random-number').html(randomNum);

      $('#gem-one').val(Math.floor(Math.random()*12)+1);
      $('#gem-two').val(Math.floor(Math.random()*12)+1);
      $('#gem-three').val(Math.floor(Math.random()*12)+1);
      $('#gem-four').val(Math.floor(Math.random()*12)+1);

      gemOneValue = $('#gem-one').val();
      gemTwoValue = $('#gem-two').val();
      gemThreeValue = $('#gem-three').val();
      gemFourValue = $('#gem-four').val();

      consoleLogScore();
    } 

    if (userScore === randomNum){
      winCounter++;
      $('#wins').html(winCounter);
      console.log('Wins: ' + winCounter + '  Losses: ' + lossCounter);

      userScore = 0;
      newDivScore.html(userScore);
      $('#user-score').append(newDivScore);

      alert('You won!');

      randomNum = Math.floor(Math.random()*102)+19;
      $('#random-number').html(randomNum);

      $('#gem-one').val(Math.floor(Math.random()*12)+1);
      $('#gem-two').val(Math.floor(Math.random()*12)+1);
      $('#gem-three').val(Math.floor(Math.random()*12)+1);
      $('#gem-four').val(Math.floor(Math.random()*12)+1);

      gemOneValue = $('#gem-one').val();
      gemTwoValue = $('#gem-two').val();
      gemThreeValue = $('#gem-three').val();
      gemFourValue = $('#gem-four').val();

      consoleLogScore();
    }

  });



  
  /*
  $('#gem-one').click(function(){
    userScore = userScore + gemOneValue;
    newDivScore.html(userScore);
    $('#user-score').append(newDivScore);
    
    console.log('User Score: ' + userScore);
  });

  $('#gem-two').click(function(){
    userScore = userScore + gemTwoValue;
    newDivScore.html(userScore);
    $('#user-score').append(newDivScore);

    console.log('User Score: ' + userScore);
  });

  $('#gem-three').click(function(){
    userScore = userScore + gemThreeValue;
    newDivScore.html(userScore);
    $('#user-score').append(newDivScore);

    console.log('User Score: ' + userScore);
  });

  $('#gem-four').click(function(){
    userScore = userScore + gemFourValue;
    newDivScore.html(userScore);
    $('#user-score').append(newDivScore);

    console.log('User Score: ' + userScore);
  });
  */
});