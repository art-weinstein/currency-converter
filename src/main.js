import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Conversion from './currency.js';

// function convert (response, dollar, currency) {
//   $('#convert').html(`${dollar} in ${currency} comes out to ${response.conversion_rates[currency]}`);
// }

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

// $(document).ready(function() {
//   $('#convert').click(function() {
//     let dollar = $('#amount').val();
//     let promise = Conversion.convertCurrency();
//     promise.then(function(response){
//       const body = JSON.parse(response);
//       $('#convert').html(`${dollar} in ${currency} comes out to ${response.conversion_rates[currency]}`);
//     })
//   });
// });

    // $('#dollar').val("");
    // let currency = $('#currency').val();
    // Conversion.convert()
    //   .then(function(response) {
    //     convert(response, dollar, currency);
    //   });

    $(document).ready(function() {
      $('#convert').click(function() {
        let dollar = $('#amount').val();
        let currency = $("#currency")
        let promise = Conversion.convertCurrency();
        promise.then(function(response) {
          const body = JSON.parse(response);
          $('#convert').html(`${dollar} in ${currency} comes out to ${body.conversion_rates[currency]}`);
        }, function(error) {
          $('.showErrors').text(`There was an error processing your request: ${error}`);
        });
      });
    });