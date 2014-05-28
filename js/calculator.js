function calcBonus () {
  $('.results').empty();
  var possibleFares = [];
  var balancesToAdd = [];
  var possibleToAdd = [];
  var $startingBalance = parseFloat(Math.round($('#currentBal').val() * 100) / 100).toFixed(2);
  var $maximumToAdd = $('#maxToAdd').val();
  var $farePrice = $('#farePrices option:selected').val();
  var possibleFareNum = Math.ceil((($maximumToAdd - $startingBalance) * 1.05) / $farePrice) + 1;
  for (var i = 0; i < possibleFareNum; i++) {
    possibleFares[i] = $farePrice * [i];
  }
  for (var i = 0; i < possibleFares.length; i++) {
    balancesToAdd[i] = (Math.round(((possibleFares[i] - $startingBalance)/1.05)*100))/100
  }
  for (var i = 1; i < balancesToAdd.length; i++) {
    if (Math.round((balancesToAdd[i] % 0.05) * 100)/100  % 0.05 == 0) {
      possibleToAdd.push(balancesToAdd[i]);
    }
  }
  for (var i = 0; i < possibleToAdd.length; i++) { 
    var bonus = (Math.round((0.05 * possibleToAdd[i])*100) / 100).toFixed(2);
    var toAdd = possibleToAdd[i].toFixed(2);
    var endFare = (parseFloat($startingBalance) + parseFloat(bonus) + parseFloat(toAdd)).toFixed(2);
    if (endFare % $farePrice === 0 && toAdd > 5) {
      $('.results').append('<li> Add <strong>$' + toAdd + '</strong>' + ' to $' + $startingBalance + ' for a bonus of $' + bonus + '<br>' +' and a total of <strong>$' + endFare + '</strong> (' + endFare/$farePrice + ' rides).</li><br>');
    }
  }
}

$(document).ready(function(){
  $('#calc').click(function(){
    calcBonus();
    return false;
  });
  $('#reset').click(function(){
    $('.results').empty();
  });
});