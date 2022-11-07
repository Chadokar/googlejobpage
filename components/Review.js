import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome,AntDesign } from '@expo/vector-icons';


export default function Review({item} ) {

  return (
    <View style={styles.container} >
      <View style={styles.ratting} >
        <View style={styles.writtenratting} >
          <View>
            <View style={{flexDirection:'row',alignItems:'flex-end'}} >
              <Text style={{fontSize:25,fontWeight:'700',color:'rgba(0, 0, 0, 0.8)'}} >4.8</Text>
              <Text style={{margin:4,fontWeight:'500',color:'rgba(0, 0, 0, 0.8)'}} >/5</Text>
            </View>
            <Text style={{marginBottom:16,fontSize:13,color:'rgba(0,0,0,0.3)',fontWeight:'500'}} >Based on 254 Reviews</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',}} >
              <AntDesign name="star" size={20} color="#E6CF40" />
              <AntDesign name="star" size={20} color="#E6CF40" />
              <AntDesign name="star" size={20} color="#E6CF40" />
              <AntDesign name="star" size={20} color="#E6CF40" />
              <AntDesign name="star" size={20} color="#E6CF40" />
            </View>
            </View>
        </View>
        <View style={styles.writtenratting} >
          <View style={{width:'80%'}} >
            <View style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'space-between',marginVertical:2}} >
              <Text style={{color:'rgba(0,0,0,0.3)',fontWeight:'500',fontSize:13}} >5 Star</Text>
              <Text style={{width:70,height:6,backgroundColor:'#E6CF40',borderRadius:3,marginBottom:4}} ></Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'space-between',marginVertical:2}} >
              <Text style={{color:'rgba(0,0,0,0.3)',fontWeight:'500',fontSize:13}} >4 Star</Text>
              <View style={{width:70,height:6,backgroundColor:'#fff',borderRadius:3,marginBottom:4}} ><View style={{backgroundColor:'#E6CF40',borderRadius:3,height:'100%',width:'80%'}} ></View></View>
            </View>
            <View style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'space-between',marginVertical:2}} >
              <Text style={{color:'rgba(0,0,0,0.3)',fontWeight:'500',fontSize:13}} >3 Star</Text>
              <View style={{width:70,height:6,backgroundColor:'#fff',borderRadius:3,marginBottom:4}} ><View style={{width:70,height:6,backgroundColor:'#E6CF40',borderRadius:3,height:'100%',width:'60%'}} ></View></View>
            </View>
            <View style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'space-between',marginVertical:2}} >
              <Text style={{color:'rgba(0,0,0,0.3)',fontWeight:'500',fontSize:13}} >2 Star</Text>
              <View style={{width:70,height:6,backgroundColor:'#fff',borderRadius:3,marginBottom:4}} ><View style={{width:70,height:6,backgroundColor:'#E6CF40',borderRadius:3,height:'100%',width:'40%'}} ></View></View>
            </View>
            <View style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'space-between',marginVertical:2}} >
              <Text style={{color:'rgba(0,0,0,0.3)',fontWeight:'500',fontSize:13}} >1 Star</Text>
              <View style={{width:70,height:6,backgroundColor:'#fff',borderRadius:3,marginBottom:4}} ><View style={{width:70,height:6,backgroundColor:'#E6CF40',borderRadius:3,height:'100%',width:'20%'}} ></View></View>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.job} >  Job Requirements</Text>
      <View style={styles.points} >
        <FontAwesome style={{paddingTop:2}} name="circle" size={8} color="rgba(0, 0, 0, 0.3)" />
        <Text style={styles.written} >This is first point</Text>
      </View>
      <TouchableOpacity style={styles.button} activeOpacity={0.7} >
        <Text style={{fontSize:15,fontWeight:'500',color:'rgba(118, 16, 201,0.8)'}} >Write a Review</Text>
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
    borderWidth:1,
    borderColor:'rgba(118, 16, 201,0.5)',
    borderRadius:10,
    position:'absolute',
    bottom:20,
    right:10,
    left:10

  },
  ratting:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#FAFAFA',
    justifyContent:'space-between'
  },
  writtenratting:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:20,
  }
});