import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import conversion from './currency.js'

function convert (response, currency) {
  $('#convert').html(`USD in ${currency} comes out to ${response.conversion_rates[currency]}`);
}

$(document).ready(function() {
  $('#convert').click(function(event) {
    event.preventDefault;
    let dollar = $('#amount').val();
    $('#amount').val();
    let currency = $("#currency").val();
    conversion.convert()
      .then(function(response){
        convert(response, currency);
      });
  });
});
