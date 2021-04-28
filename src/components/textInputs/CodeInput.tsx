import React, {FC, useEffect, useState} from 'react';
import {StyleSheet, TextInput, View, Keyboard} from 'react-native';
import {Fonts , Colors,Pixel} from '../../constants/styleConstants';


interface ICodeInput {
  onChangeText?: (text: string) => void;
  arrayWidth?: number;
}
const CodeInput: FC<ICodeInput> = ({onChangeText, arrayWidth}) => {
  const [state, setstate] = useState<any>({
    inputRefs: {} as any,
    inputValues: {} as any,
    value: '',
  });
  const GetInputValues = () => {
    setstate((old: any) => ({
      ...old,
      value: Object.keys(state.inputValues)
        .reduce((res, v) => {
          return res.concat(state.inputValues[v]);
        }, [])
        .join(''),
    }));
  };
  

  useEffect(() => {
    GetInputValues();
  }, [state.inputValues]);
  useEffect(() => {
    if (state.inputRefs[`input_0`]) {
      state.inputRefs[`input_0`].focus();
    }
  }, []);
  return (
    <View style={styles.container}>
      {[...Array(arrayWidth).keys()].map(index => (
        <View style={[styles.textInpuContainer,{
          borderColor:!index?Colors.minColor:Colors.dark
        }]} key={index}>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            maxLength={1}
            ref={ref => {
              state.inputRefs[`input_${index}`] = ref;
            }}
            onKeyPress={keyPress => {
              keyPress.persist();
              if (keyPress.nativeEvent.key === 'Backspace') {
                if (
                  state.inputValues[`input_${index}`].length != 0 &&
                  index !== 5 &&
                  index !== 0
                ) {
                  state.inputRefs[`input_${index + 1}`].focus();
                } else if (
                  index !== 0 &&
                  state.inputValues[`input_${index}`].length === 0
                ) {
                  state.inputRefs[`input_${index - 1}`].focus();
                }
              }
            }}
            onChangeText={text => {
              setstate((old: any) => ({
                ...old,
                inputValues: {...old.inputValues, [`input_${index}`]: text},
              }));
              if (text.length != 0 && index !== 5) {
                state.inputRefs[`input_${index + 1}`].focus();
              } else if (index !== 0 && text.length === 0) {
                state.inputRefs[`input_${index - 1}`].focus();
              }
            }}
            //onFocus={()}
          />
        </View>
      ))}
    </View>
  );
};

export default CodeInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width:'100%'
  },
  textInpuContainer: {
    width: '19%',
    height: Pixel(160),
    paddingHorizontal: 5,
    borderWidth:3,
    borderRadius: 15,
    alignItems:'center',
    justifyContent:'center'
  },
  textInput: {
    width: '70%',
    height: '75%',
    fontSize: 30,
    fontFamily: Fonts.bold,
    fontWeight:'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderBottomWidth:2,
    
  },
});
