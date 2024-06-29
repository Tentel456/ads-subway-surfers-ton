//console.log("--fx--ubg235--commercial--");
//window.open("https://t.me/protontg", "ads1");
const links = [
  "https://t.me/protontg",
  "https://t.me/PROBLOCKCHAINSQUAD",
  "https://t.me/GTProtocolNews",
  "https://t.me/ChainGPTNews",
  "https://t.me/toncryptans",
  "https://t.me/cryptoquicknetuakh",
  "https://t.me/bitochekvko",
  "https://t.me/+iI538bjZlGJmYWQy",
  "https://t.me/DeCenter",
  "https://t.me/zicelaqo"
];

function openRandomLink() {
  if (links.length > 0) {
    const randomIndex = Math.floor(Math.random() * links.length);
    const randomLink = links[randomIndex];
    window.open(randomLink, "ads" + (10 - links.length + 1));
    links.splice(randomIndex, 1);
  }
}

console.log("--fx--ubg235--commercial--");
openRandomLink();
