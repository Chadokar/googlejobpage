import React ,{ useState , useRef, useEffect } from 'react'
import { View, StyleSheet, Text, TouchableOpacity , Animated } from 'react-native'

// import { Svg, G , Circle } from 'react-native-svg';

function NextButton({  scrollTo ,scrollBack ,  index,onTo  }) {
  let value = index +1
  console.log('currentindex = ' + index);
  const call1 =()=>{
    scrollBack()
  }
  const call2 =()=>{
    onTo()
  }
  const call3 =()=>{
    scrollTo()
  }

  return (
    <>
      <View style={styles.container} >
        <TouchableOpacity onPress={call1} style={styles.button} activeOpacity={0.6} >
          <Text  style={[styles.names,(value==1)? {borderBottomColor:'#7610C9',color:'#7610C9'}:{borderBottomColor:'rgba(0, 0, 0, 0.05)',}]} >About</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={call2} style={styles.button} activeOpacity={0.6} >
          <Text  style={[styles.names,(value==2)? {borderBottomColor:'#7610C9',color:'#7610C9'}:{borderBottomColor:'rgba(0, 0, 0, 0.05)',}]} >Company</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={call3} style={styles.button} activeOpacity={0.6} >
          <Text  style={[styles.names,(value==3)? {borderBottomColor:'#7610C9',color:'#7610C9'}:{borderBottomColor:'rgba(0, 0, 0, 0.05)',}]} >Review</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    button: {
        width:'100%',
        flex:1,
        alignItems:'center',
        height:35,
    },
    names:{
      flex:1,
      width:'100%',
      color:'#8F8F8F',
      fontWeight:'500',
      
      borderBottomWidth:2,
      textAlign:'center',
      alignContent:'center'
    }
});

export default NextButton
