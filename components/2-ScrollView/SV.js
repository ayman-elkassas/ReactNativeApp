import React, { useState } from 'react';
import { ScrollView, View ,StyleSheet,Text} from 'react-native';

function SV(props) {

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
        {name:'Finish',age:15},
    ])

    return (
        <View style={styles.container}>
            <ScrollView>
                {people.map((item)=>{
                    return (
                        <View key={Math.random(1,500)}>
                            <Text style={styles.item}>{item.name} {item.age}</Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      flex: 1,
      padding:40,
      paddingHorizontal:20
    //   alignItems: "center",
    //   justifyContent: "center",
    },
    item:{
        marginTop:24,
        padding:15,
        backgroundColor:'pink',
        fontSize:24
    }
});

export default SV;