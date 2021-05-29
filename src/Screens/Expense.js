import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Modal,
  TextInput,
  Pressable,
} from 'react-native';
import CustomModal from '../CustomComponents/CustomModal';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

export default function Expense(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [rowData, setData] = useState({});
  const [array, setArray] = useState([]);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
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
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'flex-end',
          marginTop: 10,
        }}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}
          onPress={() => setModalVisible(true)}>
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
          flexDirection: 'row',
          flexWrap: 'wrap',
          backgroundColor: 'lightgrey',
          justifyContent: 'space-around',
          marginTop: 20,
          height: 40,
          alignItems: 'center',
          alignContent: 'center',
        }}>
        <View>
          <Text style={{fontFamily: 'Roboto-Regular', fontSize: 15}}>
            {' '}
            Case No{' '}
          </Text>
        </View>
        <View>
          <Text style={{fontFamily: 'Roboto-Regular', fontSize: 15}}>
            {' '}
            Amount{' '}
          </Text>
        </View>
        <View>
          <Text style={{fontFamily: 'Roboto-Regular', fontSize: 15}}>
            {' '}
            Reason{' '}
          </Text>
        </View>
      </View>

      <ScrollView>
        {array.map((res, i) => {
          return (
            <View key={i}>
              {res ? <TableRow item={res}></TableRow> : <View></View>}
            </View>
          );
        })}
      </ScrollView>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#ff8c00',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
            width: 100,
            borderRadius: 20,
            height: 40,
          }}
          onPress={() => props.navigation.navigate('Home')}>
          <Text
            style={{
              fontFamily: 'Roboto-Regular',
              fontSize: 19,
              color: 'white',
            }}>
            {' '}
            SUBMIT{' '}
          </Text>
        </TouchableOpacity>
      </View>

      {modalVisible ? (
        <CustomModal open={modalVisible}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              width: 240,
            }}>
            <Text style={{fontFamily: 'Roboto-Regular'}}>Case No</Text>
          </View>

          <View style={{width: 250}}>
            <TextInput
              value={rowData.details}
              onChangeText={(text) => {
                setData({...rowData, Case: text});
              }}
              style={{
                width: '100%',
                height: 40,
                borderRadius: 15,
                marginBottom: 5,
                backgroundColor: 'white',
                marginTop: 2,
              }}
              backgroundColor="white"
              color="#3A1292"
              placeholder="Case No"
              keyboardType="number-pad"
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              width: 240,
              marginTop: 15,
            }}>
            <Text style={{fontFamily: 'Roboto-Regular'}}> Amount </Text>
          </View>

          <View
            style={{
              width: 250,
            }}>
            <TextInput
              value={rowData.length}
              onChangeText={(text) => {
                setData({...rowData, Amount: text});
                console.log('********', rowData);
              }}
              style={{
                width: '100%',
                height: 40,
                borderRadius: 15,
                marginBottom: 5,
                backgroundColor: 'white',
                marginTop: 2,
              }}
              textAlignVertical="top"
              multiline={true}
              backgroundColor="white"
              color="#3A1292"
              placeholder="Amount"
              keyboardType="number-pad"
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              width: 240,
              marginTop: 15,
            }}>
            <Text style={{fontFamily: 'Roboto-Regular'}}> Reason </Text>
          </View>

          <View style={{width: 250}}>
            <TextInput
              value={rowData.breadth}
              onChangeText={(text) => {
                setData({...rowData, Reason: text});
              }}
              style={{
                width: '100%',
                height: 40,
                borderRadius: 15,
                marginBottom: 5,
                backgroundColor: 'white',
                marginTop: 2,
              }}
              backgroundColor="white"
              color="#3A1292"
              placeholder="Reason"
            />
          </View>

          <Pressable
            style={styles.pressable1}
            onPress={() => {
              setArray([...array, rowData]);
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.submitModal}>Submit</Text>
          </Pressable>
          <Pressable
            style={styles.pressable2}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.cancelModal}> Cancel </Text>
          </Pressable>
        </CustomModal>
      ) : (
        <View></View>
      )}
    </View>
  );
}

const TableRow = (props) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View
        style={{
          // height: 50,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'black',
          borderWidth: 0.5,
        }}>
        {props.item ? <Text> {props.item.Case} </Text> : <Text></Text>}
      </View>
      <View
        style={{
          // height: 50,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'black',
          borderWidth: 0.5,
        }}>
        {props.item ? <Text> {props.item.Amount} </Text> : <Text></Text>}
      </View>
      <View
        style={{
          // height: 50,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'black',
          borderWidth: 0.5,
        }}>
        {props.item ? <Text> {props.item.Reason} </Text> : <Text></Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
  },
  addRoom: {
    backgroundColor: '#ff8c00',
    width: 100,
    height: 40,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    // width: '85%',
    // height: '60%',
    margin: 20,
    backgroundColor: `#E5EBF0`,
    borderRadius: 60,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    borderColor: 'orange',
    borderWidth: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  pressable1: {
    backgroundColor: '#ff8c00',
    marginTop: 10,
    height: 40,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  pressable2: {
    backgroundColor: 'white',
    marginTop: 10,
    height: 40,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  submitModal: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: 'white',
  },
  cancelModal: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: 'black',
  },
});
