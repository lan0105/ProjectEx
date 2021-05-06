/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { firebase } from '@react-native-firebase/messaging';
import React, { useState } from 'react';
import { useEffect } from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements'
import 'react-native-gesture-handler';
import { AppFlow } from './src/instances';
interface Props {

}
const labels = ["Cart", "Delivery Address", "Order Summary", "Payment Method", "Track"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013'
}

const App: React.FC<Props> = ({ }: Props) => {
  const [currentPosition, setcurrentPosition] = useState(0);
  const onPageChange = (position: number) => {
    setcurrentPosition(position)
  }
  useEffect(() => {
    requestPermission()
  },)
  const requestPermission = async () => {
    console.log(await firebase.messaging().hasPermission())
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
      
    } catch (error) {
        // User has rejected permissions
    }
  }
  return (
    <>
    <AppFlow/>
    </>
  );
};

const styles = StyleSheet.create({

})

export default App;
