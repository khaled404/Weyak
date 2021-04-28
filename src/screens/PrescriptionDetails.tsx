import React, {FC} from 'react';
import {StyleSheet, View,Text, FlatList,Image,I18nManager} from 'react-native';
import {Container, Content} from '../components/containers/Containers';
import Header from '../components/header/Header';
import {Colors,Fonts,Images,Pixel} from "../constants/styleConstants";
import {useTranslation} from "react-i18next";
import {commonStyles} from "../styles/styles";
import {Wishlist,CartIcon1} from '../../assets/Icons/Icons'
import {useNavigation} from '@react-navigation/native';
import Footer from '../components/Home/Footer'
import MedicineCard from '../components/RX/MedicineCard'
import ProductCard from '../components/PrescriptionDetails/ProductCard'
import ReplacementCard from '../components/PrescriptionDetails/ReplacementCard'
import PriceCard from '../components/PrescriptionDetails/PriceCard'
import Button from '../components/touchables/Button'

const PrescriptionDetails: FC = () => {
    const {t} = useTranslation();
    const {navigate} = useNavigation();
    const { isRTL } = I18nManager;

    const data = [
        {   
            id:1,
            title: "You Can Get Our Offer",
            image: Images.Product1
        },
        {
            id:2,
            title: "You Can Get Our Offer",
            image: Images.Product2
        },
        {
            id:3,
            title: "You Can Get Our Offer",
            image:Images.Product3
        },
    ];
    return (
        <>
        <Container style={styles.container}>
            <Header withIcon title={t("Prescription Details")}/>
            <Content >
            
            <MedicineCard subTitle={t('your prescription is tow steps from your home, proceed the order or add new product')} /> 
            
            <View style={styles.mid} >
                <View style={styles.left} >
                    <Text style={styles.textLeft} >{t('Your Prescription Has Been Checked By')}: </Text>
                </View>

                <View style={styles.right} >
                    <Image 
                        source={Images.ezaby}
                    />
                    <View style={{
                        flexDirection:'column',
                        paddingLeft:10,
                    }} >
                        <View style={styles.row} >
                            <Text style={styles.text} >{t('Alexandria')} - </Text>
                            <Text style={[styles.text,{
                                color:Colors.minColor
                            }]} >{t('Miami')}</Text>
                        </View>

                        <View style={styles.row} >
                            <Text style={styles.text} >{t('DR')} : </Text>
                            <Text style={[styles.text,{
                                color:Colors.minColor
                            }]} >Ahmed Mohamed</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{
                flex:1
            }} >

            <FlatList
                data={data}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({item, index}) => (
                    <ProductCard
                    key={item.id}
                    image={item.image}
                        />
                    )}
                />
              </View>
              <ReplacementCard/>
              <PriceCard/>

              <View style={{
                  flexDirection:'row',
                  justifyContent:'space-between',
                  width:'100%',
                  height:Pixel(180),
                  alignItems:'center'
              }} >
                <Button  style={{
                    backgroundColor:Colors.minColor,
                    width:'48%',
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'space-evenly',
                    borderRadius:30
                }} >
                    <Text style={styles.buttonText} >{t('Add To Wishlist')}</Text>
                    <Wishlist/>
                </Button>

                <Button  style={{
                    backgroundColor:Colors.minColor,
                    width:'48%',
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'space-evenly',
                    borderRadius:60,
                }} >
                    <Text style={styles.buttonText} >{t('Add To Cart')}</Text>
                    <CartIcon1/>
                </Button>
              </View>
            </Content>
        </Container>
        </>
    );

};


export default PrescriptionDetails;


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.sacandAppBackgroundColor,
        marginBottom:90
    },  
    image: {
        //flex: 1,
        borderRadius:15
    },
    mid:{
        flexDirection:'row',
        width:'100%',
        height:Pixel(150),
        alignItems:'center',
        justifyContent:'flex-start',
    },
    left:{
        width:'35%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    textLeft:{
        fontWeight:'bold',
        fontSize:10,
    },
    right:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    text:{
        fontSize:10,
        fontFamily:Fonts.medium
    },
    row:{
        flexDirection:'row'
    },
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
    buttonText:{
        fontSize:13,
        fontWeight:'bold',
        color:Colors.white,
        paddingHorizontal:10
    }
});
