import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import Tab_View from '../Tab_View'
import { COLORS } from '../themes/theme'

const Archive = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color:COLORS.white}}>Archive</Text>
      <Tab_View
          home_tab1={() => 
            props.navigation.navigate('Home')
        }
          home_tab2={() =>
            props.navigation.navigate('Record')
          }
          home_tab4={() => 
            props.navigation.navigate('Profile')
        }
          an_flag3={true}
        />
    </SafeAreaView>
  )
}

export default Archive

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.backgroundColorForScreen
    }
})