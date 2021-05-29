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
import HeaderProgress from '../CustomComponents/HeaderProgress';

export default function RoomWise(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [rowData, setData] = useState({});
  const [array, setArray] = useState([]);
  return (
    <View style={styles.container}>
      <HeaderProgress />
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
            <Text style={{fontFamily: 'aerial', fontSize: 18, color: 'white'}}>
              Add Room
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
          <Text style={{fontFamily: 'aerial', fontSize: 15}}>Details</Text>
        </View>
        <View>
          <Text style={{fontFamily: 'aerial', fontSize: 15}}>Length</Text>
        </View>
        <View>
          <Text style={{fontFamily: 'aerial', fontSize: 15}}>Breadth</Text>
        </View>
        <View>
          <Text style={{fontFamily: 'aerial', fontSize: 15}}>Area</Text>
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
        <TableRow></TableRow>
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
            height: 50,
          }}
          onPress={() => props.navigation.navigate('StartInspection')}>
          <Text style={{fontFamily: 'aerial', fontSize: 18, color: 'white'}}>
            SUBMIT
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
            <Text>Details</Text>
          </View>

          <View style={{width: 250}}>
            <TextInput
              value={rowData.details}
              onChangeText={(text) => {
                setData({...rowData, details: text});
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
              placeholder="Details"
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              width: 240,
              marginTop: 15,
            }}>
            <Text>Length</Text>
          </View>

          <View
            style={{
              width: 250,
            }}>
            <TextInput
              value={rowData.length}
              onChangeText={(text) => {
                setData({...rowData, length: text});
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
              placeholder="Length"
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              width: 240,
              marginTop: 15,
            }}>
            <Text>Breadth</Text>
          </View>

          <View style={{width: 250}}>
            <TextInput
              value={rowData.breadth}
              onChangeText={(text) => {
                setData({...rowData, breadth: text});
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
              placeholder="Breadth"
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              width: 240,
              marginTop: 15,
            }}>
            <Text>Area</Text>
          </View>

          <View style={{width: 250}}>
            <TextInput
              value={rowData.area}
              onChangeText={(text) => {
                setData({...rowData, area: text});
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
              placeholder="Area"
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
            <Text style={styles.cancelModal}>Cancel</Text>
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
        {props.item ? <Text>{props.item.details}</Text> : <Text></Text>}
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
        {props.item ? <Text>{props.item.length}</Text> : <Text></Text>}
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
        {props.item ? <Text>{props.item.breadth}</Text> : <Text>Total</Text>}
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
        {props.item ? <Text>{props.item.area}</Text> : <Text></Text>}
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
    fontFamily: 'aerial',
    fontSize: 16,
    color: 'white',
  },
  cancelModal: {
    fontFamily: 'aerial',
    fontSize: 16,
    color: 'black',
  },
});
