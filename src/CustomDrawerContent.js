import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { COLORS } from './themes/theme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'
const CustomDrawerContent = (props) => {

    const Logout = () =>{
        props.navigation.navigate('SignIn');
        AsyncStorage.removeItem('AuthToken');
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={styles.view}>
                <Text style={{ color: COLORS.white, marginLeft: 20, fontSize: 18, fontWeight: '500' }}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Logout()} style={styles.view}>
                <Text style={{ color: COLORS.white, marginLeft: 20, fontSize: 18, fontWeight: '500' }}>Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default CustomDrawerContent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundColorForScreen
    },
    view: {
        marginTop: 20
    }
})