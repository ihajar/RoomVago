import { Dimensions, Platform, PixelRatio } from 'react-native'

const {width: SCRENN_WIDTH} = Dimensions.get('window');

const scale = SCRENN_WIDTH / 360;

export function pixelNormalize(size) {
    const newSize = size * scale;
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
        Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}