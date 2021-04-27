import React, {FC} from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Home, RX,Language} from "../screens";
import Footer from "../components/Home/Footer";
import {useTranslation} from "react-i18next";


const Tab = createBottomTabNavigator();

const FooterTabs: FC = () => {
    const {t} = useTranslation();
    return (
        <Tab.Navigator >
            <Tab.Screen options={{title: t('Home'),}} name="Home" component={Home}/>
            <Tab.Screen
                options={{title: t('RX'),}}
                name="RX" component={RX}/>
            <Tab.Screen
                options={{title: t('Profile'),}}
                name="Profile" component={Language} />
        </Tab.Navigator>
    );
}


export default FooterTabs;
