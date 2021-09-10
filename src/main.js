import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Conversion from './currency.js';

// function checkInput(dollar){
//   if (dollar <= 0){
//     return new Error("Please enter an amount!");
//   } else {
//     return true;
//   }
// }

// function displayExchange(response, dollar, currency) {
//   if (response.result != 'success') {
//     $('#convertedAmount').text(`There was an error: ${response.message}`);
//   } else if (!currency) {
//     $('#convertedAmount').text('Please select a currency in first box');
//   } else if (dollar === '') {
//     $('#convetedAmount').text('Please select USD amount in second box');
//   } else if (response.result === 'success') {
//     $('#convetedAmount').text(`${dollar} in ${currency}: ${response.conversion_rates[currency]*dollar}`); 
//   } else {
//     $('#convertedAmount').text(`There was an unhandled error!`);
//   }
// }

function checkInput(dollar){
  if (dollar <=0 || dollar === ""){
    return new Error("Please enter valid input in both fields!")
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
      $('#convertedAmount').html(`${dollar} dollars in ${currency} comes out to ${body.conversion_rates[currency] * dollar}`);
      // $('#displayError').hide();
    }, function(error) {
      $('.showErrors').html(`There was an error processing your request: ${error}`);
    });
    try {
      const isInputValid = checkInput(dollar);
      if (isInputValid instanceof Error){
        console.error(isInputValid.message)
        throw RangeError("No valid entry");
      } else {
        console.log("Try was successful, no need to catch.");
        $('#convertedAmount').show();
        $('#displayError').hide();
      }
    } catch(error){
      console.error(`Red alert! There's an error! ${error.message}`);
      // $('#displayError').html
      $('#displayError').show();
      $("#convertedAmount").hide();

    }
  });
});




// $(document).ready(function() {
//   $('#convert').click(function() {
//     let dollar = $('#amount').val();
//     let currency = $("#currency").val();
//     Conversion.convertCurrency()
//       .then(function(response) {
//         displayExchange(response, dollar, currency);
//       });
//   });
// });