import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {IconButton, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

export default function ApplyForLeave(props) {
  const navigation = useNavigation();
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
            Libra Valuers
          </Text>
        </View>
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
        <Text style={{fontSize: 19, fontFamily: 'Roboto-Regular'}}>
          Apply For Leave
        </Text>
      </View>
      <View style={styles.mainView}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginLeft: 15,
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 10,
            marginTop: 30,
          }}>
          <View style={{marginTop: 15, marginLeft: 5}}>
            <Icon name="calendar" size={25} />
          </View>

          <TextInput
            style={{
              width: '82%',
              height: 40,
              borderRadius: 15,
              marginBottom: 5,
              backgroundColor: 'white',
              marginTop: 10,
            }}
            backgroundColor="white"
            color="#3A1292"
            placeholder="Enter Date"
          />
        </View>
        <View
          style={{
            width: '85%',
            height: '50%',
            borderRadius: 15,
            marginBottom: 5,
            backgroundColor: 'white',
            marginTop: 10,
            marginLeft: 20,
            borderWidth: 1,
            borderColor: 'black',
          }}>
          <TextInput
            style={{
              width: '82%',
              height: 40,
              borderRadius: 15,
              marginBottom: 5,
              backgroundColor: 'white',
              marginTop: 10,
            }}
            color="#3A1292"
            backgroundColor="white"
            placeholder="Reason for leave"
            multiline={true}
          />
        </View>
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
          onPress={() => props.navigation.navigate('Home')}>
          <Text
            style={{
              fontFamily: 'Roboto-Regular',
              fontSize: 18,
              color: 'white',
            }}>
            SUBMIT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'blue',
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
  },
  mainView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    padding: 10,
    backgroundColor: 'white',
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 60,
    borderColor: '#ff8c00',
    borderWidth: 5,
  },
});
