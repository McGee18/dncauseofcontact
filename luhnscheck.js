const luhnCheck = num => {
  let arr = (num + '')
    .split('')
    .reverse()
    .map(x => parseInt(x));
  let lastDigit = arr.splice(0, 1)[0];
  let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
  sum += lastDigit;
  return sum % 10 === 0;
}
// unsure how to implement this const as a validation check




// PHP & java?
// $('#cc').on('input', function(){
//     if (checkLuhn($('#cc').val())) {
//       $('#status').html('Luhn Check: Valid');
//     } else {
//       $('#status').html('Luhn Check: Invalid');
//     }
//   });

// function checkLuhn(value) {
//     // remove all non digit characters
//     var value = value.replace(/\D/g, '');
//     var sum = 0;
//     var shouldDouble = false;
//     // loop through values starting at the rightmost side
//     for (var i = value.length - 1; i >= 0; i--) {
//         // parse converts the text string into a number for us in the check - used tel number as credit card number format- figure out what needs to change.
//       var digit = parseInt(value.charAt(i));
      
//       if (shouldDouble) {
//         if ((digit *= 2) > 9) digit -= 9;
//       }
  
//       sum += digit;
//       shouldDouble = !shouldDouble;
//     }
//     return (sum % 10) == 0;