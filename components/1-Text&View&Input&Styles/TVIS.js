import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native"; 

function TVIS(props) {
    
  const [name, setName] = useState("Ahmed");
  const [age, setAge] = useState(59);
  const [person, setPerson] = useState({ name: "mohamed", age: 40 });

  const clickHandler = () => {
    setName("Ayman");
    setPerson({ name: "ali", age: 25 });
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello ReactNative App</Text>
        <Text style={styles.boldText}>
          My name is {person.name}, and my age is {person.age}
        </Text>
        <TextInput
          multiline
          style={styles.input}
          placeholder="e.g. John Doe"
          onChangeText={(val) => setName(val)}
        />
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="e.g. Age"
          onChangeText={(age) => setAge(age)}
        />
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
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
  },
});

export default TVIS;
