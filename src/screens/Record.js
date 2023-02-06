import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import React from 'react'
import Tab_View from '../Tab_View'
import { COLORS } from '../themes/theme'

const Record = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color:COLORS.white}}>Record</Text>
      <Tab_View
          home_tab1={() => 
            props.navigation.navigate('Home')
        }
          home_tab3={() =>
            props.navigation.navigate('Archive')
          }
          home_tab4={() => 
            props.navigation.navigate('Profile')
        }
          an_flag2={true}
        />
    </SafeAreaView>
  )
}

export default Record

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.backgroundColorForScreen
    }
})