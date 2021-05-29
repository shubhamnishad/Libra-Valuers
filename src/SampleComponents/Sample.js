import React from 'react';
import {View, Button, StyleSheet, TextInput} from 'react-native';

import SwitchComponent from '../SampleComponents/SwitchComponent';
import BottomSheet from '../SampleComponents/BottomSheet';
import DropDownDrawer from '../SampleComponents/DropDownDrawer';
import SliderComponent from '../SampleComponents/SliderComponent';

export default function Sample() {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => alert('I am simple Button')}
        title="Simple Button"
      />
      <TextInput style={styles.textInputStyle} placeholder="I am Text Input" />

      <DropDownDrawer></DropDownDrawer>
      <BottomSheet></BottomSheet>
      <SwitchComponent></SwitchComponent>
      <SliderComponent></SliderComponent>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '20%',
    margin: 10,
  },
  textInputStyle: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    width: 200,
  },
});
