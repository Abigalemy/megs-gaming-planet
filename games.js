// To add a new game, copy one item in the GAMES list and change it.
// The homepage will show the new card automatically.
// If the game lives in this site, put it in games/<id>/index.html
const SITE = {
  title: "Meng's Gaming Planet",
  subtitle: "Small games I made. Come and play!",
};

const GAMES = [
  {
    id: "pocky-mahjong",
    title: "Mahjong",
    desc: "pocky's special mahjong set, we love pokéON and ditto!",
    tags: ["Single player", "Board game"],
    emoji: "🀄",
    colors: ["#2f6b4f", "#7bc29a"],
    date: "2026-11",
    // The game is hosted somewhere else for now. The link opens in a new tab.
    // Later, put the game files in games/pocky-mahjong/ and delete the url line.
    url: "https://jade-pokemon-mahjong-demo.surprisingpenny2.chatgpt.site/",
    cover: "games/pocky-mahjong/cover.jpg",
  },
  // Example of a new game:
  // { id: "xxx", title: "...", desc: "...", tags: ["Multiplayer"], emoji: "🎲", colors: ["#6a5cff", "#38d6ff"], date: "2026-12" },
];
