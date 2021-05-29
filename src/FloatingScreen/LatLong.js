import React, {useState} from 'react';
import {TextInput} from 'react-native';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import HeaderProgress from '../CustomComponents/HeaderProgress';
import MapView, {Marker} from 'react-native-maps';
import {useSelector} from 'react-redux';
import {useNetInfo} from '@react-native-community/netinfo';
import {Picker} from '@react-native-picker/picker';
import {IconButton} from 'react-native-paper';

export default function LatLong(props) {
  const netInfo = useNetInfo();
  const [selectedValue, setSelectedValue] = useState('Residential Area');
  const {docDescription} = useSelector((state) => state.docReducer);
  console.log('docDesciption@@@', docDescription);
  console.log('Internet', netInfo.isConnected);

  return (
    <View style={styles.container}>
      <HeaderProgress />
      <View
        style={{
          marginTop: 10,
          marginLeft: 10,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#ff8c00',
              width: 130,
              justifyContent: 'center',
              alignItems: 'center',
              height: 50,
              borderRadius: 30,
            }}>
            <Text style={{color: 'white', fontSize: 16}}> Upload Image </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginTop: 10,
          width: '100%',
          height: '50%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MapView
          style={{width: '100%', height: '100%'}}
          initialRegion={{
            latitude: 18.99324,
            longitude: 72.84771,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: 18.99324,
              longitude: 72.84771,
            }}
          />
        </MapView>
      </View>
      <ScrollView>
        <View
          style={{
            borderWidth: 5,
            borderRadius: 20,
            borderColor: '#ff8c00',
            padding: 10,
            marginBottom: 10,
            marginTop: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              padding: 5,
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 17, fontFamily: 'Roboto-Regular'}}>
              {' '}
              Long : <Text style={{fontSize: 14}}> 72.84771 </Text>
            </Text>
            <Text style={{fontSize: 17, fontFamily: 'Roboto-Regular'}}>
              {' '}
              Lat : <Text style={{fontSize: 14}}> 18.99324 </Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 17,
                paddingLeft: 5,
              }}>
              {' '}
              Project Surrounding:{' '}
            </Text>

            <Picker
              selectedValue={selectedValue}
              mode="dropdown"
              style={{
                width: '45%',
              }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }>
              <Picker.Item label="XYZ" value="XYZ" />
              <Picker.Item label="XYZ" value="XYZ" />
            </Picker>
          </View>
        </View>

        <View style={styles.remarksView}>
          <View style={styles.remarksContent}>
            <View style={{width: '80%'}}>
              <TextInput placeholder="Remark" multiline={true} />
            </View>
            <IconButton
              icon="plus"
              size={20}
              color="black"
              onPress={() => console.log('Pressed')}
            />
          </View>
        </View>

        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            props.navigation.navigate('StartInspection');
          }}>
          <View
            style={{
              backgroundColor: '#ff8c00',
              width: 100,
              justifyContent: 'center',
              alignItems: 'center',
              height: 50,
              borderRadius: 30,
              marginBottom: 10,
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
  remarksContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    borderRadius: 25,
    width: '90%',
    height: 70,
    borderWidth: 2,
    borderColor: '#ff8c00',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
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
