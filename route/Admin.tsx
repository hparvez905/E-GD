import React from 'react'
import {StyleSheet,Text,View,Button,Alert,TouchableOpacity,Image,TextInput} from 'react-native'


interface LoginProps {
    navigation: any;
}

const Admin = (props: LoginProps) => {
  
    const login =()=>props.navigation.navigate("Home")
    return (
        <View style={styles.container}>
            
            <Text style={{color:"#ff4d00",fontSize:25,fontWeight:"bold"}} >স্বাগতম! Admin</Text>
            <Text style={{color:"#ff4d00",fontSize:20,fontWeight:"bold", marginBottom:20}} > সাইন ইন করুন </Text>
            <View style={styles.inputContainer}>
                <Text style={styles.headField}>ইমেইল</Text>
                <TextInput style={styles.textField} placeholder={'আপনার ইমেইল লিখুন'}/>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.headField} >পাসওয়ার্ড</Text>
                <TextInput style={styles.textField} secureTextEntry={true} placeholder={'আপনার পাসওয়ার্ড দিন'} />
            </View>
            <TouchableOpacity
                style={styles.btn}
                
                onPress={login}>
                <Text style={styles.btnText}>সাইন ইন করুন</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{color:"#ff4d00",marginTop:10, marginBottom: 20}}
                      >পাসওয়ার্ড ভুলে গেছেন?</Text>
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
    inputContainer: {
        width: '80%',
        paddingTop:"2%",
        paddingBottom:"2%",
    },
    textField: {
        backgroundColor:"#fff0e1",
        padding:"2%",
        borderRadius:6,
    },
    headField: {
        marginTop:15,
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        marginBottom:10,
    },
    btn : {
        marginTop: 20,
        backgroundColor:'#ff4d00',
        borderRadius:10,
        width:200,
        alignItems: "center"
    },
    btnText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        padding:10
    }
});


export default Admin;