const ready = () => {
  const body = document.querySelector("body");
  const COLORS = [
    "pink",
    "hotpink",
    "deeppink",
    "lawngreen",
    "GreenYellow",
    "Crimson",
    "Orange",
    "Aqua",
    "Turquoise",
    "Yellow",
    "DeepBlueSky",
    "Fuchsia",
    "DarkViolet",
    "SlateBlue",
    "White",
    "Black"
  ];

  setInterval(() => {
    body.style.backgroundColor =
      COLORS[Math.floor(Math.random() * COLORS.length)];
  }, 600);
};

if (document.readyState !== "loading") {
  ready();
} else {
  document.addEventListener("DOMContentLoaded", ready);
}
