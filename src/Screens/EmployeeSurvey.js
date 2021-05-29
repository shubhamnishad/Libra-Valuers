import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RadioButton, IconButton} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native';

export default function EmployeeSurvey(props) {
  const [compoundWall, setCompoundWall] = React.useState('first');
  const [compoundWall1, setCompoundWall1] = React.useState('first');
  const [compoundWall2, setCompoundWall2] = React.useState('first');
  const [compoundWall3, setCompoundWall3] = React.useState('first');
  const navigation = useNavigation();
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
              fontSize: 18,
              fontSize: 20,
              fontFamily: 'Roboto-Medium',
            }}>
            {' '}
            Libra Valuers{' '}
          </Text>
        </View>
      </View>

      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={{fontSize: 22, fontFamily: 'Roboto-Regular'}}>
            {' '}
            Employee Survey{' '}
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
          }}>
          <Text style={{fontSize: 15, fontFamily: 'Roboto-Regular'}}>
            {' '}
            Are you happy with the work?{' '}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <RadioButton
              value="first"
              status={compoundWall === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setCompoundWall('first')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 15,
                marginTop: 5,
              }}>
              {' '}
              Option 1{' '}
            </Text>
            <RadioButton
              value="second"
              status={compoundWall === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setCompoundWall('second')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 15,
                marginTop: 5,
              }}>
              {' '}
              Option 2{' '}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <RadioButton
              value="second"
              status={compoundWall === 'third' ? 'checked' : 'unchecked'}
              onPress={() => setCompoundWall('third')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 15,
                marginTop: 5,
              }}>
              {' '}
              Option 3{' '}
            </Text>
            <RadioButton
              value="second"
              status={compoundWall === 'fourth' ? 'checked' : 'unchecked'}
              onPress={() => setCompoundWall('fourth')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 15,
                marginTop: 5,
              }}>
              {' '}
              Option 4{' '}
            </Text>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
          }}>
          <Text style={{fontSize: 15, fontFamily: 'Roboto-Regular'}}>
            {' '}
            Are you happy with the work?{' '}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <RadioButton
              value="first"
              status={compoundWall1 === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setCompoundWall1('first')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 15,
                marginTop: 5,
              }}>
              {' '}
              Option 1{' '}
            </Text>
            <RadioButton
              value="second"
              status={compoundWall1 === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setCompoundWall1('second')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 15,
                marginTop: 5,
              }}>
              {' '}
              Option 2{' '}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <RadioButton
              value="second"
              status={compoundWall1 === 'third' ? 'checked' : 'unchecked'}
              onPress={() => setCompoundWall1('third')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 15,
                marginTop: 5,
              }}>
              {' '}
              Option 3{' '}
            </Text>
            <RadioButton
              value="second"
              status={compoundWall1 === 'fourth' ? 'checked' : 'unchecked'}
              onPress={() => setCompoundWall1('fourth')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 15,
                marginTop: 5,
              }}>
              {' '}
              Option 4{' '}
            </Text>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
          }}>
          <Text style={{fontSize: 15, fontFamily: 'Roboto-Regular'}}>
            {' '}
            Are you happy with the work?{' '}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <RadioButton
              value="first"
              status={compoundWall2 === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setCompoundWall2('first')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 15,
                marginTop: 5,
              }}>
              {' '}
              Option 1{' '}
            </Text>
            <RadioButton
              value="second"
              status={compoundWall2 === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setCompoundWall2('second')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 15,
                marginTop: 5,
              }}>
              {' '}
              Option 2{' '}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <RadioButton
              value="second"
              status={compoundWall2 === 'third' ? 'checked' : 'unchecked'}
              onPress={() => setCompoundWall2('third')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 15,
                marginTop: 5,
              }}>
              {' '}
              Option 3{' '}
            </Text>
            <RadioButton
              value="second"
              status={compoundWall2 === 'fourth' ? 'checked' : 'unchecked'}
              onPress={() => setCompoundWall2('fourth')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 15,
                marginTop: 5,
              }}>
              {' '}
              Option 4{' '}
            </Text>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
          }}>
          <Text style={{fontSize: 15, fontFamily: 'Roboto-Regular'}}>
            {' '}
            Are you happy with the work?{' '}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <RadioButton
              value="first"
              status={compoundWall3 === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setCompoundWall3('first')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 15,
                marginTop: 5,
              }}>
              {' '}
              Option 1{' '}
            </Text>
            <RadioButton
              value="second"
              status={compoundWall3 === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setCompoundWall3('second')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 15,
                marginTop: 5,
              }}>
              {' '}
              Option 2{' '}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <RadioButton
              value="second"
              status={compoundWall3 === 'third' ? 'checked' : 'unchecked'}
              onPress={() => setCompoundWall3('third')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 15,
                marginTop: 5,
              }}>
              {' '}
              Option 3{' '}
            </Text>
            <RadioButton
              value="second"
              status={compoundWall3 === 'fourth' ? 'checked' : 'unchecked'}
              onPress={() => setCompoundWall3('fourth')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 15,
                marginTop: 5,
              }}>
              {' '}
              Option 4{' '}
            </Text>
          </View>
        </View>

        <View style={styles.remarksView}>
          <View style={styles.remarksContent}>
            <View style={{width: '80%'}}>
              <TextInput
                placeholder="Remarks for management"
                multiline={true}
              />
            </View>
            <IconButton
              icon="plus"
              size={22}
              color="black"
              onPress={() => console.log('Pressed')}
            />
          </View>
        </View>

        <View style={styles.remarksView}>
          <View style={styles.remarksContent}>
            <View style={{width: '80%'}}>
              <TextInput placeholder="Anonymous remarks" multiline={true} />
            </View>
            <IconButton
              icon="plus"
              size={22}
              color="black"
              onPress={() => console.log('Pressed')}
            />
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
            onPress={() => props.navigation.navigate('Home')}>
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    // width: '90%',
    justifyContent: 'center',
    padding: 5,
    marginTop: 10,
  },
});
