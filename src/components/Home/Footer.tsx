import React, {FC,useState} from 'react';
import {StyleSheet, View,Text, TouchableOpacity,I18nManager} from 'react-native';
import {Colors,Images,Pixel} from "../../constants/styleConstants";
import {useTranslation} from "react-i18next";
import {commonStyles} from "../../styles/styles";
import {ActiveHome, HomeIcon,Profile,Menu,ActiveMenu} from '../../../assets/Icons/Icons'
import {useNavigation} from '@react-navigation/native';

interface IFooter {
    setActiveScreen?: any;
}

const Footer: FC<IFooter> = ({setActiveScreen}) => {
    const {t} = useTranslation();
    const {navigate} = useNavigation();
    const {isRTL} = I18nManager;
    const [activeIcon, setActiveIcon] = useState('Home')

    return (
        
        <View style={styles.container} >
            <TouchableOpacity 
            onPress={() => {
                setActiveScreen('Home')
                setActiveIcon('Home')
            }}
            style={styles.icon} >
            {
                activeIcon=='Home'?
                <ActiveHome/>
                :
                <HomeIcon />
            }
            <Text style={[styles.text,{
                color:activeIcon=='Home'?Colors.minColor:Colors.dark
            }]} >{t('Home')}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => {
                setActiveScreen('RX')
                setActiveIcon('RX')
            }}
            style={[styles.mid,{
                backgroundColor:activeIcon=='RX'?Colors.minColor:Colors.white
            }]} >
            {
                activeIcon=='RX'?
                <ActiveMenu/>
                :
                <Menu/>
            }
            <Text style={[{
                fontWeight:'bold',
                fontSize:9,
                paddingTop:3
            },{
                color:activeIcon=='RX'?Colors.white:Colors.dark
            }]} >RX</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon} >

            <Profile/>
            <Text style={styles.text} >{t('Profile')}</Text>
            </TouchableOpacity>
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
        //backgroundColor:Colors.white,               
        alignItems:'center',
        justifyContent:'center',
        borderWidth:7,
        borderColor:'#F9F9F9'
    },
    icon:{
        flexDirection:'column',
        alignItems:'center',

    },
    text:{
        fontSize:9,
        paddingTop:5
    }
});
