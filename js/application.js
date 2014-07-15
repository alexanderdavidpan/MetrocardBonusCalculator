$(document).ready(function(){
  $('#calc').click(function(){
    $('.results').empty();
    var $startingBalance = parseFloat(Math.round($('#currentBal').val() * 100) / 100).toFixed(2);
    var $maximumToAdd = $('#maxToAdd').val();
    var $farePrice = $('#farePrices option:selected').val();
    calcBonus($startingBalance, $maximumToAdd, $farePrice);
    return false;
  });
  $('#reset').click(function(){
    $('.results').empty();
  });
});