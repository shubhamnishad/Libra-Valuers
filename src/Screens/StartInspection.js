import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, Text, TextInput} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {IconButton} from 'react-native-paper';
import {RadioButton} from 'react-native-paper';
import FABComponent from '../SampleComponents/FABComponent';
import HeaderProgress from '../CustomComponents/HeaderProgress';
import {Picker} from '@react-native-picker/picker';
export default function StartInspection(props) {
  const [checkedReportStatus, setCheckedReportStatus] = React.useState('first');
  const [selectedAuthority, setSelectedAuthority] = useState('');
  const [selectedType, setSelectedType] = useState('');

  //View Color setting
  // const [color, setColor] = useState(false);
  // const [genInspecColor, setGenInspecColor] = useState(false);
  // const customerColor = color ? 'green' : 'orange';
  // const generalInspectionColor = genInspecColor ? 'green' : 'orange';

  return (
    <View style={styles.container}>
      <HeaderProgress />
      <ScrollView>
        <View style={styles.caseView}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              paddingBottom: 10,
            }}>
            <Text style={styles.caseDetailsText}>
              {` `}Case Details{` `}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.text}>
              {` `}Customer Name: {` `}
            </Text>
            <Text style={styles.subText}>
              {` `}Test{` `}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 10,
            }}>
            <Text style={styles.text}>
              {` `}Location: {` `}
            </Text>
            <Text style={styles.subText}>
              {` `}Mumbai{` `}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 10,
            }}>
            <Text style={styles.text}>
              {` `}Visit Type: {` `}
            </Text>
            <Text style={styles.subText}>
              {` `}Internal{` `}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.text}>
                {` `}Authority:{` `}
              </Text>
              <Picker
                selectedValue={selectedAuthority}
                mode="dropdown"
                style={{
                  width: 180,
                  color: 'white',
                }}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedAuthority(itemValue)
                }>
                <Picker.Item label="XYZ" value="XYZ" />
                <Picker.Item label="XYZ" value="XYZ" />
              </Picker>
            </View>
            <View
              style={{
                position: 'relative',
                bottom: 15,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: 'blue',
              }}>
              <Text style={styles.text}>
                {` `}Type:{` `}
              </Text>

              <Picker
                selectedValue={selectedType}
                mode="dropdown"
                style={{
                  width: 180,
                  color: 'white',
                }}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedType(itemValue)
                }>
                <Picker.Item label="XYZ" value="XYZ" />
                <Picker.Item label="XYZ" value="XYZ" />
              </Picker>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('CustomerDetails');
          }}>
          <View style={styles.customerDetailsView}>
            <Text
              style={{
                fontFamily: 'Roboto-Bold',
                fontSize: 18,
                marginLeft: 10,
                color: 'white',
              }}>
              {` `}
              Customer Details
              {` `}
            </Text>
            <IconButton
              icon="chevron-right"
              size={25}
              color="white"
              onPress={() => console.log('Pressed')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Documents');
          }}>
          <View style={styles.DocView}>
            <Text
              style={{
                fontFamily: 'Roboto-Bold',
                fontSize: 18,
                marginLeft: 10,
                color: 'white',
              }}>
              {` `}
              Documents
              {` `}
            </Text>
            <IconButton
              icon="chevron-right"
              size={25}
              color="white"
              onPress={() => console.log('Pressed')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('GenProjInspection');
          }}>
          <View style={styles.generalInspetionView}>
            <Text
              style={{
                fontFamily: 'Roboto-Bold',
                fontSize: 18,
                marginLeft: 10,
                color: 'white',
              }}>
              {` `}
              General Inspection
              {` `}
            </Text>
            <IconButton
              icon="chevron-right"
              size={25}
              color="white"
              onPress={() => console.log('Pressed')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('InternalInspection')}>
          <View style={styles.internalInspectionView}>
            <Text
              style={{
                fontFamily: 'Roboto-Bold',
                fontSize: 18,
                marginLeft: 10,
                color: 'white',
              }}>
              {` `}
              Internal Inspection
              {` `}
            </Text>
            <IconButton
              icon="chevron-right"
              size={25}
              color="white"
              onPress={() => console.log('Pressed')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Valuation')}>
          <View style={styles.internalInspectionView}>
            <Text
              style={{
                fontFamily: 'Roboto-Bold',
                fontSize: 18,
                marginLeft: 10,
                color: 'white',
              }}>
              {` `}
              Valuation
              {` `}
            </Text>
            <IconButton
              icon="chevron-right"
              size={25}
              color="white"
              onPress={() => console.log('Pressed')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('BrokerEnquiry')}>
          <View style={styles.internalInspectionView}>
            <Text
              style={{
                fontFamily: 'Roboto-Bold',
                fontSize: 18,
                marginLeft: 10,
                color: 'white',
              }}>
              {` `}
              Broker Enquiry
              {` `}
            </Text>
            <IconButton
              icon="chevron-right"
              size={25}
              color="white"
              onPress={() => console.log('Pressed')}
            />
          </View>
        </TouchableOpacity>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={{fontSize: 20, fontFamily: 'Roboto-Regular'}}>
            {` `}
            Remarks
            {` `}
          </Text>

          <View style={styles.remarksView}>
            <View style={styles.remarksContent}>
              <View style={{width: '70%'}}>
                <TextInput placeholder="Office Remarks" />
              </View>
              <IconButton
                icon="plus"
                size={20}
                color="black"
                onPress={() => console.log('Pressed')}
              />
            </View>
            <View style={styles.remarksContent}>
              <View style={{width: '70%'}}>
                <TextInput placeholder="Bank MIS" />
              </View>
              <IconButton
                icon="plus"
                size={20}
                color="black"
                onPress={() => console.log('Pressed')}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#ff8c00',
            borderRadius: 30,
            padding: 5,
            marginTop: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Roboto-Bold',
                fontSize: 18,
                marginTop: 2,
                color: 'white',
              }}>
              {` `}
              Report Status:
              {` `}
            </Text>
            <RadioButton
              value="first"
              status={checkedReportStatus === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setCheckedReportStatus('first')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 17,
                marginTop: 4,
                color: 'white',
              }}>
              {` `}
              Positive
              {` `}
            </Text>
            <RadioButton
              value="second"
              status={
                checkedReportStatus === 'second' ? 'checked' : 'unchecked'
              }
              onPress={() => setCheckedReportStatus('second')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 17,
                marginTop: 4,
                color: 'white',
              }}>
              {` `}
              Negative
              {` `}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 30,
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#ff8c00',
                width: 110,
                height: 40,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 20,
                padding: 5,
              }}>
              <Text
                style={{
                  fontFamily: 'Roboto-Regular',
                  color: 'white',
                  fontSize: 17,
                }}>
                {` `}
                View Report
                {` `}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#ff8c00',
                width: 100,
                height: 40,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 20,
                padding: 5,
              }}>
              <Text
                style={{
                  fontFamily: 'Roboto-Regular',
                  color: 'white',
                  fontSize: 17,
                }}>
                {` `}
                Submit
                {` `}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <FABComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inspectionView: {
    width: '100%',
    marginTop: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    borderRadius: 20,
    borderWidth: 5,
    borderColor: 'orange',
    padding: 5,
  },
  caseDetailsText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    color: 'white',
  },
  text: {
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    marginLeft: 10,
    color: 'white',
  },
  subText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: 'white',
  },
  caseView: {
    width: '90%',
    marginLeft: 20,
    marginTop: 10,
    backgroundColor: '#ff8c00',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderRadius: 30,
  },
  customerDetailsView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#ff8c00',
    marginTop: 15,
    width: '88%',
    marginLeft: 25,
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  DocView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#ff8c00',
    marginTop: 15,
    width: '88%',
    marginLeft: 25,
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  generalInspetionView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#ff8c00',
    marginTop: 15,
    width: '88%',
    marginLeft: 25,
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  internalInspectionView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#ff8c00',
    marginTop: 15,
    width: '88%',
    marginLeft: 25,
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  remarksContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    borderRadius: 25,
    width: '47%',
    height: 60,
    borderWidth: 2,
    borderColor: '#ff8c00',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  remarksView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 5,
  },
});
