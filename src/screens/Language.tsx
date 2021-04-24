import React, { FC } from 'react';
import { Dimensions, StyleSheet, View, Text, ImageBackground } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Colors, Images, Pixel, Fonts } from '../constants/styleConstants';
import { commonStyles } from '../styles/styles';
import Button from '../components/touchables/Button';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
//import {LanguageHandler} from '../store/actions/settings';
import {useNavigation} from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const Language: FC = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {navigate} = useNavigation();

    return (
        <ImageBackground
            source={Images.background}
            style={styles.container}>
            <View style={styles.logo}>
                <View style={{
                    width: '100%',
                    height: 150,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: Colors.white,
                    opacity: .8,
                    marginTop: Pixel(100),

                }} >

                    <Text style={styles.logoText} >Weyak</Text>
                </View>
            </View>
            <View style={styles.langBtnsContainer}>
                <Button
                    onPress={() =>navigate('Country') }
                    style={styles.langBtn}
                    title={t('English')}
                    styleTitle={{ fontSize: Pixel(40), fontWeight: 'bold' }}

                />
                <Button
                    onPress={() =>navigate('Country') }
                    style={styles.langBtn}
                    title={t('Arabic')}
                    styleTitle={{ fontSize: Pixel(40), fontWeight: 'bold' }}
                />
            </View>
        </ImageBackground>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width,
        height,
        backgroundColor: Colors.white,
        alignItems: 'center',

    },
    logo: {
        width: '100%',
        height: Pixel(700),
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoText: {
        color: Colors.minColor,
        fontSize: 60,
        fontFamily: Fonts.light,
        fontWeight: 'bold',

    },
    langBtnsContainer: {
        paddingHorizontal: Pixel(70),
        width: '100%'
    },
    langBtn: {
        height: Pixel(120),
        backgroundColor: Colors.minColor,
        ...commonStyles.boxShadow,
        marginBottom: 20,
        borderRadius: Pixel(60),
    },
});
export default Language;
