import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { COLORS } from '../themes/theme'
import FastImage from 'react-native-fast-image';
import IMAGES from '../Images';
const CustomTextInput = (props) => {
  return (
    <View style={[styles.TextView,props.TextStyle]}>
    <FastImage source={props.icon} style={styles.icon}/>
    <TextInput
      placeholder={props.placeholder}
      placeholderTextColor={'#fff'}
      style={styles.textinput}
    >
        
    </TextInput>
   {props.eyeIcon ?<FastImage source={props.eyeIcon} style={styles.eyeoff}/> : null}

  </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
    TextView: {
        marginTop: '10%',
        backgroundColor: COLORS.black,
        width: '95%',
        alignSelf: 'center',
        height: 59,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center'
      },
      icon: {
        height: 39,
        width: 39,
        marginLeft: 20
      },
      textinput:{
        marginLeft: 10, flex: 1,color:'#fff' 
      },
      eyeoff:{
        height:24,width:24,marginRight:10
      }
})