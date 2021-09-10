import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Conversion from './currency.js';

function checkInput(dollar){
  if (dollar <= 0){
    return new Error("Please enter an amount!");
  } else {
    return true;
  }
}

$(document).ready(function() {
  $('#convert').click(function() {
    let dollar = $('#amount').val();
    let currency = $("#currency").val();
    let promise = Conversion.convertCurrency();
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('#convertedAmount').html(`${dollar} dollar in ${currency} comes out to ${body.conversion_rates[currency] * dollar}`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
  try {
    const isInputValid = checkInput();
    if (isInputValid instanceof Error){
      console.error(isInputValid.message)
      throw RangeError("Please enter an amount!");
    } else {
      console.log("Try was successful, no need to catch.");
    }
  } catch(error){
    console.error(`Red alert! There's an error! ${error.message}`);
    $('#convertedAmount').text("Please enter an amount!");
  }
});