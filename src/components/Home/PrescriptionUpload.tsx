import React, {FC} from 'react';
import {StyleSheet, View,Text,I18nManager, ImageBackground,Image} from 'react-native';
import {Colors,Images,Pixel} from "../../constants/styleConstants";
import {useTranslation} from "react-i18next";
import {commonStyles} from "../../styles/styles";
import Button from '../../components/touchables/Button'


const PrescriptionUpload: FC = () => {
    const {t} = useTranslation();
    const {isRTL} = I18nManager;

    return (
        
                <View style={styles.container} >
                    <ImageBackground
                     source={isRTL?Images.ArabicMedical: Images.medicalImage}
                     style={ styles.imageBackground}
                     imageStyle={{width:'100%', height: '100%', borderRadius:15}}
                    >
                        <Image
                         source={isRTL?Images.ArabicOverlay: Images.medicalOverlay}
                         style={[styles.image, {
                            right:isRTL? 10:0,
                         }]}
                        />
                        <View style={styles.content} >
                            <View>

                            <Text style={styles.text1} >{t('Upload Prescription')}</Text>
                            <Text style={styles.text2} >{t('And We Will Respond As Sonn As Possible')}</Text>
                            </View>
                            <View>
                                <Button 
                                style={styles.button}
                                styleTitle={styles.textButton}
                                title={t('Upload Now')} />
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={styles.footer} >
                        <Text style={styles.textFooter} >{t('This Service Allow You to Take Photo of your prescription or photo of the product and we will get back to you with the price and full details in seconds')}</Text>
                    </View>
                </View>
            
    );

};


export default PrescriptionUpload;


const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:267,
        ...commonStyles.boxShadow,
        backgroundColor:Colors.white,
        borderRadius:15,
    },
    imageBackground:{
        borderRadius:15,
        width: '100%', 
        height: '58%',
    },
    image:{ 
        borderRadius:15,
        width:'100%', 
        height:'100%',
        position:'absolute',
        top:0,
        //left:0
    },
    content:{
        zIndex:100,
        position:'absolute',
        top:20,
        left:20,
        height:'60%',
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'space-between'
    },
    text1:{
        fontSize:19,
        color:Colors.white,
        fontWeight:'bold',
        marginBottom:10
    },
    text2:{
        fontSize:9,
        color:Colors.white,
        fontWeight:'bold',
    },
    button:{
        backgroundColor:Colors.white,
        width:108,
        height:18
    },
    textButton:{
        fontSize:9,
        color:Colors.dark, 
        fontWeight:'bold'
    },
    footer:{
        width:'100%',
        height:'40%',
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:25,
        paddingVertical:20
    },
    textFooter:{
        fontSize:10,
        fontWeight:'bold',
        lineHeight: 20,
    }
});
