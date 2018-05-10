import React, { Component } from 'react';
import { Text, View, StyleSheet, Image,Button } from 'react-native';

export default class AssetExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Profile
        </Text>
        <Image style={styles.logo} source={require("../assets/account.png")}/>
        
        <Text style={styles.menu}>
          Name : 
        </Text>
         <Text style={styles.menu}>
          Sport :
        </Text>
        
         <Button onPress={()=>this.props.react-navigation.navigate('HomeScreen')} title="Go to home screen" />
        
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
