import ImageTypes from '../components/ImageTypes';





  export const  getJamJarFromBean = (bean) => {

    switch(bean) {

        case ImageTypes.PINKJELLYBEAN:
          return ImageTypes.PINKJAM
          break;
        case ImageTypes.REDJELLYBEAN:
          return ImageTypes.REDJAM
            break;
        case ImageTypes.YELLOWJELLYBEAN:
          return ImageTypes.YELLOWJAM
            break;
        case ImageTypes.ORANGEJELLYBEAN:
            return ImageTypes.ORANGEJAM
              break;
        case ImageTypes.GREENJELLYBEAN:
            return ImageTypes.GREENJAM
              break;
        case ImageTypes.BLUEJELLYBEAN:
            return ImageTypes.BLUEJAM
              break;
        case ImageTypes.PURPLEJELLYBEAN:
          return ImageTypes.PURPLEJAM
            break;

    }

  }
