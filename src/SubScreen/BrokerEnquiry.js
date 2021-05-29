import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import HeaderProgress from '../CustomComponents/HeaderProgress';

export default function BrokerEnquiry(props) {
  return (
    <View style={styles.container}>
      <HeaderProgress />
      <View style={styles.mainView}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Text style={{fontSize: 18, fontFamily: 'Roboto-Bold'}}> Name: </Text>
          <Text style={{fontFamily: 'Roboto-Regular', fontSize: 15}}>
            Yash Chopra
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Text style={{fontSize: 18, fontFamily: 'Roboto-Bold'}}>
            {' '}
            Email:{' '}
          </Text>
          <Text style={{fontFamily: 'Roboto-Regular', fontSize: 15}}>
            Yashchopra009@gmail.com
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Text style={{fontSize: 18, fontFamily: 'Roboto-Bold'}}>
            {' '}
            Contact:{' '}
          </Text>
          <Text style={{fontFamily: 'Roboto-Regular', fontSize: 15}}>
            8465722546
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
