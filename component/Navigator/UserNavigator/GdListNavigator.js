import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GdList from '../../GD status/GdList';
import WaitingGD from '../../GD status/GdList/WaitingGd';
import VerifiedGD from '../../GD status/GdList/VerifiedGD';
import InvestigatingGD from '../../GD status/GdList/InvestigatingGD';
import DiclinedGD from '../../GD status/GdList/DiclinedGD';
import ClosedGD from '../../GD status/GdList/ClosedGD';

const { Navigator, Screen}= createNativeStackNavigator();

const GdListNavigator  =()=>(
    
        <Navigator screenOptions={{headerShown:false}}  initialRouteName='GdList'>
        <Screen name='GdList' component={GdList}/>
            <Screen name='Waiting' component={WaitingGD}/>
            <Screen name='Verified' component={VerifiedGD}/>
            <Screen name='Investigating' component={InvestigatingGD}/>
            <Screen name='Diclined' component={DiclinedGD}/>
            <Screen name='Closed' component={ClosedGD}/>
            

            
        </Navigator>
    
)

export default GdListNavigator;