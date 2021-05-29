import React, {useState} from 'react';
import {Button, ScrollView} from 'react-native';
import {Dimensions} from 'react-native';
import * as Progress from 'react-native-progress';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  FlatList,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';

import {IconButton, RadioButton, Checkbox} from 'react-native-paper';
import CompassInternal from '../Utilities/CompassInternal';
import HeaderProgress from '../CustomComponents/HeaderProgress';
import {Slider} from 'react-native-elements';
import CustomModal from '../CustomComponents/CustomModal';
// import CheckBox from '@react-native-community/checkbox';

const redevelopmentRemarks = [
  {
    key: '1',
    remark:
      'Maintenance needed- Consult licensed contractor to ensure long term preventative maintenance is performed.',
    is_check: false,
  },
  {
    key: '2',
    remark: 'Substandard but ok. It is recommended to consult expert',
    is_check: false,
  },
  {
    key: '3',
    remark: 'Item is in loose condition.',
    is_check: false,
  },
  {
    key: '4',
    remark: 'Building code violation.',
    is_check: false,
  },
  {
    key: '5',
    remark: 'Replacement is expected.',
    is_check: false,
  },
  {
    key: '6',
    remark: 'Requires Minor repair.',
    is_check: false,
  },
  {
    key: '7',
    remark:
      'Maintenance needed- Consult licensed contractor to ensure long term preventative maintenance is performed.',
    is_check: false,
  },
  {
    key: '8',
    remark: 'Technical Problems at the Construction site.',
    is_check: false,
  },
  {
    key: '9',
    remark: 'Insufficient space to allow full thickness of duct insulation.',
    is_check: false,
  },
  {
    key: '10',
    remark:
      'Piping not insulated. Similar to duct insulation, piping is also often found to be uninsulated.',
    is_check: false,
  },
  {
    key: '11',
    remark: 'Mechanical controls issues.',
    is_check: false,
  },
];

export default function GenProjInspection(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Residential Area');
  const [compoundWall, setCompoundWall] = React.useState('first');
  const [basicInfrastructure, setBasicInfrastructure] = React.useState('first');
  const [selectedRoadWidth, setSelectedRoadWidth] = useState('Feet');
  const [selectedProximity, setSelectedProximity] = useState('Railway Stn');
  const [projectAccess, setProjectAccess] = useState('first');
  const [selectedRoad, setRoad] = useState('RCC');
  const [lift, setLift] = useState(false);
  const [club, setClub] = useState(false);
  const [gym, setGym] = useState(false);
  const [garden, setGarden] = useState(false);
  const [redevlopmentNotice, setRedevelopmentNotice] = React.useState('first');
  const [buildingOccupancy, setBuildingOccupancy] = React.useState('first');
  const [sliderValue, setSlider] = useState(0);
  const [projectStageSlider, setProjectStageSlider] = useState(0);
  const [redevelopmentRemarksText, setRedevelopmentRemarksText] = useState();
  const [to, setTo] = React.useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(redevelopmentRemarks);
  const [remarkArray, setRemarkArray] = useState([]);

  const selectedRemarkMethod = (e, item, i) => {
    toggleCheckBox[i].is_check = !toggleCheckBox[i].is_check;
    if (toggleCheckBox[i].is_check) {
      setToggleCheckBox([
        // ...toggleCheckBox,
        ...toggleCheckBox.map((t, index) => {
          if (i === index) {
            remarkArray.push({...t, is_check: toggleCheckBox[i].is_check});
            return {...t, is_check: toggleCheckBox[i].is_check};
          } else return {...t};
        }),
      ]);
    } else {
      setToggleCheckBox([
        // ...toggleCheckBox,
        ...toggleCheckBox.map((t, index) => {
          if (i === index) {
            let id = remarkArray.findIndex(
              (e) => e.key === item.key && e.is_check,
            );
            if (id > -1) {
              remarkArray.splice(id, 1);
            }
            // remarkArray.push({...t, is_check:  toggleCheckBox[i].is_check});
            return {...t, is_check: toggleCheckBox[i].is_check};
          } else return {...t};
        }),
      ]);
    }
    console.log('remark', remarkArray);
  };

  const stringRemark = remarkArray.reduce((result, item) => {
    return `${result}${item.key}->${item.remark}${' '}`;
  }, '');

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
              alignItems: 'flex-start',
            }}>
            <Text style={styles.headingText}> Project Surrounding: </Text>

            <Picker
              selectedValue={selectedValue}
              mode="dropdown"
              style={{
                height: 50,
                width: '40%',
                marginTop: 12,
                marginLeft: 5,
              }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }>
              <Picker.Item label="Residential Area" value="Residential Area" />
              <Picker.Item label="Industrial Area" value="Industrial Area" />
            </Picker>
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
            }}>
            <Text style={styles.headingText}>
              {' '}
              Project Compound{`\n`} Wall:{' '}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginTop: 20,
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
                Yes{' '}
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
                No{' '}
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
            }}>
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                width: 150,
                marginTop: 5,
                marginLeft: 2,
                borderRadius: 10,
                backgroundColor: '#fdf5e6',
              }}
              placeholder="Height of wall"
              placeholderTextColor="black"
              textAlignVertical="top"
              multiline={true}
              textAlignVertical="top"
            />
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                width: 150,
                marginTop: 5,
                marginLeft: 10,
                borderRadius: 10,
                backgroundColor: '#fdf5e6',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              placeholder="Width of wall"
              placeholderTextColor="black"
              multiline={true}
              textAlignVertical="top"
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
              marginTop: 10,
            }}>
            <Text style={styles.headingText}> Building/Plot Boundaries: </Text>
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

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
              marginTop: 10,
            }}>
            <Text style={styles.headingText}> Basic Infrastructure: </Text>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <RadioButton
                value="first"
                status={
                  basicInfrastructure === 'first' ? 'checked' : 'unchecked'
                }
                onPress={() => setBasicInfrastructure('first')}
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
                status={
                  basicInfrastructure === 'second' ? 'checked' : 'unchecked'
                }
                onPress={() => setBasicInfrastructure('second')}
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
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}>
            <Text style={styles.headingText}> Road Width: </Text>
            <TextInput
              style={{
                height: 35,
                borderColor: 'gray',
                borderWidth: 1,
                width: 50,
                marginLeft: 10,
                marginTop: 10,
                borderRadius: 10,
                backgroundColor: '#fdf5e6',
              }}
              placeholder="6 ft"
              placeholderTextColor="black"
              multiline={true}
            />
            <Picker
              selectedValue={selectedRoadWidth}
              mode="dropdown"
              style={{
                height: 50,
                width: 130,
                marginTop: 12,
                marginLeft: 5,
              }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedRoadWidth(itemValue)
              }>
              <Picker.Item label="Feet" value="Feet" />
              <Picker.Item label="Inch" value="Inch" />
            </Picker>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}>
            <Text style={styles.headingText}>
              {' '}
              Project access {'\n'} as per norms:{' '}
            </Text>
            <View
              style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 25}}>
              <RadioButton
                value="first"
                status={projectAccess === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setProjectAccess('first')}
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
                status={projectAccess === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setProjectAccess('second')}
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
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            <Text style={styles.headingText}> Type of road: </Text>

            <Picker
              selectedValue={selectedRoad}
              mode="dropdown"
              style={{
                height: 50,
                width: '50%',
                marginTop: 10,
              }}
              onValueChange={(itemValue, itemIndex) => setRoad(itemValue)}>
              <Picker.Item label="RCC" value="RCC" />
              <Picker.Item label="XYZ" value="XYZ" />
            </Picker>
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            <Text style={styles.headingText}>
              {' '}
              Project stage :{' '}
              <Text
                style={{
                  marginTop: 15,
                  fontSize: 15,
                  fontFamily: 'Roboto-Regular',
                }}>
                {projectStageSlider}%
              </Text>
            </Text>
          </View>
          <View
            style={{
              width: '90%',
              marginLeft: 5,
            }}>
            <Slider
              maximumValue={100}
              minimumValue={0}
              minimumTrackTintColor="lightblue"
              maximumTrackTintColor="#000000"
              step={1}
              value={projectStageSlider}
              onValueChange={(projectStageSlider) =>
                setProjectStageSlider(projectStageSlider)
              }
              thumbStyle={{
                height: 25,
                width: 25,
                backgroundColor: 'grey',
              }}
            />
          </View>

          <Text style={styles.projAmenities}> Project Amenities </Text>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              marginLeft: 30,
              marginTop: 5,
              marginBottom: 10,
            }}>
            <CircleCheckBox
              checked={lift}
              onToggle={(checked) => setLift(!lift)}
              labelPosition={LABEL_POSITION.RIGHT}
              label="Lift"
            />
            <CircleCheckBox
              checked={club}
              onToggle={(checked) => setClub(!club)}
              labelPosition={LABEL_POSITION.RIGHT}
              label="Club"
            />
            <CircleCheckBox
              checked={gym}
              onToggle={(checked) => setGym(!gym)}
              labelPosition={LABEL_POSITION.RIGHT}
              label="Gym"
            />
            <CircleCheckBox
              checked={garden}
              onToggle={(checked) => setGarden(!garden)}
              labelPosition={LABEL_POSITION.RIGHT}
              label="Garden"
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}>
            <Text style={styles.headingText}>
              {' '}
              Proximity of near {`\n`} civic amenities :{' '}
            </Text>

            <Picker
              selectedValue={selectedProximity}
              mode="dropdown"
              style={{
                height: 50,
                width: 180,
                marginTop: 12,
              }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedProximity(itemValue)
              }>
              <Picker.Item label="Railway Stn" value="Railway Stn" />
              <Picker.Item label="Hospital" value="Hospital" />
            </Picker>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}>
            <Text style={styles.headingText}> No of Towers : </Text>
            <TextInput
              style={{
                height: 35,
                borderColor: 'gray',
                borderWidth: 1,
                width: 60,
                marginLeft: 10,
                marginTop: 10,
                borderRadius: 10,
                backgroundColor: '#fdf5e6',
              }}
              placeholder="7 "
              placeholderTextColor="black"
              multiline={true}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}>
            <Text style={styles.headingText}>
              {' '}
              Over all building{`\n`} building occupancy :{' '}
            </Text>
            <RadioButton
              value="first"
              status={buildingOccupancy === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setBuildingOccupancy('first')}
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
              status={buildingOccupancy === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setBuildingOccupancy('second')}
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
            {buildingOccupancy == 'first' ? (
              <Text
                style={{
                  marginTop: 15,
                  fontFamily: 'Roboto-Regular',
                  fontSize: 14,
                  paddingLeft: 10,
                }}>
                {' '}
                {sliderValue}%{' '}
              </Text>
            ) : null}
          </View>

          {buildingOccupancy == 'first' ? (
            <View>
              <View
                style={{
                  width: '90%',
                  marginLeft: 5,
                }}>
                <Slider
                  maximumValue={100}
                  minimumValue={0}
                  minimumTrackTintColor="lightblue"
                  maximumTrackTintColor="#000000"
                  step={1}
                  value={sliderValue}
                  onValueChange={(sliderValue) => setSlider(sliderValue)}
                  thumbStyle={{
                    height: 25,
                    width: 25,
                    backgroundColor: 'grey',
                  }}
                />
              </View>
              <View style={styles.remarksView}>
                <View style={styles.remarksContent}>
                  <View style={{width: '80%'}}>
                    <TextInput
                      placeholder="Remarks for building occupancy"
                      multiline={true}
                    />
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
          ) : (
            <View style={styles.remarksView}>
              <View style={styles.remarksContent}>
                <View style={{width: '80%'}}>
                  <TextInput
                    placeholder="Remarks for building occupancy"
                    multiline={true}
                  />
                </View>
                <IconButton
                  icon="plus"
                  size={20}
                  color="black"
                  onPress={() => console.log('Pressed')}
                />
              </View>
            </View>
          )}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}>
            <Text style={styles.headingText}> Redevelopment notice: </Text>

            <RadioButton
              value="first"
              status={redevlopmentNotice === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setRedevelopmentNotice('first')}
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
              status={redevlopmentNotice === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setRedevelopmentNotice('second')}
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

          {redevlopmentNotice == 'first' ? (
            <View style={styles.remarksView}>
              <View style={styles.remarksContent}>
                <View
                  style={{
                    width: '80%',
                    height: 70,
                  }}>
                  <TextInput
                    placeholder="Remarks for redevelopment notice"
                    multiline={true}
                    defaultValue={stringRemark}
                    onChangeText={(text) => setRedevelopmentRemarksText(text)}
                  />
                </View>
                <IconButton
                  icon="plus"
                  size={20}
                  color="black"
                  onPress={() => {
                    setModalVisible(true);
                  }}
                />
              </View>
            </View>
          ) : null}
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

      {modalVisible ? (
        <CustomModal>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Roboto-Bold',
              }}>
              {' '}
              Redevelopment Remarks{' '}
            </Text>
          </View>

          <View>
            <FlatList
              data={toggleCheckBox}
              renderItem={({item, index}) => (
                <View style={styles.redevelopmentRemarks}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <Text style={{fontFamily: 'Roboto-Regular'}}>
                      {' '}
                      {item.key}{' '}
                    </Text>
                    <Checkbox
                      status={item?.is_check ? 'checked' : 'unchecked'}
                      onPress={(e) => {
                        // setTo(!to);
                        // console.log('e', e);
                        selectedRemarkMethod(e, item, index);
                        console.log('called##########');
                      }}
                    />

                    {/* <CheckMethod
                      itemChecked={item.checked}
                      selectedRemarkMethod={selectedRemarkMethod}
                      index={item.key}
                    /> */}
                  </View>

                  <Text style={{fontFamily: 'Roboto-Regular'}}>
                    {' '}
                    {item.remark}{' '}
                  </Text>
                </View>
              )}
            />

            <TouchableOpacity
              style={[styles.button, styles.submitRemark1]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text
                style={{
                  fontFamily: 'Roboto-Regular',
                  color: 'white',
                  fontSize: 17,
                }}>
                {' '}
                Submit{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </CustomModal>
      ) : null}
    </View>
  );
}

// const CheckMethod = (props) => {
//   console.log(props.itemChecked, 'check');
//   // const [toggleCheckBox, setToggleCheckBox] = useState(props.itemChecked);
//   return (
//     <CheckBox
//       disabled={false}
//       value={props.itemChecked}
//       onValueChange={(newValue) => {
//         props.selectedRemarkMethod(props.index, newValue);
//         // setToggleCheckBox(newValue);
//       }}
//     />
//   );
// };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 5,
    marginTop: 5,
    borderRadius: 10,
  },
  headingText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 17,
    marginTop: 25,
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
  remarksContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    borderRadius: 25,
    width: '95%',
    height: 70,
    borderWidth: 2,
    borderColor: '#ff8c00',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 3,
  },
  remarksView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
    padding: 5,
    marginTop: 5,
    marginBottom: 10,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadButton: {
    backgroundColor: 'white',
  },
  redevelopmentRemarks: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 25,
    width: '100%',
    borderWidth: 2,
    borderColor: '#ff8c00',
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  submitRemark1: {
    backgroundColor: '#ff8c00',
  },
  projAmenities: {
    marginHorizontal: 100,
    fontFamily: 'Roboto-Bold',
    fontSize: 17,
    marginTop: 10,
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
