/* we can use 'for loop', 'while loop', 'do while loop', to create Array

Data Analyst information:

Consolidate, Filter and re-organise data in the Array.

10 Stock Tickers have been defined in alphabetical order, which is a small subset of a much larger dataset of Tickers listed on US exchange for public trading.

Challenge:

1. define an empty arrays, cCompanies

2. using a 'for' or 'while' loop, iterate throught the list of Tickers that begin with the letter "C" into cCompanies.

3. assign the length of the new cCompaniesarray to a varible, cLength.

Requirement.

1. the cCompanies array must contain all companies that start with the letter "c"

2. cLength must contain length.

3. the original Tickers must not be modified
*/


let tickers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

let cCompanies = [];
// I defined my empty cCompanies array here


// I wrote my loop here
for (i = 0; i<tickers.length; i++) {

  if (tickers [i][0] == "c")  {

    cCompanies.push(tickers[i]);

  }

  console.log(i);
  console.log(tickers[i][0]);

};


// I defined my cLength here 
let cLength = cCompanies.length;


// logging my new array,and its length here
console.log(cCompanies);
console.log(cLength);

/* Conclusion.

the [i] varible in the tickers [i] will point to ach compny in the tickers array, as we move our way through, in reality the [i] is becoming a number each time it loops runs, whcih now we can access the companies in order.

So when we hit a company that starts with "c" we can PUSH itto the cCompanies Array using "tickers[i]" syntax because that will be the company that is currently in the loop. */