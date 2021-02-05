
import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text, TextInput, Alert, TouchableHighlight, View } from 'react-native';
import Constants from 'expo-constants';
import * as Location from "expo-location";
import MapView from 'react-native-maps';




export default function App() {
  /////////////////////////////////////////Location Agree/////////////////////////////////////////////
  const [geoLongitude, setLongitude] = useState(-77.5000000);
  const [geoLatitude, setLatitude] = useState(-2.0000000);
  const [value, onChangeText] = React.useState('');



  var region = {
    latitude: geoLatitude,
    longitude: geoLongitude,
    latitudeDelta: 0.00922,
    longitudeDelta: 0.00421,
  }



  const getPosition = async () => {
    try {
      const { coords } = await Location.getCurrentPositionAsync({});
      setLongitude(coords.longitude);
      setLatitude(coords.latitude);
    } catch (error) {
      console.log("getPosition -> error", error);
    }
  };


  const entryPoint = async () => {
    try {
      const { status } = await Location.requestPermissionsAsync();
      if (status === "granted") {
        getPosition();
      }
    } catch (error) {
      console.log("getPermissionAndPosition -> error", error);
    }
  };


  useEffect(() => {
    entryPoint();
  }, []);


  ///////////////////////////////////////////Alert pert Button////////////////////////////////////////////////
  function alert2() {
    Alert.alert(
      "Subir documentos", "Desea enviar informacion!",
      [
        { text: "Ok", onPress: () => (Api(dato)) },
        { text: "Cancel", onPress: () => (console.log("presionado")) }

      ]
    )
  }

  var latitud = region.latitude;
  var logitude = region.longitude;
  var dato = {
    name: value,
    latitude: latitud,
    longitude: logitude
  }

  ///////////////////////////////////////View////////////////////////////////////
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Formulario NUR</Text>
            <Text style={styles.text}>Nombre:</Text>
            <TextInput style={styles.input} placeholder="Nombres" onChangeText={text => onChangeText(text)} value={value} />

            <Text style={styles.text}>Apellidos:</Text>
            <TextInput style={styles.input} placeholder="Apellidos" />

            <Text style={styles.text}>Cedula:</Text>
            <TextInput style={styles.input} keyboardType='numeric' placeholder="Cedula" />

            <Text style={styles.text}>Correo electronico:</Text>
            <TextInput style={styles.input} placeholder="Correo Electronico" />

            <Text style={styles.text}>Telefono Celular:</Text>
            <TextInput style={styles.input} keyboardType='numeric' placeholder="Telefono Celular" />

            <Text style={styles.text}>Telefono Convencional:</Text>
            <TextInput style={styles.input} keyboardType='numeric' placeholder="Telefono Convencional"/>

            <View style={styles.container}>
              <MapView style={styles.map} region={region} />
            </View>

            <TouchableHighlight style={styles.textBottonSend}>
              <Text style={styles.textBotton} onPress={getPosition}>Upload files</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.button}>
              <Text style={styles.textBotton} onPress={alert2}>Enviar</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
//////////////////////////////////////API////////////////////////////////////////
const Api = (dato: object) => {
  fetch('http://192.168.100.3:8000/api/testPost', {
    method: 'POST',
    body: JSON.stringify(dato),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }

  })
    .then(response => { if (response.ok) { Alert.alert("Formulario", "mensaje enviado", ["ok"]) } });
};







//////////////////////////////////////style//////////////////////////////////////////////
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
    marginTop: 50,
    marginBottom: 15,
    marginHorizontal: 10,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: "#0080ff",
    borderWidth: 2,
    marginBottom: 40
  },
  textArea: {
    height: 60,
    fontSize: 18
  },
  title: {
    textAlign: "center",
    bottom: 25
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
    textAlign: "center",
    color: "#000"
  },
  text: {
    bottom: 8
  },
  textBottonSend: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'red',
    paddingTop: 10,
    paddingBottom: 10,
    bottom: 10
  },
  map: {
    width: 350,
    height: 300,
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

});