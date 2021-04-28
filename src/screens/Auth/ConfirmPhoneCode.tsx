import React, {FC} from 'react';
import {StyleSheet, View,Text, I18nManager,Image} from 'react-native';
import {Container, Content} from '../../components/containers/Containers';
import {Colors,Images,Pixel} from "../../constants/styleConstants";
import {useTranslation} from "react-i18next";
import {commonStyles} from "../../styles/styles";
import {Facebook, Gmail} from '../../../assets/Icons/Icons'
import {useNavigation} from '@react-navigation/native';
import CodeInput from '../../components/textInputs/CodeInput'
import Button from '../../components/touchables/Button'

const ConfirmPhoneCode: FC = () => {
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
                        <Text style={styles.text} >{t('Enter the 4-digit code sent your phone number')}</Text>

                        <Text style={[styles.text,{
                            textAlign:'center'
                        }]}>01018402128</Text>
                        </View>

                    <CodeInput arrayWidth={4} />
                    <View style={{
                        width:'100%',
                        height:Pixel(150),
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'center'
                    }} >
                        <Text>{t('Didn\'t receive the code?')}</Text>
                        <Text style={{
                            color:Colors.minColor,
                            
                        }} > {t('Resend')}</Text>
                    </View>

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


export default ConfirmPhoneCode;


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
