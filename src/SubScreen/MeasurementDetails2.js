import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import HeaderProgress from '../CustomComponents/HeaderProgress';

export default function MeasurementDetails2(props) {
  const [plotArea, setPlotArea] = useState([]);
  const [builtArea, setBuiltArea] = useState([]);
  const [floorArea, setFloorArea] = useState([]);
  const [physicalUnit1, setPhysicalUnit1] = useState('');
  const [physicalUnit2, setPhysicalUnit2] = useState('');
  const [topPicker, setTopPicker] = useState();

  const onDropClick = (itemReceived) => {
    // console.log(itemReceived);
    if (itemReceived === 'Composite') {
      props.navigation.navigate('MeasurementDetails1');
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <HeaderProgress />

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 1,
          }}>
          <Text style={{fontFamily: 'Roboto-Regular', fontSize: 20}}>
            {' '}
            Physical Measurement{' '}
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
              <Picker.Item label="P+C" value="P+C" />
              <Picker.Item label="Composite" value="Composite" />
            </Picker>
          </View>
        </View>

        <View style={styles.physicalHeader}>
          <View>
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 15}}>
              {' '}
              Plot Area{' '}
            </Text>
          </View>
          <View>
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 15}}>
              {' '}
              Length{' '}
            </Text>
          </View>
          <View>
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 15}}>
              {' '}
              Width{' '}
            </Text>
          </View>
          <View>
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 15}}>
              {' '}
              Area{' '}
            </Text>
          </View>
        </View>

        <View>{plotArea.length > 0 && plotArea.map((item) => item)}</View>

        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginTop: 1,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#ff8c00',
              justifyContent: 'center',
              alignItems: 'center',
              width: 70,
              borderRadius: 10,
            }}
            onPress={() => {
              setPlotArea([...plotArea, <PMBody1 />]);
            }}>
            <Text style={{fontFamily: 'Roboto-Regular'}}> Add Row </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
            }}>
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 16}}>
              {' '}
              Total Area :{' '}
            </Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TextInput
              placeholder="Total"
              style={{
                width: 70,
                borderWidth: 1,
                borderColor: 'black',
                height: 23,
              }}
            />
          </View>
          <View>
            <Picker
              selectedValue={physicalUnit1}
              mode="dropdown"
              style={{
                height: 40,
                width: 130,
              }}
              onValueChange={(itemValue, itemIndex) =>
                setPhysicalUnit1(itemValue)
              }>
              <Picker.Item label="Sq ft" value="Sq ft" />
              <Picker.Item label="Sq yard" value="Sq yard" />
              <Picker.Item label="Sq meter" value="Sq meter" />
            </Picker>
          </View>
        </View>

        <View style={styles.physicalHeader}>
          <View>
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 15}}>
              {' '}
              Built Up Area{' '}
            </Text>
          </View>
          <View>
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 15}}>
              {' '}
              Length{' '}
            </Text>
          </View>
          <View>
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 15}}>
              {' '}
              Width{' '}
            </Text>
          </View>
          <View>
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 15}}>
              {' '}
              Area{' '}
            </Text>
          </View>
        </View>

        <View>{builtArea.length > 0 && builtArea.map((item) => item)}</View>
        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginTop: 1,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#ff8c00',
              justifyContent: 'center',
              alignItems: 'center',
              width: 70,
              borderRadius: 10,
            }}
            onPress={() => {
              setBuiltArea([...builtArea, <PMBody2 />]);
            }}>
            <Text style={{fontFamily: 'Roboto-Regular'}}> Add Row </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
            // marginRight: 10,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
            }}>
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 16}}>
              {' '}
              Total Area :{' '}
            </Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TextInput
              placeholder="Total"
              style={{
                width: 70,
                borderWidth: 1,
                borderColor: 'black',
                height: 23,
              }}
            />
          </View>
          <View>
            <Picker
              selectedValue={physicalUnit2}
              mode="dropdown"
              style={{
                height: 40,
                width: 130,
              }}
              onValueChange={(itemValue, itemIndex) =>
                setPhysicalUnit2(itemValue)
              }>
              <Picker.Item label="Sq ft" value="Sq ft" />
              <Picker.Item label="Sq yard" value="Sq yard" />
              <Picker.Item label="Sq meter" value="Sq meter" />
            </Picker>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 7,
          }}>
          <Text style={{fontFamily: 'Roboto-Regular', fontSize: 20}}>
            {' '}
            Floor Height{' '}
          </Text>
        </View>
        <View style={styles.floorHeader}>
          <View>
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 15}}>
              {' '}
              Room Name{' '}
            </Text>
          </View>
          <View>
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 15}}>
              {' '}
              Height{' '}
            </Text>
          </View>
          <View>
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 15}}>
              {' '}
              Unit{' '}
            </Text>
          </View>
        </View>

        <View>{floorArea.length > 0 && floorArea.map((item) => item)}</View>
        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginTop: 1,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#ff8c00',
              justifyContent: 'center',
              alignItems: 'center',
              width: 70,
              borderRadius: 10,
            }}
            onPress={() => {
              setFloorArea([...floorArea, <FloorBody />]);
            }}>
            <Text style={{fontFamily: 'Roboto-Regular'}}>Add Row</Text>
          </TouchableOpacity>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#ff8c00',
              width: 100,
              height: 40,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 10,
            }}
            onPress={() => props.navigation.navigate('StartInspection')}>
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 18,
                color: 'white',
              }}>
              {' '}
              SUBMIT{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const PMBody1 = () => {
  const [rowData1, setRowData1] = useState({});
  const [plotName, setPlotName] = useState('');

  return (
    <View style={{flexDirection: 'row'}}>
      <View
        style={{
          borderColor: 'black',
          borderWidth: 0.5,
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1.7,
        }}>
        <Picker
          mode="dropdown"
          style={{
            height: 40,
            width: '100%',
          }}
          selectedValue={rowData1.plotName}
          onValueChange={(plotName, itemIndex) => {
            setRowData1({...rowData1, plotName});
          }}>
          <Picker.Item label="Balcony" value="Balcony" />
          <Picker.Item label="Bedroom" value="Bedroom" />
        </Picker>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'black',
          borderWidth: 0.5,
          backgroundColor: 'white',
          flex: 1.1,
        }}>
        <TextInput
          style={{
            width: 80,
            height: 40,
            borderRadius: 15,
            backgroundColor: 'white',
          }}
          textAlignVertical="center"
          backgroundColor="white"
          color="#3A1292"
          placeholder="length"
          value={rowData1.length}
          onChangeText={(length) => {
            setRowData1({...rowData1, length});
            console.log('&&&&&&&&&&&&&&&&&&&&&&&&', rowData1);
          }}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'black',
          borderWidth: 0.5,
          backgroundColor: 'white',
          flex: 1,
        }}>
        <TextInput
          style={{
            width: '100%',
            height: 40,
            borderRadius: 15,
            backgroundColor: 'white',
          }}
          textAlignVertical="center"
          backgroundColor="white"
          color="#3A1292"
          placeholder="Width"
          value={rowData1.width}
          onChangeText={(width) => {
            setRowData1({...rowData1, width});
          }}
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
            width: '100%',
            height: 40,
            borderRadius: 15,
            backgroundColor: 'white',
          }}
          textAlignVertical="center"
          backgroundColor="white"
          color="#3A1292"
          placeholder="Area"
          value={rowData1.area}
          // onChangeText={(area) => {
          //   setRowData1({...rowData1, area});
          // }}
        />
      </View>
    </View>
  );
};

const PMBody2 = (props) => {
  const [builtName, setBuiltName] = useState('');
  const [rowData2, setRowData2] = useState({});

  return (
    <View style={{flexDirection: 'row'}}>
      <View
        style={{
          borderColor: 'black',
          borderWidth: 0.5,
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1.7,
        }}>
        <Picker
          selectedValue={builtName}
          mode="dropdown"
          style={{
            height: 40,
            width: '100%',
          }}
          selectedValue={rowData2.builtName}
          onValueChange={(builtName, itemIndex) => {
            setRowData2({...rowData2, builtName});
          }}>
          <Picker.Item label="Balcony" value="Balcony" />
          <Picker.Item label="Bedroom" value="Bedroom" />
        </Picker>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'black',
          borderWidth: 0.5,
          flex: 1.1,
        }}>
        <TextInput
          style={{
            width: '100%',
            height: 40,
            borderRadius: 15,
            backgroundColor: 'white',
          }}
          textAlignVertical="center"
          backgroundColor="white"
          color="#3A1292"
          placeholder="length"
          value={rowData2.length}
          onChangeText={(length) => {
            setRowData2({...rowData2, length});
            console.log('&&&&&&&&&&&&&&&&&&&&&&&&', rowData2);
          }}
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
            width: '100%',
            height: 40,
            borderRadius: 15,
            backgroundColor: 'white',
          }}
          textAlignVertical="center"
          backgroundColor="white"
          color="#3A1292"
          placeholder="Width"
          value={rowData2.width}
          onChangeText={(width) => {
            setRowData2({...rowData2, width});
          }}
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
            width: '100%',
            height: 40,
            borderRadius: 15,
            backgroundColor: 'white',
          }}
          textAlignVertical="center"
          backgroundColor="white"
          color="#3A1292"
          placeholder="Area"
          value={rowData2.area}
          // onChangeText={(area) => {
          //   setRowData1({...rowData1, area});
          // }}
        />
      </View>
    </View>
  );
};

const FloorBody = () => {
  const [floorUnit, setFloorUnit] = useState('');
  const [floorName, setFloorName] = useState('');
  const [rowData3, setRowData3] = useState({});

  return (
    <View style={{flexDirection: 'row'}}>
      <View
        style={{
          borderColor: 'black',
          borderWidth: 0.5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Picker
          mode="dropdown"
          style={{
            height: 40,
            width: 150,
          }}
          selectedValue={rowData3.floorName}
          onValueChange={(floorName, itemIndex) => {
            setRowData3({...rowData3, floorName});
          }}>
          <Picker.Item label="Balcony" value="Balcony" />
          <Picker.Item label="Bedroom" value="Bedroom" />
        </Picker>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'black',
          borderWidth: 0.5,
        }}>
        <TextInput
          style={{
            width: 130,
            height: 40,
            borderRadius: 15,
            backgroundColor: 'white',
          }}
          textAlignVertical="center"
          backgroundColor="white"
          color="#3A1292"
          placeholder="Height"
          value={rowData3.height}
          onChangeText={(height) => {
            setRowData3({...rowData3, height});
          }}
        />
      </View>
      <View style={{borderColor: 'black', borderWidth: 0.5}}>
        <Picker
          selectedValue={floorUnit}
          mode="dropdown"
          style={{
            height: 40,
            width: 125,
          }}
          selectedValue={rowData3.floorUnit}
          onValueChange={(floorUnit, itemIndex) => {
            setRowData3({...rowData3, floorUnit});
          }}>
          <Picker.Item label="Sq ft" value="Sq ft" />
          <Picker.Item label="Sq yard" value="Sq yard" />
          <Picker.Item label="Sq meter" value="Sq meter" />
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  physicalHeader: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'lightgrey',
    justifyContent: 'space-around',
    marginTop: 5,
    height: 40,
    alignItems: 'center',
    alignContent: 'center',
  },
  floorHeader: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'lightgrey',
    justifyContent: 'space-around',
    marginTop: 3,
    height: 40,
    alignItems: 'center',
    alignContent: 'center',
  },
});
