import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {View, Text, StyleSheet, TouchableOpacity, Switch} from 'react-native';
import {DataTable, IconButton, TextInput} from 'react-native-paper';
import * as Progress from 'react-native-progress';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomModal from '../CustomComponents/CustomModal';

const sampleArray = [
  {
    No: '1',
    Name: 'Tejas Chavan',
    Address: ' Flat 107,Santacruz east, Mumbai 400055',
    TypeOfCase: 'XYZ',
    BankName: 'ICICI Bank',
    ConName: 'Sejal',
    ConNum: '8567114556',
    Instruction: 'Sample Instruction',
    Distance: '5 Km',
  },
  {
    No: '2',
    Name: 'Ravi Chavan',
    Address: ' Flat 27,Kandivali east, Mumbai 400055',
    TypeOfCase: 'XYZ',
    BankName: 'Kotak Bank',
    ConName: 'Tejas',
    ConNum: '8567122456',
    Instruction: 'Sample Instruction',
    Distance: '5 Km',
  },
  {
    No: '3',
    Name: 'Suresh Chavan',
    Address: ' Flat 7,Borivali east, Mumbai 400055',
    TypeOfCase: 'XYZ',
    BankName: 'Maharashtra Bank',
    ConName: 'Adi',
    ConNum: '8514582456',
    Instruction: 'Sample Instruction',
    Distance: '10.5 Km',
  },
  {
    No: '4',
    Name: 'Ramesh Chavan',
    Address: ' Flat 27,Kandivali east, Mumbai 400055',
    TypeOfCase: 'XYZ',
    BankName: 'BOB Bank',
    ConName: 'Mainsh',
    ConNum: '9927122456',
    Instruction: 'Sample Instruction',
    Distance: '2 Km',
  },
  {
    No: '5',
    Name: 'Suresh singh',
    Address: ' Flat 57,Kandivali east, Mumbai 400055',
    TypeOfCase: 'XYZ',
    BankName: 'Dena Bank',
    ConName: 'Mona',
    ConNum: '9927122456',
    Instruction: 'Sample Instruction',
    Distance: '2 Km',
  },
  {
    No: '6',
    Name: 'Suresh singh',
    Address: ' Flat 57,Kandivali east, Mumbai 400055',
    TypeOfCase: 'XYZ',
    BankName: 'Dena Bank',
    ConName: 'Mona',
    ConNum: '9927122456',
    Instruction: 'Sample Instruction',
    Distance: '2 Km',
  },
];

export default function TodayVisit(props) {
  const [authority1, setAuthority1] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState({});
  const [distance, setDistance] = useState(false);

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
            onPress={() => props.navigation.navigate('Home')}
          />
        </View>
        <View
          style={{
            flex: 1,
            marginRight: 90,
          }}>
          <Text
            style={{
              fontSize: 20,
              // fontWeight: 'bold',
              fontFamily: 'Roboto-Medium',
            }}>
            {' '}
            Libra Valuers{' '}
          </Text>
        </View>
      </View>

      <View style={styles.inspectionView}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              fontFamily: 'Roboto-Bold',
              fontSize: 15,
            }}>
            {' '}
            Site Inspection{' '}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}>
          <Text style={{fontFamily: 'Roboto-Medium'}}>
            {''} Done:5{''}
          </Text>
          <Text style={{fontFamily: 'Roboto-Medium'}}>
            {''}Pending:8{''}
          </Text>
        </View>
        <View
          style={{
            marginTop: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Progress.Bar progress={0.3} width={280} />
        </View>
      </View>

      {authority1 ? (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.customerDetailsView}>
            <Text style={styles.text}>
              {''}
              Customer Name:{''}
              <Text style={styles.subText}>
                {''}
                {data.Name}
                {''}
              </Text>
            </Text>
            <Text style={styles.text}>
              {''}
              Address:{''}
              <Text style={styles.subText}>
                {''}
                {data.Address}
                {''}
              </Text>
            </Text>
            <Text style={styles.text}>
              {''}
              Type of case:{' '}
              <Text style={styles.subText}>
                {''}
                {data.TypeOfCase}
                {''}
              </Text>
            </Text>
            <Text style={styles.text}>
              {''}
              Bank Name:{''}
              <Text style={styles.subText}>
                {''}
                {data.BankName}
                {''}
              </Text>
            </Text>
            <Text style={styles.text}>
              {''}
              Contact Person Name:{' '}
              <Text style={styles.subText}>
                {''}
                {data.ConName}
                {''}
              </Text>
            </Text>
            <Text style={styles.text}>
              {''}
              Contact Person No:{' '}
              <Text style={styles.subText}>
                {data.ConNum}
                {''}
              </Text>
            </Text>
            <Text style={styles.text}>
              {''}
              Instruction from Admin:{' '}
              <Text style={styles.subText}>
                {''}
                {data.Instruction}
                {''}
              </Text>
            </Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity style={styles.callPopUP}>
                <Text style={{fontFamily: 'Roboto-Medium', color: 'white'}}>
                  {''}Call{''}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.startInspectionPopUp}
                onPress={() => props.navigation.navigate('StartInspection')}>
                <Text style={{fontFamily: 'Roboto-Medium', color: 'white'}}>
                  {''}Start Inspection{''}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <View></View>
      )}

      <View
        style={{
          flex: 3,
          marginTop: 10,
        }}>
        <DataTable>
          <DataTable.Header style={{backgroundColor: '#C3CDD8'}}>
            <View
              style={{
                flex: 0.3,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
                paddingTop: 15,
              }}>
              <Text style={styles.tableHeaderText}>
                {''}Sr no{''}
              </Text>
            </View>
            <View
              style={{
                flex: 0.6,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                paddingTop: 15,
              }}>
              <Text style={styles.tableHeaderText}>
                {''}Name{''}
              </Text>
              <Text style={styles.tableHeaderText}>
                {''}Address{''}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                // alignContent: 'space-between',
                paddingTop: 15,
              }}>
              <Text style={styles.distance}>
                {''}Distance{''}
              </Text>

              <Text style={styles.tableHeaderText}>
                {''}Reschedule{''}
              </Text>
            </View>
          </DataTable.Header>

          <ScrollView>
            {sampleArray.map((res, i) => {
              return (
                <View key={i}>
                  <DataTable.Row key={i}>
                    <DataTable.Cell
                      style={{
                        flex: 1.1,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          flexWrap: 'wrap',
                        }}>
                        <Text style={{fontSize: 20, fontFamily: 'Roboto-Bold'}}>
                          {''}
                          {res.No}
                          {''}
                        </Text>
                        <CheckBox
                          value={authority1 && current === i ? true : false}
                          onValueChange={(newValue) => {
                            setAuthority1(newValue);
                            setCurrent(i);
                            setData({...res});
                          }}
                        />
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell
                      style={{
                        flex: 0.9,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={{fontFamily: 'Roboto-Bold', fontSize: 13}}>
                        {''}
                        {res.Name}{' '}
                      </Text>
                    </DataTable.Cell>

                    <DataTable.Cell numberOfLines={5} style={{flex: 1.3}}>
                      <Text style={{fontSize: 13, fontFamily: 'Roboto-Bold'}}>
                        {''}
                        {res.Address}
                        {''}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{flex: 1, justifyContent: 'center'}}>
                      <IconButton
                        icon="map-marker"
                        color="red"
                        size={30}
                        onPress={() => console.log('Pressed')}
                      />
                    </DataTable.Cell>
                    <DataTable.Cell style={{flex: 1, justifyContent: 'center'}}>
                      {distance ? (
                        <Text style={{fontFamily: 'Roboto-Bold', fontSize: 13}}>
                          {''}
                          {res.Distance}
                          {''}
                        </Text>
                      ) : (
                        <View></View>
                      )}
                    </DataTable.Cell>

                    <DataTable.Cell style={{flex: 1, justifyContent: 'center'}}>
                      <IconButton
                        icon="calendar-month"
                        size={26}
                        color="orange"
                        onPress={() => setModalVisible(true)}
                      />
                    </DataTable.Cell>
                  </DataTable.Row>
                </View>
              );
            })}
          </ScrollView>
        </DataTable>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
          height: '20%',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#ff8c00',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
          }}
          onPress={() => setDistance(true)}>
          <Text
            style={{
              fontFamily: 'Roboto-Medium',
              fontSize: 18,
              color: 'white',
            }}>
            {''}
            Check distance from current location{''}
          </Text>
        </TouchableOpacity>
      </View>
      {modalVisible ? (
        <CustomModal open={modalVisible}>
          <View style={{marginBottom: 20}}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Roboto-Bold',
              }}>
              {''}
              Reschedule Visit{''}
            </Text>
          </View>

          <Text style={{fontFamily: 'Roboto-Medium', fontSize: 15}}>
            {''}
            New Visit Date{''}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginLeft: 15,
            }}>
            <View
              style={{
                backgroundColor: 'white',
                height: 40,
                marginTop: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="calendar" size={25} />
            </View>

            <TextInput
              style={{
                width: '90%',
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
              width: 260,
              height: 100,
              borderRadius: 15,
              marginBottom: 5,
              backgroundColor: 'white',
              marginTop: 10,
              marginLeft: 20,
            }}>
            <TextInput
              color="#3A1292"
              backgroundColor="white"
              placeholder="Reason for reschedule"
              multiline={true}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              // marginLeft: 30,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
              marginBottom: 10,
            }}>
            <Text style={{fontSize: 17, fontFamily: 'Roboto-Medium'}}>
              {''}
              Visit Failed :{''}
            </Text>

            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          {isEnabled ? (
            <View
              style={{
                width: 260,
                height: 100,
                borderRadius: 15,
                marginBottom: 5,
                backgroundColor: 'white',
                marginTop: 10,
                marginLeft: 20,
              }}>
              <TextInput
                color="#3A1292"
                backgroundColor="white"
                placeholder="Reason for visit fail"
                multiline={true}
              />
            </View>
          ) : null}

          <TouchableOpacity
            style={[styles.button, styles.uploadButton]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text
              style={{
                fontFamily: 'Roboto-Medium',
                color: 'black',
                fontSize: 15,
              }}>
              {''}
              Upload Image{''}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.submitButton, styles.submit]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text
              style={{
                fontFamily: 'Roboto-Medium',
                color: 'white',
                fontSize: 15,
              }}>
              {''}
              Submit{''}
            </Text>
          </TouchableOpacity>
        </CustomModal>
      ) : (
        <View></View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  inspectionView: {
    width: '95%',
    marginTop: 10,
    backgroundColor: 'white',
    borderWidth: 5,
    borderRadius: 30,
    marginLeft: 10,
    marginRight: 10,
    borderColor: '#ff8c00',
    padding: 10,
  },
  input: {
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 5,
    marginTop: 5,
    borderRadius: 10,
  },
  tableHeaderText: {
    fontSize: 13,
    fontFamily: 'Roboto-Bold',
  },
  distance: {
    fontSize: 13,
    fontFamily: 'Roboto-Bold',
    marginRight: 5,
  },
  uploadButton: {
    backgroundColor: 'white',
  },
  submitButton: {
    backgroundColor: '#ff8c00',
  },
  submit: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
  },
  customerDetailsView: {
    width: '95%',
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 5,
    borderWidth: 4,
    borderColor: '#ff8c00',
  },
  text: {
    fontFamily: 'Roboto-Bold',
    fontSize: 15,
    paddingBottom: 2,
    marginLeft: 10,
    color: 'black',
    paddingTop: 3,
    paddingBottom: 3,
  },
  subText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 13,
  },
  callPopUP: {
    backgroundColor: 'green',
    width: 120,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  startInspectionPopUp: {
    backgroundColor: '#ff8c00',
    width: 120,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});
