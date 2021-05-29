import React from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';

export default function CustomModal(props) {
  const {open, children} = props;
  return (
    <Modal animationType="slide" transparent={true} visible={open}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>{children}</View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
    shadowColor: '#F7812E',
    borderColor: '#F7812E',
    borderWidth: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
