import { Dimensions, NativeModules } from 'react-native';

const { width, height } = Dimensions.get('screen');

export enum Colors {
    minColor = '#00A182',
    colorSacand = '#622A7B',
    gray = '#979797',
    appBackgroundColor = '#fff',
    sacandAppBackgroundColor = '#F9F9F9',
    inputBackground = '#E2E2E2',
    grayDark = '#BBBBBB',
    boxColor = '#E0E6EF',
    success = '#1BB200',
    warning = '#FF5023',
    white = '#ffffff',
    dark = '#070707',
    edit = '#337ab7',
    facebook = '#3b5998',
    google = '#ea4335',
    twitter = '#1da1f2',
    linkedin = '#0077b5',
    youtube = '#ff0000',
    snapchat = '#fffc00',
    instagram = '#405de6',
    whatsapp = '#128c7e',
}

export enum Fonts {
    medium = 'Roboto-Medium',
    regular = 'Roboto-Regular',
    black = 'Roboto-Black',
    bold = 'Roboto-Bold',
    extraLight = 'Roboto-Thin',
    light = 'Roboto-Light',
}

export enum Images {
    splash = require('../../assets/images/logo.png'),
    logo = require('../../assets/images/logoEn.png'),
    bg = require('../../assets/images/logo.png'),
    userImage = require('../../assets/images/profile-Circle.png'),
    homeBanner = require('../../assets/images/ttt.jpg'),
    offerSlider = require('../../assets/images/offer.png'),
    Egypt = require('../../assets/images/Egypt.jpeg'),
    Bahrain = require('../../assets/images/Bahrain.png'),
    background = require('../../assets/images/background.png'),
    medicalImage = require('../../assets/images/gettyimages.png'),
    medicalOverlay = require('../../assets/images/Component.png'),
    ArabicLogo = require('../../assets/images/Layer-2.png'),
    ArabicOverlay = require('../../assets/images/arabicOverlay.png'),
    ArabicMedical = require('../../assets/images/arabicGettyimage.png'),
    ArabicOffer = require('../../assets/images/arabicOffer.png'),
    ezaby = require('../../assets/images/ezaby.png'),
    Product1 = require('../../assets/images/product1.png'),
    Product2 = require('../../assets/images/product2.png'),
    Product3 = require('../../assets/images/product3.png'),
    Price = require('../../assets/images/price.png'),
    over = require('../../assets/images/over.png'),
    Product4 = require('../../assets/images/product4.png'),
    Product5 = require('../../assets/images/product5.png'),

}

export enum ScreenOptions {
    StatusBarHeight = NativeModules.StatusBarManager.HEIGHT,
    HalfScreen = width / 2 - 15,
    CURRENT_RESOLUTION = Math.sqrt(height * height + width * width),
    DesignResolution = {
        width: 750,
        height: 1624,
    } as any,
}

/**
 * create PerfectPixel fnction from psd or xd workflow size
 * @param designSize uor psd or xd workflow size
 * @returns function to use in PixelPerfect
 */
export const createPerfectPixel = (designSize = { width: 750, height: 1624 }) => {
    if (
        !designSize ||
        !designSize.width ||
        !designSize.height ||
        typeof designSize.width !== 'number' ||
        typeof designSize.height !== 'number'
    ) {
        throw new Error(
            'Invalid design size object! must have width and height fields of type Number.',
        );
    }
    const DESIGN_RESOLUTION = Math.sqrt(
        designSize.height * designSize.height + designSize.width * designSize.width,
    );
    const RESOLUTIONS_PROPORTION =
        ScreenOptions.CURRENT_RESOLUTION / DESIGN_RESOLUTION;
    return (size: number) => RESOLUTIONS_PROPORTION * size;
};
/**
 * Get perfect pixel for current resolution
 * @param pixel design size pixel
 * @returns Perfect pixel for current resolution 😄
 */

export const Pixel = (pixel: number) => {
    const Perfect = createPerfectPixel(ScreenOptions.DesignResolution as any);
    return Perfect(pixel);
};

/**
 * create color with opacity
 * @param hex color
 * @param opacity decimal value
 * @returns new color with opacity 👏
 */
export const ColorWithOpacity = (hex: Colors | string, opacity: number) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    let color;
    if (result) {
        color = {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
        };
    } else {
        return hex;
    }
    return `rgba(${color.r},${color.g},${color.b},${opacity})`;
};
