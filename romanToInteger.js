const express = require('express');
const bodyParser = require('body-parser');
const port = 8080;

let app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function integerToRoman(num){
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


app.get("/romannumeral", (req, res) => {
  try {
    const queryInteger = parseInt(req.query.query);

    if (
      !Number.isInteger(queryInteger) ||
      queryInteger <= 0 ||
      queryInteger >= 3999
    ) {
      throw new Error(
        "Invalid input, Please enter positive integer from range 1 to 3999."
      );
    }

    const romanNumeral = integerToRoman(queryInteger);
    res.json({ input: queryInteger, romanNumeral });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Error handling for uncaught errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error'});
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

