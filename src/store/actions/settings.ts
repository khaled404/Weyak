import {Dispatch} from 'redux';
import {AsyncKeys, getItem} from '../../constants/helpers';
import {ActionType} from './actions';
import {IDispatch} from '../../constants/interfaces';
import {I18nManager} from 'react-native';
import RNRestart from 'react-native-restart';


const {allowRTL, forceRTL, swapLeftAndRightInRTL} = I18nManager;

export const loadApp = () => ({
  type: ActionType.APP_LOADED,
});
export const initializApp = () => {
  return async (dispatch: Dispatch<any>) => {
    try {
      dispatch(loadApp());
    } catch (error) {
      console.log('initializApp', error);
    }
  };
};
export const LanguageHandler = (lang: string) => {
  return (dispatch: Dispatch<IDispatch>) => {
    dispatch({type: ActionType.SAVE_LANGUAGE, payload: lang});
    allowRTL(lang === 'ar');
    forceRTL(lang === 'ar');
    swapLeftAndRightInRTL(lang === 'ar');
    setTimeout(() => {
      RNRestart.Restart();
    }, 500);
  };
};