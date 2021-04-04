import React, { useState } from 'react';
import { View ,StyleSheet,Text, FlatList, TouchableOpacity} from 'react-native';

function TC(props) {

    const [people,setPeople]=useState([
        {name:'A',id:15},
        {name:'A',id:16},
        {name:'A',id:17},
        {name:'A',id:18},
        {name:'A',id:19},
        {name:'A',id:20},
        {name:'A',id:21},
        {name:'A',id:22},
        {name:'A',id:23},
        {name:'A',id:24},
    ])

    const pressHandler=(id)=>{
        // console.log(id)
        setPeople((prevPeople)=>{
            return prevPeople.filter(person =>person.id!=id)
        })
    }

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item)=>item.id}
                data={people}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>pressHandler(item.id)}>
                        <Text style={styles.item}>{item.name} {item.id}</Text>
                    </TouchableOpacity>
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

export default TC;