// Add require statements for the assets you want to use here.
let BlushingEmoji = require("../assets/BlushingEmoji.png");
let CryingEmoji = require("../assets/CryingLaughingEmoji.png");
let BoredEmoji = require("../assets/SunglassesEmoji.png");
let MadEmoji = require("../assets/ToungeOutEmoji.png");
let HeartEmoji = require("../assets/HeartInEyesEmoji.png");

//
const ImageTypes = {
  BLUSHINGEMOJI: BlushingEmoji,
  CRYINGEMOJI: CryingEmoji,
  BOREDEMOJI: BoredEmoji,
  MADEMOJI: MadEmoji,
  HEARTEMOJI: HeartEmoji
};

// Use this to take and image and find out what it is
export const whatIsThisImage = imgType => {
  switch (bean) {
    case ImageTypes.BLUSHINGEMOJI:
      return "This is a Bored Emoji!";
      break;
    case ImageTypes.CRYINGEMOJI:
      return "This is a Crying Emoji!";
      break;
    case ImageTypes.BOREDEMOJI:
      return "This is the Bored Emoji!";
      break;
    case ImageTypes.MADEMOJI:
      return "This is the Mad Emoji!";
      break;
    case ImageTypes.HEARTEMOJI:
      return "This is the Heart Emoji!";
      break;
  }
};

module.exports = ImageTypes;
