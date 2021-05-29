import React, {Component} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';

import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';
import Compass from './Compass';

export default class Sketch extends Component {
  compInstance = new Compass();
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <RNSketchCanvas
            containerStyle={{
              backgroundColor: 'transparent',
              flex: 1,
            }}
            canvasStyle={{
              backgroundColor: 'transparent',
              flex: 1,
            }}
            localSourceImage={{filename: 'gridimage1.jpg', mode: 'ScaleToFill'}}
            defaultStrokeIndex={0}
            defaultStrokeWidth={5}
            undoComponent={
              <View style={styles.functionButton}>
                <Text style={{color: 'white', fontFamily: 'aerial'}}>Undo</Text>
              </View>
            }
            closeComponent={
              <View
                style={{
                  marginHorizontal: 2.5,
                  marginVertical: 8,
                  height: 30,
                  width: 55,
                  backgroundColor: 'red',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                }}>
                <Compass isDirection={true} />
              </View>
            }
            clearComponent={
              <View style={styles.functionButton}>
                <Text style={{color: 'white', fontFamily: 'aerial'}}>
                  Clear
                </Text>
              </View>
            }
            eraseComponent={
              <View style={styles.functionButton}>
                <Text style={{color: 'white', fontFamily: 'aerial'}}>
                  Eraser
                </Text>
              </View>
            }
            strokeComponent={(color) => (
              <View
                style={[{backgroundColor: color}, styles.strokeColorButton]}
              />
            )}
            strokeSelectedComponent={(color, index, changed) => {
              return (
                <View
                  style={[
                    {backgroundColor: color, borderWidth: 2},
                    styles.strokeColorButton,
                  ]}
                />
              );
            }}
            strokeWidthComponent={(w) => {
              return (
                <View style={styles.strokeWidthButton}>
                  <View
                    style={{
                      backgroundColor: 'white',
                      marginHorizontal: 2.5,
                      width: Math.sqrt(w / 3) * 10,
                      height: Math.sqrt(w / 3) * 10,
                      borderRadius: (Math.sqrt(w / 3) * 10) / 2,
                    }}
                  />
                </View>
              );
            }}
            saveComponent={
              <View style={styles.functionButton}>
                <Text style={{color: 'white'}}>Save</Text>
              </View>
            }
            savePreference={() => {
              return {
                // folder: 'RNSketchCanvas',
                filename: String(Math.ceil(Math.random() * 100000000)),
                transparent: false,
                imageType: 'png',
              };
            }}
            onSketchSaved={(success, filePath) => {
              Alert.alert(
                success ? 'Image saved!' : 'Failed to save image!',
                filePath,
              );
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
  strokeColorButton: {
    marginHorizontal: 2.5,
    marginVertical: 8,
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  strokeWidthButton: {
    marginHorizontal: 2.5,
    marginVertical: 8,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#39579A',
  },
  functionButton: {
    marginHorizontal: 2.5,
    marginVertical: 8,
    height: 30,
    width: 60,
    backgroundColor: '#39579A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
