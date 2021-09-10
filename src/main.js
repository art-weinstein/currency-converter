import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Conversion from './currency.js';

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
    });