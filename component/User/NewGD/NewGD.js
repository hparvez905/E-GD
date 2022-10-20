import React from 'react'
import {StyleSheet,Text,View,TouchableOpacity,TextInput,Alert} from 'react-native'

const NewGD = () => {
  const Submitted =()=>{alert('Submitted!');
}
    
    return (
        <View style={styles.container}>
            <Text style={{color:"#ff4d00",fontSize:25,fontWeight:"bold",marginBottom:20}} >GD Info</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.headField}> Incident Place</Text>
                <TextInput style={styles.textField} placeholder={'Location where ?'}/>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.headField}>Details</Text>
                <TextInput style={styles.detailsField} placeholder={'Describe  about the matter'}/>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.headField} >Contact Number</Text>
                <TextInput style={styles.textField} secureTextEntry={true} placeholder={'Phone Number'} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.headField} >Address</Text>
                <TextInput style={styles.textField} secureTextEntry={true} placeholder={'your address'} />
            </View>
            <TouchableOpacity
                style={styles.btn}
                >
                <Text style={styles.btnText} onPress={Submitted}>Submit</Text>
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
        paddingBottom:"2%",
    },
    textField: {
        backgroundColor:"#fff0e1",
        padding:"2%",
        borderRadius:6,
    },
    detailsField: {
      backgroundColor:"#fff0e1",
      padding:"2%",
      borderRadius:6,
      height:100,
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
        width:250,
        alignItems: "center"
    },
    btnText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        padding:10
    }
});


export default NewGD ;