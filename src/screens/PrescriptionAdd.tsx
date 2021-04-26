import React, {FC} from 'react';
import {StyleSheet, View,Text, TouchableOpacity,Image} from 'react-native';
import {Container, Content} from '../components/containers/Containers';
import Header from '../components/header/Header';
import {Colors,Images,Pixel} from "../constants/styleConstants";
import {useTranslation} from "react-i18next";
import {commonStyles} from "../styles/styles";
import {Camera, Add,EmptyPhoto, Delete} from '../../assets/Icons/Icons'
import {useNavigation} from '@react-navigation/native';
import Footer from '../components/Home/Footer'
import MedicineCard from '../components/RX/MedicineCard'
import Button from '../components/touchables/Button'

const PrescriptionAdd: FC = () => {
    const {t} = useTranslation();
    const {navigate} = useNavigation();

    return (
        <>
        <Container style={styles.container}>
            <Header withIcon title={t("RX Without Insurance")}/>
            <Content >
            
            <MedicineCard subTitle={'take photo to your prescription or photo of the product and press submit, and we will get back to you with the price and full details in seconds'} /> 
            
            <View style={styles.bottom} >
                <TouchableOpacity style={styles.camera} >
                    <View style={{
                        position:'absolute',
                        top:-10,
                        right:-10,
                        width:25,
                        height:25,
                        borderRadius:12.5,
                        alignItems:'center',
                        justifyContent:'center',
                        backgroundColor:Colors.white,
                        borderWidth:1.5,
                        borderColor:Colors.minColor
                    }} >

                    <Add/>
                    </View>
                    <Camera width={Pixel(90)} height={Pixel(70)} />
                </TouchableOpacity>
                <Text style={styles.text} >{t('Upload File')}</Text>
            </View>

            <View style={styles.mid} >
                <EmptyPhoto/>

                <Text style={{
                    fontSize:16,
                    color:Colors.dark,
                    fontWeight:'bold',
                }} >{t('File Name Here')}</Text>


                <Delete width={Pixel(40)} height={Pixel(50)} />
            </View>
            </Content>
            <View style={styles.buttonContainer} >
                <Button
                    onPress={() => navigate('RequestInProgress')}
                    title={t('Continue')}
                    style={styles.button}
                    styleTitle={{
                        fontWeight:'bold',
                        fontSize:20
                    }}
                />
            </View>
        </Container>
        <Footer/>
        </>
    );

};


export default PrescriptionAdd;


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
        //height:Pixel(600),
        alignItems:'center',
        justifyContent:'center',
        paddingTop:Pixel(50)
    },
    camera:{
        width:'25%',
        height:Pixel(150),
        borderColor:Colors.minColor,
        borderRadius:15,
        borderWidth:2,
        borderStyle:'dashed',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column'
    },
    text:{
        fontSize:8,
        paddingTop:10,
        fontWeight:'600'
    },
    mid:{
        width:'100%',
        height:Pixel(200),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:Pixel(20),
        backgroundColor:Colors.white,
        ...commonStyles.boxShadow,
        borderRadius:15,
        marginTop:Pixel(30)
    },
    buttonContainer:{
        position:'absolute',
        bottom:0,
        width:'100%',
        height:Pixel(400),
        alignItems:'center',
        paddingHorizontal: 20
    },
    button:{
        width:'100%',
        backgroundColor:Colors.minColor,
        borderRadius:30
    }
});
