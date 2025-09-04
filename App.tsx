import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image} from 'react-native';


export default function App() {
  const age = 15; 
  const licenseyears = 5;
  let feedback = '';  

  if (age >= 18) 
    if (licenseyears >= 3) 
      {
      feedback = 'You are a qualified, safe driver.'
      } else 
    {
    
      feedback = 'You are allowed to drive. YAY!'
    } else {
      feedback = 'You are not allowed to drive yet.'
           }
  
  
          
  return (

    <SafeAreaView style={styles.container}>  
    <View style = {styles.content}>

    <Text style={[styles.response, {fontSize: 48}]}> Driving License Checker </Text>

      <Image source = {{uri:'https://media.istockphoto.com/id/1407324683/photo/traffic-control-on-street.jpg?b=1&s=612x612&w=0&k=20&c=WO1uXv9Om5xODRJBEs87mj5lt4OaqzWHdLYtHv1x40M=',}} 
      style = {styles.image}/>
      

      <Text style={styles.response}>Age: {age} </Text>
      <Text style={styles.response}>License Years: {licenseyears} </Text>
      <Text style={styles.response}> {feedback} </Text>
      

      

    </View>
   </SafeAreaView>
    
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#669bbc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  content: {
    width: '100%',
    alignItems: 'center'
  },

  response: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    marginVertical: 30

  },

  image: {
    width: '100%',
    height: '50%', 
    resizeMode: 'contain',
    top:0,
  }
});
