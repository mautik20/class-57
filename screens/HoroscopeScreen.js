import * as React from 'react';
import { View,Text, TouchableOpacity, StyleSheet} from 'react-native';
import AppHeader from "../components/AppHeader";

class HoroscopeScreen extends React.Component {
 
  render() {
    return (
  <Text style={{ marginLeft:90 , marginTop:200,color:"red",fontSize:24}}>Today's Horoscope</Text>


    );
  }
}
const styles = StyleSheet.create({
 
 
});

export default HoroscopeScreen;