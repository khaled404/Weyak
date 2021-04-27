import React, {FC, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  Home,
  Country,
  Language,
  RX,
  PrescriptionWithoutInsurance,
  PrescriptionAdd,
  RequestInProgress,
  PrescriptionDetails,
  Cart,
  CheckOut,
} from '../screens/index';
import FooterTabs from './FooterTabs';
import Animated from 'react-native-reanimated';
import DrawerContent from '../components/drawer/DrawerContent';
import {I18nManager, StyleSheet, View,Text} from 'react-native';
import {RootState} from '../store/store';
import {shallowEqual, useSelector} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';
import {Colors,Images,Pixel} from "../constants/styleConstants";
import {ActiveHome, HomeIcon,Profile,Menu,ActiveMenu} from '../../assets/Icons/Icons'

const {isRTL} = I18nManager;
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const navigationTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  cardStyleInterpolator: ({current, next, layouts}: any) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [
                    0,
                    isRTL
                      ? layouts.screen.width / 7
                      : -layouts.screen.width / 7,
                  ],
                })
              : current.progress.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [
                    isRTL ? -layouts.screen.width : layouts.screen.width,
                    isRTL
                      ? -layouts.screen.width / 2
                      : layouts.screen.width / 2,
                    0,
                  ],
                }),
          },
        ],
      },
      overlayStyle: {
        backgroundColor: 'transparent',
      },
    };
  },
};

const navigationSlideToTop = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  cardStyleInterpolator: ({current, next, layouts}: any) => {
    return {
      cardStyle: {
        transform: [
          {
            translateY: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.height, 0],
            }),
          },
          {
            scale: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.93],
                })
              : 1,
          },
        ],
      },
    };
  },
};

const Stacks: FC<any> = ({style}) => {
  const {language} = useSelector((state: RootState) => state.settings);
  console.log(language);
  return (
    <Animated.View style={[styles.stacksStyles, style]}>
      <Stack.Navigator
        screenOptions={{headerShown: false, ...navigationTransition} as any}
        initialRouteName={language === null ? 'Language' : 'Country'}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Language" component={Language} />
        <Stack.Screen name="Country" component={Country} />
        <Stack.Screen name="RX" component={RX} />
        <Stack.Screen
          name="PrescriptionWithoutInsurance"
          component={PrescriptionWithoutInsurance}
        />
        <Stack.Screen name="PrescriptionAdd" component={PrescriptionAdd} />
        <Stack.Screen name="RequestInProgress" component={RequestInProgress} />
        <Stack.Screen
          name="PrescriptionDetails"
          component={PrescriptionDetails}
        />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="CheckOut" component={CheckOut} />
      </Stack.Navigator>
    </Animated.View>
  );
};

const TabsStack: FC = () => {
  const {t} = useTranslation();

  return (
    <Tab.Navigator 
      tabBarOptions={{
        showLabel:false,
        style:{
        position:'absolute',
        bottom:0,
        height:84,
        width:'100%',
        backgroundColor:Colors.white,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.3,
        shadowRadius: 1,
        }
      }}
    >
      <Tab.Screen name="Home" component={Stacks} options={{
        tabBarIcon:({focused}) => (
          <View 
            style={styles.icon} >
            {
                focused?
                <ActiveHome/>
                :
                <HomeIcon />
            }
            <Text style={[styles.text,{
              color:focused?Colors.minColor:Colors.dark
            }]} >{t('Home')}</Text>
            </View>
        )
        
      }} />
      <Tab.Screen  name="RX" component={RX} options={{
        tabBarIcon:({focused}) => (
          <View 
            style={[styles.mid,{
                backgroundColor:focused?Colors.minColor:Colors.white
            }]} >
            {
                focused?
                <ActiveMenu/>
                :
                <Menu/>
            }
            <Text style={[{
                fontWeight:'bold',
                fontSize:9,
                paddingTop:3
            },{
                color:focused?Colors.white:Colors.dark
            }]} >RX</Text>
            </View>
        )
        
      }} />
      <Tab.Screen
        name="Profile"
        component={Language}
        options={{
          tabBarIcon:({focused}) => (
            <View style={styles.icon} >

            <Profile/>
            <Text style={styles.text} >{t('Profile')}</Text>
            </View>
          )
          
        }}
      />
    </Tab.Navigator>
  );
};

const initNavgtion: FC = () => {
  const {t} = useTranslation();

  return (
    <NavigationContainer>
      <Tab.Navigator 
      tabBarOptions={{
        showLabel:false,
        style:{
        position:'absolute',
        bottom:0,
        height:84,
        width:'100%',
        backgroundColor:Colors.white,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.3,
        shadowRadius: 1,
        }
      }}
    >
      <Tab.Screen name="Home" component={Stacks} options={{
        tabBarIcon:({focused}) => (
          <View 
            style={styles.icon} >
            {
                focused?
                <ActiveHome/>
                :
                <HomeIcon />
            }
            <Text style={[styles.text,{
              color:focused?Colors.minColor:Colors.dark
            }]} >{t('Home')}</Text>
            </View>
        )
        
      }} />
      <Tab.Screen  name="RX" component={RX} options={{
        tabBarIcon:({focused}) => (
          <View 
            style={[styles.mid,{
                backgroundColor:focused?Colors.minColor:Colors.white
            }]} >
            {
                focused?
                <ActiveMenu/>
                :
                <Menu/>
            }
            <Text style={[{
                fontWeight:'bold',
                fontSize:9,
                paddingTop:3
            },{
                color:focused?Colors.white:Colors.dark
            }]} >RX</Text>
            </View>
        )
        
      }} />
      <Tab.Screen
        name="Profile"
        component={Language}
        options={{
          tabBarIcon:({focused}) => (
            <View style={styles.icon} >

            <Profile/>
            <Text style={styles.text} >{t('Profile')}</Text>
            </View>
          )
          
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
};

export default initNavgtion;

const styles = StyleSheet.create({
  stacksStyles: {
    backgroundColor: 'white',
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    zIndex: 3,
    shadowRadius: 10.32,
    elevation: 5,
    overflow: 'hidden',
  },
  icon:{
    flexDirection:'column',
    alignItems:'center',

  },
  text:{
      fontSize:9,
      paddingTop:5
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
});
