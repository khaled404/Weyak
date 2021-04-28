import React, {FC} from 'react';
import {StyleSheet, View,Text, I18nManager,Image, Touchable} from 'react-native';
import {Container, Content} from '../components/containers/Containers';
import Header from '../components/header/Header';
import {Colors,Fonts,Images,Pixel} from "../constants/styleConstants";
import {useTranslation} from "react-i18next";
import {commonStyles} from "../styles/styles";
import {Edit,Pin,CheckedIcon,Done} from '../../assets/Icons/Icons'
import {useNavigation} from '@react-navigation/native';


const OrderConfirmation: FC = () => {
    const {t} = useTranslation();
    const {navigate} = useNavigation();
    const {isRTL} = I18nManager;

    return (
        <>
        <Container style={styles.container}>
            <Header withIcon title={t("Order Confirmation")}/>
            <Content>
                <View style={styles.card} >
                     <Done width={50} height={50}/>
                     <Text style={[styles.text,{
                         fontSize:isRTL? 31:22
                     }]} >{t('Congratulations')}</Text>
                     <Text style={[styles.text,{
                         fontSize:isRTL? 18:11,
                         paddingTop:5
                     }]}  >{t('Your Order Has Been Submitted')}</Text>
                </View>

               
            </Content>
        </Container>
        </>
    );

};


export default OrderConfirmation;


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.sacandAppBackgroundColor,
        marginBottom:80
    },
    card:{
        width:'100%',
        height:Pixel(350),
        backgroundColor:Colors.minColor,
        borderRadius:26,
        marginTop:Pixel(150),
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        ...commonStyles.boxShadow
    },
    text:{
        color:Colors.white,
        fontWeight:'bold'
    }
    
});
