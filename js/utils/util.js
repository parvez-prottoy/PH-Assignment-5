// getElement function
function getElement(selector) {
  return document.querySelector(selector);
}
// generate hex color
function generateHexColor() {
  const hexCode = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * hexCode.length);
    hexColor += hexCode[random];
  }
  return hexColor;
}
// date formatter
function dateFormatter() {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Date().toLocaleDateString("en-US", options);
}
