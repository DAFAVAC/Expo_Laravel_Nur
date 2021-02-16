import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { logger, consoleTransport } from "react-native-logs";
import Donante from "./screens/donate"
import Sigin from "./screens/segin"
import Home from "./screens/home"
import Camer from "./screens/camera"

/* 
function HomeScreen({ navigation }) {
  return (

    <View style={{ flex: 4, alignItems: 'stretch', justifyContent: 'space-evenly' }}>
      <Home/>
    </View>
  
  );
}

function DonateScreen({ navigation }) {
  return (
    <View style={{ flex: 4, alignItems: 'stretch', justifyContent: 'space-around' }}>
      <Dondate/>
      <Button onPress={() => navigation.goBack(HomeScreen)} title="Go back home" />
    </View>
  );
}

function RegistrerScreen({ navigation }) {
  return (
    <View style={{ flex: 4, alignItems: 'stretch', justifyContent: 'space-around' }}>
    <Sigin/>
      <Button onPress={() => navigation.goBack(HomeScreen)} title="Go back home" />
    </View>

  );
}
 */






const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Donate" component={Donante} />
        <Drawer.Screen name="Sigin" component={Sigin} />
        <Drawer.Screen name="Photo" component={Camer} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}








const defaultConfig = {
  severity: "debug",
  transport: consoleTransport,
  transportOptions: {
    color: "ansi", // custom option that color consoleTransport logs
  },
  content:{
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  },
  async: true,
  dateFormat: "time",
  printLevel: true,
  printDate: true,
  enabled: true,
};

var log = logger.createLogger(defaultConfig);















