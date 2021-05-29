import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Switch,
  TextInput,
  Button,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';
import {RadioButton} from 'react-native-paper';
import * as Progress from 'react-native-progress';
import {IconButton} from 'react-native-paper';
import CompassInternal from '../Utilities/CompassInternal';

export default function InternalInspection(props) {
  const [selectedPropIdThrough, setPropIdThrough] = useState('Technical Docs');
  const [selectedOccupation, setOccupation] = useState('Self Occupied');
  const [selectedConfiguration, setConfiguration] = useState('1Bhk');
  const [selectedTypeOfUsage, setTypeOfUsage] = useState('Commercial');
  const [selectedTypeOfStructure, setTypeOfStructure] = useState('RCC');
  const [selectedInternalCondition, setInternalCondition] = useState('RCC');
  const [selectedUnitView, setUnitView] = useState('');
  const [selectedTypeOfLocality, setTypeOfLocality] = useState('');
  const [selectedTerrace, setTerrace] = useState('');
  const [selectedParking, setParking] = useState('');

  const [condOfStruc, setCondOfStruc] = React.useState('first');
  const [kitchen, setKitchen] = React.useState('first');
  const [wConnect, setWConnect] = React.useState('first');
  const [waterConnect, setWaterConnect] = React.useState('first');
  const [isRenovation, setRenovation] = React.useState('first');
  const [isObservation, setObservation] = React.useState('first');
  const [isSpecifyCommunity, setSpecifyCommunity] = React.useState('first');
  const [isDemoloition, setDemolition] = React.useState('first');
  const [isRoadWidening, setRoadWidening] = React.useState('first');
  const [isTensionLine, setTensionLine] = React.useState('first');
  const [isPropMort, setPropMort] = React.useState('second');
  const [isAmal, setAmal] = React.useState('second');

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
              fontSize: 20,
              fontFamily: 'Roboto-Medium',
            }}>
            {' '}
            Libra Valuers{' '}
          </Text>
        </View>
      </View>

      <View style={styles.inspectionView}>
        <View
          style={{
            flexDirection: 'column',
            // backgroundColor: 'blue',
            alignItems: 'center',
            paddingBottom: 10,
          }}>
          <Text style={styles.inspectionText}> Inspection Status </Text>
          <Text style={styles.inspectionText}> TAT: Priority </Text>
          <Progress.Circle
            size={48}
            progress={0.8}
            showsText={true}
            thickness={4}
            color="#CC7417"
          />
        </View>
        {/* <View style={{marginTop: 5}}></View> */}
        <View style={{marginRight: 20}}>
          <CompassInternal />
        </View>
      </View>
      <ScrollView>
        <View style={styles.mainView}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}>
            <Text style={styles.headingText}> No of flats on each floor: </Text>
            <TextInput
              style={{
                height: 45,
                borderColor: 'gray',
                borderWidth: 1,
                width: '30%',
                marginLeft: 10,
                marginTop: 10,
                borderRadius: 10,
                backgroundColor: '#fdf5e6',
                fontFamily: 'aerial',
              }}
              placeholder="4"
              placeholderTextColor="black"
              multiline={true}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}>
            <Text style={styles.headingText}> No of lifts on each floor: </Text>
            <TextInput
              style={{
                height: 45,
                borderColor: 'gray',
                borderWidth: 1,
                width: '30%',
                marginLeft: 12,
                marginTop: 10,
                borderRadius: 10,
                backgroundColor: '#fdf5e6',
              }}
              placeholder="4"
              placeholderTextColor="black"
              multiline={true}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}>
            <Text style={styles.headingText}> Total No of floor: </Text>
            <TextInput
              style={{
                height: 45,
                borderColor: 'gray',
                borderWidth: 1,
                width: '30%',
                marginLeft: 70,
                marginTop: 10,
                borderRadius: 10,
                backgroundColor: '#fdf5e6',
              }}
              placeholder="4"
              placeholderTextColor="black"
              multiline={true}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}>
            <Text style={styles.headingText}>
              {' '}
              Our unit on habitable{`\n`}floor No :{' '}
            </Text>
            <TextInput
              style={{
                height: 45,
                borderColor: 'gray',
                borderWidth: 1,
                width: '30%',
                marginLeft: 42,
                marginTop: 10,
                borderRadius: 10,
                backgroundColor: '#fdf5e6',
              }}
              placeholder="4"
              placeholderTextColor="black"
              multiline={true}
            />
          </View>

          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <Text style={styles.headingText}> Unit Boundaries: </Text>
          </View>

          <View
            style={{
              flexDirection: 'column',
              // justifyContent: 'flex-start',
            }}>
            <TextInput
              style={{
                height: 50,
                borderColor: 'gray',
                borderWidth: 1,
                width: '90%',
                marginTop: 5,
                borderRadius: 10,
                backgroundColor: '#fdf5e6',
              }}
              placeholder="EAST"
              placeholderTextColor="black"
              textAlignVertical="top"
              multiline={true}
              textAlignVertical="top"
            />
            <TextInput
              style={{
                height: 50,
                borderColor: 'gray',
                borderWidth: 1,
                width: '90%',
                marginTop: 10,
                borderRadius: 10,
                backgroundColor: '#fdf5e6',
              }}
              placeholder="WEST"
              placeholderTextColor="black"
              multiline={true}
              textAlignVertical="top"
            />
            <TextInput
              style={{
                height: 50,
                borderColor: 'gray',
                borderWidth: 1,
                width: '90%',
                marginTop: 10,
                borderRadius: 10,
                backgroundColor: '#fdf5e6',
              }}
              placeholder="NORTH"
              placeholderTextColor="black"
              multiline={true}
              textAlignVertical="top"
            />
            <TextInput
              style={{
                height: 50,
                borderColor: 'gray',
                borderWidth: 1,
                width: '90%',
                marginTop: 10,
                borderRadius: 10,
                backgroundColor: '#fdf5e6',
              }}
              placeholder="SOUTH"
              placeholderTextColor="black"
              multiline={true}
              textAlignVertical="top"
            />
          </View>

          <View style={{flexDirection: 'column'}}>
            <Text style={styles.headingText}> Property shown by: </Text>

            <Card>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  fontFamily: 'aerial',
                }}>
                {' '}
                Name: {''}
                <Text style={{fontWeight: 'normal', fontFamily: 'aerial'}}>
                  {' '}
                  SHXSXXXX XXX
                </Text>{' '}
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  fontFamily: 'aerial',
                }}>
                {' '}
                Contact no: {''}
                <Text style={{fontWeight: 'normal', fontFamily: 'aerial'}}>
                  {' '}
                  98XX7XX5X6
                </Text>{' '}
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  fontFamily: 'aerial',
                }}>
                {' '}
                Name plate: {''}
                <Text style={{fontWeight: 'normal', fontFamily: 'aerial'}}>
                  {' '}
                  XXX
                </Text>{' '}
              </Text>
            </Card>
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}>
            <Text style={styles.headingText}>
              {' '}
              Property identified through :{' '}
            </Text>

            <Picker
              selectedValue={selectedPropIdThrough}
              mode="dropdown"
              style={{
                height: 50,
                width: '70%',
                marginTop: 8,
                marginLeft: 3,
              }}
              onValueChange={(itemValue, itemIndex) =>
                setPropIdThrough(itemValue)
              }>
              <Picker.Item label="Technical Docs" value="Technical Docs" />
              <Picker.Item label="Sale Plan" value="Sale Plan" />
              <Picker.Item label="Contact Person" value="Contact Person" />
            </Picker>
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}>
            <Text style={styles.headingText}> Occupation: </Text>

            <Picker
              selectedValue={selectedOccupation}
              mode="dropdown"
              style={{
                height: 50,
                width: '50%',
                marginTop: 5,
                marginLeft: 5,
              }}
              onValueChange={(itemValue, itemIndex) =>
                setOccupation(itemValue)
              }>
              <Picker.Item label="Self Occupied" value="Self Occupied" />
              <Picker.Item label="Seller Occupied" value="Seller Occupied" />
              <Picker.Item label="Rented" value="Rented" />
            </Picker>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 17, marginTop: 15}}> Occupied since: </Text>
            <TextInput
              style={{
                height: 35,
                borderColor: 'gray',
                borderWidth: 1,
                width: '20 %',
                marginLeft: 10,
                marginTop: 5,
                borderRadius: 10,
                backgroundColor: '#fdf5e6',
              }}
              placeholder="12"
              placeholderTextColor="black"
              multiline={true}
            />
            <Text
              style={{
                fontSize: 15,
                marginTop: 20,
                marginLeft: 4,
                fontFamily: 'aerial',
              }}>
              {' '}
              Years{' '}
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 17, marginTop: 20, fontFamily: 'aerial'}}>
              {' '}
              No of tenants:{' '}
            </Text>
            <TextInput
              style={{
                height: 35,
                borderColor: 'gray',
                borderWidth: 1,
                width: '25 %',
                marginLeft: 20,
                marginTop: 10,
                borderRadius: 10,
                backgroundColor: '#fdf5e6',
              }}
              placeholder="12"
              placeholderTextColor="black"
              multiline={true}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}>
            <Text style={styles.headingText}> Configuration: </Text>

            <Picker
              selectedValue={selectedConfiguration}
              mode="dropdown"
              style={{
                height: 50,
                width: '50%',
                marginTop: 5,
                marginLeft: 5,
              }}
              onValueChange={(itemValue, itemIndex) =>
                setConfiguration(itemValue)
              }>
              <Picker.Item label="1Bhk" value="1Bhk" />
              <Picker.Item label="2Bhk" value="2Bhk" />
              <Picker.Item label="Office" value="Offie" />
              <Picker.Item label="Rented" value="Rented" />
            </Picker>
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}>
            <Text style={styles.headingText}> Type of usage: </Text>

            <Picker
              selectedValue={selectedTypeOfUsage}
              mode="dropdown"
              style={{
                height: 50,
                width: '50%',
                marginTop: 5,
                marginLeft: 5,
              }}
              onValueChange={(itemValue, itemIndex) =>
                setTypeOfUsage(itemValue)
              }>
              <Picker.Item label="Commercial" value="Commercial" />
              <Picker.Item label="Residential" value="Residential" />
            </Picker>
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}>
            <Text style={styles.headingText}> Type of structure: </Text>

            <Picker
              selectedValue={selectedTypeOfStructure}
              mode="dropdown"
              style={{
                height: 50,
                width: '40%',
                marginTop: 5,
                marginLeft: 5,
              }}
              onValueChange={(itemValue, itemIndex) =>
                setTypeOfStructure(itemValue)
              }>
              <Picker.Item label="RCC" value="RCc" />
              <Picker.Item label="Load" value="Load" />
              <Picker.Item label="Shed" value="Shed" />
            </Picker>
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}>
            <Text style={styles.headingText}> Condition of structure: </Text>
          </View>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <RadioButton
              value="first"
              status={condOfStruc === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setCondOfStruc('first')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 15,
                marginTop: 5,
              }}>
              {' '}
              Good{' '}
            </Text>
            <RadioButton
              value="second"
              status={condOfStruc === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setCondOfStruc('second')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 15,
                marginTop: 5,
              }}>
              {' '}
              Bad{' '}
            </Text>
          </View>
          <View>
            <Text style={styles.headingText}> Specifications: </Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                padding: 5,
                paddingLeft: 10,
              }}>
              <TextInput
                style={{
                  height: 50,
                  borderColor: 'gray',
                  borderWidth: 1,
                  width: 140,
                  marginTop: 15,
                  marginLeft: 2,
                  borderRadius: 10,
                  backgroundColor: '#fdf5e6',
                }}
                placeholder="FLOORS"
                placeholderTextColor="black"
                textAlignVertical="top"
                multiline={true}
                textAlignVertical="top"
              />
              <TextInput
                style={{
                  height: 50,
                  borderColor: 'gray',
                  borderWidth: 1,
                  width: 140,
                  marginTop: 15,
                  marginLeft: 10,
                  borderRadius: 10,
                  backgroundColor: '#fdf5e6',
                }}
                placeholder="WALL"
                placeholderTextColor="black"
                multiline={true}
                textAlignVertical="top"
              />
              <TextInput
                style={{
                  height: 50,
                  borderColor: 'gray',
                  borderWidth: 1,
                  width: 140,
                  marginTop: 15,
                  marginLeft: 2,
                  borderRadius: 10,
                  backgroundColor: '#fdf5e6',
                }}
                placeholder="ROOF"
                placeholderTextColor="black"
                multiline={true}
                textAlignVertical="top"
              />
              <TextInput
                style={{
                  height: 50,
                  borderColor: 'gray',
                  borderWidth: 1,
                  width: 140,
                  marginTop: 15,
                  marginLeft: 10,
                  borderRadius: 10,
                  backgroundColor: '#fdf5e6',
                }}
                placeholder="CEILING"
                placeholderTextColor="black"
                multiline={true}
                textAlignVertical="top"
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}>
            <Text style={styles.headingText}> Kitchen : </Text>
            <RadioButton
              value="first"
              status={kitchen === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setKitchen('first')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 17,
                marginTop: 5,
              }}>
              {' '}
              Yes{' '}
            </Text>
            <RadioButton
              value="second"
              status={kitchen === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setKitchen('second')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 17,
                marginTop: 5,
              }}>
              {' '}
              No{' '}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}>
            <Text style={styles.headingText}> W/C Connection : </Text>
            <RadioButton
              value="first"
              status={wConnect === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setWConnect('first')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 17,
                marginTop: 5,
              }}>
              {' '}
              Yes{' '}
            </Text>
            <RadioButton
              value="second"
              status={wConnect === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setWConnect('second')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 17,
                marginTop: 5,
              }}>
              {' '}
              No{' '}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}>
            <Text style={styles.headingText}> Water Connection : </Text>
            <RadioButton
              value="first"
              status={waterConnect === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setWaterConnect('first')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 17,
                marginTop: 5,
              }}>
              Yes
            </Text>
            <RadioButton
              value="second"
              status={waterConnect === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setWaterConnect('second')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 17,
                marginTop: 5,
              }}>
              {' '}
              No{' '}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}>
            <Text style={styles.headingText}> Internal Condition: </Text>

            <Picker
              selectedValue={selectedInternalCondition}
              mode="dropdown"
              style={{
                height: 50,
                width: '50%',
                marginTop: 5,
                marginLeft: 5,
              }}
              onValueChange={(itemValue, itemIndex) =>
                setInternalCondition(itemValue)
              }>
              <Picker.Item label="Raw unit" value="Raw unit" />
              <Picker.Item label="Shell Unit" value="Shell Unit" />
              <Picker.Item
                label="Fully furnished unit"
                value="Fully furnished unit"
              />
            </Picker>
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}>
            <Text style={styles.headingText}> Renovation : </Text>
            <RadioButton
              value="first"
              status={isRenovation === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setRenovation('first')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 17,
                marginTop: 5,
              }}>
              {' '}
              Yes{' '}
            </Text>
            <RadioButton
              value="second"
              status={isRenovation === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setRenovation('second')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 17,
                marginTop: 5,
              }}>
              {' '}
              No{' '}
            </Text>
          </View>

          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <Text style={styles.headingText}>Height:</Text>
            <Text
              style={{
                marginTop: 22,
                fontSize: 15,
                marginLeft: 20,
                fontFamily: 'Roboto-Regular',
              }}>
              {' '}
              Floor height{' '}
            </Text>
            <TextInput
              style={{
                height: 35,
                borderColor: 'gray',
                borderWidth: 1,
                width: '20%',
                marginLeft: 10,
                marginTop: 15,
                borderRadius: 10,
                backgroundColor: '#fdf5e6',
              }}
              placeholder=""
              placeholderTextColor="black"
              multiline={true}
            />
          </View>
          <View style={{flexDirection: 'row', marginHorizontal: 78}}>
            <Text
              style={{
                fontSize: 15,
                marginTop: 20,
                fontFamily: 'Roboto-Regular',
              }}>
              {' '}
              Loft height{' '}
            </Text>
            <TextInput
              style={{
                height: 35,
                borderColor: 'gray',
                borderWidth: 1,
                width: '32%',
                marginLeft: 15,
                marginTop: 15,
                borderRadius: 10,
                backgroundColor: '#fdf5e6',
              }}
              placeholder=""
              placeholderTextColor="black"
              multiline={true}
            />
          </View>

          <View style={{flexDirection: 'row', marginHorizontal: 78}}>
            <Text
              style={{
                fontSize: 15,
                marginTop: 20,
                fontFamily: 'Roboto-Regular',
              }}>
              {' '}
              Shed height{' '}
            </Text>
            <TextInput
              style={{
                height: 35,
                borderColor: 'gray',
                borderWidth: 1,
                width: '32%',
                marginLeft: 10,
                marginTop: 15,
                borderRadius: 10,
                backgroundColor: '#fdf5e6',
              }}
              placeholder=""
              placeholderTextColor="black"
              multiline={true}
            />
          </View>
          <View>
            <Text style={styles.headingText}> Age of Property: </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                marginTop: 22,
                fontSize: 14,
                fontFamily: 'Roboto-Regular',
              }}>
              {' '}
              As per Site Inspector:{' '}
            </Text>
            <TextInput
              style={{
                height: 35,
                borderColor: 'gray',
                borderWidth: 1,
                width: '16%',
                marginLeft: 10,
                marginTop: 15,
                borderRadius: 10,
                backgroundColor: '#fdf5e6',
              }}
              placeholder="12 yrs"
              placeholderTextColor="black"
              multiline={true}
            />
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 14,
                marginTop: 20,
                fontFamily: 'Roboto-Regular',
              }}>
              {' '}
              As per aggreement:{' '}
            </Text>
            <TextInput
              style={{
                height: 35,
                borderColor: 'gray',
                borderWidth: 1,
                width: '17%',
                marginLeft: 10,
                marginTop: 15,
                borderRadius: 10,
                backgroundColor: '#fdf5e6',
              }}
              placeholder="10 yrs"
              placeholderTextColor="black"
              multiline={true}
            />
          </View>

          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <Text style={styles.headingText}> Unit View: </Text>

            <Picker
              selectedValue={selectedUnitView}
              mode="dropdown"
              style={{
                height: 50,
                width: '50%',
                marginTop: 5,
                marginLeft: 5,
              }}
              onValueChange={(itemValue, itemIndex) => setUnitView(itemValue)}>
              <Picker.Item label="Sea View" value="Sea View" />
              <Picker.Item label="Club View" value="Club View" />
              <Picker.Item label="Road View" value="Road View" />
              <Picker.Item label="Slum View" value="Slum View" />
            </Picker>
          </View>

          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <Text style={styles.headingText}> Type of locality: </Text>

            <Picker
              selectedValue={selectedTypeOfLocality}
              mode="dropdown"
              style={{
                height: 50,
                width: '50%',
                marginTop: 5,
                marginLeft: 5,
              }}
              onValueChange={(itemValue, itemIndex) =>
                setTypeOfLocality(itemValue)
              }>
              <Picker.Item label="Upper Class" value="Upper Class" />
              <Picker.Item label="Middle Class" value="Middle Class" />
              <Picker.Item
                label="Lower Middle Class"
                value="Loweer Middle Class"
              />
            </Picker>
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}>
            <Text style={styles.headingText}> Amalgamate : </Text>
            <RadioButton
              value="first"
              status={isAmal === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setAmal('first')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 15,
                marginTop: 5,
              }}>
              {' '}
              Yes{' '}
            </Text>
            <RadioButton
              value="second"
              status={isAmal === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setAmal('second')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 15,
                marginTop: 5,
              }}>
              {' '}
              No{' '}
            </Text>
          </View>

          {isAmal == 'first' ? (
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 20,
                  marginLeft: 135,
                  fontFamily: 'Roboto-Regular',
                }}>
                {' '}
                Unit No:{' '}
              </Text>
              <TextInput
                style={{
                  height: 35,
                  borderColor: 'gray',
                  borderWidth: 1,
                  width: '20%',
                  marginLeft: 10,
                  marginTop: 15,
                  borderRadius: 10,
                  backgroundColor: '#fdf5e6',
                }}
                placeholder="305"
                placeholderTextColor="black"
                multiline={true}
              />
            </View>
          ) : (
            <View></View>
          )}

          {isAmal == 'first' ? (
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 20,
                  marginLeft: 135,
                  fontFamily: 'Roboto-Regular',
                }}>
                {' '}
                Entry from unit:{' '}
              </Text>
              <TextInput
                style={{
                  height: 35,
                  borderColor: 'gray',
                  borderWidth: 1,
                  width: '18%',
                  marginLeft: 10,
                  marginTop: 15,
                  borderRadius: 10,
                  backgroundColor: '#fdf5e6',
                }}
                placeholder="308"
                placeholderTextColor="black"
                multiline={true}
              />
            </View>
          ) : (
            <View></View>
          )}

          {isAmal == 'first' ? (
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 20,
                  marginLeft: 135,
                  fontFamily: 'Roboto-Regular',
                }}>
                {' '}
                W/C in unit:{' '}
              </Text>
              <TextInput
                style={{
                  height: 35,
                  borderColor: 'gray',
                  borderWidth: 1,
                  width: '20%',
                  marginLeft: 10,
                  marginTop: 15,
                  borderRadius: 10,
                  backgroundColor: '#fdf5e6',
                }}
                placeholder="307"
                placeholderTextColor="black"
                multiline={true}
              />
            </View>
          ) : (
            <View></View>
          )}

          {isAmal == 'first' ? (
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 20,
                  marginLeft: 135,
                  fontFamily: 'Roboto-Regular',
                }}>
                {' '}
                Kitchen in:{' '}
              </Text>
              <TextInput
                style={{
                  height: 35,
                  borderColor: 'gray',
                  borderWidth: 1,
                  width: '20%',
                  marginLeft: 10,
                  marginTop: 15,
                  borderRadius: 10,
                  backgroundColor: '#fdf5e6',
                }}
                placeholder="307"
                placeholderTextColor="black"
                multiline={true}
              />
            </View>
          ) : (
            <View></View>
          )}

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}>
            <Text style={styles.headingText}> Part property mortgage : </Text>
            <RadioButton
              value="first"
              status={isPropMort === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setPropMort('first')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 15,
                marginTop: 5,
              }}>
              {' '}
              Yes{' '}
            </Text>
            <RadioButton
              value="second"
              status={isPropMort === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setPropMort('second')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 15,
                marginTop: 5,
              }}>
              {' '}
              No{' '}
            </Text>
          </View>

          {isPropMort == 'first' ? (
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 20,
                  marginLeft: 135,
                  fontFamily: 'Roboto-Regular',
                }}>
                {' '}
                Request per unit No:{' '}
              </Text>
              <TextInput
                style={{
                  height: 35,
                  borderColor: 'gray',
                  borderWidth: 1,
                  width: '18%',
                  marginLeft: 10,
                  marginTop: 15,
                  borderRadius: 10,
                  backgroundColor: '#fdf5e6',
                }}
                placeholder="12"
                placeholderTextColor="black"
                multiline={true}
              />
            </View>
          ) : (
            <View></View>
          )}

          {isPropMort == 'first' ? (
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 20,
                  marginLeft: 135,
                  fontFamily: 'Roboto-Regular',
                }}>
                {' '}
                Not coming to us:{' '}
              </Text>
              <TextInput
                style={{
                  height: 35,
                  borderColor: 'gray',
                  borderWidth: 1,
                  width: '18%',
                  marginLeft: 10,
                  marginTop: 15,
                  borderRadius: 10,
                  backgroundColor: '#fdf5e6',
                }}
                placeholder="5"
                placeholderTextColor="black"
                multiline={true}
              />
            </View>
          ) : (
            <View></View>
          )}

          {isPropMort == 'first' ? (
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 20,
                  marginLeft: 135,
                  fontFamily: 'Roboto-Regular',
                }}>
                {' '}
                Entry from:{' '}
              </Text>
              <TextInput
                style={{
                  height: 35,
                  borderColor: 'gray',
                  borderWidth: 1,
                  width: '18%',
                  marginLeft: 10,
                  marginTop: 15,
                  borderRadius: 10,
                  backgroundColor: '#fdf5e6',
                }}
                placeholder="10"
                placeholderTextColor="black"
                multiline={true}
              />
            </View>
          ) : (
            <View></View>
          )}

          {isPropMort == 'first' ? (
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 20,
                  marginLeft: 135,
                  fontFamily: 'Roboto-Regular',
                }}>
                {' '}
                W/C in unit:{' '}
              </Text>
              <TextInput
                style={{
                  height: 35,
                  borderColor: 'gray',
                  borderWidth: 1,
                  width: '18%',
                  marginLeft: 10,
                  marginTop: 15,
                  borderRadius: 10,
                  backgroundColor: '#fdf5e6',
                }}
                placeholder="305"
                placeholderTextColor="black"
                multiline={true}
              />
            </View>
          ) : (
            <View></View>
          )}

          {isPropMort == 'first' ? (
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 20,
                  marginLeft: 135,
                  fontFamily: 'Roboto-Regular',
                }}>
                {' '}
                Kitchen in unit:{' '}
              </Text>
              <TextInput
                style={{
                  height: 35,
                  borderColor: 'gray',
                  borderWidth: 1,
                  width: '18%',
                  marginLeft: 10,
                  marginTop: 15,
                  borderRadius: 10,
                  backgroundColor: '#fdf5e6',
                }}
                placeholder="307"
                placeholderTextColor="black"
                multiline={true}
              />
            </View>
          ) : (
            <View></View>
          )}

          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <Text style={styles.headingText}> Terrace: </Text>

            <Picker
              selectedValue={selectedTerrace}
              mode="dropdown"
              style={{
                height: 50,
                width: '70%',
                marginTop: 5,
                marginLeft: 5,
              }}
              onValueChange={(itemValue, itemIndex) => setTerrace(itemValue)}>
              <Picker.Item
                label="Attached with bedroom"
                value="Attached with bedroom"
              />
              <Picker.Item
                label="Attached with kitchen"
                value="Attached with kitche"
              />
              <Picker.Item label="Common terrace" value="Common terrace" />
            </Picker>
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}>
            <Text style={styles.headingText}> Shape of the unit: </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                marginTop: 22,
                fontSize: 15,
                fontFamily: 'Roboto-Regular',
              }}>
              {' '}
              Length:{' '}
            </Text>
            <TextInput
              style={{
                height: 35,
                borderColor: 'gray',
                borderWidth: 1,
                width: '20%',
                marginLeft: 10,
                marginTop: 15,
                borderRadius: 10,
                backgroundColor: '#fdf5e6',
              }}
              placeholder="12"
              placeholderTextColor="black"
              multiline={true}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 15,
                marginTop: 20,

                fontFamily: 'Roboto-Regular',
              }}>
              {' '}
              Width:{' '}
            </Text>
            <TextInput
              style={{
                height: 35,
                borderColor: 'gray',
                borderWidth: 1,
                width: '20%',
                marginLeft: 10,
                marginTop: 15,
                borderRadius: 10,
                backgroundColor: '#fdf5e6',
              }}
              placeholder="12"
              placeholderTextColor="black"
              multiline={true}
            />
          </View>

          <View>
            <Text style={styles.headingText}> Violation: </Text>
          </View>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <Text
              style={{
                marginTop: 22,
                fontSize: 15,
                marginLeft: 10,
                fontFamily: 'aerial',
              }}>
              {' '}
              Horizontal:{' '}
            </Text>
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                width: '45%',
                marginLeft: 10,
                marginTop: 15,
                borderRadius: 10,
                backgroundColor: '#fdf5e6',
              }}
              placeholder=""
              placeholderTextColor="black"
              multiline={true}
            />
          </View>

          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <Text
              style={{
                fontSize: 15,
                marginTop: 20,
                fontFamily: 'aerial',
              }}>
              {' '}
              Vertical:{' '}
            </Text>
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                width: '50%',
                marginLeft: 10,
                marginTop: 15,
                borderRadius: 10,
                backgroundColor: '#fdf5e6',
              }}
              placeholder=""
              placeholderTextColor="black"
              multiline={true}
            />
          </View>

          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <Text style={styles.headingText}> Parking: </Text>

            <Picker
              selectedValue={selectedParking}
              mode="dropdown"
              style={{
                height: 50,
                width: '70%',
                marginTop: 5,
                marginLeft: 5,
              }}
              onValueChange={(itemValue, itemIndex) => setParking(itemValue)}>
              <Picker.Item label="Open parking" value="Open parking" />
              <Picker.Item label="Close parking" value="Close parking" />
              <Picker.Item
                label="Mechanical parking"
                value="Mechanical parking"
              />
            </Picker>
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={styles.headingText}>
              {' '}
              High tension line passing{`\n`} nearby our property :{' '}
            </Text>
            <RadioButton
              value="first"
              status={isTensionLine === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setTensionLine('first')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 17,
                marginTop: 5,
              }}>
              {' '}
              Yes{' '}
            </Text>
            <RadioButton
              value="second"
              status={isTensionLine === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setTensionLine('second')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 17,
                marginTop: 5,
              }}>
              {' '}
              No{' '}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={styles.headingText}>
              {' '}
              River or sea{`\n`}near by property:{' '}
            </Text>
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                width: '55%',
                // marginLeft: 10,
                marginTop: 10,
                borderRadius: 10,
                backgroundColor: '#fdf5e6',
              }}
              placeholder="River / Sea"
              placeholderTextColor="black"
              multiline={true}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={styles.headingText}> Demolition risk : </Text>
            <RadioButton
              value="first"
              status={isDemoloition === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setDemolition('first')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 17,
                marginTop: 5,
              }}>
              {' '}
              Yes{' '}
            </Text>
            <RadioButton
              value="second"
              status={isDemoloition === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setDemolition('second')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 17,
                marginTop: 5,
              }}>
              {' '}
              No{' '}
            </Text>
          </View>

          {isDemoloition == 'first' ? (
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={{
                  height: 40,
                  borderColor: 'gray',
                  borderWidth: 1,
                  width: '77%',
                  marginLeft: 10,
                  marginTop: 10,
                  borderRadius: 10,
                  backgroundColor: '#fdf5e6',
                }}
                placeholder="Low/Medium/High"
                placeholderTextColor="black"
                multiline={true}
              />
            </View>
          ) : (
            <View></View>
          )}
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={styles.headingText}> Road widening risk : </Text>
            <RadioButton
              value="first"
              status={isRoadWidening === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setRoadWidening('first')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 17,
                marginTop: 5,
              }}>
              {' '}
              Yes{' '}
            </Text>
            <RadioButton
              value="second"
              status={isRoadWidening === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setRoadWidening('second')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 17,
                marginTop: 5,
              }}>
              {' '}
              No{' '}
            </Text>
          </View>
          <View>
            <Text style={styles.headingText}> Authority property: </Text>
          </View>
          <View>
            <TextInput
              style={{
                height: 35,
                borderColor: 'gray',
                borderWidth: 1,
                width: '50%',
                marginLeft: 10,
                marginTop: 15,
                borderRadius: 10,
                backgroundColor: '#fdf5e6',
              }}
              placeholder="MHADA"
              placeholderTextColor="black"
              multiline={true}
            />
          </View>

          <View>
            <TextInput
              style={{
                height: 35,
                borderColor: 'gray',
                borderWidth: 1,
                width: '50%',
                marginLeft: 10,
                marginTop: 15,
                borderRadius: 10,
                backgroundColor: '#fdf5e6',
              }}
              placeholder="Lock in period"
              placeholderTextColor="black"
              multiline={true}
            />
          </View>

          <View>
            <TextInput
              style={{
                height: 35,
                borderColor: 'gray',
                borderWidth: 1,
                width: '50%',
                marginLeft: 10,
                marginTop: 15,
                borderRadius: 10,
                backgroundColor: '#fdf5e6',
              }}
              placeholder="Sale / Non-Sale property"
              placeholderTextColor="black"
              multiline={true}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={styles.headingText}>
              {' '}
              Negative property internal:{' '}
            </Text>
            <TextInput
              style={{
                height: 60,
                borderColor: 'gray',
                borderWidth: 1,
                width: '70%',
                // marginLeft: 10,
                marginTop: 15,
                borderRadius: 10,
                backgroundColor: '#fdf5e6',
              }}
              placeholder=""
              placeholderTextColor="black"
              multiline={true}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={styles.headingText}>
              {' '}
              Specify Community{'\n'} Occupancy :{' '}
            </Text>
            <RadioButton
              value="first"
              status={isSpecifyCommunity === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setSpecifyCommunity('first')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 17,
                marginTop: 5,
              }}>
              {' '}
              Yes{' '}
            </Text>
            <RadioButton
              value="second"
              status={isSpecifyCommunity === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setSpecifyCommunity('second')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 17,
                marginTop: 5,
              }}>
              {' '}
              No{' '}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}>
            <Text style={styles.headingText}> Surrounding Development: </Text>
            <TextInput
              style={{
                height: 60,
                borderColor: 'gray',
                borderWidth: 1,
                width: '70%',
                marginTop: 15,
                borderRadius: 10,
                backgroundColor: '#fdf5e6',
              }}
              placeholder=""
              placeholderTextColor="black"
              multiline={true}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={styles.headingText}> Overall Observation : </Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 20}}>
            <RadioButton
              value="first"
              status={isObservation === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setObservation('first')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 17,
                marginTop: 5,
              }}>
              {' '}
              Positive{' '}
            </Text>
            <RadioButton
              value="second"
              status={isObservation === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setObservation('second')}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 17,
                marginTop: 5,
              }}>
              {' '}
              Negative{' '}
            </Text>
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
              marginTop: 10,
            }}
            onPress={() => props.navigation.navigate('StartInspection')}>
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
    backgroundColor: 'white',
  },
  internalInspectionView: {
    flex: 0.1,
    marginTop: 10,
    backgroundColor: 'orange',
    // alignSelf: 'stretch',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 5,
    borderRadius: 10,
  },
  internalInspectionText: {
    fontSize: 19,
    marginLeft: 100,
    color: 'black',
    fontFamily: 'Roboto-Regular',
  },
  input: {
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 5,
    marginTop: 5,
    borderRadius: 10,
  },
  headingText: {
    fontSize: 17,
    marginTop: 20,
    fontFamily: 'Roboto-Bold',
  },
  plotBoundries: {
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    width: 350,
    marginTop: 15,
    marginLeft: 2,
  },
  mainView: {
    flex: 1,
    marginTop: 10,
    padding: 2,
    backgroundColor: 'white',
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 60,
    borderColor: '#ff8c00',
    borderWidth: 5,
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
    borderColor: '#ff8c00',
    padding: 2,
  },
  inspectionText: {
    fontSize: 19,
    paddingBottom: 5,
    color: 'black',
    fontFamily: 'Roboto-Regular',
  },
});
