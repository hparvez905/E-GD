
import { StyleSheet,Text,View } from 'react-native';
import Home from '../route/Home';





export default function App() {
  return (
   
     <View style={styles.container}>
      <Text>
        Profile page 
      </Text>
     </View>
    
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
