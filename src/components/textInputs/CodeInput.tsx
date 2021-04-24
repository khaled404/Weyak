import React, {FC, useEffect, useState} from 'react';
import {StyleSheet, TextInput, View, Keyboard} from 'react-native';
import {Fonts} from '../../constants/styleConstants';

const CodeInput: FC = () => {
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
      {[...Array(6).keys()].map(index => (
        <View style={styles.textInpuContainer} key={index}>
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
            onFocus={props => {}}
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
    justifyContent: 'center',
  },
  textInpuContainer: {
    width: 50,
    height: 50,
    paddingHorizontal: 5,
  },
  textInput: {
    borderRadius: 10,
    backgroundColor: '#F0F0F0',
    width: '100%',
    height: '100%',
    fontSize: 20,
    fontFamily: Fonts.light,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
