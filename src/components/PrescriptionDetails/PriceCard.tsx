import React, {FC} from 'react';
import {StyleSheet, View,Text, FlatList,Image} from 'react-native';

import {Colors,Fonts,Images,Pixel} from "../../constants/styleConstants";
import {useTranslation} from "react-i18next";

import {useNavigation} from '@react-navigation/native';


const PriceCard: FC = () => {
    const {t} = useTranslation();
    const {navigate} = useNavigation();
    
    return (
       
              <View style={styles.priceContainer} >
                   <View style={{
                       width:'30%'
                   }} >

                    <Image
                        source={Images.Price}
                        style={{
                            width:Pixel(210),
                            height:Pixel(175)
                        }}
                        />
                        </View>
                    <View style={styles.rightPrice} >
                        <Text style={[styles.priceText,{
                            fontSize:15
                        }]} >{t('Total Prescription Price')}</Text>
                        <View style={styles.midPrice} >
                            <View>

                            <Text style={[styles.priceText1,{
                                color:Colors.minColor
                            }]} >160 {('EG')}</Text>
                            </View>
                            <View>
                            <View style={{
                                position:'absolute',
                                top:Pixel(18),
                                borderWidth:.7,
                                width:Pixel(100)
                            }} ></View>
                            <Text style={styles.priceText1} >190 {('EG')}</Text>
                            </View>
                        </View>
                        <Text style={[styles.priceText,{
                            fontSize:13
                        }]} >{t('Your Order Will Be Delivered Within 30 Min')}</Text>
                    </View>
              </View>
    );

};


export default PriceCard;


const styles = StyleSheet.create({
    priceContainer:{
        width:'100%',
        height:Pixel(300),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
    },
    rightPrice:{
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'space-evenly',
        height:'50%',
        width:'70%',
        paddingHorizontal:20
    },
    priceText:{
        fontWeight:'bold'
    },
    midPrice:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%'
    },
    priceText1:{
        fontSize:14
    },
});
