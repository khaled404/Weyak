import React, { FC } from 'react';
import { Dimensions, Text, View, ImageBackground } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Colors, Fonts, Images } from '../constants/styleConstants';
import { commonStyles } from '../styles/styles';
const { width, height } = Dimensions.get('window');
const Splash: FC = () => {
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
        <Text style={{
          color: Colors.minColor,
          fontSize: 60,
          fontFamily: Fonts.light,
          fontWeight: 'bold'
        }} >Weyak</Text>
      </View>
    </ImageBackground>
  );
};

export default Splash;
