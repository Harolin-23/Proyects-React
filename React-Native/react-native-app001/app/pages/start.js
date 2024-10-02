import React from 'react';
import { View, Text, StyleSheet , ScrollView  } from 'react-native';

import { StatusBar } from 'expo-status-bar'


const Home = () => {
    return (
        <View style={styles.container}>
              <StatusBar style="dark" />
              <ScrollView showsVerticalScrollIndicator={false}>
                <View  style={styles.cardSup}></View>
                <View style={styles.cardInf}></View>
                <View style={styles.cardInf}></View>
            </ScrollView>
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
    cardSup:{
        backgroundColor: '#DEDEDE',
        borderRadius: 12,
        padding: 12,
        margin: 12,
        width: 350,
        height: 200
    },
    cardInf:{
        backgroundColor: '#DEDEDE',
        borderRadius: 12,
        padding: 12,
        margin: 12,
        width: 350,
        height: 400
    },
});

export default Home;