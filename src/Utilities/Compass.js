import React, {Component} from 'react';
import {Text, View, Image, ImageBackground} from 'react-native';
import {Grid, Col, Row} from 'react-native-easy-grid';
import {
  magnetometer,
  SensorTypes,
  setUpdateIntervalForType,
} from 'react-native-sensors';
import LPF from 'lpf';

// const {height, width} = Dimensions.get('window');

export default class Compass extends Component {
  constructor() {
    super();
    this.state = {
      magnetometer: '0',
    };
    LPF.init([]);
    LPF.smoothing = 1;
  }

  componentDidMount() {
    this._toggle();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _toggle = () => {
    if (this._subscription) {
      this._unsubscribe();
    } else {
      this._subscribe();
    }
  };

  _subscribe = async () => {
    setUpdateIntervalForType(SensorTypes.magnetometer, 16);
    this._subscription = magnetometer.subscribe(
      (sensorData) => this.setState({magnetometer: this._angle(sensorData)}),
      (error) => console.log('The sensor is not available'),
    );
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.unsubscribe();
    this._subscription = null;
  };

  _angle = (magnetometer) => {
    let angle = 0;
    if (magnetometer) {
      let {x, y} = magnetometer;
      if (Math.atan2(y, x) >= 0) {
        angle = Math.atan2(y, x) * (180 / Math.PI);
      } else {
        angle = (Math.atan2(y, x) + 2 * Math.PI) * (180 / Math.PI);
      }
    }
    return Math.round(LPF.next(angle));
  };

  _direction = (degree) => {
    if (degree >= 22.5 && degree < 67.5) {
      return 'NE';
    } else if (degree >= 67.5 && degree < 112.5) {
      return 'E';
    } else if (degree >= 112.5 && degree < 157.5) {
      return 'SE';
    } else if (degree >= 157.5 && degree < 202.5) {
      return 'S';
    } else if (degree >= 202.5 && degree < 247.5) {
      return 'SW';
    } else if (degree >= 247.5 && degree < 292.5) {
      return 'W';
    } else if (degree >= 292.5 && degree < 337.5) {
      return 'NW';
    } else {
      return 'N';
    }
  };

  // Match the device top with pointer 0° degree. (By default 0° starts from the right of the device.)
  _degree = (magnetometer) => {
    return magnetometer - 90 >= 0 ? magnetometer - 90 : magnetometer + 271;
  };

  _directionMethod = () => {
    return (
      <Text style={{fontFamily: 'aerial', fontSize: 22, color: 'white'}}>
        {this._direction(this._degree(this.state.magnetometer))}
      </Text>
    );
  };

  render() {
    return (
      <>
        {this.props.isDirection ? (
          this._directionMethod()
        ) : (
          <View
            style={{
              backgroundColor: 'white',
              width: 118,
              height: 118,
              borderRadius: 118 / 2,
            }}>
            <ImageBackground
              source={require('../Images/compass_bgUpdated.png')}
              style={{
                width: 118,
                height: 118,
                borderRadius: 118 / 2,
                justifyContent: 'center',
                padding: 2,
                alignItems: 'center',
                resizeMode: 'contain',
                transform: [{rotate: 360 - this.state.magnetometer + 'deg'}],
              }}>
              <Image
                source={require('../Images/compassneedle.png')}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 60 / 2,
                  resizeMode: 'contain',
                  transform: [{rotate: 360 + this.state.magnetometer + 'deg'}],
                }}
              />
            </ImageBackground>
          </View>
        )}
      </>
    );
  }
}
