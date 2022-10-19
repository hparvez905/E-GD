import React from 'react'
import { StyleSheet,Text,View ,TouchableOpacity} from 'react-native';





interface ProfileProps {
  navigation: any;
}

const UserProfile = (props: ProfileProps) => {

  const GdCreate =()=>props.navigation.navigate("NewGD")
  const GdList =()=>props.navigation.navigate("GdStatus")
  return (
   
   
    <View style={styles.container}>
            <TouchableOpacity
                style={styles.btn}
               
                >
                <Text style={styles.btnText}  onPress={GdCreate}> Create New GD </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btn}
               
                >
                <Text style={styles.btnText}  onPress={GdList}>GD Status</Text>
            </TouchableOpacity>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000c2b',
    alignItems: 'center',
    justifyContent: 'center',
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


export default UserProfile;
