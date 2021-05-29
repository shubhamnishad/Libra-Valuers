import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  createStackNavigator,
  HeaderTitle,
  TransitionSpecs,
} from '@react-navigation/stack';

import Home from '../Screens/Home';
import GenProjInspection from '../SubScreen/GenProjInspection';
import BrokerUpdate from '../Screens/BrokerUpdate';
import Analytics from '../Screens/Analytics';
import IDCard from '../Screens/IDcard';
import FavouriteNote from '../Screens/FavouriteNote';
import Sample from '../SampleComponents/Sample';
import EmployeeSurvey from '../Screens/EmployeeSurvey';
import Expense from '../Screens/Expense';
import ApplyForLeave from '../Screens/ApplyForLeave';
import TodayVisit from '../Screens/TodayVisit';
import InternalInspection from '../SubScreen/InternalInspection';
import CustomerDetails from '../SubScreen/CustomerDetails';
import StartInspection from '../Screens/StartInspection';

import Policy from '../TabScreens/Policy';
import Account from '../TabScreens/Account';
import Help from '../TabScreens/Help';
import AppVideo from '../TabScreens/AppVideo';
import ProjectUpdate from '../Screens/ProjectUpdate';

import Documents from '../FloatingScreen/Documents';
import Sketch from '../Utilities/Sketch';
import Photos from '../FloatingScreen/Photos';
import Measurement from '../FloatingScreen/Measurement';
import AreaMeasurement from '../SubScreen/AreaMeasurement';
import RoomWise from '../SubScreen/RoomWise';
import StageCalculator from '../FloatingScreen/StageCalculator';
import StageCalculator2 from '../FloatingScreen/StageCalulator2';
import LatLong from '../FloatingScreen/LatLong';
import OfflineSample from '../FloatingScreen/OfflineSample';
import MeasurementDetails1 from '../SubScreen/MeasurementDetails1';
import MeasurementDetails2 from '../SubScreen/MeasurementDetails2';
import Login from '../Screens/Login';
import Valuation from '../SubScreen/Valuation';
import BrokerEnquiry from '../SubScreen/BrokerEnquiry';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName={Home}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="AppVideo"
        component={AppVideo}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="video" size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Help"
        component={Help}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="help" size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Policy"
        component={Policy}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="file-document" size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Login}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={MyTabs} />

        <Stack.Screen name="GenProjInspection" component={GenProjInspection} />
        <Stack.Screen name="BrokerUpdate" component={BrokerUpdate} />
        <Stack.Screen name="Analytics" component={Analytics} />
        <Stack.Screen name="ProjectUpdate" component={ProjectUpdate} />
        <Stack.Screen
          options={{
            headerTitle: 'Dashboard',
            headerStyle: {
              backgroundColor: '#ff8c00',
            },
          }}
          name="IDCard"
          component={IDCard}
        />
        <Stack.Screen name="Sample" component={Sample} />
        <Stack.Screen name="FavouriteNote" component={FavouriteNote} />
        <Stack.Screen name="StartInspection" component={StartInspection} />
        <Stack.Screen name="EmployeeSurvey" component={EmployeeSurvey} />
        <Stack.Screen name="Expense" component={Expense} />
        <Stack.Screen name="ApplyForLeave" component={ApplyForLeave} />
        <Stack.Screen name="TodayVisit" component={TodayVisit} />
        <Stack.Screen
          name="InternalInspection"
          component={InternalInspection}
        />
        <Stack.Screen name="CustomerDetails" component={CustomerDetails} />
        <Stack.Screen name="Documents" component={Documents} />
        <Stack.Screen name="Sketch" component={Sketch} />
        <Stack.Screen name="Photos" component={Photos} />
        <Stack.Screen name="Measurement" component={Measurement} />
        <Stack.Screen name="AreaMeasurement" component={AreaMeasurement} />
        <Stack.Screen name="RoomWise" component={RoomWise} />
        <Stack.Screen name="StageCalculator" component={StageCalculator} />
        <Stack.Screen name="StageCalculator2" component={StageCalculator2} />
        <Stack.Screen name="LatLong" component={LatLong} />
        <Stack.Screen name="OfflineSample" component={OfflineSample} />
        <Stack.Screen name="Valuation" component={Valuation} />
        <Stack.Screen name="BrokerEnquiry" component={BrokerEnquiry} />
        <Stack.Screen
          name="MeasurementDetails1"
          component={MeasurementDetails1}
        />
        <Stack.Screen
          name="MeasurementDetails2"
          component={MeasurementDetails2}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
