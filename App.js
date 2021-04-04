import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [name,setName]=useState("Ahmed")
  const [person,setPerson]=useState({name:'mohamed',age:40})

  const clickHandler=()=>{
    setName("Ayman")
    setPerson({name:'ali',age:25})
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello ReactNative App</Text>
        <Text style={styles.boldText}>My name is {person.name}, and my age is {person.age}</Text>
        <Text></Text>
        <Text style={styles.boldText}>My name is {name}</Text>
        <View style={styles.buttonContainer}>
          <Button title="update state" onPress={clickHandler}></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor:'pink',
    padding:20
  },
  boldText:{
    fontWeight:'bold'
  },
  buttonContainer:{
    marginTop:30
  }
});
