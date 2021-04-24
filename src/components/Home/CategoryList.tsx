import {StyleSheet, Text, View} from "react-native";
import Touchable from "../touchables/Touchable";
import CategoryItem from "./CategoryItem";
import React, {FC} from "react";
import {useTranslation} from "react-i18next";
import {commonStyles} from "../../styles/styles";
import {Colors, Fonts, Pixel} from "../../constants/styleConstants";

interface ICategoryList {
    data: Array<{ title: string, image: string }>
}

const CategoryList: FC<ICategoryList> = ({data}) => {

    const {t} = useTranslation();

    return (
        <>
            <View style={styles.sectionTitleContainer}>
                <Text style={styles.sectionTitle}>{'Explore Category'}</Text>
                <Touchable>
                    <Text style={styles.viewAllBtnText}>{t('View All')}</Text>
                </Touchable>
            </View>
            <View style={styles.listContainer}>
                {data.map((item, index) => {
                    if (index <= 5) {
                        return (<CategoryItem {...item} key={index} index={index}/>)
                    }
                })}
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    sectionTitleContainer: {
        justifyContent: 'space-between',
        ...commonStyles.rowBox,
        marginBottom: Pixel(20),
    },
    sectionTitle: {
        fontFamily: Fonts.black,
        fontSize: Pixel(45),
        color: Colors.colorSacand
    },
    viewAllBtnText: {
        fontFamily: Fonts.regular,
        fontSize: Pixel(30),
        color: Colors.dark,
    },
    listContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width:'100%',
    }
});
export default CategoryList;
