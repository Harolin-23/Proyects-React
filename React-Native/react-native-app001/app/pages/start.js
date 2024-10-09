import React from 'react';
import { View, Text, StyleSheet , ScrollView  } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar'

//componentes
import CardInfo from '../Components/CardInfo.jsx'


const Home = () => {
    return (

        <View style={styles.container}>
              <StatusBar style="dark" />
              <ScrollView showsVerticalScrollIndicator={false}>
                <View  style={styles.cardSup}>
                    <Text style={styles.Cardtitle}>Home Aplication</Text>
                    <Text style={styles.cardText}>
                    Nuestra empresa se dedica a proporcionar soluciones tecnológicas
                    innovadoras para 
                    </Text>
                    <View  style={styles.cardIcons}>
                        <Ionicons name="move" size={40} color="#8E9396" />
                        <Ionicons name="medal" size={40} color="#8E9396" />
                        <Ionicons name="navigate" size={40} color="#8E9396" />
                        <Ionicons name="rainy" size={40} color="#8E9396" />
                    </View>
                </View>
                <View style={styles.cardInfMore}>
                <Text style={styles.Cardtitle}>Selecciona tus Talentos</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <CardInfo imageUrl='https://th.bing.com/th/id/OIP.5z1zCe6b1QFUUjdmK18J8QHaHa?rs=1&pid=ImgDetMain' title='Juan Manuel' description='Experimentado en marketing Digital'/>
                        <CardInfo imageUrl='https://image.freepik.com/foto-gratis/joven-hombre-de-negocios-feliz-expresion_1194-1681.jpg' title='Jose Miguel' description='Experimentado en marketing Digital'/>
                        <CardInfo imageUrl='https://th.bing.com/th/id/OIP.5z1zCe6b1QFUUjdmK18J8QHaHa?rs=1&pid=ImgDetMain' title='Juan Manuel' description='Experimentado en marketing Digital'/>
                    </ScrollView>
                </View>
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
        height: 200,
        padding:20,
    },
    cardInf:{
        backgroundColor: '#DEDEDE',
        borderRadius: 12,
        padding: 12,
        margin: 12,
        width: 350,
        height: 400,
   

    },
    cardInfMore:{
        backgroundColor: '#DEDEDE',
        borderRadius: 12,
        padding: 12,
        margin: 12,
        width: 350,
        height: 450,
   
    },
    Cardtitle:{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign:'center',
        marginBottom:12,
    },
    cardText:{
        fontSize: 13.5,
        textAlign:'center'
    },
    cardIcons:{
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-around'
    }


});

export default Home;