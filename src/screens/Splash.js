import { StyleSheet, Text, View, Animated, Image, ImageBackground } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import FastImage from 'react-native-fast-image';
import IMAGES from '../Images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Splash = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const [token, setToken] = useState('');
  useEffect(() => {
    AsyncStorage.getItem('AuthToken').then(res => {
      // Printer.print('AuthToken inside splash screen->', res);
      if (res != null) {
        setToken(res);
        setTimeout(() => {
          props.navigation.navigate('Home');
        }, 2500);
      } else {
        setTimeout(() => {
          props.navigation.navigate('SignIn');
        }, 2500);
      }
    });
  }, []);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true, // Add This line
    }).start();
  }, [fadeAnim]);

  return (
    <ImageBackground
      style={styles.container}
      source={IMAGES.Splashmain}
      resizeMode="stretch">
      <Animated.View // Special animatable View
        style={[styles.Logo, { opacity: fadeAnim }]}>
        <FastImage
          style={styles.fastimage}
          source={IMAGES.Splash}
          resizeMode={FastImage.resizeMode.contain}
        />
      </Animated.View>
    </ImageBackground>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    height: hp('100%'),
    width: wp('100%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  Logo: {
    justifyContent: 'center',
    height: hp('50%'),
    alignItems: 'center',
    justifyContent: 'center',

  },
  fastimage: {
    width: wp('100%'),
    height: hp('30%'),
    alignSelf: 'center',
  }
})