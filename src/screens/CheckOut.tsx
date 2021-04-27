import React, {FC} from 'react';
import {StyleSheet, View,Text, TouchableOpacity,Image, Touchable} from 'react-native';
import {Container, Content} from '../components/containers/Containers';
import Header from '../components/header/Header';
import {Colors,Fonts,Images,Pixel} from "../constants/styleConstants";
import {useTranslation} from "react-i18next";
import {commonStyles} from "../styles/styles";
import {Edit,Pin,CheckedIcon,UnCheckedIcon} from '../../assets/Icons/Icons'
import {useNavigation} from '@react-navigation/native';
import Input from '../components/textInputs/Input'
import CartCard from '../components/Cart/CartCard'
import OrderDetailsCard from '../components/Cart/OrderDetailsCard'
import Button from '../components/touchables/Button'

const CheckOut: FC = () => {
    const {t} = useTranslation();
    const {navigate} = useNavigation();
    
    return (
        <>
        <Container style={styles.container}>
            <Header withIcon title={t("Check Out")}/>
            <Content >
                <View style={styles.headerContainer} >
                    <Text style={styles.header} >{t('Hi')}, </Text>
                    <Text style={[styles.header,{
                        color:Colors.minColor
                    }]} >{t('Lets Place Your Order')}</Text>
                </View> 
                <View style={styles.addressCard} >
                    <TouchableOpacity style={styles.pin} >

                    <Pin/>
                    </TouchableOpacity>
                    <View style={styles.addressMid} >
                    <Text style={styles.addressText} >Ahmed Mohamed( Miami)</Text>
                    <Text style={styles.addressText} >st.12 - Building 20</Text>
                    <Text style={styles.addressText} >Mobile Number 01212312345</Text>
                    </View>
                    <TouchableOpacity style={styles.edit} >

                    <Edit/>
                    </TouchableOpacity>
                </View>
                <View style={styles.headerContainer} >
                    <Text style={[styles.header,{
                        color:Colors.minColor
                    }]} >Pay With</Text>
                </View>
                <View style={styles.payContainer} >
                    <View style={styles.payOption} >
                        <Text>Cash By Deliver</Text>
                        <CheckedIcon/>
                    </View>

                    <View style={styles.payOption} >
                        <Text>Online Payment</Text>
                        <UnCheckedIcon/>
                    </View>
                </View>     

                <View style={styles.headerContainer} >
                    <Text style={[styles.header,{
                        color:Colors.minColor
                    }]} >Payment Summery</Text>
                </View>
                <OrderDetailsCard/>

                <View style={styles.buttonContainer} >
                    <Button 
                        title={t('Place Order')}
                        style={styles.button}
                        styleTitle={styles.buttonTitle}
                    />
                </View>
                
            
            </Content>
        </Container>
        </>
    );

};


export default CheckOut;


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.sacandAppBackgroundColor,
    },
    headerContainer:{
        width:'100%',
        height:Pixel(100),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    header:{
        fontSize:21,
        fontWeight:'bold'
    },
    addressCard:{
        width:'100%',
        height:Pixel(180),
        borderRadius:20,
        backgroundColor:Colors.white,
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        paddingVertical:15,
        paddingHorizontal:10,
        ...commonStyles.boxShadow,
    },
    pin:{
        width:'15%',
        height:'100%',
        alignItems:'center',
        paddingVertical:5
    },
    addressMid:{
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'space-between',
        height:'100%',
        width:'70%',
    },
    edit:{
        width:'10%',
        alignItems:'flex-end'
    },
    addressText:{
        fontSize:12,
        fontFamily:Fonts.medium,
        fontWeight:'bold'
    },
    payContainer:{
        flexDirection:'column',
        alignItems:'flex-start',
        width:'100%',
        height:Pixel(200),
        paddingLeft:Pixel(30)
    },
    payOption:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        height:Pixel(80)
    },
    buttonContainer:{
        width:'100%',
        height:Pixel(300),
        justifyContent:'center'
    },
    button:{
        width:'100%',
        height:Pixel(85),
        backgroundColor:Colors.minColor,
        borderRadius:50
    },
    buttonTitle:{
        fontSize:18,
        fontWeight:'bold'
    },
    
});
