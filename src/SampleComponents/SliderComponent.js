import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Slider} from 'react-native-elements';

export default function SliderComponent(props) {
  const [sliderValue, setSlider] = useState(15);

  return (
    <View style={{width: '65%', marginTop: 15, marginLeft: 10}}>
      <Slider
        maximumValue={100}
        minimumValue={0}
        minimumTrackTintColor="#307ecc"
        maximumTrackTintColor="#000000"
        step={1}
        value={sliderValue}
        onValueChange={(sliderValue) => setSlider(sliderValue)}
      />
      <Text>{sliderValue}% Progress</Text>
    </View>
  );
}
