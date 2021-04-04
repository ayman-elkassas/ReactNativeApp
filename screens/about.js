import React from 'react';
import { View,StyleSheet, Text } from 'react-native';

function About(props) {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
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

export default About;