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
} from 'react-native';
import HeaderProgress from '../CustomComponents/HeaderProgress';
import {IconButton} from 'react-native-paper';
import CustomModal from '../CustomComponents/CustomModal';
import {useDispatch} from 'react-redux';
import {PERSIST_TEST} from '../redux/action';
import {useSelector} from 'react-redux';
import {ADD_DOC_LIST} from '../redux/action';

const docArray = [{key: 'Document 1'}, {key: 'Document 2'}];

export default function Documents(props) {
  const [addVisible, setAddVisible] = useState(false);
  const {docName} = useSelector((state) => state.docAddReducer);
  const [addArray, setAddArray] = useState(docName);
  const [document, setDocument] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('DAL', addArray.length);
    console.log('DOCNAMERedux', docName.length);
    if (docName.length < addArray.length) {
      console.log('!!!!!', docName.length);
      dispatch({
        type: ADD_DOC_LIST,
        payload: {
          docName: addArray,
        },
      });
      setAddVisible(!addVisible);
    }
  }, [addArray.length]);

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
                onChangeText={(doc) => setDocument(doc)}
                value={document}
                backgroundColor="white"
                color="#3A1292"
                placeholder="Document Name"
              />
            </View>

            <TouchableOpacity
              style={[styles.button, styles.uploadButton]}
              onPress={() => setAddVisible(!addVisible)}>
              <Text
                style={{fontFamily: 'aerial', fontSize: 17, color: 'black'}}>
                {' '}
                Cancel{' '}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.submitButton, styles.submit]}
              onPress={() => {
                setAddArray([...addArray, {key: document}]);
                console.log('BBBBBBBBB', addArray);
              }}>
              <Text
                style={{
                  fontFamily: 'aerial',
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

  return (
    <View style={styles.container}>
      <HeaderProgress />
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
        <Text style={{fontFamily: 'aerial', fontSize: 22}}> Documents </Text>
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
          <View style={styles.addDocView}>
            <Text style={{fontFamily: 'aerial', fontSize: 18, color: 'white'}}>
              {' '}
              Add{' '}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.MainContainer}>
        <FlatList
          data={addArray}
          renderItem={({item}) => <DocBody itemKey={item.key}></DocBody>}
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
          <Text style={styles.textStyle}> Submit </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const DocBody = (props) => {
  const [itemData, setItemData] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState();
  const {docDescription} = useSelector((state) => state.docReducer);
  const [array, setArray] = useState(docDescription);

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
                placeholder="Document"
                defaultValue={itemData}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                width: 260,
                height: 200,
                borderRadius: 15,
                marginBottom: 5,
                backgroundColor: 'white',
                marginTop: 10,
                marginLeft: 20,
                padding: 5,
              }}>
              <View style={{width: '80%'}}>
                <TextInput
                  color="#3A1292"
                  backgroundColor="white"
                  onChangeText={(text) => setText(text)}
                  value={text}
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
              <Text
                style={{
                  fontFamily: 'aerial',
                  fontSize: 15,
                }}>
                {' '}
                Cancel{' '}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.submitButton, styles.submit]}
              onPress={() => {
                setArray([...array, {description: text, name: itemData}]);
              }}>
              <Text style={styles.textStyle}> Submit </Text>
            </TouchableOpacity>
          </CustomModal>
        ) : (
          <View></View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.GridViewBlockStyle} key={props.itemKey}>
      {modalVisible ? documentModal() : <View></View>}
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
        <Text> Document </Text>
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
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#ff8c00',
              width: 70,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
            }}>
            <Text style={{fontFamily: 'Roboto-Regular'}}> UPLOAD </Text>
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
            <Text style={{fontFamily: 'Roboto-Regular'}}> REMARK </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    fontFamily: 'Roboto-Bold',
    fontSize: 19,
    marginLeft: 10,
    color: 'white',
  },
  touchableStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadButton: {
    backgroundColor: 'white',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
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
    fontFamily: 'Roboto-Regular',
    fontSize: 19,
    color: 'white',
  },
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 5,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  GridViewBlockStyle: {
    // justifyContent: 'center',
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
    fontFamily: 'aerial',
  },
  addDocView: {
    backgroundColor: '#ff8c00',
    width: 100,
    height: 40,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
});
