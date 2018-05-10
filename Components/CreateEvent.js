import React, { Component } from 'react';
import { Text, View, StyleSheet,Navigator } from 'react-native';

var First = require('./app/First');


export default class CreateEvent extends Component {
  render() {
    return (
      <Navigator
      initialRoute = {{
        id : 'First'
        
      }}
      renderScene={
        this.navigatorRenderScene
      }
      
      />
    );
  }
  navigatorRenderScene(route,navigator){
    _navigator = navigator;
    switch(route.id){
      case 'First':
      return(<First navigator = {navigator} title="First"  />);
    }
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
