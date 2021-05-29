import React, {useRef} from 'react';
import {View, Text, Button, Pressable} from 'react-native';

import RBSheet from 'react-native-raw-bottom-sheet';

export default function BottomSheet() {
  const refRBSheet = useRef();
  return (
    <View>
      <Button
        title="OPEN BOTTOM SHEET"
        onPress={() => refRBSheet.current.open()}
      />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: 'grey',
          },
        }}>
        <Text
          style={{
            paddingLeft: 100,
            fontSize: 20,
            backgroundColor: 'lightgrey',
          }}>
          Demo {'&'} Sample Report
        </Text>

        <Pressable
          style={{marginTop: 5}}
          onPress={() => alert('you will be navigated to template page')}>
          <Text
            style={{
              paddingLeft: 100,
              fontSize: 20,
            }}>
            Demo Report Template 1 {''}{' '}
            <Text style={{fontSize: 25}}> {'>'} </Text>
          </Text>
        </Pressable>
      </RBSheet>
    </View>
  );
}
