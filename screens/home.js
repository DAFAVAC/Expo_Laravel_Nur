import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableHighlight,
  Image,
} from 'react-native';

import Constants from 'expo-constants';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

       
        <Image source={require('../assets/img-titulo-donaciones.png')} style={styles.images}/>
        <Text style={styles.title}>Dar una Donacion</Text>
        

        
        <Image source={require('../assets/compu.jpg')} style={styles.images1} />
        <Text style={styles.title1}>Solicitar un equipo</Text>
        

        <TouchableHighlight style={styles.button}>
          <Text style={styles.textBotton}>Proceso de Donacion</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button1}>
          <Text style={styles.textBotton}>Testimonio</Text>
        </TouchableHighlight>


      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    
  },
  containerScrol: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    marginTop: 50,
    marginBottom: 15,
    marginHorizontal: 10,
  },
  title:{
    textAlign:"center",
    bottom:30,
    right:15
  },
  title1:{
    textAlign:"center",
    bottom:4,
    right:15
  }, 
  input: {
    height: 40,
    width: 200,
    borderColor: '#0080ff',
    borderWidth: 2,
    marginBottom: 40,
  },
  textArea: {
    height: 60,
    fontSize: 18,
  },
  title: {
    textAlign: 'center',
    bottom: 25,
  },
  button: {
    backgroundColor: 'skyblue',
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  textBotton: {
    textAlign: 'center',
    color: '#000',
  },
  text: {
    bottom: 8,
  },
  textBottonSend: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'red',
    paddingTop: 10,
    paddingBottom: 10,
    bottom: 10,
  },
  button:{
    backgroundColor:'#00e600',
    paddingTop:15,
    paddingBottom:15,
    borderRadius:8,
   paddingHorizontal:30,
   paddingVertical:20,
   top:30

  },
  button1:{
    backgroundColor:'#00e600',
    paddingTop:15,
    paddingBottom:15,
    borderRadius:8,
   paddingHorizontal:30,
   paddingVertical:20,
   top:40

  },
  textBotton:{
    textAlign:"center",
    color:"#000"
  },
 images:{
    width:100,
    height:100,
    bottom:40,
    left:0,
    alignItems:"center"
  },
  images1:{
    width:100,
    height:100,
    bottom:18,
    left:2,
    alignItems:"center"
  },
  title1:{
    textAlign:"center",
    bottom:4,
    right:15
  }, 
});
