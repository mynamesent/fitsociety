import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
      this is  Home Screen 
      </Text>
       
        
        </View>
 
    );
  }
}





const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 5,
    marginTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  logo: {
    backgroundColor: "#",
    height: 250,
    width: 250,
  },
   menu: {
    margin: 5,
    marginTop: 5,
    fontSize: 20,
    fontWeight: 'Bold',
    textAlign: 'Left',
    color: '#34495e',
  }
  
});
