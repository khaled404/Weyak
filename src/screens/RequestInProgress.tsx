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

const RequestInProgress: FC = () => {
    const {t} = useTranslation();
    const {navigate} = useNavigation();


    const carouselItems = [
        {
            title: "You Can Get Our Offer",
            image: "Text 1",
        },
        {
            title: "You Can Get Our Offer",
            image: "Text 1",
        },
        {
            title: "You Can Get Our Offer",
            image: "Text 1",
        },
        {
            title: "You Can Get Our Offer",
            image: "Text 1",
        },
        {
            title: "You Can Get Our Offer",
            image: "Text 1",
        },
    ];
    return (
        <>
        <Container style={styles.container}>
            <Header  title={t("request in progress")}/>
            <Content >
            
            <MedicineCard subTitle={t('our pharmacist working now to give you the best price and full product instructions')} /> 
            <View style={styles.bottom} >
                <Text style={styles.text1} >{t('Please wait while checking by')}</Text>
                <Image 
                    source={Images.ezaby} 
                    />
                <Text style={styles.text2} >{t('Alexandria')}</Text>
                <Text style={styles.text3} >{t('Miami')}</Text>
            </View>

            <View style={styles.time} >
                <View style={styles.rowTime} >
                    <Text style={styles.num} >02</Text>
                    <Text style={[styles.textTime,{
                        paddingLeft:15
                    }]} >{t('Min')}</Text>
                </View>


                <View style={[styles.rowTime,{
                    marginTop:-20
                }]} >
                    <Text style={styles.textTime} >{t('Sec')}</Text>
                    <Text style={[styles.num,{
                        paddingLeft:15
                    }]} >42</Text>
                </View>
            </View>

            <View style={{
                flexDirection:'row',
                width:'100%',
                height:50,
                alignItems:'center',
                justifyContent:'center'
            }} >
                {
                    carouselItems.map((item,index) => {
                        return(

                            <View key={index} style={{
                                width:7,
                                height:7,
                                borderRadius:7/2,
                                backgroundColor:Colors.minColor,
                                marginRight:5
                            }} />
                            )
                    })
                }
            </View>
            </Content>
            <View style={styles.buttonContainer} >
                <Button
                    title={t('Cancel Request')}
                    style={styles.button}
                    styleTitle={{
                        fontWeight:'bold',
                        fontSize:20
                    }}
                />
            </View>
        </Container>
        </>
    );

};


export default RequestInProgress;


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.sacandAppBackgroundColor,
    },  
    image: {
        //flex: 1,
        borderRadius:15
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
    },
    bottom:{
        width:'100%',
        alignItems:'center',
        justifyContent:'flex-start',
        paddingTop:Pixel(30),
    },
    text1:{
        fontWeight:'bold',
        fontSize:15,
        paddingBottom:Pixel(30)
    },
    text2:{
        fontWeight:'bold',
        fontSize:7
    },
    text3:{
        fontWeight:'bold',
        fontSize:7,
        color:Colors.minColor
    },
    time:{
        width:'100%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:20

    },
    rowTime:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    num:{
        fontSize:57,
        fontWeight:'bold',
        color:Colors.minColor
    },
    textTime:{
        fontWeight:'bold',
        fontSize:19,
    },
});
