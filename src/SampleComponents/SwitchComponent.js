import React, {useState} from 'react';
import {View, Switch, StyleSheet, Text} from 'react-native';

const SwitchComponent = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

      {isEnabled ? (
        <Text style={{marginTop: 2}}> Yes</Text>
      ) : (
        <Text style={{marginTop: 2}}>No</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    marginLeft: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default SwitchComponent;
