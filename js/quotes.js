const quotes = [
  {
    quote : "주식 시장은 적극적인 자에게서 참을성이 많은 자에게로 돈이 넘어가도록 설계되어 있는 시스템이다.",
    author : "Warren Buffett",
  },
  {
    quote : "약손절은 절대 필수적이다.",
    author : "Soonil Yoo",
  },
  {
    quote : "당장 눈에만 보이는 신데렐라 같은 단기 수익으로 인해 착각에 빠지지 말아라",
    author : "Warren Buffett",
  },
  {quote: "I never dreamed about success, I worked for it",
    author: "Estee Lauder",
  },
  {
    quote: "Do not try to be original, just try to be good.",
    author: "Paul Rand",
  },
  {
    quote: "Do not be afraid to give up the good to go for the great",
    author: "John D. Rockefeller",
  },
  {
    quote:
      "If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.",
    author: "Martin Luther King Jr.",
  },
  {
    quote:
      "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "Thomas Edison",
  },
  {
    quote:
      "The fastest way to change yourself is to hang out with people who are already the way you want to be",
    author: "REid Hoffman",
  },
  {
    quote:
      "Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations",
    author: "Tim O Reilly",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `${todaysQuote.quote}`;
author.innerText = `-${todaysQuote.author}-`;