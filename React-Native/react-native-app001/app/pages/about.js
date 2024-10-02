import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {Link} from  'expo-router'



const About = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default About;