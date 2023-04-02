const updateQuote = async () => {
const quoteElement = document.getElementById("quote");
const response = await fetch("https://quotes.rest/qod");
const data = await response.json();
const quote = data.contents.quotes[0].quote;
const author = data.contents.quotes[0].author;
quoteElement.textContent = `"${quote}" - ${author}`;
};
updateQuote();
