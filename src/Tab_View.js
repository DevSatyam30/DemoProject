import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import IMAGES from './Images';
import { COLORS, FONTS } from './themes/theme';

const Tab_View = props => {
  console.log('sjdhbsduehdbsn----', props);

  const navigation = useNavigation();
  // const [flag, setflag] = useState(true)
  // const [an_flag, setan_flag] = useState(false)
  // const [log_flag, setlog_flag] = useState(false)

  return (
    <View style={styles.mainView}>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          justifyContent: 'space-around',
          width: '95%',
          // backgroundColor:'red',
          // height:50,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={props.home_tab1}
          style={[
            styles.TouchableStyle,
           
          ]}>

            <Image
              source={IMAGES.TabHome}
              style={{height: 25, width: 25, tintColor:  props.an_flag1 ? COLORS.TabColor:COLORS.white}}
              resizeMode="contain"
            />
          
          <Text
            style={{
              fontSize: 12,
              fontWeight:'500',
              fontFamily:'Poppins-Black',
              color: props.an_flag1 ? COLORS.TabColor:COLORS.white,
              marginTop: 5,
            }}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
       
          onPress={props.home_tab2}
          style={[
            styles.TouchableStyle,
           
          ]}>
          <Image
              source={IMAGES.TabVoice}
              style={{height: 25, width: 25, tintColor:  props.an_flag2 ? COLORS.TabColor:COLORS.white}}
              resizeMode="contain"
            />
          <Text
            style={{   
              fontSize: 12,
              fontWeight:'500',
              fontFamily:'Poppins-Black',
              color: props.an_flag2 ? COLORS.TabColor:COLORS.white,
              marginTop: 5,
            }}>
            Record
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        // disabled={true}

          onPress={props.home_tab3}
          style={[
            styles.TouchableStyle,
           
          ]}>
          <Image
              source={IMAGES.Tabarchive}
              style={{height: 25, width: 25, tintColor:  props.an_flag3 ? COLORS.TabColor:COLORS.white}}
              resizeMode="contain"
            />
          <Text
            style={{
              fontSize: 12,
              fontWeight:'500',
              fontFamily:'Poppins-Black',
              color: props.an_flag3 ? COLORS.TabColor:COLORS.white,
              marginTop: 5,
            }}>
            Archive
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={props.home_tab4}
          style={[
            styles.TouchableStyle,
           
          ]}>
          <Image
              source={IMAGES.TabProfile}
              style={{height: 25, width: 25, tintColor:  props.an_flag4 ? COLORS.TabColor:COLORS.white}}
              resizeMode="contain"
            />
          <Text
            style={{
              fontSize: 12,
              fontWeight:'500',
              fontFamily:'Poppins-Black',
              color: props.an_flag4 ? COLORS.TabColor:COLORS.white,
              marginTop: 5,
            }}>
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tab_View;

const styles = StyleSheet.create({
  tabBar: {
    height: 75,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    height: 75,
  },
  mainView: {
    flex: 1,
    height: 82,
    width: '90%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
    justifyContent: 'center',
    backgroundColor: '#000',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  TouchableStyle: {
    alignItems: 'center',
    width: '30%',
    // backgroundColor:'red',
    borderRadius: 15,
    height: 50,
    justifyContent: 'center',
  },
});
