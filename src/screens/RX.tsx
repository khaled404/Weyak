import React, {FC} from 'react';
import {StyleSheet, View,Text, I18nManager,Image} from 'react-native';
import {Container, Content} from '../components/containers/Containers';
import Header from '../components/header/Header';
import {Colors,Images,Pixel} from "../constants/styleConstants";
import {useTranslation} from "react-i18next";
import Button from "../components/touchables/Button";
import {commonStyles} from "../styles/styles";
import {Mid, HomeIcon,Profile,Menu} from '../../assets/Icons/Icons'
import PrescriptionUpload from '../components/Home/PrescriptionUpload'
import {useNavigation} from '@react-navigation/native';
import Footer from '../components/Home/Footer'
import MedicineCard from '../components/RX/MedicineCard'


const RX: FC = () => {
    const {t} = useTranslation();
    const {navigate} = useNavigation();
    const { isRTL } = I18nManager;

    return (
        <>
        <Container style={styles.container}>
            <Header title={t("RX")}/>
            <Content >
            
            <MedicineCard subTitle={t('We are here to serve you, select one of the tow options')} /> 
            <View style={styles.textContainer} >

            <Text style={styles.text} >{t('Please Select')}</Text>
            </View>

            <View style={{
                flexDirection:'column',
                alignItems:'center',
                width:'100%'
            }} >
                <Button 
                style={[styles.button,{
                    justifyContent:isRTL?'center': 'flex-start'
                }]}
                styleTitle={{
                    fontSize:isRTL?16:14
                }}
                title={t('Prescription With Insurance')} />

                <Button 
                onPress={() => navigate('PrescriptionWithoutInsurance')}
                style={[styles.button,{
                    marginTop:30,
                    justifyContent:isRTL?'center': 'flex-start'
                }]}
                styleTitle={{
                    fontSize:isRTL?16:14
                }}
                title={t('Prescription Without Insurance')} />
            </View>
            </Content>
        </Container>
        <Footer/>
        </>
    );

};


export default RX;


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.sacandAppBackgroundColor,
    },  
    image: {
        //flex: 1,
        borderRadius:15
    },
    button:{
        backgroundColor:Colors.minColor,
        height:64,
        width:'90%',
        borderRadius:15,
        paddingHorizontal:40,
        
    },
    textContainer:{
        width:'100%',
        alignItems:'center',
        height:120,
        justifyContent:'center'
    },
    text:{
        textDecorationLine: 'underline',
        fontWeight:'bold',
        fontSize:15,
        paddingBottom:20
    },
});
