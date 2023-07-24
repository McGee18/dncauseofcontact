$('#cc').on('input', function(){
    if (checkLuhn($('#cc').val())) {
      $('#status').html('Luhn Check: Valid');
    } else {
      $('#status').html('Luhn Check: Invalid');
    }
  });

function checkLuhn(value) {
    // remove all non digit characters
    var value = value.replace(/\D/g, '');
    var sum = 0;
    var shouldDouble = false;
    // loop through values starting at the rightmost side
    for (var i = value.length - 1; i >= 0; i--) {
        // parse converts the text string into a number for us in the check - used tel number as credit card number format- figure out what needs to change.
      var digit = parseInt(value.charAt(i));
      
      if (shouldDouble) {
        if ((digit *= 2) > 9) digit -= 9;
      }
  
      sum += digit;
      shouldDouble = !shouldDouble;
    }
    return (sum % 10) == 0;
  }