import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import CompassInternal from '../Utilities/CompassInternal';
import * as Progress from 'react-native-progress';

export default function HeaderProgress(props) {
  const navigation = useNavigation();

  return (
    <View>
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

      <View style={styles.inspectionView}>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.inspectionText}> Inspection Status </Text>
          <Text style={styles.inspectionText}> TAT: Priority </Text>
        </View>
        <View style={{marginTop: 5}}>
          <Progress.Circle
            size={48}
            progress={0.8}
            showsText={true}
            thickness={4}
            color="#CC7417"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inspectionView: {
    width: '100%',
    marginTop: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#ff8c00',
    padding: 5,
  },
  inspectionText: {
    fontSize: 19,
    paddingBottom: 5,
    color: 'black',
    fontFamily: 'Roboto-Regular',
  },
});
