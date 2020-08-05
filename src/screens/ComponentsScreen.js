import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {

    const userName = 'Stephen';

    return (
        <View>
            <Text style={styles.textStyle}>Getting started with react native</Text>
            <Text style={styles.userTextStype}>My name is {userName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    userTextStype: {
        fontSize: 20
    }
});

export default ComponentsScreen;