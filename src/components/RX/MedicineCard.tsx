import React, {FC} from 'react';
import {StyleSheet, View,Text, ImageBackground,Image} from 'react-native';
import {Colors,Images,Pixel} from "../../constants/styleConstants";
import {useTranslation} from "react-i18next";
import {commonStyles} from "../../styles/styles";
import {useNavigation} from '@react-navigation/native';
import {Medicine} from '../../../assets/Icons/Icons'


interface IMedicineCard {
    subTitle?: string;
}

const MedicineCard: FC<IMedicineCard> = ({subTitle}) => {
    const {t} = useTranslation();
    const {navigate} = useNavigation();

    return (
        
            <View style={styles.container} >
                <Medicine/>
                <View style={styles.right} >
                    <Text style={styles.text1} >{t('Upload Prescription')}</Text>
                    <Text style={styles.text2}  >{t(subTitle)}</Text>
                </View>
            </View> 
           
    );

};


export default MedicineCard;


const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:Pixel(250),
        backgroundColor:Colors.white,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        ...commonStyles.boxShadow,
        paddingHorizontal:Pixel(19)
    },
    right:{
        height:'100%',
        flexDirection:'column',
        paddingHorizontal:Pixel(28),
        alignItems:'flex-start',
        justifyContent:'flex-start',
        paddingVertical:Pixel(50),
        width:'70%',
        overflow:'hidden'
    },
    text1:{
        color:Colors.minColor,
        fontSize:Pixel(40),
        fontWeight:'bold',
    },
    text2:{
        color:Colors.dark,
        fontSize:9,
        paddingTop:10,
        lineHeight:Pixel(25)
    }
});
