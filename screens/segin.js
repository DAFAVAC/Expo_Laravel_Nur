import React from 'react';
import { StyleSheet,SafeAreaView, ScrollView, Text, TextInput, TouchableHighlight, View } from 'react-native';
import Constants from 'expo-constants';



export default function App() {

 
  return (  
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
    <View>
      <Text style={styles.title}>LOGIN NUR</Text> 
      <Text style={styles.text}>Usuario:</Text>
      <TextInput 
      style={styles.input}

      placeholder="Usuario"
      />
      <Text style={styles.text}>Contraseña:</Text>
    <TextInput 
      style={styles.input}
      secureTextEntry={true}
      placeholder="Contraseña"
      />
    <TouchableHighlight
    style={styles.button}>
      <Text style={styles.textBotton}>Enviar</Text>
      </TouchableHighlight>
        </View>
    </View>
     </ScrollView>
    </SafeAreaView>
  );
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerScrol: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    marginTop:50,
    marginBottom:15,
    marginHorizontal: 10,
  },
  input:{
  height:40,
  width:200,
  borderColor:"#0080ff",
  borderWidth:2,
  marginBottom:40
  },
  textArea:{
  height:60,
  fontSize:18 
  },
  title:{
    textAlign:"center",
    bottom:25
  },
  button:{
    backgroundColor:'skyblue',
    paddingTop:15,
    paddingBottom:15,
    borderRadius:8,
   paddingHorizontal:10,
   paddingVertical:10,
    
  },
  textBotton:{
    textAlign:"center",
    color:"#000"
  },
  text:{
   bottom:8
  },
  textBottonSend:{
    borderRadius:8,
   paddingHorizontal:10,
   paddingVertical:10,
    backgroundColor:'red',
    paddingTop:10,
    paddingBottom:10,
    bottom:10
  }

});
  