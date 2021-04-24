import React, {FC} from 'react';
import {StyleSheet, View,Text, ImageBackground,Image} from 'react-native';
import {Colors,Images,Pixel} from "../../constants/styleConstants";
import {useTranslation} from "react-i18next";
import {commonStyles} from "../../styles/styles";
import Button from '../../components/touchables/Button'


const PrescriptionUpload: FC = () => {
    const {t} = useTranslation();
    return (
        
                <View style={styles.container} >
                    <ImageBackground
                     source={Images.medicalImage}
                     style={ styles.imageBackground}
                     imageStyle={{width:'100%', height: '100%', borderRadius:15}}
                    >
                        <Image
                         source={Images.medicalOverlay}
                         style={styles.image}
                        />
                        <View style={styles.content} >
                            <View>

                            <Text style={styles.text1} >Upload Prescription</Text>
                            <Text style={styles.text2} >And We Will Respond As Sonn As Possible</Text>
                            </View>
                            <View>
                                <Button 
                                style={styles.button}
                                styleTitle={styles.textButton}
                                title={'Upload Now'} />
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={styles.footer} >
                        <Text style={styles.textFooter} >This Service Allow You to Take Photo of your prescription or photo of the product and we will get back to you with the price and full details in seconds</Text>
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
        height:'100%'
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
