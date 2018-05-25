let pjb = require("../assets/PinkJellyBean.png");
let prjb = require("../assets/PurpleJellyBean.png");
let bjb = require("../assets/BlueJellyBean.png");
let ojb = require("../assets/OrangeJellyBean.png");
let gjb = require("../assets/GreenJellyBean.png");
let yjb = require("../assets/YellowJellyBean.png");
let rjb = require("../assets/RedJellyBean.png");
let BlueJam = require("../assets/BlueJam.png");
let RedJam = require("../assets/RedJam.png");
let GreenJam = require("../assets/GreenJam.png");
let OrangeJam = require("../assets/OrangeJam.png");
let YellowJam = require("../assets/YellowJam.png");
let PinkJam = require("../assets/PinkJam.png");
let PurpleJam = require("../assets/PurpleJam.png");
let floatingClouds = require("../assets/FloatingClouds.png");
let CartoonTuffy = require("../assets/TuffyTile.png");
let TopOfTuffysHead = require("../assets/TopOfTuffysHead.png");

const imageType = {
  PINKJELLYBEAN: pjb,
  PURPLEJELLYBEAN: prjb,
  BLUEJELLYBEAN: bjb,
  REDJELLYBEAN: rjb,
  YELLOWJELLYBEAN: yjb,
  ORANGEJELLYBEAN: ojb,
  GREENJELLYBEAN: gjb,
  REDJAM: RedJam,
  BLUEJAM: BlueJam,
  GREENJAM: GreenJam,
  PURPLEJAM: PurpleJam,
  PINKJAM: PinkJam,
  ORANGEJAM: OrangeJam,
  YELLOWJAM: YellowJam,
  CARTOONTUFFY: CartoonTuffy,
  TOPOFTUFFYSHEAD: TopOfTuffysHead
};

export const getJamJarFromBean = bean => {
  switch (bean) {
    case ImageTypes.PINKJELLYBEAN:
      return ImageTypes.PINKJAM;
      break;
    case ImageTypes.REDJELLYBEAN:
      return ImageTypes.REDJAM;
      break;
    case ImageTypes.YELLOWJELLYBEAN:
      return ImageTypes.YELLOWJAM;
      break;
    case ImageTypes.ORANGEJELLYBEAN:
      return ImageTypes.ORANGEJAM;
      break;
    case ImageTypes.GREENJELLYBEAN:
      return ImageTypes.GREENJAM;
      break;
    case ImageTypes.BLUEJELLYBEAN:
      return ImageTypes.BLUEJAM;
      break;
    case ImageTypes.PURPLEJELLYBEAN:
      return ImageTypes.PURPLEJAM;
      break;
  }
};

module.exports = imageType;
