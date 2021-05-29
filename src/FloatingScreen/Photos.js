import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  FlatList,
  Platform,
  Alert,
  Image,
} from 'react-native';
import HeaderProgress from '../CustomComponents/HeaderProgress';
import {IconButton} from 'react-native-paper';
import ImagePicker from 'react-native-image-picker/lib/commonjs';
import CustomModal from '../CustomComponents/CustomModal';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {ADD_PHOTO_LIST, SET_IMAGE} from '../redux/action';
import {RNCamera} from 'react-native-camera';
import ViewShot from 'react-native-view-shot';
import DateTime from '../Utilities/DateTime';

export default function Photos(props) {
  const [addVisible, setAddVisible] = useState(false);
  const [toggleCam, setToggleCam] = useState('');
  const [text, setText] = useState();
  const {photoName} = useSelector((state) => state.photoReducer);
  const [array, setArray] = useState(photoName);
  const dispatch = useDispatch();
  const [extraThings, setExtraThings] = useState(true);
  const viewShotRef = React.createRef();

  useEffect(() => {
    if (photoName.length < array.length) {
      dispatch({
        type: ADD_PHOTO_LIST,
        payload: {
          photoName: array,
        },
      });
      setAddVisible(!addVisible);
    }
  }, [array.length]);

  const addDoc = () => {
    return (
      <View>
        {addVisible ? (
          <CustomModal open={addVisible}>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginLeft: 15,
              }}>
              <TextInput
                style={{
                  width: '100%',
                  height: 40,
                  borderRadius: 15,
                  marginBottom: 5,
                  backgroundColor: 'white',
                  marginTop: 10,
                }}
                onChangeText={(text) => setText(text)}
                value={text}
                backgroundColor="white"
                color="#3A1292"
                placeholder="Photograph Name"
              />
            </View>

            <TouchableOpacity
              style={[styles.button, styles.uploadButton]}
              onPress={() => setAddVisible(!addVisible)}>
              <Text style={styles.textStyle}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.submitButton, styles.submit]}
              onPress={() => {
                setArray([
                  ...photoName,
                  {key: text, imageUri: 'Dummy', remark: ''},
                ]);
              }}>
              <Text
                style={{
                  fontFamily: 'Roboto-Regular',
                  fontSize: 17,
                  color: 'white',
                }}>
                {' '}
                Submit{' '}
              </Text>
            </TouchableOpacity>
          </CustomModal>
        ) : (
          <View></View>
        )}
      </View>
    );
  };

  const captureViewShot = async () => {
    setExtraThings(false);
    const data = await viewShotRef.current.capture();
    setExtraThings(true);
    dispatch({
      type: SET_IMAGE,
      payload: {
        imagePath: data,
        key: toggleCam.key,
      },
    });
    console.log('Data of image', data);
    setToggleCam(false);
  };

  return (
    <>
      {toggleCam ? (
        <ViewShot
          style={{flex: 1}}
          ref={viewShotRef}
          options={{quality: 1, format: 'png'}}>
          <View style={{flex: 1}}>
            <RNCamera
              style={{
                flex: 1,
                justifyContent: 'flex-end',
              }}
              type={RNCamera.Constants.Type.back}
              captureAudio={false}
              androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}>
              {extraThings && (
                <View
                  style={{
                    height: 50,
                    backgroundColor: 'transparent',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity onPress={() => captureViewShot()}>
                    <Text style={styles.capture}> [CAPTURE] </Text>
                  </TouchableOpacity>
                </View>
              )}
            </RNCamera>
            <View style={{marginBottom: 10}}>
              <DateTime dateTimeBoolean={true} />
            </View>
          </View>
        </ViewShot>
      ) : (
        <View style={styles.container}>
          <HeaderProgress />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={{fontFamily: 'Robot-Regular', fontSize: 22}}>
              {' '}
              Photographs{' '}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-end',
              marginTop: 5,
              marginBottom: 5,
            }}>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                setAddVisible(true);
              }}>
              <View style={styles.addPhotoView}>
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

          <View style={styles.MainContainer}>
            <FlatList
              data={photoName}
              renderItem={({item}) => (
                <PhotoBody
                  setCamera={setToggleCam}
                  itemKey={item.key}
                  path={item.imageUri}></PhotoBody>
              )}
              numColumns={2}
            />
          </View>

          {addDoc()}

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.pageSubmit}
              onPress={() => {
                props.navigation.navigate('StartInspection');
              }}>
              <Text
                style={{
                  fontFamily: 'Roboto-Regular',
                  fontSize: 19,
                  color: 'white',
                }}>
                {' '}
                Submit{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}

const PhotoBody = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [itemData, setItemData] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  const dispatch = useDispatch();
  console.log('PHOTBODY Props', props);

  const selectImage = () => {
    setAlertVisible(false);
    let options = {
      noData: true,
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      console.log({response});

      if (response.didCancel) {
        console.log('User cancelled photo picker');
        Alert.alert('You did not select any image');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        dispatch({
          type: SET_IMAGE,
          payload: {
            imagePath: `file:///${response.path}`,
            key: props.itemKey,
          },
        });
      }
    });
  };

  const documentModal = () => {
    return (
      <View>
        {modalVisible ? (
          <CustomModal open={modalVisible}>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginLeft: 15,
              }}>
              <TextInput
                style={{
                  width: '100%',
                  height: 40,
                  borderRadius: 15,
                  marginBottom: 5,
                  backgroundColor: 'white',
                  marginTop: 10,
                }}
                backgroundColor="white"
                color="#3A1292"
                placeholder="Photograph"
                defaultValue={itemData}
              />
            </View>
            <View
              style={{
                width: 260,
                height: 200,
                borderRadius: 15,
                marginBottom: 5,
                backgroundColor: 'white',
                marginTop: 10,
                marginLeft: 20,
                flexDirection: 'row',
                flexWrap: 'wrap',
                padding: 5,
              }}>
              <View style={{width: '80%'}}>
                <TextInput
                  color="#3A1292"
                  backgroundColor="white"
                  placeholder="Remarks"
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
            <TouchableOpacity
              style={[styles.button, styles.uploadButton]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.submitButton, styles.submit]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text
                style={{
                  fontFamily: 'Robot-Regular',
                  fontSize: 19,
                  color: 'white',
                }}>
                Submit
              </Text>
            </TouchableOpacity>
          </CustomModal>
        ) : (
          <View></View>
        )}
      </View>
    );
  };

  const alertModal = () => {
    return (
      <CustomModal open={alertVisible}>
        <View style={{width: 250}}>
          <Text style={{fontFamily: 'Robot-Regular', fontSize: 20}}>
            {' '}
            Select Photograph{' '}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: 'skyblue',
            height: 40,
            width: 250,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
            borderRadius: 10,
          }}
          onPress={() => props.setCamera({key: props.itemKey})}>
          <Text style={{fontFamily: 'Robot-Regular', fontSize: 16}}>
            {' '}
            Open Camera{' '}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'skyblue',
            height: 40,
            width: 250,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
            borderRadius: 10,
          }}
          onPress={() => selectImage()}>
          <Text style={{fontFamily: 'Robot-Regular', fontSize: 16}}>
            {' '}
            Open Gallery{' '}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.uploadButton]}
          onPress={() => setAlertVisible(!alertVisible)}>
          <Text style={{fontFamily: 'Robot-Regular'}}>Cancel</Text>
        </TouchableOpacity>
      </CustomModal>
    );
  };

  return (
    <View style={styles.GridViewBlockStyle} key={props.itemKey}>
      {modalVisible ? documentModal() : <View></View>}
      {alertVisible ? alertModal() : <View></View>}

      <View
        style={{
          backgroundColor: '#ff8c00',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <Text style={styles.GridViewInsideTextItemStyle}>
          {' '}
          {props.itemKey}{' '}
        </Text>
      </View>
      <View
        style={{
          flex: 7,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#CCCCCC',
        }}>
        <Image
          source={{
            uri: props.path,
          }}
          style={styles.imageBox}
          resizeMode="stretch"
        />
      </View>
      <View
        style={{
          flex: 2.1,
          width: '100%',
        }}>
        <TextInput
          placeholder="Remark"
          textAlignVertical="center"
          multiline={true}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          flex: 1.5,
          alignItems: 'center',
          backgroundColor: '#DCE8F9',
          alignContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            setAlertVisible(true);
          }}>
          <View
            style={{
              backgroundColor: '#ff8c00',
              width: 70,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
            }}>
            <Text style={styles.commonText}> UPLOAD </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
            setItemData(props.itemKey);
          }}>
          <View
            style={{
              backgroundColor: '#ff8c00',
              width: 70,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
            }}>
            <Text style={styles.commonText}> REMARK </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  docView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#ff8c00',
    marginTop: 15,
    width: '88%',
    borderRadius: 20,
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
  },
  docText: {
    fontFamily: 'Robot-Regular',
    fontWeight: 'bold',
    fontSize: 19,
    marginLeft: 10,
    color: 'white',
  },
  touchableStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  modalView: {
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  uploadButton: {
    backgroundColor: 'white',
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
  submitButton: {
    backgroundColor: '#ff8c00',
  },
  submit: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
  },
  pageSubmit: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 50,
    backgroundColor: '#ff8c00',
    borderRadius: 20,
    padding: 10,
    marginTop: 30,
    marginBottom: 10,
  },
  textStyle: {
    fontFamily: 'Robot-Regular',
    fontSize: 17,
    color: 'black',
  },
  GridViewBlockStyle: {
    flex: 1,
    maxWidth: '49%',
    height: 200,
    margin: 2,
    borderWidth: 1,
    borderColor: 'black',
  },
  GridViewInsideTextItemStyle: {
    color: 'white',
    padding: 10,
    fontSize: 12,
    justifyContent: 'center',
    fontFamily: 'Roboto-Regular',
  },
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 5,
    paddingTop: Platform.OS === 'ios' ? 20 : 10,
  },
  commonText: {
    fontFamily: 'Roboto-Regular',
    color: 'white',
  },
  imageBox: {
    width: '100%',
    height: '100%',
  },
  addPhotoView: {
    backgroundColor: '#ff8c00',
    width: 100,
    height: 40,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40,
    fontFamily: 'Roboto-Regular',
  },
});
