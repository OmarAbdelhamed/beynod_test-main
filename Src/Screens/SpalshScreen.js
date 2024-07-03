import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { authInfo } from '../Redux/Authantication';

const SpalshScrren = ({navigation}) => {
  const login  = useSelector((state) => state.auth.authState);
useEffect(() => {
    if(Object.keys(login).length!==0){
      const timer = setTimeout(() => {
        navigation.replace('Home');
    }, 2000);
    return () => clearTimeout(timer);
  
    }else{
      const timer = setTimeout(() => {
        navigation.replace('welcome1');
    }, 2000);
    return () => clearTimeout(timer);
  
    }


  }, [])
  return (
    <View
      style={styles.container}
    >

      <Image source={require('../assets/Images/Beyond Logo 1.png')} />
    </View>
  )
}

export default SpalshScrren
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});