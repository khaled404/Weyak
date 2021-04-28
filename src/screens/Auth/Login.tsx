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

const Login: FC = () => {
    const {t} = useTranslation();
    const {navigate} = useNavigation();
    const { isRTL } = I18nManager;

    return (
        <>
        <Container style={styles.container}>
            <Content >
                <View style={styles.logo} >
                    <Image
                        source={isRTL?Images.ArabicLogo: Images.logo}
                        style={styles.image}
                    />
                </View>
                <View style={[styles.logo,{
                    height:Pixel(250),
                    justifyContent:'center'
                }]} >
                    <Text style={styles.registerText} >{t('Sign In')}</Text>
                </View>
                <View style={styles.inputs} >

                    <AuthInput title={t('Email Address')} />
                    <AuthInput title={t('Password')} icon />
                    <View style={{
                        width:'100%',
                        alignItems:'flex-end',
                        marginTop:-22
                    }} >
                        <Text style={{
                            color:Colors.minColor,
                            fontSize:11
                        }} >{t('Forget Password?')}</Text>
                    </View>
                    <Button 
                    style={styles.button}
                    styleTitle={{
                        fontSize:18,
                        fontWeight:'bold'
                    }}
                    title={t('Sign In')} />


                    <View style={styles.or}>
                        <View
                            style={styles.leftOr}></View>
                        <View style={styles.midOr}>
                            <Text style={styles.textOr}>{t('OR')}</Text>
                        </View>

                        <View
                            style={styles.rightOr}></View>
                    </View>

                    <Button style={styles.socialButton} >
                        <Gmail/>
                        <Text style={styles.socialText} >{t('Register With Google')}</Text>
                    </Button>

                    <Button style={styles.socialButton} >
                        <Facebook/>
                        <Text style={styles.socialText} >{t('Register With Facebook')}</Text>
                    </Button>

                    <View style={{
                        width:'100%',
                        height:Pixel(250),
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'center'
                    }} >
                        <Text>{t('Don\'t Have an Account?')}</Text>
                        <Text style={{
                            color:Colors.minColor,
                            marginLeft:15
                        }} >{t('Register')}</Text>
                    </View>

                </View>
            </Content>
        </Container>
        </>
    );

};


export default Login;


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.sacandAppBackgroundColor,
    },
    logo:{
        width:'100%',
        height:Pixel(250),
        alignItems:'center',
        justifyContent:'flex-end',
    },
    image:{
        height:Pixel(100),
        width:Pixel(270),
        resizeMode:'contain'
    },
    registerText:{
        fontSize:27,
        fontWeight:'bold',
    },
    inputs:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'flex-start',
        width:'100%'
    },
    row:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        justifyContent:'space-between'
    },
    button:{
        backgroundColor:Colors.minColor,
        borderRadius:60,
        marginTop:Pixel(80),
        alignItems:'center',
        justifyContent:'center',
        elevation: 20,
        shadowColor: Colors.minColor,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.3,
        shadowRadius: 1,

    },
    or:{ 
        flexDirection: 'row', 
        width: '100%', 
        marginTop: Pixel(60) 
    },
    leftOr:{
        borderBottomColor: '#707070',
        borderBottomWidth: 1,
        width: '45%',
        paddingRight: 10,
        marginBottom: 10,
    },
    midOr:{ 
        width: '10%', 
        alignItems: 'center', 
    },
    textOr:{ 
        color: Colors.dark, 
        fontWeight:'bold',
        bottom:2 
    },
    rightOr:{
        borderBottomColor: '#707070',
        borderBottomWidth: 1,
        width: '45%',
        //paddingLeft: 10,
        marginBottom: 10,
    },
    socialButton:{
        backgroundColor:Colors.white,
        borderRadius:60,
        flexDirection:'row',
        paddingHorizontal:Pixel(30),
        alignItems:'center',
        justifyContent:'space-evenly',
        marginTop:Pixel(30),
        ...commonStyles.boxShadow
    },
    socialText:{
        fontSize:18
    }
});
