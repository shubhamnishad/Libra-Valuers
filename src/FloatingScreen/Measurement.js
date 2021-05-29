import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import HeaderProgress from '../CustomComponents/HeaderProgress';
import {IconButton} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';

export default function Measurement(props) {
  return (
    <View style={styles.container}>
      <HeaderProgress />
      <ScrollView>
        <TouchableOpacity
          style={{marginTop: 30}}
          onPress={() => props.navigation.navigate('AreaMeasurement')}>
          <View style={styles.genralInspetionView}>
            <Text
              style={{
                fontFamily: 'aerial',
                fontWeight: 'bold',
                fontSize: 18,
                marginLeft: 10,
                color: 'white',
              }}>
              Area
            </Text>
            <IconButton
              icon="chevron-right"
              size={25}
              color="white"
              onPress={() => console.log('Pressed')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('RoomWise')}>
          <View style={styles.genralInspetionView}>
            <Text
              style={{
                fontFamily: 'aerial',
                fontWeight: 'bold',
                fontSize: 18,
                marginLeft: 10,
                color: 'white',
              }}>
              Measured Area Room Wise
            </Text>
            <IconButton
              icon="chevron-right"
              size={25}
              color="white"
              onPress={() => console.log('Pressed')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.genralInspetionView}>
            <Text
              style={{
                fontFamily: 'aerial',
                fontWeight: 'bold',
                fontSize: 18,
                marginLeft: 10,
                color: 'white',
              }}>
              Permissible Area As Per Plan
            </Text>
            <IconButton
              icon="chevron-right"
              size={25}
              color="white"
              onPress={() => console.log('Pressed')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.genralInspetionView}>
            <Text
              style={{
                fontFamily: 'aerial',
                fontWeight: 'bold',
                fontSize: 18,
                marginLeft: 10,
                color: 'white',
              }}>
              Area Adopted For Evaluation
            </Text>
            <IconButton
              icon="chevron-right"
              size={25}
              color="white"
              onPress={() => console.log('Pressed')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.genralInspetionView}>
            <Text
              style={{
                fontFamily: 'aerial',
                fontWeight: 'bold',
                fontSize: 18,
                marginLeft: 10,
                color: 'white',
              }}>
              For Tenement
            </Text>
            <IconButton
              icon="chevron-right"
              size={25}
              color="white"
              onPress={() => console.log('Pressed')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('Sketch')}>
          <View style={styles.genralInspetionView}>
            <Text
              style={{
                fontFamily: 'aerial',
                fontWeight: 'bold',
                fontSize: 18,
                marginLeft: 10,
                color: 'white',
              }}>
              Property Sketch
            </Text>
            <IconButton icon="chevron-right" size={25} color="white" />
          </View>
        </TouchableOpacity>

        <View style={styles.remarksView}>
          <View style={styles.remarksContent}>
            <View style={{width: '80%'}}>
              <TextInput placeholder="Office Remarks" multiline={true} />
            </View>

            <IconButton
              icon="plus"
              size={22}
              color="black"
              onPress={() => console.log('Pressed')}
            />
          </View>
        </View>

        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
            marginBottom: 20,
          }}
          onPress={() => props.navigation.navigate('StartInspection')}>
          <View style={styles.submitView}>
            <Text style={{fontFamily: 'aerial', fontSize: 18, color: 'white'}}>
              SUBMIT
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
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  genralInspetionView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#ff8c00',
    marginTop: 15,
    width: '88%',
    marginLeft: 25,
    borderRadius: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 55,
  },
  remarksContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    borderRadius: 25,
    width: '90%',
    height: 100,
    borderWidth: 2,
    borderColor: '#ff8c00',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  remarksView: {
    width: '100%',
    justifyContent: 'center',
    padding: 5,
    marginTop: 30,
    alignItems: 'center',
  },
  submitView: {
    backgroundColor: '#ff8c00',
    width: 100,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
