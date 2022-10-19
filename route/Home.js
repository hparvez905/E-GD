
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';



import Login from '../component/Login';
import Settings from './Settings';
import SampleGD from './SampleGD';
import Admin from './Admin';
import HomeScreen from './HomeScreen'

const Drawer=createDrawerNavigator();

export default function Home() {
  return (

      <Drawer.Navigator>
       <Drawer.Screen name="HomeScreen"  component={HomeScreen} />
        
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Admin" component={Admin} />
        <Drawer.Screen name="SampleGD" component={SampleGD} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>

     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
