// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  var length = cardNumber.length;
  var num1 = cardNumber.substr(0,1);
  var num2 = cardNumber.substr(0,2);
  var num3 = cardNumber.substr(0,3);
  var num4 = cardNumber.substr(0,4);
  var num6 = cardNumber.substr(0,6);
  var switchPrefix = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759']
  if (length == 14 && (num2 == "38" || num2 == "39")) {
    return "Diner's Club";
  }
  else if (length == 15 && (num2 == "34" || num2 == "37")) {
    return "American Express";
  }
  else if ((switchPrefix.includes(num4) || switchPrefix.includes(num6)) && (length == 16 || length == 18 || length == 19)) {
    return "Switch";
  }
  else if ((length == 13 || length == 16 || length == 19) && num1 == "4") {
    return "Visa";
  }
  else if (length == 16 && (Number(num2) >= 51 && Number(num2) <= 55)) {
    return "MasterCard";
  }
  else if ((length == 16 || length == 19) && (num4 == "6011" || (Number(num3) >= 644 && Number(num3) <= 649) || num2 == "65")) {
    return "Discover";
  }
  else if ((num4 == "5018" || num4 == "5020" || num4 == "5038" || num4 == "6304") && (length >= 12 && length <= 19)) {
    return "Maestro";
  }
  else if (((Number(num3) >= 624 && Number(num3) <= 626) || (Number(num4) >= 6282 && Number(num4) <= 6288) || (Number(num6) >= 622126 && Number(num6) <= 622925)) && (length >=16 && length <= 19)) {
    return "China UnionPay";
  }


  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  //Visa always has a prefix of 4 and a length of 13, 16, or 19.
  //MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  //Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  //Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  //China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  //Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.


  // Once you've read this, go ahead and try to implement this function, then return to the console.
};
