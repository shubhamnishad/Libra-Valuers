import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {PieChart, BarChart} from 'react-native-chart-kit';
import {ScrollView} from 'react-native-gesture-handler';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const data1 = [
  {
    name: 'Internal',
    population: 215000,
    color: 'blue',
    legendFontColor: '#7F7F7F',
    legendFontSize: 14,
  },
  {
    name: 'General',
    population: 280100,
    color: 'green',
    legendFontColor: '#7F7F7F',
    legendFontSize: 14,
  },
  {
    name: 'Measurement',
    population: 527612,
    color: 'red',
    legendFontColor: '#7F7F7F',
    legendFontSize: 14,
  },
  {
    name: 'Customer',
    population: 527612,
    color: 'skyblue',
    legendFontColor: '#7F7F7F',
    legendFontSize: 14,
  },
];

const data2 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
  datasets: [
    {
      data: [10, 20, 30, 40, 50, 60, 70],
    },
  ],
};
export default function Analytics(props) {
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  const navigation = useNavigation();
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
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Text style={{fontSize: 22, fontFamily: 'Roboto-Regular'}}>
          {' '}
          Analytics{' '}
        </Text>
      </View>
      <ScrollView>
        <View style={{marginTop: 20}}>
          <BarChart
            // style={graphStyle}
            data={data2}
            width={Dimensions.get('window').width}
            height={280}
            // yAxisLabel="$"
            chartConfig={chartConfig}
            verticalLabelRotation={30}
            withInnerLines={false}
          />
        </View>

        <View style={{marginTop: 20}}>
          <PieChart
            data={data1}
            width={Dimensions.get('window').width}
            height={280}
            chartConfig={chartConfig}
            accessor={'population'}
            backgroundColor={'transparent'}
            paddingLeft={'13'}
            center={[10, 0]}
            // hasLegend={false}
          />
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
            <View
              style={{
                backgroundColor: '#ff8c00',
                width: 110,
                height: 45,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 20,
                padding: 5,
                marginTop: 20,
              }}>
              <Text
                style={{
                  fontFamily: 'Roboto-Regular',
                  color: 'white',
                  fontSize: 20,
                }}>
                {' '}
                BACK{' '}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
