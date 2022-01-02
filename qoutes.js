const quotes = [
    {
      quot: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
    },
    {
      quot: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      quot:
        "The world is a book and those who do not travel read only one page.",
      author: "Saint Augustine",
    },
    {
      quot: "Life is either a daring adventure or nothing at all.",
      author: "Helen Keller",
    },
    {
      quot: "To Travel is to Live",
      author: "Hans Christian Andersen",
    },
    {
      quot: "Only a life lived for others is a life worthwhile.",
      author: "Albert Einstein",
    },
    {
      quot: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    {
      quot: "Never go on trips with anyone you do ntot love.",
      author: "Hemmingway",
    },
    {
      quot: "We wander for distraction, but we travel for fulfilment.",
      author: "Hilaire Belloc",
    },
    {
      quot: "Travel expands the mind and fills the gap.",
      author: "Sheda Savage",
    },
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * 10)];
  
  quote.innerText = todaysQuote.quot;
  author.innerText = todaysQuote.author;

  //오류남