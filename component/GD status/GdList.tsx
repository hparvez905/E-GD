import React from 'react'
import { StyleSheet,Text,View ,TouchableOpacity} from 'react-native';





interface GdListProps {
  navigation: any;
}

const GdList = (props: GdListProps) => {

  const Waiting =()=>props.navigation.navigate("Waiting")
  const Verified =()=>props.navigation.navigate("Verified")
  const Investigating =()=>props.navigation.navigate("Investigating")
  const Closed =()=>props.navigation.navigate("Closed")
  const Diclined =()=>props.navigation.navigate("Diclined")
  return (
   
   
    <View style={styles.container}>
       <Text style={{color:"#ff4d00",fontSize:25,fontWeight:"bold",marginBottom:20}} >GD List</Text>
            <TouchableOpacity
                style={styles.btn}
               
                >
                <Text style={styles.btnText}  onPress={Waiting}> Waiting GD</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btn}
               
                >
                <Text style={styles.btnText}  onPress={Verified}>Verified GD</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btn}
               
                >
                <Text style={styles.btnText}  onPress={Investigating}>Investigating GD</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btn}
               
                >
                <Text style={styles.btnText}  onPress={Closed}>Closed GD</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btn}
               
                >
                <Text style={styles.btnText}  onPress={Diclined}>Diclined GD</Text>
            </TouchableOpacity>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#000c2b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn : {
    marginTop:10,
    marginBottom:10,
    backgroundColor:'#ff4d00',
    borderRadius:10,
    width:180,
    height:100,
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


export default GdList;
