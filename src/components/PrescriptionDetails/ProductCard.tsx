import React, {FC} from 'react';
import {StyleSheet, View,Text, TouchableOpacity,Image, ImageBackground} from 'react-native';
import {Colors,Fonts,Images,Pixel} from "../../constants/styleConstants";
import {useTranslation} from "react-i18next";
import {commonStyles} from "../../styles/styles";
import {Delete1,Add} from '../../../assets/Icons/Icons'
import {useNavigation} from '@react-navigation/native';

interface IProductCard {
    image?: any;
    out?:boolean;
    replace?:boolean;
}


const ProductCard: FC<IProductCard> = ({image,out,replace}) => {
    const {t} = useTranslation();
    const {navigate} = useNavigation();

    return (
       
            <View style={[styles.container,{
                borderBottomWidth:replace||out?0:1
            }]} > 
                
                <View style={styles.top} >
                    <ImageBackground 
                        source={image}
                        style={styles.image}
                        >
                            {
                               out&&<ImageBackground
                               source={Images.over}
                               style={styles.imageOverlay}
                               >
                                   <Text style={styles.overlayText} >Out Of Stock</Text>
                               </ImageBackground>

                            }
                        </ImageBackground>
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
                                color:Colors.minColor
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
                            <Text style={[styles.text,{
                                color:Colors.minColor
                            }]} >1 {t('Tab')}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[styles.footer,{
                    backgroundColor:replace||out?Colors.sacandAppBackgroundColor:Colors.white
                }]} >
                    <Text style={{
                        fontSize:12,
                        fontWeight:'bold',
                    }} >{t('Dosage')}    :    </Text>

                <Text style={{
                        fontSize:12,
                        fontWeight:'bold',
                        color:Colors.minColor
                    }} >{t(' 2 Times Per Day - 1 Week')}</Text>
                </View>
                {replace&&<View style={styles.iconsContainer} >
                    <TouchableOpacity style={styles.icon} >
                        <Add/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.icon} >
                        <Delete1 width={Pixel(30)} height={Pixel(30)} />
                    </TouchableOpacity>
                </View>}
            </View>
         
    );

};


export default ProductCard;


const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        width:'100%',
        height:Pixel(300),
        borderBottomWidth:1,
        paddingBottom:10
    },
    top:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        width:'100%',
        height:'70%'
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
        width:Pixel(155),
        height:Pixel(175),
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
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
        paddingVertical:12,
        height:'100%',
        justifyContent:'space-evenly'
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
        height:Pixel(170),
        width:Pixel(100),
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    icon:{
        width:Pixel(48),
        height:Pixel(48),
        borderRadius:Pixel(48/2),
        borderColor:Colors.minColor,
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center'
    }
});
