import React from 'react'
import {StyleSheet,Text,View,TouchableOpacity,Image,TextInput,} from 'react-native'
import { useNavigation } from '@react-navigation/native'
const HomeScreen = () => {
  const nav=useNavigation();
    
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.btn}
                onPress={()=>nav.navigate('Admin')}
                >
                <Text style={styles.btnText}>Admin Login </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btn}
                onPress={()=>nav.navigate('Login')}
                >
                <Text style={styles.btnText}>User Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000c2b',
        justifyContent:'center',
        alignItems: 'center',
    },
    btn : {
        marginTop: 40,
        marginBottom:30,
        backgroundColor:'#ff4d00',
        borderRadius:10,
        width:250,
        height:120,
        alignItems: "center",
        justifyContent:'center'
    },
    btnText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        padding:10
    }
});


export default HomeScreen;