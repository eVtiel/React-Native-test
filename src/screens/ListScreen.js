import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [ 
        {name: 'Friend #1', age: '20'},
        {name: 'Friend #2', age: '23'},
        {name: 'Friend #3', age: '26'},
        {name: 'Friend #4', age: '29'},
        {name: 'Friend #5', age: '32'},
        {name: 'Friend #6', age: '35'},
        {name: 'Friend #7', age: '38'},
        {name: 'Friend #8', age: '41'},
        {name: 'Friend #9', age: '44'},
        {name: 'Friend #10', age: '47'},
        {name: 'Friend #11', age: '50'},
        {name: 'Friend #12', age: '53'}
    ];

    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={friend => friend.name}
        data={friends}
        renderItem={ ({item}) => {
        return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
        }}
      />  
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 30
    }
});

export default ListScreen;