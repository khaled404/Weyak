import React, { FC } from 'react';
import { Dimensions, Text, View, ImageBackground,I18nManager } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Colors, Pixel, Images } from '../constants/styleConstants';
import { commonStyles } from '../styles/styles';
const { width, height } = Dimensions.get('window');
const Splash: FC = () => {
  const {isRTL} = I18nManager;

  return (
    <ImageBackground
      source={Images.background}
      style={{
        flex: 1,
        width,
        height,
        backgroundColor: Colors.appBackgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={{
        width: '100%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
        opacity: .8
      }}>
        
        {isRTL?
                        <FastImage 
                        source={Images.ArabicLogo} 
                        style={{width:Pixel(350),height:Pixel(150)}} 
                        resizeMode='contain'
                        />
                        :<FastImage 
                        source={Images.logo} 
                        style={{width:Pixel(350),height:Pixel(150)}} 
                        resizeMode='contain'
                        />
                    }
      </View>
    </ImageBackground>
  );
};

export default Splash;
