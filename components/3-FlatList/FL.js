import React, { useState } from 'react';
import { View ,StyleSheet,Text, FlatList} from 'react-native';

function FL(props) {

    const [people,setPeople]=useState([
        {name:'A',age:15},
        {name:'A',age:15},
        {name:'A',age:15},
        {name:'A',age:15},
        {name:'A',age:15},
        {name:'A',age:15},
        {name:'A',age:15},
        {name:'A',age:15},
        {name:'A',age:15},
        {name:'A',age:15},
        {name:'A',age:15},
        {name:'A',age:15},
        {name:'A',age:15},
        {name:'A',age:15},
        {name:'A',age:15},
        {name:'A',age:15},
        {name:'A',age:15},
        {name:'A',age:15},
        {name:'A',age:15},
        {name:'A',age:15},
        {name:'A',age:15},
        {name:'A',age:15},
        {name:'A',age:15},
        {name:'A',age:15},
        {name:'A',age:15},
        {name:'A',age:15},
        {name:'A',age:15},
        {name:'FinishA',age:15},
    ])

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item)=>Math.random(1,500)}
                data={people}
                renderItem={({item})=>(
                    <Text style={styles.item}>{item.name} {item.age}</Text>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      flex: 1,
      padding:40,
      paddingHorizontal:20
    },
    item:{
        marginTop:24,
        padding:15,
        backgroundColor:'pink',
        fontSize:24
    }
});

export default FL;