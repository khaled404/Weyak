import React, {FC} from 'react';
import {StyleSheet, View,Text, I18nManager,Image} from 'react-native';
import {Container, Content} from '../../components/containers/Containers';
import {Colors,Images,Pixel} from "../../constants/styleConstants";
import {useTranslation} from "react-i18next";
import {commonStyles} from "../../styles/styles";
import {Facebook, Gmail} from '../../../assets/Icons/Icons'
import {useNavigation} from '@react-navigation/native';
import AuthInput from '../../components/textInputs/AuthInput'
import Button from '../../components/touchables/Button'

const PhoneCode: FC = () => {
    const {t} = useTranslation();
    const {navigate} = useNavigation();
    const { isRTL } = I18nManager;

    return (
        <>
        <Container style={styles.container}>
            <Content >
                <View style={styles.imageContainer} >

                <Image
                    source={Images.AccountPic}
                    style={styles.image}
                    />
                    </View>
                    <View style={styles.textContainer} >
                        <Text style={styles.text} >{t('Enter Your Phone Number And We Will Send You a Verification Code')}</Text>
                    </View>

                    <AuthInput title={t('Phone Number')} />

                    <Button 
                    style={styles.button}
                    styleTitle={{
                        fontSize:18,
                        fontWeight:'bold'
                    }}
                    title={t('Confirm')} />
            </Content>
        </Container>
        </>
    );

};


export default PhoneCode;


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.sacandAppBackgroundColor,
    },
    imageContainer:{
        width:'100%',
        height:Pixel(600),
        justifyContent:'flex-end',
        alignItems:'center'
    },
    image:{
        width:Pixel(440),
        height:Pixel(400),
        resizeMode:'contain'
    },
    textContainer:{
        width:'100%',
        height:Pixel(200),
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:Pixel(80),
        marginBottom:Pixel(50)
    },
    text:{
        fontSize:15,
        lineHeight:Pixel(60),

    },
    button:{
        backgroundColor:Colors.minColor,
        borderRadius:60,
        marginTop:10,
        alignItems:'center',
        justifyContent:'center',
        elevation: 20,
        shadowColor: Colors.minColor,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.3,
        shadowRadius: 1,
        marginBottom:30

    },
});
