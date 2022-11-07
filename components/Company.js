import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome,Ionicons } from '@expo/vector-icons';

export default function Details() {
  return (
    <View style={styles.container} >
      <View style={styles.google} >
        <View style={styles.googleicon} >
              <Ionicons name="ios-logo-google" size={40} color="#C76550" />
        </View>
        <View style={{marginLeft:10,marginRight:60}} >
          <Text style={{fontWeight:'500',color:'rgba(0, 0, 0, 0.75)'}} >Google</Text>
          <Text style={{fontSize:12,color:'rgba(0, 0, 0, 0.35)' }} >12,234,342 followers</Text>
        </View>
        <TouchableOpacity style={styles.follow} activeOpacity={0.8} >
            <Text style={{fontSize:12,fontWeight:'500',color:'#E3E3DC'}} >Follow</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.job} >  Company Info</Text>
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
  google:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:12
  },
  googleicon:{
    alignItems:'center',
    justifyContent:'center',
    height:60,
    width:60,
    borderWidth:2,
    borderColor:'rgba(0, 0, 0, 0.02)',
    borderRadius:5,
  },
  follow:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#7610C9',
    borderRadius:4,
    padding:6,
    paddingHorizontal:25
  }
});
