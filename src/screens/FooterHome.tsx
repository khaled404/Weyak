import React, { useState, FC, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import Home from './Home'
import RX from './RX'
import Footer from '../components/Home/Footer';

const FooterHome:FC = () => {
        const [activeScreen, setActiveScreen] = useState('Home');
    return (
        <View style={{ flex: 1 }}>
            {activeScreen === 'Home' && <Home  />}
            {activeScreen === 'RX' && <RX />}
            <Footer setActiveScreen={(active: any) => setActiveScreen(active)} />
        </View>
    );
};
const styles = StyleSheet.create({});

export default FooterHome;
