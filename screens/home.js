import React from 'react';
import { View,StyleSheet, Text, Button } from 'react-native';

function Home({navigation}) {

    const pressHandler=()=>{
        navigation.navigate('About')
    }

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title="go to about" onPress={pressHandler}></Button>
        </View>
    );
}

const styles=StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        padding:40,
        paddingHorizontal:20
    },
})

export default Home;