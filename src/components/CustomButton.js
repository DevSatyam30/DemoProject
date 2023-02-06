import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import IMAGES from '../Images';
import { COLORS } from '../themes/theme'

const CustomButton = (props) => {
    return (
        <TouchableOpacity style={[styles.button, props.buttonStyle]}
        onPress={props.onpress}
        >
            <Text style={[styles.text,props.textStyle]}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        width: 148,
        height: 59,
        backgroundColor: COLORS.TabColor,
        borderRadius: 50,
        alignItems: 'center', justifyContent: 'center'
    },
    text: {
        color: COLORS.white,
        fontSize: 20, fontWeight: '600',fontFamily: 'Poppins-Black',
    }
})