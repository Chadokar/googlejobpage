import React from 'react'
import { View , Text, StyleSheet , useWindowDimensions } from 'react-native'
import About from '../About';
import Details from '../Company';
import Review from '../Review';

export default function OnboardingItem({ item,scrollTo ,scrollBack ,onTo }) {

  const { width } = useWindowDimensions();
  const Abous = ()=>{
    if(item.id==1){
      // scrollBack()
      return(
          <About/>
      )
    }
    else if(item.id==2){
      // onTo()
      return(
          <Details/>
      )
    }

    else if(item.id==3){
      // scrollTo()
      return(
        <Review/>
      )
    }
  }

  return (
    <View style={[styles.container, { width }]} >
        <Abous/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
    },


})
