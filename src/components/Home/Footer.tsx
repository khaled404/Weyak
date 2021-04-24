import React, {FC} from 'react';
import {StyleSheet, View,Text, ImageBackground,Image} from 'react-native';
import {Colors,Images,Pixel} from "../../constants/styleConstants";
import {useTranslation} from "react-i18next";
import {commonStyles} from "../../styles/styles";
import {Mid, HomeIcon,Profile,Menu} from '../../../assets/Icons/Icons'
import {useNavigation} from '@react-navigation/native';



const Footer: FC = () => {
    const {t} = useTranslation();
    const {navigate} = useNavigation();

    return (
        
        <View style={styles.container} >
            <HomeIcon/>
            <View style={styles.mid} >

            <Menu/>
            <Text style={{
                fontWeight:'bold',
                fontSize:9
            }} >RX</Text>
            </View>
            <Profile/>
        </View>
    );

};


export default Footer;


const styles = StyleSheet.create({
    container: {
        position:'absolute',
        bottom:0,
        height:84,
        width:'100%',
        backgroundColor:Colors.white,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        paddingHorizontal:15,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.3,
        shadowRadius: 1,
    },
    mid:{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        zIndex: 5,
        marginTop: -50,
        width:75,
        height:75,
        borderRadius:37.5,
        //margin:5,
        backgroundColor:Colors.white,               
        alignItems:'center',
        justifyContent:'center',
        borderWidth:7,
        borderColor:'#F9F9F9'
    },
});
