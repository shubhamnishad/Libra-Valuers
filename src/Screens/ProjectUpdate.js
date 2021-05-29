import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import HeaderProgress from '../CustomComponents/HeaderProgress';
import CustomModal from '../CustomComponents/CustomModal';
import {IconButton} from 'react-native-paper';

export default function ProjectUpdate(props) {
  const [projectName, setProjectName] = useState();
  const [noOfWings, setNoOfWings] = useState();
  const [amenities, setAmenities] = useState();
  const [floor, setFloor] = useState();
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [remarks, setRemarks] = useState();
  const [pincode, setPincode] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [rowData, setRowData] = useState({
    physicalRow: [],
  });

  const formSubmit = () => {
    setRowData({
      ...rowData,
      physicalRow: [
        ...rowData.physicalRow,
        {
          projectName: projectName,
          noOfWings: noOfWings,
          amenities: amenities,
          floor: floor,
          longitude: longitude,
          latitude: latitude,
          remarks: remarks,
          pincode: pincode,
        },
      ],
    });
    setModalVisible(!modalVisible);
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
    <View style={styles.container}>
      <HeaderProgress />
      <View
        style={{
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          marginTop: 10,
          marginBottom: 5,
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
            setModalVisible(true);
          }}>
          <Text style={{fontFamily: 'Roboto-Regular'}}> Add Row </Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal={true}>
        <View>
          <View style={styles.physicalHeader}>
            <View style={{flex: 1}}>
              <Text style={{fontFamily: 'Roboto-Regular', fontSize: 14}}>
                {' '}
                Project Name{' '}
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontFamily: 'Roboto-Regular', fontSize: 14}}>
                {' '}
                No of Wings{' '}
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontFamily: 'Roboto-Regular', fontSize: 14}}>
                {' '}
                Amenities{' '}
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontFamily: 'Roboto-Regular', fontSize: 14}}>
                {' '}
                Floor{' '}
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontFamily: 'Roboto-Regular', fontSize: 14}}>
                {' '}
                Longitude{' '}
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontFamily: 'Roboto-Regular', fontSize: 14}}>
                {' '}
                Latitude{' '}
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontFamily: 'Roboto-Regular', fontSize: 14}}>
                {' '}
                Remarks{' '}
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontFamily: 'Roboto-Regular', fontSize: 14}}>
                {' '}
                Pincode{' '}
              </Text>
            </View>
          </View>

          <ScrollView nestedScrollEnabled={true} horizontal={false}>
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
          </ScrollView>
        </View>
      </ScrollView>

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
            props.navigation.navigate('Home');
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

      {modalVisible ? (
        <CustomModal open={modalVisible}>
          <ScrollView>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                width: 240,
              }}>
              <Text style={{fontFamily: 'Roboto-Medium'}}>
                {` `}Project Name{` `}
              </Text>
            </View>

            <View style={{width: 250}}>
              <TextInput
                style={{
                  width: '100%',
                  height: 40,
                  borderRadius: 15,
                  marginBottom: 5,
                  backgroundColor: 'white',
                  marginTop: 2,
                }}
                backgroundColor="white"
                color="#3A1292"
                placeholder="Project Name"
                onChangeText={(text) => setProjectName(text)}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                width: 240,
                marginTop: 5,
              }}>
              <Text style={{fontFamily: 'Roboto-Medium'}}>
                {` `}No of Wings{` `}
              </Text>
            </View>

            <View
              style={{
                width: 250,
              }}>
              <TextInput
                style={{
                  width: '100%',
                  height: 40,
                  borderRadius: 15,
                  marginBottom: 5,
                  backgroundColor: 'white',
                  marginTop: 2,
                }}
                textAlignVertical="top"
                multiline={true}
                backgroundColor="white"
                color="#3A1292"
                placeholder="No Of Wings"
                onChangeText={(text) => setNoOfWings(text)}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                width: 240,
                marginTop: 5,
              }}>
              <Text style={{fontFamily: 'Roboto-Medium'}}>
                {` `}
                Amenities{` `}
              </Text>
            </View>

            <View style={{width: 250, flexDirection: 'row', flexWrap: 'wrap'}}>
              <TextInput
                style={{
                  width: '100%',
                  height: 40,
                  borderRadius: 15,
                  marginBottom: 5,
                  backgroundColor: 'white',
                  marginTop: 2,
                }}
                backgroundColor="white"
                color="#3A1292"
                placeholder="Amenities"
                onChangeText={(text) => setAmenities(text)}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                width: 240,
                marginTop: 5,
              }}>
              <Text style={{fontFamily: 'Roboto-Medium'}}>
                {` `} Floor{` `}
              </Text>
            </View>

            <View style={{width: 250}}>
              <TextInput
                style={{
                  width: '100%',
                  height: 40,
                  borderRadius: 15,
                  marginBottom: 5,
                  backgroundColor: 'white',
                  marginTop: 2,
                }}
                backgroundColor="white"
                color="#3A1292"
                placeholder="Floor"
                onChangeText={(text) => setFloor(text)}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                width: 240,
                marginTop: 5,
              }}>
              <Text style={{fontFamily: 'Roboto-Medium'}}>
                {` `} Latitude{` `}
              </Text>
            </View>

            <View style={{width: 250}}>
              <TextInput
                style={{
                  width: '100%',
                  height: 40,
                  borderRadius: 15,
                  marginBottom: 5,
                  backgroundColor: 'white',
                  marginTop: 2,
                }}
                backgroundColor="white"
                color="#3A1292"
                placeholder="Latitude"
                onChangeText={(text) => setLatitude(text)}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                width: 240,
                marginTop: 5,
              }}>
              <Text style={{fontFamily: 'Roboto-Medium'}}>
                {` `} Longitude{` `}
              </Text>
            </View>

            <View style={{width: 250}}>
              <TextInput
                style={{
                  width: '100%',
                  height: 40,
                  borderRadius: 15,
                  marginBottom: 5,
                  backgroundColor: 'white',
                  marginTop: 2,
                }}
                backgroundColor="white"
                color="#3A1292"
                placeholder="Longitude"
                onChangeText={(text) => setLongitude(text)}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                width: 240,
                marginTop: 5,
              }}>
              <Text style={{fontFamily: 'Roboto-Medium'}}>
                {` `} Remarks{` `}
              </Text>
            </View>

            <View style={{width: 250}}>
              <TextInput
                style={{
                  width: '100%',
                  height: 40,
                  borderRadius: 15,
                  marginBottom: 5,
                  backgroundColor: 'white',
                  marginTop: 2,
                }}
                backgroundColor="white"
                color="#3A1292"
                placeholder="Remarks"
                onChangeText={(text) => setRemarks(text)}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                width: 240,
                marginTop: 5,
              }}>
              <Text style={{fontFamily: 'Roboto-Medium'}}>
                {` `} Pincode{` `}
              </Text>
            </View>

            <View style={{width: 250}}>
              <TextInput
                style={{
                  width: '100%',
                  height: 40,
                  borderRadius: 15,
                  marginBottom: 5,
                  backgroundColor: 'white',
                  marginTop: 2,
                }}
                backgroundColor="white"
                color="#3A1292"
                placeholder="Pincode"
                onChangeText={(text) => setPincode(text)}
              />
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Pressable
                style={styles.pressableCancel}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    color: 'black',
                    fontSize: 15,
                  }}>
                  {` `}
                  Cancel{` `}
                </Text>
              </Pressable>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Pressable style={styles.pressable} onPress={() => formSubmit()}>
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    color: 'white',
                    fontSize: 15,
                  }}>
                  {` `}
                  Submit{` `}
                </Text>
              </Pressable>
            </View>
          </ScrollView>
        </CustomModal>
      ) : (
        <View></View>
      )}
    </View>
  );
}

const PMBody = (props) => {
  const [rowData, setRowData] = useState({});
  // const {item, name, changeData, keyData} = props;
  console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@22', props);
  return (
    <View style={{flexDirection: 'row'}} key={props.keyData}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'black',
          borderWidth: 0.5,
          backgroundColor: 'white',
          width: 120,
        }}>
        <TextInput
          style={{
            width: '100%',
            height: 45,
            borderRadius: 15,
            backgroundColor: 'white',
          }}
          textAlignVertical="center"
          backgroundColor="white"
          color="#3A1292"
          value={props.item.projectName}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'black',
          borderWidth: 0.5,
          backgroundColor: 'white',
          width: 120,
        }}>
        <TextInput
          style={{
            width: '100%',
            height: 45,
            borderRadius: 15,
            backgroundColor: 'white',
          }}
          textAlignVertical="center"
          backgroundColor="white"
          color="#3A1292"
          value={props.item.noOfWings}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'black',
          borderWidth: 0.5,
          backgroundColor: 'white',
          width: 100,
        }}>
        <TextInput
          style={{
            width: '100%',
            height: 45,
            borderRadius: 15,
            backgroundColor: 'white',
          }}
          textAlignVertical="center"
          backgroundColor="white"
          color="#3A1292"
          value={props.item.amenities}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'black',
          borderWidth: 0.5,
          backgroundColor: 'white',
          width: 70,
        }}>
        <TextInput
          style={{
            width: '100%',
            height: 45,
            borderRadius: 15,
            backgroundColor: 'white',
          }}
          textAlignVertical="center"
          backgroundColor="white"
          color="#3A1292"
          value={props.item.floor}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'black',
          borderWidth: 0.5,
          backgroundColor: 'white',
          width: 100,
        }}>
        <TextInput
          style={{
            width: '100%',
            height: 45,
            borderRadius: 15,
            backgroundColor: 'white',
          }}
          textAlignVertical="center"
          backgroundColor="white"
          color="#3A1292"
          value={props.item.longitude}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'black',
          borderWidth: 0.5,
          backgroundColor: 'white',
          width: 100,
        }}>
        <TextInput
          style={{
            width: '100%',
            height: 45,
            borderRadius: 15,
            backgroundColor: 'white',
          }}
          textAlignVertical="center"
          backgroundColor="white"
          color="#3A1292"
          value={props.item.latitude}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'black',
          borderWidth: 0.5,
          backgroundColor: 'white',
          width: 100,
        }}>
        <TextInput
          style={{
            width: '100%',
            height: 45,
            borderRadius: 15,
            backgroundColor: 'white',
          }}
          textAlignVertical="center"
          backgroundColor="white"
          color="#3A1292"
          value={props.item.remarks}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'black',
          borderWidth: 0.5,
          backgroundColor: 'white',
          width: 100,
        }}>
        <TextInput
          style={{
            width: '100%',
            height: 45,
            borderRadius: 15,
            backgroundColor: 'white',
          }}
          textAlignVertical="center"
          backgroundColor="white"
          color="#3A1292"
          value={props.item.pincode}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headingText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 17,
    marginTop: 25,
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
  physicalHeader: {
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    justifyContent: 'space-around',
    marginTop: 5,
    height: 40,
    alignItems: 'center',
    alignContent: 'center',
  },
  pressable: {
    backgroundColor: '#ff8c00',
    marginTop: 10,
    height: 40,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  pressableCancel: {
    backgroundColor: 'white',
    marginTop: 10,
    height: 40,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});
