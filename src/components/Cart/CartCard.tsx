import React, {FC , useState} from 'react';
import {StyleSheet, View,Text, TouchableOpacity,Image, ImageBackground} from 'react-native';
import {Colors,Fonts,Images,Pixel} from "../../constants/styleConstants";
import {useTranslation} from "react-i18next";
import {commonStyles} from "../../styles/styles";
import {Delete,Add , SolidPlus, SolidMinus} from '../../../assets/Icons/Icons'
import {useNavigation} from '@react-navigation/native';

interface IProductCard {
    image?: any;

}


const CartCard: FC<IProductCard> = ({image}) => {
    const {t} = useTranslation();
    const {navigate} = useNavigation();
    const [quantity , setQuantity] = useState(0)
    return (
       
            <View style={styles.container} > 
                
                <View style={styles.top} >
                    <Image 
                        source={image}
                        style={styles.image}
                        />
                    <View style={styles.right} >
                        <Text style={styles.name} >{t('Product Name Here')}</Text>
                        <View style={styles.row} >
                            <Text style={[styles.text,{
                                width:'13%'
                            }]} >{t('Price')}</Text>
                            <View style={{
                                width:'85%',
                                flexDirection:'row',
                                alignItems:'center'
                            }} >
                            <Text>: </Text>
                            <Text style={[styles.text,{
                                color:Colors.minColor,
                                paddingHorizontal:5
                            }]} >{t('150 EG')}</Text>
                            </View>
                        </View>

                        <View style={styles.row} >
                            <Text style={[styles.text,{
                                width:'13%'
                            }]} >{t('Quantity')}</Text>
                            <View style={{
                                width:'85%',
                                flexDirection:'row',
                                alignItems:'center'
                            }} >

                            <Text>: </Text>
                            <View style={{
                                flexDirection:'row',
                                alignItems:'center',
                                justifyContent:'space-between',
                                width:70,
                                paddingHorizontal:5
                            }} >
                                <TouchableOpacity
                                    onPress={() => setQuantity(quantity-1)}
                                    disabled={quantity==0?true:false}
                                >

                                    <SolidMinus/>
                                </TouchableOpacity>
                                <Text style={{
                                    fontSize:10,
                                    fontWeight:'bold'
                                }} >{quantity}</Text>
                                <TouchableOpacity 
                                    onPress={() => setQuantity(quantity+1)}
                                >

                                <SolidPlus/>
                                </TouchableOpacity>
                            </View>
                            </View>
                        </View>

                        <View style={styles.row} >
                            <Text style={[styles.text,{
                                width:'13%'
                            }]} >{t('Total')}</Text>
                            <View style={{
                                width:'85%',
                                flexDirection:'row',
                                alignItems:'center'
                            }} >

                            <Text>: </Text>
                            <Text style={[styles.text,{
                                color:Colors.minColor,
                                paddingHorizontal:5
                            }]} > 50 {t('EG')}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.iconsContainer} >

                    <TouchableOpacity style={styles.icon} >
                        <Delete width={Pixel(50)} height={Pixel(50)} />
                    </TouchableOpacity>
                </View>
            </View>
         
    );

};


export default CartCard;


const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        width:'100%',
        height:Pixel(200),
        borderRadius:20,
        ...commonStyles.boxShadow,
        backgroundColor:Colors.white,
        padding:Pixel(10),
        marginTop:10
    },
    top:{
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        width:'100%',
        height:'100%',
        paddingVertical:5
    },
    text:{
        fontSize:10,
        fontFamily:Fonts.medium
    },
    row:{
        flexDirection:'row',
        alignItems:'center'
    },
    image:{
        width:Pixel(120),
        height:Pixel(110),
        //borderRadius:12,
    },
    overlayText:{
        color:Colors.white,
        fontWeight:'bold',
        fontSize:12
    },
    imageOverlay:{
        width:Pixel(145),
        height:Pixel(165),
        zIndex:100,
        alignItems:'center',
        justifyContent:'center',
        padding:10  
       },
    right:{
        flexDirection:'column',
        paddingLeft:10,
        paddingVertical:5,
        height:'100%',
        justifyContent:'space-evenly',
    },
    name:{
        fontSize:14,
        fontWeight:'bold'
    },
    footer:{
        width:'100%',
        height:'25%',
        backgroundColor:Colors.white,
        borderRadius:8,
        flexDirection:'row',
        ...commonStyles.boxShadow,
        alignItems:'center',
        justifyContent:'flex-start',
        paddingHorizontal:20,
    },
    iconsContainer:{
        position:'absolute',
        top:0,
        right:0,
        height:Pixel(100),
        width:Pixel(100),
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    icon:{
        alignItems:'center',
        justifyContent:'center'
    }
});
