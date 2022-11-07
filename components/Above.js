import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons,Foundation  } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Above({title} ) {
  return (
    <View style={styles.container} >
        <Text style={{padding:20,paddingTop:50}} >{title} </Text>
        <View style={styles.google} >
            <Ionicons name="ios-logo-google" size={40} color="#C76550" />
        </View>
        <Text style={styles.header} >Senior Product Design</Text>
        <Text style={{color:'rgba(0, 0, 0, 0.4)',fontSize:14,fontWeight:'500'}} >Google</Text>
        <View style={styles.sortdescription} >
            <View style={styles.icons} >
                <Ionicons name="location-sharp" size={22} color="#4FC9C9" />
                <Text style={{fontSize:12,fontWeight:'500',color:'#363634',marginTop:5}} >Hongkong</Text>
            </View>
            <View style={styles.icons} >
                <Foundation name="dollar" size={24} color="#CF7B21"  />
                <Text style={{fontSize:12,fontWeight:'500',color:'#363634',marginTop:5}} >25 - 50K /month</Text>
            </View>
            <View style={styles.icons} >
                <MaterialCommunityIcons name="timer" size={22} color="#E6CF40" />
                <Text style={{fontSize:12,fontWeight:'500',color:'#363634',marginTop:5}} >Full Time</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    google:{
        alignItems:'center',
        justifyContent:'center',
        height:65,
        width:65,
        borderWidth:2,
        borderColor:'rgba(0, 0, 0, 0.1)',
        borderRadius:33,
        borderStyle:'dashed',
        margin:15,
    },
    header:{
        textAlign:'center',
        fontSize:17,
        fontWeight:'700',
        color:'rgba(0, 0, 0, 0.75)'
    },
    sortdescription:{
        height:70,
        flexDirection:'row',
        width:335,
        justifyContent:'space-between',
        borderWidth:2,
        borderColor:'rgba(0, 0, 0, 0.025)',
        borderRadius:15,
        marginTop:5,
    },
    icons:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }

})

export default Above
