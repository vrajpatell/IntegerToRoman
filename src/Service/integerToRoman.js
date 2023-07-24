
// Funtion to Convert an Integer Input into Roman Numeral Output.

function integerToRoman(num){

    // Checking if input integer in range of 1 to 3999.
    if (num < 1 || num > 3999) {
      throw new OutOfRangeError("Number must be between 1 and 3999");
    }

    // Arrays to store the numeric values and their corresponding Roman numerals.
    const numeric = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];

    // This variable will store result after converting integer into roman.
    let romanNumeral = '';
    let i = 0;

    // while loop will traverse until integer becomes zero.
    while(num > 0) {
        const total = Math.floor(num / numeric[i]);
        for( let j = 0; j < total; j++) {
            romanNumeral += roman[i];
            num -= numeric[i];
        }
        ++i;
    }
    return romanNumeral;
}

// This is custom error class for input which is out of range or not positive.
class OutOfRangeError extends Error {
  constructor(message) {
    super(message);
    this.name = "OutOfRangeError";
  }
}

// Export the function and custom error class for use in other modules
module.exports = {
  integerToRoman,
  OutOfRangeError,
};