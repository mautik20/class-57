import * as React from 'react';
import { View,Text, TouchableOpacity, StyleSheet,Image} from 'react-native';

export default class HomeScreen extends React.Component{


  goToJokesScreen=()=>{
    this.props.navigation.navigate("JokesScreen")
  }


  render(){
    return(
 
      <View>      
            <TouchableOpacity style={[styles.button,{backgroundColor:"lightblue",marginTop:10}]}
            onPress={()=>{
        this.goToNewsScreen()
      }}>
      <Text style={styles.buttonText}> Top News</Text>
      </TouchableOpacity>

     
        
        
      </View>
    )
  }

}
const styles = StyleSheet.create({
   button:{
   justifyContent : 'center',
   alignSelf : 'center', 
   borderWidth : 2,
   borderRadius : 15, 
   marginTop:150,
   width : 200, 
   height:50, 
   backgroundColor:'green' 
   },
   buttonText : { 
    textAlign : 'center', 
    color : 'white' },
    
    
    })

    


   



