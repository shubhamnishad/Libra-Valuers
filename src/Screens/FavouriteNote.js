import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import HeaderProgress from '../CustomComponents/HeaderProgress';
import {useNavigation} from '@react-navigation/native';
import {IconButton} from 'react-native-paper';

export default function FavouriteNote(props) {
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
            {' '}
            Libra Valuers{' '}
          </Text>
        </View>
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
        <Text style={{fontSize: 19, fontFamily: 'Roboto-Regular'}}>
          {' '}
          Favourite Note{' '}
        </Text>
      </View>
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
          }}>
          <View style={styles.addRoom}>
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 18,
                color: 'white',
              }}>
              {' '}
              Add{' '}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
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
        }}></View>

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
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addRoom: {
    backgroundColor: '#ff8c00',
    width: 100,
    height: 40,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});
