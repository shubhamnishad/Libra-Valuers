import * as React from 'react';
import {FAB, Portal, Provider} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const FABComponent = () => {
  const navigation = useNavigation();
  const [state, setState] = React.useState({open: false});

  const onStateChange = ({open}) => setState({open});

  const {open} = state;

  return (
    <Provider>
      <Portal>
        <FAB.Group
          style={{paddingBottom: 120}}
          open={open}
          icon={open ? 'menu-open' : 'plus'}
          actions={[
            {
              icon: 'progress-check',
              label: 'Stage Calculator',
              onPress: () => navigation.navigate('StageCalculator'),
            },
            {
              icon: 'camera',
              label: 'Photographs',
              onPress: () => navigation.navigate('Photos'),
            },
            {
              icon: 'calculator',
              label: 'Measurement',
              onPress: () => navigation.navigate('MeasurementDetails1'),
            },
            {
              icon: 'pencil',
              label: 'Property Sketch',
              onPress: () => navigation.navigate('Sketch'),
            },
            {
              icon: 'compass',
              label: 'Lat/Long',
              onPress: () => navigation.navigate('LatLong'),
            },

            // {
            //   icon: 'file',
            //   label: 'Document',
            //   onPress: () => navigation.navigate('Documents'),
            // },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Provider>
  );
};

export default FABComponent;
