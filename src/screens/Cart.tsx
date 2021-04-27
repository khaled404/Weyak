import React, {FC} from 'react';
import {StyleSheet, View,Text, FlatList,Image} from 'react-native';
import {Container, Content} from '../components/containers/Containers';
import Header from '../components/header/Header';
import {Colors,Fonts,Images,Pixel} from "../constants/styleConstants";
import {useTranslation} from "react-i18next";
import {commonStyles} from "../styles/styles";
import {Wishlist,CartIcon1} from '../../assets/Icons/Icons'
import {useNavigation} from '@react-navigation/native';
import Input from '../components/textInputs/Input'
import CartCard from '../components/Cart/CartCard'
import OrderDetailsCard from '../components/Cart/OrderDetailsCard'
import Button from '../components/touchables/Button'

const Cart: FC = () => {
    const {t} = useTranslation();
    const {navigate} = useNavigation();
    const data = [
        {   
            id:1,
            title: "You Can Get Our Offer",
            image: Images.Product4
        },
        {
            id:2,
            title: "You Can Get Our Offer",
            image: Images.Product5
        },
    ];
    return (
        <>
        <Container style={styles.container}>
            <Header withIcon title={t("Cart")}/>
            <Content >
                {
                    data.map((item,index)=> {
                        return(
                            <CartCard
                                key={item.id}
                                image={item.image}
                            />
                        )
                    })
                }

                <View style={styles.mid}>
                    <Input
                    options={{
                        placeholder: t('Add Voucher Or Coupon'),
                        
                    }}
                        placeholderTextColor= {Colors.dark}
                        contentContainerStyle={styles.contentContainerStyle}
                      textInputContainer={styles.textInput}

                    />
                    <Button 
                    style={styles.apply}
                    styleTitle={styles.applyText}
                    title={t('Apply')} />
                </View>
                <OrderDetailsCard/>
                <View style={styles.buttons} >
                    <Button 
                    style={[styles.button,{
                        backgroundColor:Colors.white
                    }]}
                    styleTitle={[styles.buttonText,{
                        color:Colors.dark
                    }]}
                    title={t('Add More Items')}
                    />

                    <Button 
                    style={[styles.button,{
                        backgroundColor:Colors.minColor
                    }]}                    
                    styleTitle={styles.buttonText}
                    title={t('Check Out')}
                    />
                </View>
            
            </Content>
        </Container>
        </>
    );

};


export default Cart;


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.sacandAppBackgroundColor,
    },
    contentContainerStyle:{
        borderRadius: 20,
        borderWidth: 0,
        //padding: Pixel(10),
        backgroundColor:Colors.minColor,
        width:'68%',
        height:Pixel(140),
        alignItems:'center',
        justifyContent:'center',
        ...commonStyles.boxShadow
      },
      textInput:{
        alignSelf: 'flex-start',
        color:Colors.dark,
      },
      mid:{
        width:'100%',
        height:Pixel(180),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    apply:{
        width:'29%',
        alignItems:'center',
        justifyContent:'center',
        height:Pixel(140),
        backgroundColor:Colors.white,
        ...commonStyles.boxShadow,
        borderRadius: 20,
    },
    applyText:{
        color:Colors.minColor,
        fontWeight:'bold',
        fontSize:20
    },
    buttons:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        height:Pixel(180),
    },
    button:{
        width:'49%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:60,
        ...commonStyles.boxShadow
        
    },
    buttonText:{
        fontSize:13,
        fontWeight:'bold'
    },
    
});
