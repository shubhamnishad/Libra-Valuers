import React from 'react';
import {Dimensions} from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import Container1 from '../SubScreen/Container1';
import DateTime from '../Utilities/DateTime';
import Compass from '../Utilities/Compass';

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <View style={styles.symbolView}>
            <Text style={{fontSize: 20, fontFamily: 'aerial'}}>Symbol</Text>
          </View>
          <Text style={styles.libraViews}> Libra Valuers </Text>
          <View
            style={{
              width: 118,
              height: 118,
              borderRadius: 118 / 2,
              borderWidth: 2,
              borderColor: '#ff8c00',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Compass />
          </View>
        </View>
        <View>
          <DateTime></DateTime>
        </View>
        <View style={styles.lastContainer}>
          <Container1></Container1>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#ff8c00',
    borderRadius: 20,
    marginTop: '10%',
    marginBottom: '10%',
  },
  topContainer: {
    marginBottom: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 2,
  },
  middleContainer: {
    backgroundColor: '#ff8c00',
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lastContainer: {
    marginTop: 10,
    flex: 0.2,
  },
  TouchableOpacity: {
    margin: 20,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
  },
  extraStyle: {
    paddingLeft: 45,
    fontSize: 18,
  },
  dateandtime: {
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'bold',
    color: 'white',
    marginLeft: 15,
    marginRight: 15,
  },
  profile: {
    width: 70,
    height: 80,
    marginBottom: 20,
    marginHorizontal: 30,
    marginTop: 6,
  },
  compassLogo: {
    width: 118,
    height: 118,
    borderRadius: 118 / 2,
    borderWidth: 2,
    borderColor: '#ff8c00',
    marginRight: 5,
  },
  libraViews: {
    fontSize: 19,
    marginTop: 2,
    alignSelf: 'center',
    marginLeft: 5,
    marginRight: 5,
    fontFamily: 'aerial',
  },
  symbolView: {
    width: 118,
    height: 118,
    borderRadius: 118 / 2,
    borderWidth: 2,
    borderColor: '#ff8c00',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
