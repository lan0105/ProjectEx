import React, { useEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { styles } from './SecondScreen.style';
import { Route } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteName } from '../../instances';

interface SecondScreenProps {
  route: Route < any >,
    navigation: StackNavigationProp<any>

}

export const SecondScreen: React.FC < SecondScreenProps > = (props) => {
  const { } = props;


  return (
    <SafeAreaView style={[styles.container]}>
      <TouchableOpacity onPress={()=>{props.navigation.navigate(RouteName.FIRST_SCREEN)}}>
      <Text>SecondScreen</Text>

      </TouchableOpacity>
    </SafeAreaView>
  );
};


