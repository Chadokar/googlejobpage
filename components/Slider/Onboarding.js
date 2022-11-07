import react , { useState , useRef } from "react";
import { View, Text, StyleSheet, FlatList , Animated } from 'react-native';
import Above from "../Above";

import datas from "./datas";
import NextButton from "./NextButton";
import OnboardingItem from "./OnboardingItem";

export default Onboarding = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({ viewableItems }) => { setCurrentIndex(viewableItems[0].index); }).current;

  const slidesRef = useRef(null);

  // const viewConfig = useRef({ viewAreaCoveragePercentThresold: 50 }).current;
  let value = currentIndex+1


  const Headers = ()=>{
    if(value==1){
      return(
        <Above title={'Job Details'} />
      )
    }
    else if(value==2){
      return(
        <Above title={'Company'} />
      )
    }
    else if(value==3){
      return(
        <Above title={'Company Review'} />
      )
    }
  }

  const scrollTo = () => {
      slidesRef.current.scrollToIndex({ index: 2 });
  }

  const onTo = ()=>{
    slidesRef.current.scrollToIndex({ index: 1 });
  }

  const scrollBack = () => {
    if(currentIndex !== 0){
      slidesRef.current.scrollToIndex({ index: 0 });
    }
  }

  return (
    <View style={styles.container} >
      
      <View style = {{flex:1}} >
        <Headers/>
        <NextButton   scrollTo={scrollTo} scrollBack={scrollBack} index={currentIndex} onTo={onTo} />
        <FlatList data = {datas} 
          renderItem = { ({ item }) => <OnboardingItem item = {item} scrollTo={scrollTo} scrollBack={scrollBack}  onTo={onTo} /> }
          horizontal
          showsHorizontalScrollIndicator = {false}
          pagingEnabled

          bounces = {false}

          keyExtractor={(item) => item.id}

          onScroll = {Animated.event([{ nativeEvent:{ contentOffset: { x: scrollX }}}], { useNativeDriver:false, })}

          scrollEventThrottle = {32}

          onViewableItemsChanged = {viewableItemsChanged}

          // viewabilityConfig = {viewConfig}

          ref = {slidesRef}

        />
      </View>

    {/* <Paginator data={datas} scrollX={scrollX} />  */}

    

    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});