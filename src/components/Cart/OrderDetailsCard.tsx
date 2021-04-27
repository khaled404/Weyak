import React, {FC} from 'react';
import {StyleSheet, View,Text, FlatList,Image} from 'react-native';
import {Colors,Fonts,Images,Pixel} from "../../constants/styleConstants";
import {useTranslation} from "react-i18next";
import {commonStyles} from "../../styles/styles";
import {useNavigation} from '@react-navigation/native';


const OrderDetailsCard: FC = () => {
    const {t} = useTranslation();
    const {navigate} = useNavigation();
    

    return (

        <View style={styles.orderDetailsContainer}>
          <View style={styles.orderDetailsRow}>
            <Text
              style={[
                styles.orderDetailsText,
                {textAlign:'left'}
              ]}>
              {t('Cart Total')}
            </Text>
            <Text style={{flex: 0.2}}> : </Text>
            <View style={styles.textCenter}>
              <Text style={[styles.orderDetailsText, {textAlign: 'center'}]}>
                130 EG
              </Text>
            </View>
          </View>
          <View style={styles.orderDetailsRow}>
            <Text
              style={[
                styles.orderDetailsText,
                {textAlign:'left'}
              ]}>
              {t('Services Charge')}
            </Text>
            <Text style={{flex: 0.2}}> : </Text>
            <View style={styles.textCenter}>
              <Text style={[styles.orderDetailsText, {textAlign: 'center'}]}>
                20 EG
              </Text>
            </View>
          </View>
          <View style={styles.orderDetailsRow}>
            <Text
              style={[
                styles.orderDetailsText,
                {textAlign:'left'}
              ]}>
              {t('Discount')}
            </Text>
            <Text style={{flex: 0.2}}> : </Text>
            <View style={styles.textCenter}>
              <Text style={[styles.orderDetailsText, {textAlign: 'center'}]}>
                50 EG
              </Text>
            </View>
          </View>
          <View style={styles.orderDetailsDivider} />
          <View style={[styles.orderDetailsRow]}>
            <Text
              style={[
                styles.orderDetailsText,
                {
                  color: Colors.minColor,
                  textAlign:'left'
                },
              ]}>
              {t('Total Amount')}
            </Text>
            <Text style={{flex: 0.2}}> : </Text>
            <View style={styles.textCenter}>
              <Text
                style={[
                  styles.orderDetailsText,
                  {color: Colors.minColor, textAlign: 'center'},
                ]}>
                100 EG
              </Text>
            </View>
          </View>
        </View>
    );

};


export default OrderDetailsCard;


const styles = StyleSheet.create({
    
    orderDetailsContainer: {
        flex: 1,
        backgroundColor: Colors.white,
        ...commonStyles.boxShadow,
        paddingVertical: Pixel(25),
        paddingHorizontal: Pixel(45),
        borderRadius: Pixel(35),
        marginTop: Pixel(10),
        height:Pixel(370),
        flexDirection:'column',
        justifyContent:'space-evenly'
      },
      orderDetailsRow: {
        ...commonStyles.rowBox,
        justifyContent: 'space-between',
        marginVertical: 7,
        alignItems:'center',
        height:Pixel(60)
      },
      orderDetailsText: {
        fontSize: Pixel(31),
        fontFamily: Fonts.medium,
        flex: 0.7,
        color: Colors.dark,
        
      },
      textCenter: {
        flex: 0.7,
        textAlign: 'center',
      },
      orderDetailsDivider: {
        width: '100%',
        height: 1,
        backgroundColor: '#707070',
        marginVertical: 5,
      },
});
