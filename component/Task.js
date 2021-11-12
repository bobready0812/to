import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Task = (props) => {

const [isDone, setIsDone] = useState(false);

function changeState () {
    if(!isDone) {
        setIsDone(true);
    } else {
        setIsDone(false);
    }
}


    return(
        <View style={isDone? styles.item2 : styles.item}>
            <View style={styles.itemLeft}>
                <BouncyCheckbox size={25} fillColor="green" unfillColor="#FFFFFF" onPress={changeState} iconStyle={{borderColor: "green"}}></BouncyCheckbox>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
item: {
    backgroundColor:'#fff',
    padding:15,
    borderRadius:10,
   flexDirection:"row",
   justifyContent:"space-between",
   marginBottom: 20,
   alignItems:"center",
   
},

item2: {
    backgroundColor:'#C1C1C1',
    padding:15,
    borderRadius:10,
   flexDirection:"row",
   justifyContent:"space-between",
   marginBottom: 20,
   alignItems:"center",
   
},
itemLeft: {
  flexDirection:"row",
  alignItems:"center",
  flexWrap: "wrap"
},
square: {
    width:24,
    height: 24,
    backgroundColor:'#55BCF6',
    opacity:0.4,
    borderRadius: 5,
    marginRight: 15,
},
itemText:{
    maxWidth: '80%',
},
circular: {
    width:12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth:2,
    borderRadius:5,
},

});

export default Task;