import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Boton() {
  return (
    <View style={styles.container}>
      <Button
        title="Aceptar" onPress={() => Alert.alert('boton simple')}
        color="black"  
        style={styles.Boton}></Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  Boton: {
    backgroundColor: 'lightsteelblue',
    color: 'black',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    marginLeft: 3,
    height: 40,
    width: 80,
    fontFamily: 'Arial',
  }
});




/*import React from 'react';
// Boton.js
import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const Boton = ({ title = 'Aceptar', onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  button: {
    backgroundColor: '#86895d',
    paddingVertical: 5,
    paddingHorizontal: 80,
    borderRadius: 15,
    
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});*/
