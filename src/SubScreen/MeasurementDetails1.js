import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Button} from 'react-native';
import HeaderProgress from '../CustomComponents/HeaderProgress';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {TextInput} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';

export default function MeasurementDetails1(props) {
  const [physicalRow, setPhysicalRow] = useState([]);
  const [physicalUnit, setPhysicalUnit] = useState('');
  const [floorRow, setFloorRow] = useState([]);
  const [rowData, setRowData] = useState({physicalRow: [], floorRow: []});
  const [topPicker, setTopPicker] = useState();

  const onDropClick = (itemReceived) => {
    // console.log(itemReceived);
    if (itemReceived === 'P+C') {
      props.navigation.navigate('MeasurementDetails2');
    }
  };

  const changeData = (name, item, index, keyname) => {
    setRowData({
      ...rowData,
      [name]: [
        ...rowData[name].map((e, i) => {
          let value = {...e};
          if (i == index) {
            if (keyname === 'physicalName') {
              value.physicalName = item;
            }
            if (keyname === 'length') {
              value.length = item;
            }
            if (keyname === 'width') {
              value.width = item;
            }
          }
          return value;
        }),
      ],
    });
  };

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        <HeaderProgress />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
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
              <Picker.Item label="Composite" value="Composite" />
              <Picker.Item label="P+C" value="P+C" />
            </Picker>
          </View>
        </View>
        <View style={styles.physicalHeader}>
          <View>
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 14}}>
              {' '}
              Group Head{' '}
            </Text>
          </View>
          <View
            style={{
              // flex: 0.4,
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}>
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 14}}>
              {' '}
              Room Name{' '}
            </Text>
          </View>
          <View>
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 14}}>
              {' '}
              Sequence{' '}
            </Text>
          </View>
          <View>
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 14}}>
              {' '}
              Length{' '}
            </Text>
          </View>
          <View>
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 14}}>
              {' '}
              Width{' '}
            </Text>
          </View>
          <View style={{marginHorizontal: 14}}>
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 14}}>
              {' '}
              Area{' '}
            </Text>
          </View>
        </View>

        <View>
          {rowData.physicalRow.length > 0 &&
            rowData.physicalRow.map((item, index) => {
              return (
                <PMBody
                  item={item}
                  keyData={index}
                  name="physicalRow"
                  changeData={changeData}
                />
              );
            })}
        </View>

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
              // setPhysicalRow([...physicalRow, <PMBody />]);
              setRowData({
                ...rowData,
                physicalRow: [
                  ...rowData.physicalRow,
                  {
                    groupHead: '',
                    sequence: '',
                    physicalName: '',
                    length: '',
                    width: '',
                    area: '',
                  },
                ],
              });
              console.log('@@@@', rowData);
            }}>
            <Text style={{fontFamily: 'Roboto-Regular'}}> Add Row </Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View
            style={{
              borderColor: 'black',
              borderWidth: 0.5,
              justifyContent: 'center',
              alignItems: 'center',
              width: 150,
              height: 40,
            }}>
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 17}}>
              {' '}
              Balcony{' '}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: 'black',
              borderWidth: 0.5,
              width: 130,
              height: 40,

              backgroundColor: 'white',
            }}>
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 17}}>
              {' '}
              Total{' '}
            </Text>
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
              width: 150,
              height: 40,
            }}>
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 17}}>
              {' '}
              Carpet Area{' '}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: 'black',
              borderWidth: 0.5,
              width: 130,
              height: 40,

              backgroundColor: 'white',
            }}>
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 17}}>
              {' '}
              Total{' '}
            </Text>
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
            />
          </View>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
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

        <View>
          {rowData.floorRow.length > 0 &&
            rowData.floorRow.map((item, index) => {
              return <FMBody item={item} key={index} name="floorName" />;
            })}
        </View>

        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginTop: 2,
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
              // setFloorRow([...floorRow, <FMBody />]);
              setRowData({
                ...rowData,
                floorRow: [
                  ...rowData.floorRow,
                  {floorName: '', height: '', unit: ''},
                ],
              });
            }}>
            <Text style={{fontFamily: 'Roboto-Regular'}}> Add Row </Text>
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
              marginTop: 35,
              marginBottom: 10,
            }}
            onPress={() => {
              console.log('$$$$$$$$$$$$$$$$$$$$$', rowData);
              props.navigation.navigate('StartInspection');
            }}>
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

const PMBody = (props) => {
  const [rowData, setRowData] = useState({});
  const {item, name, changeData, keyData} = props;
  return (
    <View style={{flexDirection: 'row'}}>
      <View
        style={{
          borderColor: 'black',
          borderWidth: 0.5,
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1.5,
        }}>
        <Picker
          selectedValue={item.groupHead}
          mode="dropdown"
          style={{
            height: 33,
            width: 113,
          }}
          onValueChange={(groupHead, itemIndex) => {
            // setRowData({...rowData, physicalName});
            changeData(name, groupHead, keyData, 'groupHead');
          }}>
          <Picker.Item label="Balcony" value="Balcony" />
          <Picker.Item label="Bedroom" value="Bedroom" />
        </Picker>
      </View>
      <View
        style={{
          borderColor: 'black',
          borderWidth: 0.5,
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1.7,
        }}>
        <Picker
          selectedValue={item.physicalName}
          mode="dropdown"
          style={{
            height: 33,
            width: 113,
          }}
          onValueChange={(physicalName, itemIndex) => {
            // setRowData({...rowData, physicalName});
            changeData(name, physicalName, keyData, 'physicalName');
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
            width: '100%',
            height: 33,
            borderRadius: 15,
            backgroundColor: 'white',
          }}
          textAlignVertical="center"
          backgroundColor="white"
          color="#3A1292"
          placeholder="sequence"
          value={item.sequence}
          onChangeText={(sequence) => {
            // setRowData1({...rowData, length});
            // console.log('&&&&&&&&&&&&&&&&&&&&&&&&', rowData);
            changeData(name, sequence, keyData, 'sequence');
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
          flex: 1.1,
        }}>
        <TextInput
          style={{
            width: '100%',
            height: 33,
            borderRadius: 15,
            backgroundColor: 'white',
          }}
          textAlignVertical="center"
          backgroundColor="white"
          color="#3A1292"
          placeholder="length"
          value={item.length}
          onChangeText={(length) => {
            // setRowData1({...rowData, length});
            // console.log('&&&&&&&&&&&&&&&&&&&&&&&&', rowData);
            changeData(name, length, keyData, 'length');
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
            height: 33,
            borderRadius: 15,
            backgroundColor: 'white',
          }}
          textAlignVertical="center"
          backgroundColor="white"
          color="#3A1292"
          placeholder="Width"
          value={item.width}
          onChangeText={(width) => {
            // setRowData1({...rowData, length});
            // console.log('&&&&&&&&&&&&&&&&&&&&&&&&', rowData);
            changeData(name, width, keyData, 'width');
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
          value={rowData.area}
          // onChangeText={(area) => {
          //   setRowData({...rowData, area});
          // }}
        />
      </View>
    </View>
  );
};

const FMBody = (props) => {
  const [rowData, setRowData] = useState({});

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
          selectedValue={rowData.floorName}
          mode="dropdown"
          style={{
            height: 40,
            width: 150,
          }}
          onValueChange={(floorName, itemIndex) => {
            setRowData({...rowData, floorName});
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
          value={rowData.height}
          onChangeText={(height) => {
            setRowData({...rowData, height});
          }}
        />
      </View>
      <View style={{borderColor: 'black', borderWidth: 0.5}}>
        <Picker
          selectedValue={rowData.unit}
          mode="dropdown"
          style={{
            height: 40,
            width: 125,
          }}
          onValueChange={(unit, itemIndex) => {
            setRowData({...rowData, unit});
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
    backgroundColor: 'white',
  },
  physicalHeader: {
    flexDirection: 'row',
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
    marginTop: 5,
    height: 40,
    alignItems: 'center',
    alignContent: 'center',
  },
});
