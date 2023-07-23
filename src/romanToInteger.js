function integerToRoman(num){

    if (num < 1 || num > 3999) {
      throw new OutOfRangeError("Number must be between 1 and 3999");
    }

    const numeric = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];

    let romanNumeral = '';
    let i = 0;
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

class OutOfRangeError extends Error {
  constructor(message) {
    super(message);
    this.name = "OutOfRangeError";
  }
}

module.exports = {
  integerToRoman,
  OutOfRangeError,
};