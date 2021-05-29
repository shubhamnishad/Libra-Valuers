import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {IconButton} from 'react-native-paper';

export default function IDCard(props) {
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
              fontSize: 18,
              fontWeight: 'bold',
              fontFamily: 'aerial',
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
          ID Card{' '}
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          marginTop: 10,
          padding: 10,
          backgroundColor: 'white',
          marginLeft: 5,
          marginRight: 5,
          borderRadius: 60,
          borderColor: '#ff8c00',
          borderWidth: 5,
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: 'lightgrey',
              width: 150,
              height: 150,
              borderRadius: 150 / 2,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Text style={{fontFamily: 'Roboto-Regular'}}> photo </Text>
          </View>
        </View>

        <View style={{marginTop: 20}}>
          <Text
            style={{
              fontSize: 20,
              padding: 2,
              marginTop: 10,
              padding: 10,
              fontFamily: 'Roboto-Bold',
            }}>
            {' '}
            Client Name: {''}
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 18}}>
              {' '}
              Shubxxx Nixxxx
            </Text>{' '}
          </Text>

          <Text
            style={{
              fontFamily: 'Roboto-Bold',
              fontSize: 20,
              padding: 10,
              // marginTop: 20,
            }}>
            {' '}
            Email:{' '}
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 18}}>
              {' '}
              Xyz@gmail.com{' '}
            </Text>
          </Text>

          <Text
            style={{
              fontFamily: 'Roboto-Bold',
              fontSize: 20,
              padding: 10,
              // marginTop: 20,
            }}>
            {' '}
            Contact No:{' '}
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 18}}>
              {' '}
              98xxx452xx{' '}
            </Text>
          </Text>

          <Text
            style={{
              fontFamily: 'Roboto-Bold',
              fontSize: 20,
              padding: 10,
              // marginTop: 20,
            }}>
            {' '}
            Address:{' '}
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 18}}>
              {' '}
              XXXXXXXXXXX{' '}
            </Text>
          </Text>

          <Text
            style={{
              fontFamily: 'Roboto-Bold',
              fontSize: 20,
              padding: 10,
              // marginTop: 20,
            }}>
            {' '}
            KYC:{' '}
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 18}}>
              {' '}
              XXXXXXXX{' '}
            </Text>
          </Text>
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
            BACK{' '}
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
  reportView: {
    flex: 0.1,
    padding: 2,
    backgroundColor: '#ff8c00',
    justifyContent: 'center',
    alignContent: 'center',
  },
  idView: {
    fontSize: 22,
    paddingTop: 30,
    marginLeft: 180,
    color: 'black',
  },
});
