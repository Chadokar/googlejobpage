import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';


function About() {
  return (
    <View style={styles.container} >
      
        <Text style={styles.job} >  Job Requirements</Text>
        <View style={styles.points} >
          <FontAwesome style={{paddingTop:2}} name="circle" size={8} color="rgba(0, 0, 0, 0.3)" />
          <Text style={styles.written} >This is first point</Text>
        </View>
        <Text style={styles.job} >  Benefits</Text>
        <View style={styles.points} >
          <FontAwesome style={{paddingTop:2}} name="circle" size={8} color="rgba(0, 0, 0, 0.3)" />
          <Text style={styles.written} >This is first point</Text>
        </View>
        <TouchableOpacity style={styles.button} activeOpacity={0.8} >
          <Text style={{fontSize:15,fontWeight:'700',color:'#E3E3DC'}} >Apply Now</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    padding: 10,
  },
  job:{
    marginTop:10,
    fontSize:17,
    fontWeight:'500',
    color:'rgba(0, 0, 0, 0.75)'
  },
  points:{
    margin:10,
    marginLeft:20,
    flexDirection:'row',
    alignItems:'center',
  },
  written:{
    marginLeft:10,
    color:'rgba(0, 0, 0, 0.35)' ,
    fontSize:12,
    fontWeight:'500'
  },
  button: {
    alignItems:'center',
    justifyContent:'center',
    height:50,
    backgroundColor:'#7610C9',
    borderRadius:10,
    position:'absolute',
    bottom:20,
    right:10,
    left:10

  },
});

export default About
