const quotes = [
    {
        name: 'author one',
        quote: 'quote number one'
    },

    {
        name: 'author two',
        quote: 'quote number two'
    },

    {
        name: 'author three',
        quote: 'quote number three'
    },

    {
        name: 'author four',
        quote: 'quote number four'
    },

]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote() {
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}