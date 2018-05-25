import ImageTypes from "../components/ImageTypes";

export const isJam = obj => {
  switch (obj) {
    case ImageTypes.REDJAM:
      return true;
      break;
    case ImageTypes.BLUEJAM:
      return true;
      break;
    case ImageTypes.GREENJAM:
      return true;
      break;
    case ImageTypes.ORANGEJAM:
      return true;
      break;
    case ImageTypes.PINKJAM:
      return true;
      break;
    case ImageTypes.YELLOWJAM:
      return true;
      break;
    case ImageTypes.PURPLEJAM:
      return true;
      break;
    default:
      return false;
  }
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
    case ImageTypes.REDJAM:
      return ImageTypes.REDJAM;
      break;
    case ImageTypes.BLUEJAM:
      return ImageTypes.BLUEJAM;
      break;
    case ImageTypes.GREENJAM:
      return ImageTypes.GREENJAM;
      break;
    case ImageTypes.ORANGEJAM:
      return ImageTypes.ORANGEJAM;
      break;
    case ImageTypes.PINKJAM:
      return ImageTypes.PINKJAM;
      break;
    case ImageTypes.YELOWJAM:
      return ImageTypes.YELLOWJAM;
      break;
    case ImageTypes.PURPLEJAM:
      return ImageTypes.PURPLEJAM;
      break;
  }
};
