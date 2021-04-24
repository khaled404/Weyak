import React, {FC} from "react";
import {Dimensions, ImageBackground, StyleSheet, Text, View} from "react-native";
import {Colors, Fonts, Images, Pixel} from "../../constants/styleConstants";
import Button from '../../components/touchables/Button'
export const SLIDER_WIDTH: number = Dimensions.get('window').width + 80;
export const ITEM_WIDTH: number = Math.round(SLIDER_WIDTH * 0.7);

interface IOfferSliderItem {
    item: { title: string, image: string },
    index: number
}

const OfferSliderItem: FC<IOfferSliderItem> = ({item, index}) => {
    return (
        <View style={styles.offerItem} key={index}>
            <ImageBackground 
            source={Images.offerSlider} 
            style={[styles.image, {width: '100%', height: '100%'}]}
            resizeMode={'cover'}
            >
            <View style={styles.content} >
                <Text style={styles.text1} >take Care Of Your Body</Text>
                <Text style={styles.text2} >But i must explain to you how all</Text>
                <View>
                    <Button 
                    style={styles.button}
                    styleTitle={styles.buttonTitle}
                    title={'Order Now'} />
                </View>
            </View>
            </ImageBackground>
        </View>

    )
}

const styles = StyleSheet.create({
    offerItem: {
        width: '100%',
        //backgroundColor: Colors.colorSacand,
        borderRadius: 15,
        overflow: 'hidden',
        minHeight: Pixel(300),
    },
    offerItemText: {
        fontSize: Pixel(55),
        paddingHorizontal: 45,
        fontFamily: Fonts.bold,
        color: '#fff',
        paddingVertical: Pixel(40)
    },
    image: {
        flex: 1,
    },
    content:{
        width:'60%',
        height:'100%',
        alignItems:'flex-start',
        justifyContent:'space-evenly',
        flexDirection:'column',
        paddingHorizontal:40,
        paddingVertical:20
    },
    text1:{
        color:Colors.minColor,
        fontWeight:'bold',
        fontSize:19
    },
    text2:{
        fontSize:5
    },
    button:{
        backgroundColor:Colors.minColor,
        borderRadius:15,
        width:80,
        height:18
    },
    buttonTitle:{
        fontSize:6,
        fontWeight:'bold'
        
    }
});

export default OfferSliderItem;
