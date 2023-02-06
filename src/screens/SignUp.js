import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Tab_View from '../Tab_View'
import { COLORS } from '../themes/theme'
import FastImage from 'react-native-fast-image';
import IMAGES from '../Images';
import CustomTextInput from '../components/TextInput';
import CustomButton from '../components/CustomButton';


const SignUp = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.LoginView}>
        <View style={styles.TopView}>
          <Text style={styles.SignInText}>SIGN UP</Text>
          <CustomTextInput
            icon={IMAGES.loginicon}
            placeholder={'Full Name'}
          />
           <CustomTextInput
            icon={IMAGES.callicon}
            placeholder={'Phone No'}
          />
           <CustomTextInput
            icon={IMAGES.emailicon}
            placeholder={'Email'}
          />
          <CustomTextInput
            icon={IMAGES.passwordicon}
            placeholder={'Password'}
            eyeicon={true}
            eyeIcon={IMAGES.eyeoff}
          />
          <CustomTextInput
            icon={IMAGES.passwordicon}
            placeholder={'ConfirmPassword'}
            eyeicon={true}
            eyeIcon={IMAGES.eyeoff}
          />
          
        </View>

        <View style={styles.buttonView}>
          <CustomButton
            text={'Sign Up'}
            // onpress={() => props.navigation.navigate('OTP')}
          />
        </View>
      </View>
      <View style={styles.account}>
        <Text style={styles.DontHave}>Already have an account?</Text>
        <TouchableOpacity onPress={()=>props.navigation.navigate('SignIn')}>
        <Text style={styles.TextSign}>SIGN IN</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColorForScreen
  },
  TopView: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10
  },
  SignInText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Poppins-Black', width: '90%', alignSelf: 'center'
  },
  LoginView: {
    width: '90%',
    height: 630,
    backgroundColor: COLORS.backgroundColorLoginView,
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: '10%'
  },
  textForget: {
    color: COLORS.white,
    marginTop: '5%',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Poppins-Black',
    width: '90%', alignSelf: 'center'
  },
  buttonView: {

    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    alignItems: 'flex-end',

  },
  account: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%'
  },
  DontHave: {
    color: COLORS.white,
    fontSize: 14,
    fontFamily:'Poppins-Black',
    fontWeight:'500'
  },
  TextSign: {
    color: COLORS.TabColor,
    fontSize: 15,
    fontFamily:'Poppins-Black',
    fontWeight:'500',marginLeft:5
  }

})