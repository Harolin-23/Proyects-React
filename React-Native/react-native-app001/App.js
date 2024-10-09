import { StatusBar } from 'react-native'
import { StyleSheet, Text, View, Image, Button, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import fetchData from './lib/metacritic.js'
import {Link} from  'expo-router'

import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'

const icon = require('./assets/CleanSpark-1024x576.jpg');
const imageprom = require('./assets/enterprise.jpg');

export default function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchData().then((data) => console.log(data))
  }, [])

  return (
    <SafeAreaView>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image
          source={imageprom}
          style={{
            width: 200,
            height: 200,
            resizeMode: 'contain',
            borderRadius: 12,
          }}
        />
        <View style={styles.card}>
          <Text style={styles.textTitleStyle}>Inicia Con nosotros</Text>
          <Text style={styles.textDescriptionStyle}>
            Nuestra empresa se dedica a proporcionar soluciones tecnológicas
            innovadoras para mejorar la eficiencia y productividad de nuestros
            clientes. Ofrecemos una amplia gama de servicios que incluyen
            desarrollo de software, consultoría tecnológica y soporte técnico.
          </Text>
          <View style={styles.buttonContainer}></View>

          <Link href='/pages/start' style={[styles.btnEdit, 
            {
             width: 'auto',
             height: 50 , 
             justifyContent:'center', 
             alignItems:'center',
             paddingLeft:'65%'
            }]}>
            <Text style={styles.txtBut}>Start</Text>
          </Link>
        </View>
        <View style={styles.contentBut}>
          <Image
            source={icon}
            style={{
              width: 500,
              height: 200,
              margin: 0,
              resizeMode: 'center',
              borderRadius: 12,
            }}
          />
        </View>
      
      <View style={styles.moreText}>
        <View style={styles.card}>
          <Text style={styles.textTitleStyleMore}>Tenemos los mejores productos</Text>
          <Text style={styles.moreTextStyle}>
            Nuestra empresa se dedica a proporcionar soluciones tecnológicas
            innovadoras para mejorar la eficiencia.
          </Text>
          <View style={styles.sep}></View>
          <View style={styles.buttonPromContent}>
            <View style={styles.cardProm}>
              <Ionicons name="albums" size={50} color="#2196f3" />
              <Text style={styles.textProm}>Saves</Text>
            </View>
            <View style={styles.cardProm}>
              <Ionicons name="leaf" size={50} color="#2196f3" />
              <Text style={styles.textProm}>Ambient</Text>
            </View>
            <View style={styles.cardProm}>
              <Ionicons name="moon" size={50} color="#2196f3" />
              <Text style={styles.textProm}>Moon mode</Text>
            </View>
          </View>
        </View>
        </View>
      </View>
      <StatusBar barStyle="dark-content" />
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#00000',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    height:'auto',
    width:'auto',
    margin:30
  },
  sep:{
    width:'auto',
    height:1,
    marginTop:12,
    backgroundColor:'#2196f3',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
    paddingLeft:60
  },
  textTitleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft:12,
    color: '#000',
  },
  textDescriptionStyle: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 12,
    width:380,
  },
  card: {
    borderRadius: 12,
    padding: 30,
    margin: 12,
    width: 'auto',
    height: 'auto',
  },
  Image: {
    width: 107,
    height: 100,
    borderRadius: 10,
  },
  btnEdit:{
    marginTop:10,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
    backgroundColor:'#2196f3',
    padding:10,
    height:40,
    width:'100%',
  },
  contentBut:{
    padding: 12,
    margin: 12,
    width: 'auto',
    height: 120,
    backgroundColor:'#fffff9'
  },
  moreText:{
    marginTop:90,
    fontSize: 21,
    padding: 12,
    width: 'auto',
    height:250,
    backgroundColor:'#fffff9'
  },
  moreTextStyle:{
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 12,
  },
  buttonContent:{
    flexDirection: 'row' ,
    justifyContent: 'space-between',
    margin: 20,
    width: 'auto',
    height: 40,
    gap:5,
    backgroundColor:'#fffff9'
  },
  linkHt:{
    width:'auto',
  },  
  textTitleStyleMore: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft:12,
    color: '#000',
    width:'auto'
  },
  txtBut:{
    color:'#ffff',
    fontSize: 20,
    fontWeight: 'bold',

  },
  cardProm: {
    backgroundColor: '#DEDEDE',
    borderRadius: 12,
    padding: 12,
    margin: 12,
    width: 90,
    height:100,
    justifyContent:'center',
    alignItems:'center',

  },
    buttonPromContent:{
      flexDirection: 'row',
      width:'auto',
      gap:5,
      height:500
    }


})
