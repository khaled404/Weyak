import React, {FC} from 'react';
import {StyleSheet, View,Text, FlatList,Image} from 'react-native';
import {Colors,Fonts,Images,Pixel} from "../../constants/styleConstants";
import {useTranslation} from "react-i18next";
import {commonStyles} from "../../styles/styles";
import {useNavigation} from '@react-navigation/native';
import ProductCard from './ProductCard'

const ReplacementCard: FC = () => {
    const {t} = useTranslation();
    const {navigate} = useNavigation();
    
    return (
              <View style={styles.container} >
                  <ProductCard
                    image={Images.Product2}
                    out={true}
                  />
                  <Text style={styles.text} >{t('We Recomended You As A replacement')}</Text>

                  <ProductCard
                    image={Images.Product2}
                    replace={true}
                  />

              </View>
         
    );

};


export default ReplacementCard;


const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:Pixel(680),
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'center',
        borderRadius:20,
        backgroundColor:Colors.white,
        marginTop:20,
        //marginBottom:30,
        paddingHorizontal:Pixel(20),
        ...commonStyles.boxShadow
    },  
    text: {
        fontSize:15,
        fontWeight:'bold',
        paddingVertical:10
    }
    
});
