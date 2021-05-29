import React, {useState} from 'react';
import {Pressable, TextInput} from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomModal from '../CustomComponents/CustomModal';
import HeaderProgress from '../CustomComponents/HeaderProgress';
import DropDownPicker from 'react-native-dropdown-picker';

export default function AreaMeasurement(props) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <HeaderProgress />
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 25,
          }}
          onPress={() => setModalVisible(true)}>
          <View style={styles.addRoom}>
            <Text style={{fontFamily: 'aerial', fontSize: 18, color: 'white'}}>
              Add Room
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            backgroundColor: 'lightgrey',
            justifyContent: 'space-between',
            marginTop: 30,
          }}>
          <View
            style={{
              width: 90,
              padding: 5,
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontFamily: 'aerial'}}>Head</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
              // alignItems: 'center',
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontFamily: 'aerial'}}>Name</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontFamily: 'aerial'}}>Length</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontFamily: 'aerial'}}>Width</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontFamily: 'aerial'}}>Area</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          <View
            style={{
              backgroundColor: 'lightgrey',
              width: 90,
              padding: 5,
              height: 90,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontFamily: 'aerial'}}>Carpet Area</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
              // alignItems: 'center',
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TextInput
                placeholder="text"
                style={{width: 70, borderWidth: 1, borderColor: 'black'}}
              />
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TextInput
                placeholder="text"
                style={{width: 50, borderWidth: 1, borderColor: 'black'}}
              />
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TextInput
                placeholder="text"
                style={{width: 50, borderWidth: 1, borderColor: 'black'}}
              />
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TextInput
                placeholder="text"
                style={{width: 50, borderWidth: 1, borderColor: 'black'}}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              backgroundColor: 'lightgrey',
              alignContent: 'space-between',
              width: 90,
              padding: 5,
              height: 90,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontFamily: 'aerial'}}>Carpet Area</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
              // alignItems: 'center',
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TextInput
                placeholder="text"
                style={{width: 70, borderWidth: 1, borderColor: 'black'}}
              />
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TextInput
                placeholder="text"
                style={{width: 50, borderWidth: 1, borderColor: 'black'}}
              />
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TextInput
                placeholder="text"
                style={{width: 50, borderWidth: 1, borderColor: 'black'}}
              />
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TextInput
                placeholder="text"
                style={{width: 50, borderWidth: 1, borderColor: 'black'}}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              backgroundColor: 'lightgrey',
              alignContent: 'space-between',
              width: 90,
              padding: 5,
              height: 90,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontFamily: 'aerial'}}>Carpet Area</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
              // alignItems: 'center',
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TextInput
                placeholder="text"
                style={{width: 70, borderWidth: 1, borderColor: 'black'}}
              />
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TextInput
                placeholder="text"
                style={{width: 50, borderWidth: 1, borderColor: 'black'}}
              />
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TextInput
                placeholder="text"
                style={{width: 50, borderWidth: 1, borderColor: 'black'}}
              />
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TextInput
                placeholder="text"
                style={{width: 50, borderWidth: 1, borderColor: 'black'}}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
            marginRight: 10,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
            }}>
            <Text style={{fontFamily: 'aerial', fontSize: 16}}>Total</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TextInput
              placeholder="Total"
              style={{width: 50, borderWidth: 1, borderColor: 'black'}}
            />
          </View>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
              marginBottom: 20,
              height: 50,
            }}
            onPress={() => props.navigation.navigate('StartInspection')}>
            <View style={styles.submitView}>
              <Text
                style={{fontFamily: 'aerial', fontSize: 18, color: 'white'}}>
                SUBMIT
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {modalVisible ? (
        <CustomModal open={modalVisible}>
          <View style={{width: 250}}>
            <DropDownPicker
              items={[
                {label: 'Carpet Area', value: 'Carpet Area'},
                {label: 'BuiltUp Area', value: 'BuiltUp Area'},
                {label: 'SuperBuiltUp Area', value: 'SuperBuiltUp Area'},
              ]}
              defaultIndex={0}
              containerStyle={{
                height: 40,
                width: 250,
                // marginTop: 20,
                // marginBottom: 50,
              }}
              onChangeItem={(item) => console.log(item.label, item.value)}
            />
          </View>

          <View
            style={{
              width: 250,
              marginTop: 20,
              marginBottom: 10,
            }}>
            <DropDownPicker
              items={[
                {label: 'Living room', value: 'Living room'},
                {label: 'Bedroom', value: 'Bedroom'},
                {label: 'Kitchen', value: 'Kitchen'},
                {label: 'Bathroom', value: 'Bathroom'},
              ]}
              defaultIndex={0}
              containerStyle={{
                height: 40,
                width: 250,
                // marginTop: 20,
                // marginBottom: 50,
              }}
              onChangeItem={(item) => console.log(item.label, item.value)}
            />
          </View>

          <View style={{width: 250, marginTop: 10, marginBottom: 10}}>
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
              placeholder="length"
            />
          </View>

          <View style={{width: 250, marginTop: 10, marginBottom: 10}}>
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
              placeholder="Width"
            />
          </View>
          <Pressable
            style={styles.pressable1}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.submitModal}>Submit</Text>
          </Pressable>
          <Pressable
            style={styles.pressable2}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.cancelModal}>Cancel</Text>
          </Pressable>
        </CustomModal>
      ) : (
        <View></View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  submitView: {
    backgroundColor: '#ff8c00',
    width: 100,
    height: 40,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addRoom: {
    backgroundColor: '#ff8c00',
    width: 100,
    height: 40,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  pressable1: {
    backgroundColor: '#ff8c00',
    marginTop: 10,
    height: 40,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  pressable2: {
    backgroundColor: 'white',
    marginTop: 10,
    height: 40,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  submitModal: {
    fontFamily: 'aerial',
    fontSize: 16,
    color: 'white',
  },
  cancelModal: {
    fontFamily: 'aerial',
    fontSize: 16,
    color: 'black',
  },
});
