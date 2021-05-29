import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class DateTime extends Component {
  state = {
    time: new Date(),
    date: new Date(),
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({time: new Date()});
      this.setState({date: new Date()});
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  _dateTimeMethod = () => {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.dateandtimePage2}>
            Date: {this.state.date.toLocaleDateString()}
          </Text>
          <Text style={styles.dateandtimePage2}>
            Time: {this.state.time.toLocaleTimeString()}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.dateandtimePage2}>Lat: 28.254334</Text>
          <Text style={styles.dateandtimePage2}>Long: 17.044334</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <>
        {this.props.dateTimeBoolean ? (
          this._dateTimeMethod()
        ) : (
          <View style={styles.middleContainer}>
            <Text style={styles.dateandtime}>
              {this.state.date.toLocaleDateString()}
            </Text>
            <Text style={styles.dateandtime}>
              {this.state.time.toLocaleTimeString()}
            </Text>
          </View>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  middleContainer: {
    backgroundColor: '#ff8c00',
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateandtime: {
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'bold',
    color: 'white',
    marginLeft: 15,
    marginRight: 15,
  },
  dateandtimePage2: {
    alignSelf: 'center',
    fontSize: 14,
    fontFamily: 'bold',
    color: 'black',
    marginLeft: 10,
    marginRight: 10,
  },
});
