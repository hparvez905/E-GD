import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Login';
import Home from '../../route/Home';
import Profile from '../Profile';
import SignUp from '../Signup';
import Admin from '../Admin/Admin';
import AdminProfile from '../Admin/AdminProfile';

const { Navigator, Screen}= createNativeStackNavigator();

const AppNavigator  =()=>(
    <NavigationContainer>
        <Navigator screenOptions={{headerShown:false}}  initialRouteName='Home'>
        <Screen name='Home' component={Home}/>
            <Screen name='Login' component={Login}/>
            <Screen name='Profile' component={Profile}/>
            <Screen name='SignUp' component={SignUp}/>
            <Screen name='Admin' component={Admin}/>
            <Screen name='AdminProfile' component={AdminProfile}/>
            

            
        </Navigator>
    </NavigationContainer>
)

export default AppNavigator;