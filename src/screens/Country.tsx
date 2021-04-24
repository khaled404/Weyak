import React, { FC, useState } from 'react';
import { Dimensions, StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Colors, Images, Pixel, Fonts } from '../constants/styleConstants';
import { commonStyles } from '../styles/styles';
import Touchable from '../components/touchables/Touchable';
import Button from '../components/touchables/Button';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { SolidDone } from '../../assets/Icons/Icons';
import {useNavigation} from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const Country: FC = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [chooseEgypt, setChooseEgypt] = useState(true)
    const [chooseBahrain, setChooseBahrain] = useState(false)
    const {navigate} = useNavigation();

    return (
        <ImageBackground
            source={Images.background}
            style={styles.container}>
            <View style={styles.logo}>
                <View style={{
                    width: '100%',
                    height: Pixel(200),
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: Colors.white,
                    opacity: .8,
                    marginTop: Pixel(100),

                }} >

                    <Text style={styles.logoText} >Weyak</Text>
                </View>
                <Text style={styles.countryText} >Choose Country</Text>
            </View>
            <View style={styles.langBtnsContainer}>

                {/********Egypt********* */}

                <Touchable
                    onPress={() => {
                        setChooseEgypt(true),
                            setChooseBahrain(false)
                    }}
                >
                    <View style={styles.button} >
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }} >

                            <Image
                                source={Images.Egypt}
                                style={{ width: Pixel(70), height: Pixel(50) }}
                            />
                            <Text style={{
                                fontSize: 23,
                                paddingLeft: Pixel(60)
                            }} >Egypt</Text>
                        </View>

                        {
                            chooseEgypt ?
                                <SolidDone />
                                :
                                <View />
                        }
                    </View>
                </Touchable>

                {/**********Bahrian*********** */}

                <Touchable
                    onPress={() => {
                        setChooseBahrain(true),
                            setChooseEgypt(false)
                    }}
                >
                    <View style={[styles.button, {
                        marginTop: Pixel(50),
                        marginBottom: Pixel(200)
                    }]} >
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }} >

                            <Image
                                source={Images.Bahrain}
                                style={{
                                    width: Pixel(70),
                                    height: Pixel(50),
                                }}
                            />
                            <Text style={{
                                fontSize: 23,
                                paddingLeft: Pixel(60)
                            }} >Bahrian</Text>
                        </View>


                        {
                            chooseBahrain ?
                                <SolidDone />
                                :
                                <View />
                        }
                    </View>
                </Touchable>

                <Button
                    onPress={() =>navigate('Home') }
                    style={{
                        backgroundColor: Colors.minColor,
                        borderRadius: Pixel(50)
                    }}
                    styleTitle={{
                        fontSize: Pixel(40),
                        fontWeight: 'bold'
                    }}
                    title={'Continue'} />
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
        height: Pixel(600),
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    logoText: {
        color: Colors.minColor,
        fontSize: 60,
        fontWeight: 'bold',
    },
    countryText: {
        color: Colors.dark,
        fontWeight: 'bold',
        fontSize: Pixel(30),
    },
    langBtnsContainer: {
        paddingHorizontal: Pixel(80),
        width: '100%',

    },
    langBtn: {
        height: Pixel(120),
        backgroundColor: Colors.white,
        ...commonStyles.boxShadow,
        marginBottom: 20,
        borderRadius: Pixel(60),
    },
    button: {
        flexDirection: 'row',
        width: '100%',
        height: Pixel(130),
        paddingHorizontal: Pixel(40),
        borderRadius: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.white,
        ...commonStyles.boxShadow,

    },
});
export default Country;
