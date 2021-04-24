import React, {FC} from 'react';
import {
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {
  Colors,
  Fonts,
  Pixel,
  ScreenOptions,
} from '../../constants/styleConstants';
import {commonStyles} from '../../styles/styles';
import {NavigationProps} from '../../constants/interfaces';
import {
  ArrowHeaderIcon,
  CartIcon,
  LogoIcon,
  MenuIcon,
  NotificationIcon,
  SearchIcon,
  Logo
} from '../../../assets/Icons/Icons';
import IconTouchableContainer from '../touchables/IconTouchableContainer';
import {useTranslation} from 'react-i18next';
import Input from '../textInputs/Input';

interface IHeader {
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

const SearchSubmitBtn: FC = () => {
  return (
    <IconTouchableContainer
      style={styles.submitSearchBtn}
      onPress={global.DrawerProps.openDrawer}>
      <SearchIcon width={17} height={17} />
    </IconTouchableContainer>
  );
};

const HomeHeader: FC<NavigationProps & IHeader> = ({
  navigate,
  goBack,
  name,
  title,
  containerStyle,
  titleStyle,
}) => {
  const {t} = useTranslation();

  return (
    <View style={[styles.mainContainer, containerStyle]}>
      <View style={[styles.rowConatiner]}>
        <View style={styles.right}>
          <View style={styles.titleConatiner}>
            <Logo width={68} height={30} />
          </View>
        </View>

        <View style={styles.centerContainer}>
          <Text style={styles.addressTitle}>{t('Deliver To')}</Text>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.addressText}>Alexandria - Miami</Text>
            <ArrowHeaderIcon />
          </TouchableOpacity>
        </View>

        <View style={styles.leftContainer}>
          <IconTouchableContainer>
            <CartIcon />
          </IconTouchableContainer>
          <IconTouchableContainer >
            <NotificationIcon />
          </IconTouchableContainer>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.sacandAppBackgroundColor,
    paddingTop: ScreenOptions.StatusBarHeight + 15,
    minHeight:
      Platform.OS === 'android'
        ? 56 + ScreenOptions.StatusBarHeight
        : 64 + ScreenOptions.StatusBarHeight,
    paddingHorizontal: 15,
    zIndex: 200,
    paddingBottom: Pixel(30),
  },
  rowConatiner: {
    ...commonStyles.rowBox,
    justifyContent: 'space-between',
  },
  right: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleConatiner: {
    ...commonStyles.rowBox,
    marginLeft: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: Pixel(10),
  },
  title: {
    color: Colors.colorSacand,
    fontSize: 20,
    fontFamily: Fonts.bold,
  },
  cartContainer: {
    backgroundColor: Colors.colorSacand,
    width: 20,
    height: 16,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    position: 'absolute',
    zIndex: 3,
    right: -7,
    top: -4,
  },
  centerContainer: {
    // marginRight: 'auto',
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  addressTitle: {
    textAlign: 'center',
    color: Colors.dark,
    fontFamily: Fonts.regular,
    fontSize: Pixel(25),
  },
  addressText: {
    textAlign: 'center',
    color: Colors.minColor,
    fontFamily: Fonts.medium,
    fontSize: Pixel(25),
    marginRight: Pixel(15),
  },
  searchInputContainer: {
    marginTop: Pixel(50),
    paddingBottom: Pixel(20),
  },
  submitSearchBtn: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: Colors.sacandAppBackgroundColor,
    padding: 4,
    borderRadius: 15,
  },
});
