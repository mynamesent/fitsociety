import  React, { Component } from 'react';
import  { Text, StyleSheet , View ,TextInput,TouchableOpacity,StatusBar   } from 'react-native';
export default class LoginForm extends Component {
   render(){
     return(
       
       <View style={styles.container}>
          <StatusBar 
          barStyle= "light-content" 
          />
       
          <TextInput  
           placeholder="Username or email"
           placeholderTextColor='rgba(255,255,255,0.7)'
           returnKeyType="next"
           onSubmitEditing={() =>  this.passwordInput.focus()}
           keyboardType ="email-address"
           autoCapitalize="none"
           autoCorrect={false} 
           style={styles.input}
          
          />
            <TextInput  placeholder = "password"
                       placeholderTextColor='rgba(255,255,255,0.7)'
                       returnKeyType="go"
                       secureTextEntity
           style={styles.input}
           ref={(input => this.passwordInput = input)}
          />
          <TouchableOpacity style={styles.buttonContainer} >
          <Text style = {styles.buttomText}>  LOGIN
          </Text>
          </TouchableOpacity>
       </View>
       );
     
     
   }
  
} 

 const styles = StyleSheet.create({
   input : {
     height : 40 ,
     backgroundColor : 'rgba(255,255,255,0.7)', 
     marginBottom : 20 ,
     color:'#fff',
     paddingHorizontal : 10 
   },
   container : {
     padding : 20   
     
   },
   buttonContainer:{
     backgroundColor : '#FFFFFF' ,
     paddingVertical : 10
     
   },
   buttomText:{
     textAlign : 'center',
     color : '#FFFFFF',
     fontWeight:'700'
   }
   
   
   
   
 });