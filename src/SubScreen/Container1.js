import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Container1() {
  const navigation = useNavigation();

  return (
    <View style={{marginTop: 15}}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('IDCard');
          }}>
          <View style={styles.idView}>
            <Image
              style={styles.idCardImage}
              source={require('../Images/colorIDCard.png')}
            />
            <Text style={{fontSize: 16, fontFamily: 'Roboto-Regular'}}>
              ID Card
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TodayVisit');
          }}>
          <View style={styles.inspectionView}>
            <Image
              style={styles.inspectionImage}
              source={require('../Images/inspectionColorful.png')}
            />
            <Text
              style={{
                fontSize: 16,
                marginLeft: '10%',
                fontFamily: 'Roboto-Regular',
              }}>
              Start Inspection
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          style={{marginTop: 30}}
          onPress={() => {
            navigation.navigate('FavouriteNote');
          }}>
          <View style={styles.favView}>
            <Image
              style={styles.favoriteNoteImage}
              source={require('../Images/favoriteNote.png')}
            />
            <Text
              style={{
                fontSize: 16,
                marginLeft: '15%',
                fontFamily: 'Roboto-Regular',
              }}>
              Favourite Note
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 30}}
          onPress={() => {
            navigation.navigate('Analytics');
          }}>
          <View style={styles.analyticsView}>
            <Image
              style={styles.analyticsImage}
              source={require('../Images/analytics.png')}
            />
            <Text style={{fontSize: 16, fontFamily: 'Roboto-Regular'}}>
              Analytics
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          style={{marginTop: 30}}
          onPress={() => {
            navigation.navigate('EmployeeSurvey');
          }}>
          <View style={styles.employeeSurveyView}>
            <Image
              style={styles.employeeSurvey}
              source={require('../Images/employeeSurvey.png')}
            />
            <Text style={{fontSize: 16, fontFamily: 'Roboto-Regular'}}>
              Employee Survey
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 30}}
          onPress={() => {
            navigation.navigate('Expense');
          }}>
          <View style={styles.expensView}>
            <Image
              style={styles.expenseImage}
              source={require('../Images/expense.png')}
            />
            <Text style={{fontSize: 16, fontFamily: 'Roboto-Regular'}}>
              Expense
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          style={{marginTop: 30}}
          onPress={() => {
            navigation.navigate('ApplyForLeave');
          }}>
          <View style={styles.applyView}>
            <Image
              style={styles.tinyLogo}
              source={require('../Images/leave.png')}
            />
            <Text style={{fontSize: 16, fontFamily: 'Roboto-Regular'}}>
              Apply for leave
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 30}}
          onPress={() => {
            navigation.navigate('ProjectUpdate');
          }}>
          <View style={styles.expensView}>
            <Image
              style={styles.projectImage}
              source={require('../Images/projectUpdate.png')}
            />
            <Text style={{fontSize: 16, fontFamily: 'Roboto-Regular'}}>
              Project Update
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={{marginTop: 30, marginHorizontal: 30, marginBottom: 20}}
          onPress={() => {
            navigation.navigate('BrokerUpdate');
          }}>
          <View style={styles.applyView}>
            <Image
              style={styles.brokerLogo}
              source={require('../Images/Broker.jpg')}
            />
            <Text style={{fontSize: 16, fontFamily: 'Roboto-Regular'}}>
              Broker Update
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container2: {
    height: '65%',
    marginTop: 10,
    marginBottom: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  TV1: {
    width: '100%',
    backgroundColor: 'white',
    height: 140,
    borderRadius: 5,
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    borderRadius: 8,
    borderColor: '#ffa500',
    borderWidth: 2,
    paddingBottom: 5,
    marginLeft: 20,
  },
  idCardImage: {
    width: 100,
    height: 75,
    marginLeft: '18%',
  },
  inspectionImage: {
    width: 65,
    height: 65,
    marginBottom: 10,
  },
  appointmentImage: {
    width: 75,
    height: 75,
    marginLeft: '40%',
  },
  analyticsImage: {
    width: 65,
    height: 65,
    marginLeft: '45%',
    marginTop: '8%',
  },
  expenseImage: {
    width: 70,
    height: 85,
    marginLeft: 60,
  },
  employeeSurvey: {
    width: 80,
    height: 80,
    marginLeft: '35%',
  },
  tinyLogo: {
    width: 65,
    height: 65,
    marginLeft: '50%',
  },
  favoriteNoteImage: {
    width: 40,
    height: 70,
  },
  idView: {
    backgroundColor: 'white',
    height: 120,
    width: 135,
    borderRadius: 5,
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderRadius: 8,
    borderColor: '#ffa500',
    borderWidth: 2,
    // paddingLeft: 7,
    paddingBottom: 5,
    // marginLeft: 20,
    padding: 2,
  },
  inspectionView: {
    backgroundColor: 'white',
    height: 120,
    width: 135,
    borderRadius: 5,
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderRadius: 8,
    borderColor: '#ffa500',
    borderWidth: 2,
    // paddingLeft: 7,
    paddingBottom: 5,
    // marginLeft: 20,
    // marginRight: 20,
    padding: 2,
  },
  favView: {
    backgroundColor: 'white',
    height: 120,
    width: 135,
    borderRadius: 5,
    alignItems: 'center',
    flexWrap: 'wrap',
    borderRadius: 8,
    borderColor: '#ffa500',
    borderWidth: 2,
    paddingBottom: 5,
    // marginLeft: 20,
    justifyContent: 'center',
    padding: 2,
  },
  projView: {
    backgroundColor: 'white',
    height: 120,
    width: 135,
    borderRadius: 5,
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    borderRadius: 8,
    borderColor: '#ffa500',
    borderWidth: 2,
    // paddingLeft: 7,
    paddingBottom: 5,
    // marginLeft: 20,
    // marginRight: 20,
    justifyContent: 'center',
    padding: 2,
  },
  analyticsView: {
    backgroundColor: 'white',
    height: 120,
    width: 135,

    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    borderRadius: 8,
    borderColor: '#ffa500',
    borderWidth: 2,
    // paddingLeft: 7,
    paddingBottom: 5,
    // marginLeft: 20,
    justifyContent: 'center',
    padding: 2,
  },
  appointmentView: {
    backgroundColor: 'white',
    height: 120,
    width: 135,
    borderRadius: 8,
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderColor: '#ffa500',
    borderWidth: 2,
    // paddingLeft: 7,
    padding: 2,
    // marginLeft: 20,
    // marginRight: 20,
  },
  employeeSurveyView: {
    backgroundColor: 'white',
    height: 120,
    width: 135,
    borderRadius: 5,
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderRadius: 8,
    borderColor: '#ffa500',
    borderWidth: 2,
    // paddingLeft: 7,
    paddingBottom: 5,
    // marginLeft: 20,
    padding: 2,
  },
  expensView: {
    backgroundColor: 'white',
    height: 120,
    width: 135,
    borderRadius: 5,
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderRadius: 8,
    borderColor: '#ffa500',
    borderWidth: 2,
    padding: 2,
    // marginLeft: 20,
    // marginRight: 20,
  },
  applyView: {
    backgroundColor: 'white',
    height: 120,
    width: 135,
    borderRadius: 5,
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderRadius: 8,
    borderColor: '#ffa500',
    borderWidth: 2,
    paddingBottom: 5,
    // marginRight: 100,
    padding: 2,
  },
  projectImage: {
    width: 70,
    height: 75,
    marginLeft: 60,
  },
  brokerLogo: {
    width: 90,
    height: 75,
    marginLeft: 40,
  },
});
