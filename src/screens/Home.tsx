import React, {FC} from 'react';
import {StyleSheet, View,Text, ImageBackground,Image} from 'react-native';
import {Container, Content} from '../components/containers/Containers';
import HomeHeader from '../components/header/HomeHeader';
import {Colors,Images,Pixel} from "../constants/styleConstants";
import {useTranslation} from "react-i18next";
import OfferSlider from "../components/Home/OfferSlider";
import {commonStyles} from "../styles/styles";
import {Mid, HomeIcon,Profile,Menu} from '../../assets/Icons/Icons'
import PrescriptionUpload from '../components/Home/PrescriptionUpload'
import {useNavigation} from '@react-navigation/native';
import Footer from '../components/Home/Footer'
const carouselItems = [
    {
        title: "You Can Get Our Offer",
        image: "Text 1",
    },
    {
        title: "You Can Get Our Offer",
        image: "Text 1",
    },
    {
        title: "You Can Get Our Offer",
        image: "Text 1",
    },
    {
        title: "You Can Get Our Offer",
        image: "Text 1",
    },
    {
        title: "You Can Get Our Offer",
        image: "Text 1",
    },
];

const Home: FC = () => {
    const {t} = useTranslation();
    const {navigate} = useNavigation();

    return (
        <>
        <Container style={styles.container}>
            <HomeHeader title="Home"/>
            <Content >
                <OfferSlider data={carouselItems}/>
                <PrescriptionUpload/>
            </Content>
        </Container>
        </>
    );

};


export default Home;


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.sacandAppBackgroundColor,
    },  
    image: {
        //flex: 1,
        borderRadius:15
    },
});
