$(document).ready(function(){
  $('#calc').click(function(){
    $('.results').empty();
    calcBonus();
    return false;
  });
  $('#reset').click(function(){
    $('.results').empty();
  });
});