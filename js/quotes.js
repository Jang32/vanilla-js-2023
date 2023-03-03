const quotes = [
  {
    quote: "To know that we know what we know, and to know that we do not know what we do not know, that is true knowledge.",
    author: "Nicolaus Copernicus",
  },
  {
    quote: "Poison is in everything, and no thing is without poison. The dosage makes it either a poison or a remedy.",
    author: "Paracelsus",
  },
  {
    quote: "One sometimes finds what one is not looking for.",
    author: "Alexander Fleming",
  },
  {
    quote: "It's necessary to be slightly underemployed if you are to do something significant.",
    author: "James D. Watson",
  },
  {
    quote: "The ability to perceive or think differently is more important than the knowledge gained.",
    author: "David Bohm",
  },
  {
    quote: "It is what we know already that often prevents us from learning.",
    author: "Claude Bernard",
  },
  {
    quote: "Testing leads to failure, and failure leads to understanding.",
    author: "Burt Rutan",
  },
  {
    quote: "Make a habit of two things: to help; or at least to do no harm.",
    author: "Hippocrates",
  },
  {
    quote: "We don't regard any scientific theory as the absolute truth.",
    author: "Kenneth R. Miller",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    quote: "I think therefore I am.",
    author: "Rene Descartes",
  },
  {
    quote: "The only thing I know is that I know nothing.",
    author: "Socrates",
  },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;