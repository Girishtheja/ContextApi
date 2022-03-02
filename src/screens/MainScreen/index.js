import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { useCountContext } from '../../../context/countContextProvider';

export default function MainScreen() {
  const countContext = useCountContext();
  return (
    <View style={styles.container}>
      <Text style={{fontSize:50, color:'#000'}}>{countContext.count}</Text>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity  
        onPress={()=> countContext.setCount(countContext.count+1)}>
        <Text style={{fontSize:25, color:'green',margin:5}}>i n c</Text>
      </TouchableOpacity>
      <TouchableOpacity  
        onPress={()=> countContext.setCount(countContext.count-1)}>
        <Text style={{fontSize:25, color:'orange',margin:5}}>d e c</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity 
        onPress={()=> countContext.setCount(0)}>
        <Text style={{fontSize:25, color:'red'}}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
