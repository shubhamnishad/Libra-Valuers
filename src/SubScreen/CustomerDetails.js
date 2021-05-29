import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Pressable,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {RadioButton, IconButton} from 'react-native-paper';
import HeaderProgress from '../CustomComponents/HeaderProgress';
import CustomModal from '../CustomComponents/CustomModal';

export default function CustomerDetails(props) {
  const [modalVisible, setModalVisible] = useState(false);

  const [checkedAddress, setCheckedAddress] = React.useState('first');
  const [checkedName, setCheckedName] = React.useState('first');
  const [checkedPlate, setCheckedPlate] = React.useState('first');

  return (
    <View style={styles.container}>
      <HeaderProgress />
      <ScrollView>
        <View style={styles.customerDetailsView}>
          <Text style={styles.customerDetailsText}>
            {` `}Customer Details{` `}
          </Text>
          <Text style={styles.text}>
            {` `}
            Customer Name:{` `} <Text style={styles.subText}>Test</Text>
          </Text>
          <Text style={styles.text}>
            {` `}
            Address:{' '}
            <Text style={styles.subText}>
              {` `}5/6 Royal garden, near royal college Mira road East, Mumbai
              400055{` `}
            </Text>
          </Text>
          <Text style={styles.text}>
            {` `} Contact Person: {` `}
            <Text style={styles.subText}>
              {` `}Tejas{` `}
            </Text>
          </Text>
          <Text style={styles.text}>
            {` `}Cell No:{` `}
            <Text style={styles.subText}>
              {` `}8214633524{` `}
            </Text>
          </Text>
          <Text style={styles.text}>
            {` `}
            Instruction from Admin:{' '}
            <Text style={styles.subText}>
              {` `}Sample Instruction{` `}
            </Text>
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <IconButton
              icon="pencil"
              size={25}
              color="black"
              onPress={() => setModalVisible(true)}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 10,
            padding: 5,
          }}>
          <Text
            style={{
              fontFamily: 'Roboto-Bold',
              fontSize: 17,
              marginTop: 5,
            }}>
            {` `}Site Address Matching :{' '}
          </Text>
          <RadioButton
            value="first"
            status={checkedAddress === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedAddress('first')}
          />
          <Text
            style={{
              fontFamily: 'Roboto-Regular',
              fontSize: 17,
              marginTop: 5,
            }}>
            {` `}Yes{` `}
          </Text>

          <RadioButton
            value="second"
            status={checkedAddress === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedAddress('second')}
          />
          <Text
            style={{
              fontFamily: 'Roboto-Regular',
              fontSize: 17,
              marginTop: 5,
            }}>
            {` `}No{` `}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 10,
            padding: 5,
          }}>
          <Text
            style={{
              fontFamily: 'Roboto-Bold',
              fontSize: 17,
              marginTop: 5,
            }}>
            {` `}Customer Name Matching :{' '}
          </Text>

          <RadioButton
            value="first"
            status={checkedName === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedName('first')}
          />
          <Text
            style={{
              fontFamily: 'Roboto-Regular',
              fontSize: 17,
              marginTop: 5,
            }}>
            {` `}Yes{` `}
          </Text>
          <RadioButton
            value="second"
            status={checkedName === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedName('second')}
          />
          <Text
            style={{
              fontFamily: 'Roboto-Regular',
              fontSize: 17,
              marginTop: 5,
            }}>
            {` `}No{` `}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            // backgroundColor: 'orange',
            marginTop: 10,
            padding: 5,
          }}>
          <Text
            style={{
              fontFamily: 'Roboto-Bold',
              fontSize: 17,
              marginTop: 5,
            }}>
            {` `}Name Plate Matching :{' '}
          </Text>
          <RadioButton
            value="first"
            status={checkedPlate === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedPlate('first')}
          />
          <Text
            style={{
              fontFamily: 'Roboto-Regular',
              fontSize: 17,
              marginTop: 5,
            }}>
            {` `}Yes{` `}
          </Text>

          <RadioButton
            value="second"
            status={checkedPlate === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedPlate('second')}
          />
          <Text
            style={{
              fontFamily: 'Roboto-Regular',
              fontSize: 17,
              marginTop: 5,
            }}>
            {` `}No{` `}
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Roboto-Regular',
            }}>
            {` `}Remarks{` `}
          </Text>

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
              marginTop: 40,
            }}
            onPress={() => props.navigation.navigate('StartInspection')}>
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 18,
                color: 'white',
              }}>
              {` `}
              SUBMIT{` `}
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
              <Text style={{fontFamily: 'Roboto-Medium'}}>
                {` `}Customer Name{` `}
              </Text>
            </View>

            <View style={{width: 250}}>
              <TextInput
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
                placeholder="Name"
                defaultValue="Tejas"
                editable={false}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                width: 240,
                marginTop: 5,
              }}>
              <Text style={{fontFamily: 'Roboto-Medium'}}>
                {` `}Address{` `}
              </Text>
            </View>

            <View
              style={{
                width: 250,
              }}>
              <TextInput
                style={{
                  width: '100%',
                  height: 90,
                  borderRadius: 15,
                  marginBottom: 5,
                  backgroundColor: 'white',
                  marginTop: 2,
                }}
                textAlignVertical="top"
                multiline={true}
                backgroundColor="white"
                color="#3A1292"
                placeholder="Address"
                defaultValue="5/9 Royal garden, mira road east, Mumbai 400055"
                // editable={false}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                width: 240,
                marginTop: 5,
              }}>
              <Text style={{fontFamily: 'Roboto-Medium'}}>
                {` `}
                Contact Person Name{` `}
              </Text>
            </View>

            <View style={{width: 250, flexDirection: 'row', flexWrap: 'wrap'}}>
              <TextInput
                style={{
                  width: '82%',
                  height: 40,
                  borderRadius: 15,
                  marginBottom: 5,
                  backgroundColor: 'white',
                  marginTop: 2,
                }}
                backgroundColor="white"
                color="#3A1292"
                placeholder="Contact Person Name"
                defaultValue="Tejas"
                // editable={false}
              />
              <IconButton
                icon="plus"
                size={20}
                color="black"
                onPress={() => console.log('Pressed')}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                width: 240,
                marginTop: 5,
              }}>
              <Text style={{fontFamily: 'Roboto-Medium'}}>
                {` `} Contact Person Number{` `}
              </Text>
            </View>

            <View style={{width: 250}}>
              <TextInput
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
                placeholder="Number"
                defaultValue="8254399815"
                // editable={false}
              />
            </View>
            <Pressable
              style={styles.pressable}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text
                style={{
                  fontFamily: 'Roboto-Regular',
                  color: 'white',
                  fontSize: 15,
                }}>
                {` `}
                Submit{` `}
              </Text>
            </Pressable>
          </CustomModal>
        ) : (
          <View></View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  customerDetailsView: {
    width: '90%',
    marginLeft: 20,
    marginTop: 10,
    backgroundColor: '#ff8c00',
    flex: 1,
    borderRadius: 30,
    padding: 5,
  },
  text: {
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    paddingBottom: 2,
    marginLeft: 10,
    color: 'white',
    paddingTop: 3,
    paddingBottom: 3,
  },
  subText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: 'normal',
  },
  customerDetailsText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    marginLeft: 80,
    paddingBottom: 10,
    color: 'white',
  },
  remarksContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    borderRadius: 30,
    width: '90%',
    height: 100,
    borderWidth: 2,
    borderColor: '#ff8c00',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  remarksView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
    justifyContent: 'center',
    padding: 5,
    marginTop: 10,
  },
  submit: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  pressable: {
    backgroundColor: '#ff8c00',
    marginTop: 10,
    height: 40,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});
