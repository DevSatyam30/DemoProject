import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Tab_View from '../Tab_View'
import { COLORS } from '../themes/theme'

import {
  DrawerActions,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
const Home = (props) => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => props.navigation.navigate('SignIn')}>
        <Text style={{ color: '#fff', marginLeft: 20 }}>Back</Text>
      </TouchableOpacity>
      <View style={styles.drawerView}>
        <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <Text style={{ color: '#fff',marginLeft:20 }}>Open drawer</Text>
        </TouchableOpacity>
      </View>
      <Tab_View
        home_tab2={() =>
          props.navigation.navigate('Record')
        }
        home_tab3={() =>
          props.navigation.navigate('Archive')
        }
        home_tab4={() =>
          props.navigation.navigate('Profile')
        }
        an_flag1={true}
      />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColorForScreen
  },
  drawerView: {
    marginTop: 30
  }
})