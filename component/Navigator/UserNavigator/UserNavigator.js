import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewGD from '../../User/NewGD/NewGD';
import GdStatus from '../../GD status/GdStatus';
import UserProfile from '../../UserProfile';

const { Navigator, Screen}= createNativeStackNavigator();

const UserNavigator  =()=>(
    
        <Navigator screenOptions={{headerShown:false}}  initialRouteName='UserProfile'>
        <Screen name='UserProfile' component={UserProfile}/>
            <Screen name='NewGD' component={NewGD}/>
            <Screen name='GdStatus' component={GdStatus}/>
            

            
        </Navigator>
    
)

export default UserNavigator;