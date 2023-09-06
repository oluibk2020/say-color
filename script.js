const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.lang = "en-US";
rec.continuous = true;

rec.onresult = (e) => {
  const acceptedColors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "brown",
    "white",
    "gray",
    "cyan",
    "magenta",
    "lavender",
    "turquoise",
    "indigo",
    "teal",
    "maroon",
    "olive",
    "navy",
    "beige",
    "silver",
    "gold",
    "aqua",
    "violet",
    "lime",
    "mint",
    "salmon",
    "crimson",
    "periwinkle",
    "khaki",
    "plum",
    "ruby",
    "sapphire",
    "emerald",
    "amethyst",
    "cobalt",
    "tangerine",
    "lilac",
    "slate",
    "charcoal",
    "ivory",
    "pearl",
    "onyx",
    "sunset",
    "lemon",
    "peach",
    "coral",
    "turquoise",
  ];

  for (let i = e.resultIndex; i < e.results.length; i++) {
    const script = e.results[i][0].transcript.toLowerCase().trim();

    if (acceptedColors.includes(script)) {
      document.body.style.backgroundColor = script;
    } else {
      alert("Please say a valid color");
    }
  }
};

rec.start();
