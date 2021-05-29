import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Switch} from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {IconButton} from 'react-native-paper';
import HeaderProgress from '../CustomComponents/HeaderProgress';
import {Slider} from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';

export default function StageCalculator(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [topPicker, setTopPicker] = useState();
  const [rccGF, setRCCGF] = useState(0);
  const [roofLevel, setRoofLevel] = useState(0);
  const [ffSlabCasting, setFFSlabCasting] = useState(0);
  const [brickWork, setBrickWork] = useState(0);
  const [internalPlaster, setInternalPlaster] = useState(0);
  const [externalPlaster, setExternalPlaster] = useState(0);
  const [basement, setBasement] = useState(0);
  const [stilh, setStilh] = useState(0);
  const [podium, setPodium] = useState(0);
  const [uperFloor, setUpperFloor] = useState(0);
  const [basementRow, setBasementRow] = useState(0);
  const [slabCast, setSlabCast] = useState(0);
  const [flooring, setFlooring] = useState(0);
  const [electrification, setElectrification] = useState(0);
  const [woodWork, setWoodWork] = useState(0);
  const [finishing, setFinishing] = useState(0);

  const [sliderValue, setSlider] = useState(15);

  const onDropClick = (itemReceived) => {
    // console.log(itemReceived);
    if (itemReceived === 'Flat') {
      props.navigation.navigate('StageCalculator2');
    }
  };

  const increementMethod = (stateValue) => {
    if (stateValue === 1) setRCCGF(rccGF + 1);
    else if (stateValue === 2) setSlabCast(slabCast + 1);
    else if (stateValue === 3) setRoofLevel(roofLevel + 1);
    else if (stateValue === 4) setFFSlabCasting(ffSlabCasting + 1);
    else if (stateValue === 5) setBrickWork(brickWork + 1);
    else if (stateValue === 6) setInternalPlaster(internalPlaster + 1);
    else if (stateValue === 7) setExternalPlaster(externalPlaster + 1);
    else if (stateValue === 8) setBasement(basement + 1);
    else if (stateValue === 9) setStilh(stilh + 1);
    else if (stateValue === 10) setPodium(podium + 1);
    else if (stateValue === 11) setUpperFloor(uperFloor + 1);
    else if (stateValue === 12) setBasementRow(basementRow + 1);
    else if (stateValue === 15) setFlooring(flooring + 1);
    else if (stateValue === 16) setElectrification(electrification + 1);
    else if (stateValue === 17) setWoodWork(woodWork + 1);
    else if (stateValue === 18) setFinishing(finishing + 1);
  };

  const decreementMethod = (stateValue) => {
    if (stateValue == 1) {
      if (rccGF > 0) setRCCGF(rccGF - 1);
      else setRCCGF(rccGF);
    } else if (stateValue === 2) {
      if (slabCast > 0) setSlabCast(slabCast - 1);
      else setSlabCast(slabCast);
    } else if (stateValue === 3) {
      if (roofLevel > 0) setRoofLevel(roofLevel - 1);
      else setRoofLevel(roofLevel);
    } else if (stateValue === 4) {
      if (ffSlabCasting > 0) setFFSlabCasting(ffSlabCasting - 1);
      else setFFSlabCasting(ffSlabCasting);
    } else if (stateValue === 5) {
      if (brickWork > 0) setBrickWork(brickWork - 1);
      else setBrickWork(brickWork);
    } else if (stateValue === 6) {
      if (internalPlaster > 0) setInternalPlaster(internalPlaster - 1);
      else setInternalPlaster(internalPlaster);
    } else if (stateValue === 7) {
      if (externalPlaster > 0) setExternalPlaster(externalPlaster - 1);
      else setExternalPlaster(externalPlaster);
    } else if (stateValue === 8) {
      if (basement > 0) setBasement(basement - 1);
      else setBasement(basement);
    } else if (stateValue === 9) {
      if (stilh > 0) setStilh(stilh - 1);
      else setStilh(stilh);
    } else if (stateValue === 10) {
      if (podium > 0) setPodium(podium - 1);
      else setPodium(podium);
    } else if (stateValue === 11) {
      if (uperFloor > 0) setUpperFloor(uperFloor - 1);
      else setUpperFloor(uperFloor);
    } else if (stateValue === 12) {
      if (basementRow > 0) setBasementRow(basementRow - 1);
      else setBasementRow(basementRow);
    } else if (stateValue === 15) {
      if (flooring > 0) setFlooring(flooring - 1);
      else setFlooring(flooring);
      setFlooring(flooring);
    } else if (stateValue === 16) {
      if (electrification > 0) setElectrification(electrification - 1);
      else setElectrification(electrification);
    } else if (stateValue === 17) {
      if (woodWork > 0) setWoodWork(woodWork - 1);
      else setWoodWork(woodWork);
    } else if (stateValue === 18) {
      if (finishing > 0) setFinishing(finishing - 1);
      else setFinishing(finishing);
    }
  };
  return (
    <View style={styles.container}>
      <HeaderProgress />

      <ScrollView>
        <View style={styles.mainView}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 22, fontFamily: 'Roboto-Regular'}}>
              {' '}
              Stage Calculator{' '}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
            }}>
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 20}}>
              {' '}
              Under Construction{' '}
            </Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                borderColor: 'black',
                borderWidth: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
                width: 200,
              }}>
              <Picker
                selectedValue={topPicker}
                mode="dropdown"
                style={{
                  height: 35,
                  width: 200,
                }}
                onValueChange={(itemValue, itemIndex) => {
                  setTopPicker(itemValue);
                  onDropClick(itemValue);
                }}>
                <Picker.Item label="Bunglow" value="Bunglow" />
                <Picker.Item label="Flat" value="Flat" />
              </Picker>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 18}}>
              {' '}
              Rera Project Name:{' '}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 18}}>
              {' '}
              Total Number of Floor{' '}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 5,
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontFamily: 'Roboto-Regular', fontSize: 15}}>
                {' '}
                Basement{' '}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <IconButton
                  icon="minus-circle"
                  size={20}
                  color="black"
                  onPress={() => decreementMethod(8)}
                />
                <Text style={{fontSize: 20}}> {basement} </Text>
                <IconButton
                  icon="plus-circle"
                  size={20}
                  color="black"
                  onPress={() => increementMethod(8)}
                />
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontFamily: 'Roboto-Regular', fontSize: 15}}>
                {' '}
                Stilh{' '}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <IconButton
                  icon="minus-circle"
                  size={20}
                  color="black"
                  onPress={() => decreementMethod(9)}
                />
                <Text style={{fontSize: 20}}> {stilh} </Text>
                <IconButton
                  icon="plus-circle"
                  size={20}
                  color="black"
                  onPress={() => increementMethod(9)}
                />
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontFamily: 'Roboto-Regular', fontSize: 15}}>
                {' '}
                Podium{' '}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <IconButton
                  icon="minus-circle"
                  size={20}
                  color="black"
                  onPress={() => decreementMethod(10)}
                />
                <Text style={{fontSize: 20}}> {podium} </Text>
                <IconButton
                  icon="plus-circle"
                  size={20}
                  color="black"
                  onPress={() => increementMethod(10)}
                />
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontFamily: 'Roboto-Regular', fontSize: 15}}>
                {' '}
                Uper Floor{' '}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <IconButton
                  icon="minus-circle"
                  size={20}
                  color="black"
                  onPress={() => decreementMethod(11)}
                />
                <Text style={{fontSize: 20}}> {uperFloor} </Text>
                <IconButton
                  icon="plus-circle"
                  size={20}
                  color="black"
                  onPress={() => increementMethod(11)}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
              justifyContent: 'flex-start',
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 17, fontFamily: 'Roboto-Regular'}}>
                {' '}
                Excavation :{' '}
              </Text>
            </View>
            <View
              style={{
                width: '65%',
                marginLeft: 10,
              }}>
              <Slider
                maximumValue={100}
                minimumValue={0}
                minimumTrackTintColor="lightblue"
                maximumTrackTintColor="#000000"
                step={1}
                value={sliderValue}
                onValueChange={(sliderValue) => setSlider(sliderValue)}
                thumbStyle={{
                  height: 25,
                  width: 25,
                  backgroundColor: 'grey',
                }}
              />
            </View>
          </View>

          <View style={styles.bunglowHeader}>
            <View>
              <Text style={{fontFamily: 'Roboto-Regular', fontSize: 14}}>
                {' '}
                Name{' '}
              </Text>
            </View>
            <View>
              <Text style={{fontFamily: 'Roboto-Regular', fontSize: 14}}>
                {' '}
                Recommended{' '}
              </Text>
            </View>
            <View style={{marginHorizontal: 14}}>
              <Text style={{fontFamily: 'Roboto-Regular', fontSize: 14}}>
                {' '}
                Actual{' '}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                borderColor: 'black',
                borderWidth: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
                flex: 0.9,
              }}>
              <Text style={{fontFamily: 'Roboto-Regular', fontSize: 15}}>
                {' '}
                Basement{' '}
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'black',
                borderWidth: 0.5,
                flex: 1,
              }}>
              <TextInput
                style={{
                  // width: 130,
                  height: 35,
                  borderRadius: 15,
                  backgroundColor: 'white',
                }}
                textAlignVertical="center"
                backgroundColor="white"
                color="#3A1292"
              />
            </View>
            <View
              style={{
                borderColor: 'black',
                borderWidth: 0.5,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}>
              <IconButton
                icon="minus-circle"
                size={22}
                color="black"
                onPress={() => decreementMethod(12)}
              />
              <Text style={{fontSize: 20}}> {basementRow} </Text>
              <IconButton
                icon="plus-circle"
                size={22}
                color="black"
                onPress={() => increementMethod(12)}
              />
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                borderColor: 'black',
                borderWidth: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
                flex: 0.9,
              }}>
              <Text style={{fontFamily: 'Roboto-Regular', fontSize: 15}}>
                {' '}
                RCC upto GF {`\n`}Roof level{' '}
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'black',
                borderWidth: 0.5,
                flex: 1,
              }}>
              <TextInput
                style={{
                  // width: 130,
                  height: 35,
                  borderRadius: 15,
                  backgroundColor: 'white',
                }}
                textAlignVertical="center"
                backgroundColor="white"
                color="#3A1292"
              />
            </View>
            <View
              style={{
                borderColor: 'black',
                borderWidth: 0.5,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}>
              <IconButton
                icon="minus-circle"
                size={22}
                color="black"
                onPress={() => decreementMethod(1)}
              />
              <Text style={{fontSize: 20}}> {rccGF} </Text>
              <IconButton
                icon="plus-circle"
                size={22}
                color="black"
                onPress={() => increementMethod(1)}
              />
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                borderColor: 'black',
                borderWidth: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
                flex: 0.9,
              }}>
              <Text style={{fontFamily: 'Roboto-Regular', fontSize: 15}}>
                {' '}
                RCC upto GF {`\n`}Slab Casting{' '}
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'black',
                borderWidth: 0.5,
                flex: 1,
              }}>
              <TextInput
                style={{
                  // width: 130,
                  height: 35,
                  borderRadius: 15,
                  backgroundColor: 'white',
                }}
                textAlignVertical="center"
                backgroundColor="white"
                color="#3A1292"
              />
            </View>
            <View
              style={{
                borderColor: 'black',
                borderWidth: 0.5,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}>
              <IconButton
                icon="minus-circle"
                size={22}
                color="black"
                onPress={() => decreementMethod(2)}
              />
              <Text style={{fontSize: 20}}> {slabCast} </Text>
              <IconButton
                icon="plus-circle"
                size={22}
                color="black"
                onPress={() => increementMethod(2)}
              />
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                borderColor: 'black',
                borderWidth: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
                flex: 0.9,
              }}>
              <Text style={{fontFamily: 'Roboto-Regular', fontSize: 15}}>
                {' '}
                RCC upto FF {`\n`}Roof Level{' '}
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'black',
                borderWidth: 0.5,
                flex: 1,
              }}>
              <TextInput
                style={{
                  // width: 130,
                  height: 35,
                  borderRadius: 15,
                  backgroundColor: 'white',
                }}
                textAlignVertical="center"
                backgroundColor="white"
                color="#3A1292"
              />
            </View>
            <View
              style={{
                borderColor: 'black',
                borderWidth: 0.5,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}>
              <IconButton
                icon="minus-circle"
                size={22}
                color="black"
                onPress={() => decreementMethod(3)}
              />
              <Text style={{fontSize: 20}}> {roofLevel} </Text>
              <IconButton
                icon="plus-circle"
                size={22}
                color="black"
                onPress={() => increementMethod(3)}
              />
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                borderColor: 'black',
                borderWidth: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
                flex: 0.9,
              }}>
              <Text style={{fontFamily: 'Roboto-Regular', fontSize: 15}}>
                {' '}
                RCC upto FF {`\n`}Slab Casting{' '}
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'black',
                borderWidth: 0.5,
                flex: 1,
              }}>
              <TextInput
                style={{
                  // width: 130,
                  height: 35,
                  borderRadius: 15,
                  backgroundColor: 'white',
                }}
                textAlignVertical="center"
                backgroundColor="white"
                color="#3A1292"
              />
            </View>
            <View
              style={{
                borderColor: 'black',
                borderWidth: 0.5,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}>
              <IconButton
                icon="minus-circle"
                size={22}
                color="black"
                onPress={() => decreementMethod(4)}
              />
              <Text style={{fontSize: 20}}> {ffSlabCasting} </Text>
              <IconButton
                icon="plus-circle"
                size={22}
                color="black"
                onPress={() => increementMethod(4)}
              />
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                borderColor: 'black',
                borderWidth: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
                flex: 0.9,
              }}>
              <Text style={{fontFamily: 'Roboto-Regular', fontSize: 15}}>
                {' '}
                Brick Work{' '}
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'black',
                borderWidth: 0.5,
                flex: 1,
              }}>
              <TextInput
                style={{
                  // width: 130,
                  height: 35,
                  borderRadius: 15,
                  backgroundColor: 'white',
                }}
                textAlignVertical="center"
                backgroundColor="white"
                color="#3A1292"
              />
            </View>
            <View
              style={{
                borderColor: 'black',
                borderWidth: 0.5,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}>
              <IconButton
                icon="minus-circle"
                size={22}
                color="black"
                onPress={() => decreementMethod(5)}
              />
              <Text style={{fontSize: 20}}> {brickWork} </Text>
              <IconButton
                icon="plus-circle"
                size={22}
                color="black"
                onPress={() => increementMethod(5)}
              />
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                borderColor: 'black',
                borderWidth: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
                flex: 0.9,
              }}>
              <Text style={{fontFamily: 'Roboto-Regular', fontSize: 15}}>
                {' '}
                Internal Plaster{' '}
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'black',
                borderWidth: 0.5,
                flex: 1,
              }}>
              <TextInput
                style={{
                  // width: 130,
                  height: 35,
                  borderRadius: 15,
                  backgroundColor: 'white',
                }}
                textAlignVertical="center"
                backgroundColor="white"
                color="#3A1292"
              />
            </View>
            <View
              style={{
                borderColor: 'black',
                borderWidth: 0.5,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}>
              <IconButton
                icon="minus-circle"
                size={22}
                color="black"
                onPress={() => decreementMethod(6)}
              />
              <Text style={{fontSize: 20}}> {internalPlaster} </Text>
              <IconButton
                icon="plus-circle"
                size={22}
                color="black"
                onPress={() => increementMethod(6)}
              />
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                borderColor: 'black',
                borderWidth: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
                flex: 0.9,
              }}>
              <Text style={{fontFamily: 'Roboto-Regular', fontSize: 15}}>
                {' '}
                External Plaster{' '}
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'black',
                borderWidth: 0.5,
                flex: 1,
              }}>
              <TextInput
                style={{
                  // width: 130,
                  height: 35,
                  borderRadius: 15,
                  backgroundColor: 'white',
                }}
                textAlignVertical="center"
                backgroundColor="white"
                color="#3A1292"
              />
            </View>
            <View
              style={{
                borderColor: 'black',
                borderWidth: 0.5,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}>
              <IconButton
                icon="minus-circle"
                size={22}
                color="black"
                onPress={() => decreementMethod(7)}
              />
              <Text style={{fontSize: 20}}> {externalPlaster} </Text>
              <IconButton
                icon="plus-circle"
                size={22}
                color="black"
                onPress={() => increementMethod(7)}
              />
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                borderColor: 'black',
                borderWidth: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
                flex: 0.9,
              }}>
              <Text style={{fontFamily: 'Roboto-Regular', fontSize: 15}}>
                {' '}
                Flooring{' '}
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'black',
                borderWidth: 0.5,
                flex: 1,
              }}>
              <TextInput
                style={{
                  // width: 130,
                  height: 35,
                  borderRadius: 15,
                  backgroundColor: 'white',
                }}
                textAlignVertical="center"
                backgroundColor="white"
                color="#3A1292"
              />
            </View>
            <View
              style={{
                borderColor: 'black',
                borderWidth: 0.5,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}>
              <IconButton
                icon="minus-circle"
                size={22}
                color="black"
                onPress={() => decreementMethod(15)}
              />
              <Text style={{fontSize: 20}}> {flooring} </Text>
              <IconButton
                icon="plus-circle"
                size={22}
                color="black"
                onPress={() => increementMethod(15)}
              />
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                borderColor: 'black',
                borderWidth: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
                flex: 0.9,
              }}>
              <Text style={{fontFamily: 'Roboto-Regular', fontSize: 15}}>
                {' '}
                Electrification{' '}
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'black',
                borderWidth: 0.5,
                flex: 1,
              }}>
              <TextInput
                style={{
                  // width: 130,
                  height: 35,
                  borderRadius: 15,
                  backgroundColor: 'white',
                }}
                textAlignVertical="center"
                backgroundColor="white"
                color="#3A1292"
              />
            </View>
            <View
              style={{
                borderColor: 'black',
                borderWidth: 0.5,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}>
              <IconButton
                icon="minus-circle"
                size={22}
                color="black"
                onPress={() => decreementMethod(16)}
              />
              <Text style={{fontSize: 20}}> {electrification} </Text>
              <IconButton
                icon="plus-circle"
                size={22}
                color="black"
                onPress={() => increementMethod(16)}
              />
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                borderColor: 'black',
                borderWidth: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
                flex: 0.9,
              }}>
              <Text style={{fontFamily: 'Roboto-Regular', fontSize: 15}}>
                {' '}
                Wood Work{' '}
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'black',
                borderWidth: 0.5,
                flex: 1,
              }}>
              <TextInput
                style={{
                  // width: 130,
                  height: 35,
                  borderRadius: 15,
                  backgroundColor: 'white',
                }}
                textAlignVertical="center"
                backgroundColor="white"
                color="#3A1292"
              />
            </View>
            <View
              style={{
                borderColor: 'black',
                borderWidth: 0.5,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}>
              <IconButton
                icon="minus-circle"
                size={22}
                color="black"
                onPress={() => decreementMethod(17)}
              />
              <Text style={{fontSize: 20}}> {woodWork} </Text>
              <IconButton
                icon="plus-circle"
                size={22}
                color="black"
                onPress={() => increementMethod(17)}
              />
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                borderColor: 'black',
                borderWidth: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
                flex: 0.9,
              }}>
              <Text style={{fontFamily: 'Roboto-Regular', fontSize: 15}}>
                {' '}
                Finishing{' '}
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'black',
                borderWidth: 0.5,
                flex: 1,
              }}>
              <TextInput
                style={{
                  // width: 130,
                  height: 35,
                  borderRadius: 15,
                  backgroundColor: 'white',
                }}
                textAlignVertical="center"
                backgroundColor="white"
                color="#3A1292"
              />
            </View>
            <View
              style={{
                borderColor: 'black',
                borderWidth: 0.5,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}>
              <IconButton
                icon="minus-circle"
                size={22}
                color="black"
                onPress={() => decreementMethod(18)}
              />
              <Text style={{fontSize: 20}}> {finishing} </Text>
              <IconButton
                icon="plus-circle"
                size={22}
                color="black"
                onPress={() => increementMethod(18)}
              />
            </View>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <Text style={{fontSize: 18, fontFamily: 'Roboto-Regular'}}>
              {' '}
              Total Number of Floor:{' '}
            </Text>

            <Text style={{fontSize: 20, paddingLeft: 10}}> 0 </Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 18, fontFamily: 'Roboto-Regular'}}>
              {' '}
              Completed Floor:{' '}
            </Text>

            <Text style={{fontSize: 20, paddingLeft: 10}}> 0 </Text>
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 18}}>
              {' '}
              Stage of Construction{' '}
            </Text>
          </View>
          <View style={styles.otherHeader}>
            <View>
              <View>
                <Text style={{fontFamily: 'Roboto-Regular', fontSize: 18}}>
                  {' '}
                  %Completed{' '}
                </Text>
              </View>
            </View>

            <View>
              <Text style={{fontFamily: 'Roboto-Regular', fontSize: 18}}>
                {' '}
                %Recommended{' '}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 20}}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'black',
                borderWidth: 0.5,
                flex: 1,
              }}>
              <TextInput
                style={{
                  // width: 130,
                  height: 35,
                  borderRadius: 15,
                  backgroundColor: 'white',
                }}
                textAlignVertical="center"
                backgroundColor="white"
                color="#3A1292"
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'black',
                borderWidth: 0.5,
                flex: 1,
              }}>
              <TextInput
                style={{
                  // width: 130,
                  height: 35,
                  borderRadius: 15,
                  backgroundColor: 'white',
                }}
                textAlignVertical="center"
                backgroundColor="white"
                color="#3A1292"
              />
            </View>
          </View>

          <View style={styles.remarksView}>
            <View style={styles.remarksContent}>
              <View
                style={{
                  width: '80%',
                  height: 70,
                }}>
                <TextInput placeholder="Remarks" multiline={true} />
              </View>
              <IconButton
                icon="plus"
                size={20}
                color="black"
                onPress={() => {
                  console.log('pressed');
                }}
              />
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
          }}
          onPress={() => props.navigation.navigate('StartInspection')}>
          <View
            style={{
              backgroundColor: '#ff8c00',
              width: 100,
              justifyContent: 'center',
              alignItems: 'center',
              height: 50,
              borderRadius: 30,
            }}>
            <Text
              style={{
                fontSize: 17,
                fontFamily: 'Roboto-Regular',
                color: 'white',
              }}>
              {' '}
              SUBMIT{' '}
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainView: {
    flex: 1,
    marginTop: 10,
    padding: 10,
    backgroundColor: 'white',
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 60,
    borderColor: '#ff8c00',
    borderWidth: 5,
    marginBottom: 10,
    paddingBottom: 10,
  },
  bunglowHeader: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'lightgrey',
    justifyContent: 'space-around',
    marginTop: 5,
    height: 40,
    alignItems: 'center',
    alignContent: 'center',
  },
  otherHeader: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'lightgrey',
    justifyContent: 'space-around',
    marginTop: 5,
    height: 40,
    alignItems: 'center',
    alignContent: 'center',
  },
  remarksContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    borderRadius: 25,
    width: '95%',
    height: 70,
    borderWidth: 2,
    borderColor: '#ff8c00',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 3,
  },
  remarksView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
    padding: 5,
    marginTop: 5,
  },
});
