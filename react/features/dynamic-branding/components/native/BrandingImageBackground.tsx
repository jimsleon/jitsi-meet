import React from 'react';
import { Image } from 'react-native';
import { SvgUri } from 'react-native-svg';

// @ts-ignore
import { connect } from '../../../base/redux';

import styles from './styles';


interface Props {
    uri: any;
}

/**
 * Component that displays a branding background image.
 *
 * @param {Props} props - The props of the component.
 * @returns {ReactElement}
 */
const BrandingImageBackground: React.FC<Props> = ({ uri }:Props) => {
    const imageType = uri?.substr(uri.lastIndexOf('/') + 1);
    const imgSrc = uri ? uri : undefined;

    let backgroundImage;

    if (!uri) {
        return null;
    }

    if (imageType?.includes('.svg')) {
        backgroundImage
            = (
                <SvgUri
                    height = '100%'
                    style = { styles.brandingImageBackgroundSvg }
                    uri = { imgSrc }
                    width = '100%' />
            );
    } else {
        backgroundImage
            = (
                <Image
                    source = {{ uri: imgSrc }}
                    style = { styles.brandingImageBackground } />
            );
    }

    return backgroundImage;
};

/**
 * Maps (parts of) the Redux state to the associated props for the
 * {@code DialInLink} component.
 *
 * @param {Object} state - The Redux state.
 * @private
 * @returns {Props}
 */
function _mapStateToProps(state: any) {
    const { backgroundImageUrl } = state['features/dynamic-branding'];

    return {
        uri: backgroundImageUrl
    };
}

export default connect(_mapStateToProps)(BrandingImageBackground);
