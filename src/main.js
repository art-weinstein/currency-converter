import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Conversion from './currency.js';

function convert (response, dollar, currency) {
  $('#convert').html(`${dollar} in ${currency} comes out to ${response.conversion_rates[currency]}`);
}

// $(document).ready(function() {
//   $('#convert').click(function(event) {
//     event.preventDefault;
//     // let dollar = 0;
//     // dollar = $('#amount').val();
//     $('#amount').val();
//     let currency = $("#currency").val();
//     Conversion.convert()
//       .then(function(response){
//         convert(response, currency);
//       });
//   });
// });

$(document).ready(function() {
  $('#convert').click(function(event) {
    event.preventDefault();

    let dollar = $('#amount').val();
    // console.log(usDollar);
    $('#dollar').val("");
    let currency = $('#currency').val();
    console.log(currency);
    Conversion.convert()
      .then(function(response) {
        convert(response, dollar, currency);
      });
  });
});