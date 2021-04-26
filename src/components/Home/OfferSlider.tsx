import React, {FC} from "react";
import {Dimensions, StyleSheet, View} from "react-native";
import {useTranslation} from "react-i18next";
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Colors, Pixel} from "../../constants/styleConstants";
import OfferSliderItem from "./OfferSliderItem";

export const SLIDER_WIDTH = Dimensions.get('window').width + 140;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

interface IOfferSlider {
    data: Array<{ title: string, image: string }>
}

const OfferSlider: FC<IOfferSlider> = ({data}) => {
    const {t} = useTranslation();
    const [index, setIndex] = React.useState(0);
    const isCarousel = React.useRef(null)

    return (
        <View style={styles.container}>
            <Carousel
                ref={isCarousel}
                layout="default"
                data={data}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                renderItem={OfferSliderItem}
                inactiveSlideShift={0}
                useScrollView={true}
                onSnapToItem={(index) => setIndex(index)}
            />
            <View style={{position: 'absolute', bottom: Pixel(-40) , }}>
                <Pagination
                    dotsLength={data.length}
                    activeDotIndex={index}
                    carouselRef={isCarousel}
                    inactiveDotOpacity={1}
                    inactiveDotScale={1}
                    inactiveDotStyle={{backgroundColor: '#4D4D4D'}}
                    dotStyle={styles.dotStyle}
                    tappableDots={true}
                />
            </View>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        //backgroundColor: Colors.dark,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        marginTop: Pixel(40),
        //paddingBottom: Pixel(50),
        position: 'relative',
        marginBottom: Pixel(30),
        //height:155,
        borderRadius:15
    },
    dotStyle: {
        width: 7,
        height: 7,
        borderRadius: 5,
        marginHorizontal: 0,
        backgroundColor: Colors.minColor,
    },
});

export default OfferSlider;
