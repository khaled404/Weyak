import React, {FC} from 'react';
import {StyleSheet, View,Text, ImageBackground,Image} from 'react-native';
import {Colors,Images,Pixel} from "../../constants/styleConstants";
import {useTranslation} from "react-i18next";
import {useNavigation} from '@react-navigation/native';
import Input from '../../components/textInputs/Input'
import {EyeIcon} from '../../../assets/Icons/Icons';
import IconTouchableContainer from '../../components/touchables/IconTouchableContainer';


interface IAuthInput {
   title:string;
   width?:any;
   icon?:boolean
}


const AuthInput: FC<IAuthInput> = ({title,width,icon}) => {
    const {t} = useTranslation();
    const {navigate} = useNavigation();

    const PasswordIcon = () => {
        return (
          <IconTouchableContainer>
            <EyeIcon />
          </IconTouchableContainer>
        );
      };

    return (
                        <View style={[styles.inputView,{
                            width:width?width:'100%'
                        }]}
                        >  
                        <View style={styles.inputHeader} >
                            <Text style={styles.inputHeaderText} >{title}</Text>
                        </View>

                         <Input
                            contentContainerStyle={styles.contentContainerStyle}
                            textInputContainer={styles.textInput}
                            rightContent={icon?PasswordIcon:null}
                        /> 
                        </View>

                       
    );

};


export default AuthInput;


const styles = StyleSheet.create({
      inputView:{
        width:'100%',
        height:Pixel(90),
        borderRadius:20,
        borderWidth:1,
        borderColor:Colors.AuthBorder,
        marginBottom:30
    },
    inputHeader:{
        position:'absolute',
        top:Pixel(-25),
        left:Pixel(30),
        paddingLeft:2,
        paddingRight:10,
        backgroundColor:Colors.sacandAppBackgroundColor,
        zIndex:100
    },
    inputHeaderText:{
        fontSize:14,
        color:'#101010',
        opacity:.8
    },
    contentContainerStyle:{
        borderRadius: 20,
        borderWidth: 0,
        backgroundColor:Colors.sacandAppBackgroundColor,
        width:'99%',
        height:'99%',
        alignItems:'center',
        justifyContent:'center',

      },
      textInput:{
        alignSelf: 'flex-start',
        color:Colors.dark,
        width:'100%',
        height:'100%',
      },
});
