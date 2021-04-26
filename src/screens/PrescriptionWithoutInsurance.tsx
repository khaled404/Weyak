import React, {FC} from 'react';
import {StyleSheet, View,Text, TouchableOpacity,Image} from 'react-native';
import {Container, Content} from '../components/containers/Containers';
import Header from '../components/header/Header';
import {Colors,Images,Pixel} from "../constants/styleConstants";
import {useTranslation} from "react-i18next";
import {commonStyles} from "../styles/styles";
import {Camera} from '../../assets/Icons/Icons'
import {useNavigation} from '@react-navigation/native';
import Footer from '../components/Home/Footer'
import MedicineCard from '../components/RX/MedicineCard'


const PrescriptionWithoutInsurance: FC = () => {
    const {t} = useTranslation();
    const {navigate} = useNavigation();

    return (
        <>
        <Container style={styles.container}>
            <Header withIcon title={t("RX Without Insurance")}/>
            <Content >
            
            <MedicineCard subTitle={t('take photo to your prescription or photo of the product and press submit, and we will get back to you with the price and full details in seconds')} /> 
            
            <View style={styles.bottom} >
                <TouchableOpacity 
                onPress={() => navigate('PrescriptionAdd')}
                style={styles.camera} >
                    <Camera/>
                </TouchableOpacity>
                <Text style={styles.text} >{t('Upload File')}</Text>
            </View>
            </Content>
        </Container>
        <Footer/>
        </>
    );

};


export default PrescriptionWithoutInsurance;


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.sacandAppBackgroundColor,
    },  
    image: {
        //flex: 1,
        borderRadius:15
    },
    bottom:{
        width:'100%',
        height:Pixel(600),
        alignItems:'center',
        justifyContent:'center'
    },
    camera:{
        width:'55%',
        height:Pixel(350),
        borderColor:Colors.minColor,
        borderRadius:15,
        borderWidth:3,
        borderStyle:'dashed',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column'
    },
    text:{
        fontSize:19,
        paddingTop:15,
        fontWeight:'600'
    },
});
