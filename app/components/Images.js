// Add require statements for the assets you want to use here.
let BlushingEmoji = require("../assets/BlushingEmoji.png");
let LaughingEmoji = require("../assets/CryingLaughingEmoji.png");
let SunglassesEmoji = require("../assets/SunglassesEmoji.png");
let ToungeOutEmoji = require("../assets/ToungeOutEmoji.png");
let HeartEmoji = require("../assets/HeartInEyesEmoji.png");

// Use ImageTypes as a safe way to access and compare assets.
const ImageTypes = {
  BLUSHINGEMOJI: BlushingEmoji,
  SUNGLASSESEMOJI: SunglassesEmoji,
  LAUGHINGEMOJI: LaughingEmoji,
  TOUNGEOUTEMOJI: ToungeOutEmoji,
  HEARTEMOJI: HeartEmoji
};

module.exports = ImageTypes;
