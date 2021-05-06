import { Formik } from 'formik';
import React, { useEffect, useRef, useState } from 'react'
import { Alert, Button, SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity, View, BackHandler, Animated, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import { FacebookBtn, GoogleBtn } from '../../components';
import Checkbox from '../../core/Checkbox/Checkbox';
import styles from './styles';
import * as Yup from 'yup';
import { RNCamera } from 'react-native-camera';
import BarcodeMask from 'react-native-barcode-mask';
import { Route } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteName } from '../../instances';
import messaging from '@react-native-firebase/messaging';
import PushNotification from "react-native-push-notification";
interface FirstScreenProps {
    route: Route<any>,
    navigation: StackNavigationProp<any>
}
export const FirstScreen: React.FC < FirstScreenProps > = (props) => {
    const {}=props;
    
    
    const getTokenFCM=async()=>{
        console.log('now')
       messaging().getToken().then(token=>{
        console.log('TOKEN =====',token)
    })
    }
    PushNotification.configure({
        onRegister:({token})=>{
            console.log('TOKEN---',token)
        },
        onNotification:(notification)=>{
            console.log("NOTIFICATION:", notification);
            // notification.finish(PushNotificationIOS.FetchResult.NoData);
        },
        // senderID: "880064665252",
        popInitialNotification: true,
        requestPermissions: true,
        permissions: {
            alert: true,
            badge: true,
            sound: true,
          },
        
    })
    useEffect(() => {
        getTokenFCM()
        // const unsubscribe = messaging().onMessage(async remoteMessage => {
        //     Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
        //   });
      
        //   return unsubscribe;
       
    })
    const onNext = () => {
        props.navigation.navigate(RouteName.SECOND_SCREEN)
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar />
            {/* <Checkbox title="Checkbox 1" ref={checkbox1} />
            <Checkbox title="Checkbox 2" ref={checkbox2} />
            <Button title={"Submit"} onPress={onSubmit}  /> */}
            {/* <FacebookBtn />
            <GoogleBtn /> */}


            <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: 'red' }} onPress={onNext}>
                <Text>Pan me!</Text>
            </TouchableOpacity>
            {/* <View style={styles.container}>
                <RNCamera
                    // ref={ref => {
                    //     this.camera = ref;
                    // }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    onGoogleVisionBarcodesDetected={({ barcodes }) => {
                        console.log(barcodes);
                    }}
                />
                <BarcodeMask width={'80%'} height={"40%"} showAnimatedLine={false} />
            </View> */}
        </SafeAreaView>
    )
}