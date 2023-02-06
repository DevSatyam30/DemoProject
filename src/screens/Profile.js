import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import Tab_View from '../Tab_View'
import { COLORS } from '../themes/theme'

const Profile = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color:COLORS.white}}>Profile</Text>
      <Tab_View
          home_tab1={() => 
            props.navigation.navigate('Home')
        }
          home_tab2={() =>
            props.navigation.navigate('Record')
          }
          home_tab3={() => 
            props.navigation.navigate('Archive')
        }
          an_flag4={true}
        />
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:COLORS.backgroundColorForScreen
}
})