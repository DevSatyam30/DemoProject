import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity ,Alert,Platform} from 'react-native'
import React,{useEffect,useState} from 'react'
import Tab_View from '../Tab_View'
import { COLORS } from '../themes/theme'
import FastImage from 'react-native-fast-image';
import IMAGES from '../Images';
import CustomTextInput from '../components/TextInput';
import CustomButton from '../components/CustomButton';
// import { useDispatch, useSelector } from 'react-redux';
// import * as actions from '../redux/actions';
// import { POST_LOGIN_DETAILS_RESPONSE } from '../redux/type';
import { postAPI } from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SignIn = (props) => {
  const [email, setLoginEmail] = useState("kminchelle");

  const [password, setLoginPassword] = useState("0lelplR");
//   const dispatch = useDispatch();
//   const loginResponse = useSelector(({ postLogin }) => postLogin.postLoginDetailResponse);
//   console.log("loginResponse-----",loginResponse);
//   const onLogin = () => {
//     dispatch(actions.postLogin({
//       "password": password,
//       "username": email,

//     }))
//   }

//   useEffect(() => {
//     if (loginResponse) {
//         // if (loginResponse.status === 200) {
//             // if (loginResponse.data.responseStatus.statusCode === 0) {
                
//             // }
//             // else {
               
//             //     Alert.alert("Error", "Invalid User Credentials");
//             // }
//             // dispatch({ type: POST_LOGIN_DETAILS_RESPONSE, payload: null })
//         // }
//         // else {
            
//         // }
//     }
//     else {
       
//     }
// }, [loginResponse])


const Login = async () => {
  var data = {
    username: email,
    password: password,
  };
    const response = await postAPI('login', data);
    console.log('ressssssss',response)
    if (response) {
      console.log('respppp', response);
      AsyncStorage.setItem(
        'AuthToken',
        JSON.stringify(response?.token),
      );
      props.navigation.navigate('Home');
    } else {
      console.log('res-------po',response.message)
    }

  }



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.LoginView}>
        <View style={styles.TopView}>
          <Text style={styles.SignInText}>LOGIN</Text>
          <CustomTextInput
            icon={IMAGES.loginicon}
            placeholder={'Login'}
          />
          <CustomTextInput
            icon={IMAGES.passwordicon}
            placeholder={'Password'}
            eyeicon={true}
            eyeIcon={IMAGES.eyeoff}
          />
          <TouchableOpacity>
            <Text style={styles.textForget}>Forgot Password Request?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonView}>
          <CustomButton
            text={'Sign In'}
            onpress={() => Login()}
          />
        </View>
      </View>
      <View style={styles.account}>
        <Text style={styles.DontHave}>Don’t have an account?</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
          <Text style={styles.TextSign}>SIGN UP</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColorForScreen
  },
  TopView: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20
  },
  SignInText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Poppins-Black', width: '90%', alignSelf: 'center'
  },
  LoginView: {
    width: '90%',
    height: 355,
    backgroundColor: COLORS.backgroundColorLoginView,
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: '15%'
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
    marginTop: '20%'
  },
  DontHave: {
    color: COLORS.white,
    fontSize: 14,
    fontFamily: 'Poppins-Black',
    fontWeight: '500'
  },
  TextSign: {
    color: COLORS.TabColor,
    fontSize: 15,
    fontFamily: 'Poppins-Black',
    fontWeight: '500', marginLeft: 5
  }

})