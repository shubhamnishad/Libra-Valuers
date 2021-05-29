import React from 'react';
import {View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function DropDownDrawer() {
  return (
    <View style={{marginTop: 20, marginLeft: 5}}>
      <DropDownPicker
        items={[
          {label: 'Residential Area', value: 'Residential Area'},
          {label: 'Industrial Area', value: 'Industrial Area'},
        ]}
        defaultIndex={0}
        containerStyle={{
          height: 40,
          width: 200,
          // marginTop: 20,
          marginBottom: 50,
        }}
        onChangeItem={(item) => console.log(item.label, item.value)}
      />
    </View>
  );
}
