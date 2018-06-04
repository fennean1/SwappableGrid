import ImageTypes from "../components/Images";

// Use this to take and image and find out what it is
export const whatIsThisImage = imgType => {
  switch (imgType) {
    case ImageTypes.BLUSHINGEMOJI:
      return "This is the Blushing Emoji!";
      break;
    case ImageTypes.SUNGLASSESEMOJI:
      return "This is the Sunglasses Emoji!";
      break;
    case ImageTypes.LAUGHINGEMOJI:
      return "This is the Laughing Emoji!";
      break;
    case ImageTypes.TOUNGEOUTEMOJI:
      return "This is the Tounge Out Emoji";
      break;
    case ImageTypes.HEARTEMOJI:
      return "This is the Heart Emoji!";
      break;
  }
};
