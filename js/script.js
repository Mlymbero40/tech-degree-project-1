/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
quote: "I have not failed. Ive just found 10,000 ways that wont work. " , source: " Thomas Edison", citation: " Brainyquote.com", year: " -1925"},

{quote: "Any sufficiently advanced technology is indistinguishable from magic ", source: " Arthur C. Clarke", citation: "", year: ''}, 

{quote:"The real problem is not whether machines think but whether men do. ", source: " B.F. Skinner", citation:"", year:""},

{quote:"The internet is so big, so powerful and pointless that for some people it is a complete substitute for life ", source:" Andrew Brown", citation:"Brainyquote.com", year:" -2012"},

{quote:"Technological progress has merely provided us with more efficient means for going backwards ", source:" Aldous Huxley", citation:"", year:""}

  ];

// getRandomQuote function 
 


 //1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array
function getRandomQuote(quotesArray) {
  let randomIndex = Math.floor(Math.random() * quotesArray.length); // Generates a random index
  
// 2. Use the random number variable and bracket notation to grab a random object from the `quotes` array
  let randomQuoteObject = quotesArray[randomIndex]; // Gets a quote object at the random index
  
  // 3. Return the variable storing the random quote object
  return randomQuoteObject;
}

let randomQuote = getRandomQuote(quotes);
console.log(randomQuote);

/***
 * `printQuote` function
***/

function printQuote() {
  // 1. Create a variable that calls the getRandomQuote() 
  // function
  let randomQuote = getRandomQuote(quotes);
  // 2. Create a variable that initiates your HTML string with 
  // the first two <p></p> elements, their classNames, 
  // and the quote and source properties, but leave off 
  // the second closing `</p>` tag for now
let html = `<p class="quote">${randomQuote.quote}</p>`;
html += `<p class = "source">${randomQuote.source}`;


  // 3. Use an if statement to check if the citation property 
  // exists, and if it does, concatenate a <span></span> 
  // element, appropriate className, and citation property 
  // to the HTML string
if (randomQuote.citation) {
  html+= `<span class="citation">${randomQuote.citation}</span>`;
}
  // 4. Use an if statement to check of the year property exists, 
  // and if it does, concatenate a <span></span> element, 
  // appropriate className, and year property to the HTML 
  //string
if (randomQuote.year) {
  html+= `<span class="year">${randomQuote.year}</span>`;}
  // 5. After the two if statements, concatenate the closing </p> 
  // tag to the HTML string
html += `</p>`;
  // 6. set the innerHTML of the quote-box div to equal the 
  // complete HTML string
document.getElementById('quote-box').innerHTML = html;
}
printQuote();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);