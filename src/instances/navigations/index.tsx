import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer, } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"
import React from 'react';
import { Text } from "react-native";
import { View } from "react-native";
import { Icon } from 'react-native-elements'
import { FirstScreen, SecondScreen } from "../../screens";
const Stack = createStackNavigator()
const AppBottomTabBar = createBottomTabNavigator()
// function BottomBar() {
//     return (
//         <AppBottomTabBar.Navigator tabBarOptions={{
//             labelStyle: {
//                 fontSize: 13,
//             },
//             tabStyle: {
//                 height: 65
//             }
//         }}>
//             <AppBottomTabBar.Screen name={RouteName.HOME} component={Home}
//                 options={{
//                     title: "Home",

//                     tabBarIcon: () => {
//                         return (
//                             <View style={{ borderWidth: 1 }}>
//                                 <Icon name="ios-home-outline" type="ionicon" />
//                             </View>
//                         )
//                     }
//                 }}
//             />
//             <AppBottomTabBar.Screen name={RouteName.PROFILE} component={Profile}
//                 options={{
//                     title: "Home",

//                     tabBarIcon: () => {
//                         return (
//                             <View style={{ borderWidth: 1 }}>
//                                 <Icon name="account" type="material-community" />
//                             </View>
//                         )
//                     }
//                 }}
//             />
//         </AppBottomTabBar.Navigator>

//     )
// }
export const AppFlow: React.FC = () => {
    return (
        //@ts-ignore
        <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name={RouteName.FIRST_SCREEN} component={FirstScreen} />
                <Stack.Screen name={RouteName.SECOND_SCREEN} component={SecondScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export const RouteName = {
    FIRST_SCREEN: "FirstScreen",
    SECOND_SCREEN: 'SecondScreen'
}
const config = {
    screens: {
        FirstScreen: {
        path: "FirstScreen/:id",
        parse: {
          id: (id:string) => `${id}`,
        },
      },
      SecondScreen: {
        path: "SecondScreen/:id",
        parse: {
          id: (id:string) => `${id}`,
        },
      },
    //   Notifications: "notifications",
    //   Settings: "settings",
    },
  };
  
  const linking = {
    prefixes: ["projectex://app"],
    config,
  };
  
  export default linking;