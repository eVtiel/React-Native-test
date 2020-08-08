import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Child #1</Text>
            <Text style={styles.textStyle}>Child #2</Text>
            <Text style={styles.textStyle}>Child #3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        height: 200
    },
    textStyle: {
        borderWidth: 10,
        borderColor: 'red',
        flex: 1
        // ...StyleShee.absoluteFillObject = position: absolute, top: 0, right: 0, bottom: 0, left: 0
    }
});


export default BoxScreen;