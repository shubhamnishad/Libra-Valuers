import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import CustomModal from '../CustomComponents/CustomModal';

export default function BrokerUpdate(props) {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [pincode, setPincode] = useState();
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [name, setName] = useState();
  const [remarks, setRemarks] = useState();
  const [address, setAddress] = useState();
  const [contact, setContact] = useState();
  const [rowData, setRowData] = useState({
    physicalRow: [],
  });

  const submitForm = () => {
    setRowData({
      ...rowData,
      physicalRow: [
        ...rowData.physicalRow,
        {
          name: name,
          address: address,
          contact: contact,
          latitude: latitude,
          longitude: longitude,
          pincode: pincode,
        },
      ],
    });
    console.log('@@@@', rowData);
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
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          backgroundColor: '#ff8c00',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{flex: 1, justifyContent: 'flex-start'}}>
          <IconButton
            icon="home"
            size={26}
            color="black"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
        <View
          style={{
            flex: 1,
            marginRight: 100,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Roboto-Medium',
            }}>
            {' '}
            Libra Valuers{' '}
          </Text>
        </View>
      </View>

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
            setModalVisible(true);
          }}>
          <Text style={{fontFamily: 'Roboto-Regular'}}> Add Row </Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal={true}>
        <View>
          <View style={styles.physicalHeader}>
            <View style={{width: 100}}>
              <Text style={{fontFamily: 'Roboto-Regular', fontSize: 14}}>
                {' '}
                Name{' '}
              </Text>
            </View>
            <View style={{width: 100}}>
              <Text style={{fontFamily: 'Roboto-Regular', fontSize: 14}}>
                {' '}
                Address{' '}
              </Text>
            </View>
            <View style={{width: 100}}>
              <Text style={{fontFamily: 'Roboto-Regular', fontSize: 14}}>
                {' '}
                Contact{' '}
              </Text>
            </View>
            <View style={{width: 100}}>
              <Text style={{fontFamily: 'Roboto-Regular', fontSize: 14}}>
                {' '}
                Latitude{' '}
              </Text>
            </View>
            <View style={{width: 100}}>
              <Text style={{fontFamily: 'Roboto-Regular', fontSize: 14}}>
                {' '}
                Longitude{' '}
              </Text>
            </View>
            <View style={{width: 100}}>
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
            marginBottom: 10,
            marginTop: 10,
          }}
          onPress={() => props.navigation.navigate('Home')}>
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
                {` `}Name{` `}
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
                placeholder="Name"
                onChangeText={(text) => setName(text)}
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
                {` `}Address{` `}
              </Text>
            </View>

            <View
              style={{
                width: 250,
              }}>
              <TextInput
                style={{
                  width: '100%',
                  height: 90,
                  borderRadius: 15,
                  marginBottom: 5,
                  backgroundColor: 'white',
                  marginTop: 2,
                }}
                textAlignVertical="top"
                multiline={true}
                backgroundColor="white"
                color="#3A1292"
                placeholder="Address"
                onChangeText={(text) => setAddress(text)}
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
                Contact{` `}
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
                placeholder="Contact"
                onChangeText={(text) => setContact(text)}
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
              <Pressable style={styles.pressable} onPress={() => submitForm()}>
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
  return (
    <View style={{flexDirection: 'row'}}>
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
          value={props.item.name}
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
          value={props.item.address}
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
          value={props.item.contact}
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
          width: 140,
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
  physicalHeader: {
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    justifyContent: 'space-around',
    marginTop: 5,
    height: 40,
    alignItems: 'center',
    alignContent: 'center',
    paddingHorizontal: 20,
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
