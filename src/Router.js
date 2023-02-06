import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import SignIn from './screens/SignIn';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import SignUp from './screens/SignUp';
import Record from './screens/Record';
import Archive from './screens/Archive';
import Profile from './screens/Profile';
import Splash from './screens/Splash';
import OTP from './screens/OTP';
import CustomDrawerContent from './CustomDrawerContent';

const Stack = createNativeStackNavigator();


const Drawer = createDrawerNavigator();


const Router = () =>{

    const StackNav = props => {
        return (
            <Stack.Navigator  initialRouteName='Splash'>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{headerShown: false, gestureEnabled: false }}
                />
                 <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                    options={{headerShown: false, gestureEnabled: false }}
                />  
                    
               
                 <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{headerShown: false, gestureEnabled: false }}
                />  
                <Stack.Screen
                    name="Record"
                    component={Record}
                    options={{headerShown: false, gestureEnabled: false }}
                /> 
                <Stack.Screen
                    name="Archive"
                    component={Archive}
                    options={{headerShown: false, gestureEnabled: false }}
                /> 
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{headerShown: false, gestureEnabled: false }}
                />  
                 <Stack.Screen
                    name="Splash"
                    component={Splash}
                    options={{headerShown: false, gestureEnabled: false }}
                />  
                 {/* <Stack.Screen
                    name="OTP"
                    component={OTP}
                    options={{headerShown: false, gestureEnabled: false }}
                /> */}
            </Stack.Navigator>

        );

    };
    const DrawerNavigator = props => {
        return (
          <Drawer.Navigator
            screenOptions={{
              headerShown: false,
              swipeEnabled: false,
    
            }}
            drawerContent={props => <CustomDrawerContent {...props} />}
            >
            <Drawer.Screen name="Home" component={StackNav} />
          </Drawer.Navigator>
        );
      };

    return (
       
          <NavigationContainer>
  
              <DrawerNavigator/>

          </NavigationContainer>
        
      );
}
export default Router;