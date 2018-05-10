import  React, { Component } from 'react';
import  { StyleSheet, View , Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from '../components/Login/LoginForm.js';


export default class LoginScreen extends Component{
  render(){
    return(
      
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.container}>
      
      <View style={styles.logoContainer}>
      <Image source={require('../components/Login/logosport.jpg')} />
      </View>
      
      <View style={styles.formContainer}>
      <LoginForm />
      </View>
      
      </View>
      </KeyboardAvoidingView>
      );
  }
}

const styles = StyleSheet.create({
  container:{
    flex : 1,
    backgroundColor:'#3498DB'
  }
  
});




