// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useFocusEffect} from '@react-navigation/native';
// import React, {useEffect, useRef, useState} from 'react';
// import {
//   Alert,
//   BackHandler,
//   Keyboard,
//   Platform,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';

// import {
//   CodeField,
//   Cursor,
//   useBlurOnFulfill,
//   useClearByFocusCell,
// } from 'react-native-confirmation-code-field';
// import LinearGradient from 'react-native-linear-gradient';
// import {
//   heightPercentageToDP as hp,
//   widthPercentageToDP as wp,
// } from 'react-native-responsive-screen';
// import Toast from 'react-native-simple-toast';
// import { COLORS } from '../themes/theme';


// const CELL_COUNT = 4;

// const OTP = props => {
//   const [email, setEmail] = useState('');
//   console.log(
//     'response from signup pageee-',
//     props?.route?.params?.response?.data?.email,
//   );

//   const buildNameTextInput = useRef();
//   const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
//   const RESEND_OTP_TIME_LIMIT = 30;
//   let resendOtpTimerInterval = 'any';

//   const [animating, setAnimating] = useState(false);
//   const [value, setValue] = useState('');
//   const [layout, getCellOnLayoutHandler] = useClearByFocusCell({
//     value,
//     setValue,
//   });

//   const [enterOtpError, setEnterPasswordError] = useState({
//     status: false,
//     string: '',
//   });

//   const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(
//     RESEND_OTP_TIME_LIMIT,
//   );
//   const resendOTP = async () => {
//     console.log('email in resend otp', email);
//     const data = {
//       email: email,
//     };
//     const response = await postAPI('resend-otp', data);
//     console.log('response of resend otp in otp page', response);
//     if (response.success) {
//       Toast.show(response.message);
//     } else {
//       Toast.show(response.message);
//     }
//   };
//   const resendOTP2 = async e => {
//     console.log('email in resend otp', email);
//     const data = {
//       email: e,
//     };
//     const response = await postAPI('resend-otp', data);
//     console.log('response of resend otp in otp page', response);
//     if (response.success) {
//       Toast.show(response.message);
//     } else {
//       Toast.show(response.message);
//     }
//   };

//   useEffect(() => {
//     // Alert.alert(`Your OTP is :- ${props?.route?.params?.screen == "forgot" ? props?.route?.params?.response.otp : props?.route?.params?.response?.result?.otp}`)
//     // setOtp(props?.route?.params?.response?.data?.otp)
//     setEmail(props?.route?.params?.response?.data?.email);

//     if (props?.route?.params?.screen == 'SignIn') {
//       // setEmail(props?.route?.params?.response?.data?.email);
//       resendOTP2(props?.route?.params?.response?.data?.email);
//     }
//   }, []);

//   console.log('email  ', email);

//   useFocusEffect(
//     React.useCallback(() => {
//       const onBackPress = () => {
//         // props.navigation.navigate('SignIn');
//         props.navigation.goBack();
//         // BackHandler.exitApp();
//         // Return true to stop default back navigaton
//         // Return false to keep default back navigaton
//         return true;
//       };

//       // Add Event Listener for hardwareBackPress
//       BackHandler.addEventListener('hardwareBackPress', onBackPress);

//       return () => {
//         // Once the Screen gets blur Remove Event Listener
//         BackHandler.removeEventListener('hardwareBackPress', onBackPress);
//       };
//     }, []),
//   );
//   useEffect(() => {
//     startResendOtpTimer();
//     return () => {
//       if (resendOtpTimerInterval) {
//         // setLoading(false)
//         clearInterval(resendOtpTimerInterval);
//       }
//     };
//   }, [resendButtonDisabledTime]);

//   const startResendOtpTimer = () => {
//     if (resendOtpTimerInterval) {
//       clearInterval(resendOtpTimerInterval);
//     }
//     resendOtpTimerInterval = setInterval(() => {
//       if (resendButtonDisabledTime <= 0) {
//         clearInterval(resendOtpTimerInterval);
//       } else {
//         setResendButtonDisabledTime(resendButtonDisabledTime - 1);
//       }
//     }, 1000);
//   };

//   const onResendOtpButtonPress = () => {
//     setValue('');
//     resendOTP();
//     setResendButtonDisabledTime(RESEND_OTP_TIME_LIMIT);
//     startResendOtpTimer();
//   };

//   const submit = async () => {
//     Keyboard.dismiss();
//     if (value.length != 4) {
//       setEnterPasswordError(checkPinCode(value, 'Please Enter an OTP'));
//     } else {
//       const data = {
//         email: email,
//         otp: value,
//       };
//       setAnimating(true);
//       console.log('datadata-------', data);
//       const response = await postAPI('verify-otp', data);
//       console.log('response-------', response);
//       setAnimating(false);
//       if (response.success) {
//         if (props.route.params.screen == 'SignIn') {
//           // props.navigation.navigate('Home', {response: response});
//           props.navigation.navigate('RepairAndServices');
//           setValue('');
//           FetchSavedDetails.setUserToken(response?.data?.token)
//             .then(res => {
//               console.log('resp while saving token home screen');
//             })
//             .catch(error => {
//               console.log('error while saving token home screen', error);
//             });
//           FetchSavedDetails.setUserName(response?.data?.name)
//             .then(res => {
//               console.log('resp while saving token home screen');
//             })
//             .catch(error => {
//               console.log('error while saving token home screen', error);
//             });
//           FetchSavedDetails.setUserEmail(response?.data?.email)
//             .then(res => {
//               console.log('resp while saving token home screen');
//             })
//             .catch(error => {
//               console.log('error while saving token home screen', error);
//             });
//         } else {  
//           setValue('');
//           props.navigation.navigate('RepairAndServices',{responseData:response});
//           Toast.show(response.message);
//         }
//       } else {
//         Toast.show(response.message);
//       }
//     }
//   };

//   return (
//     <>
//       <View style={style.container}>
//         <LinearGradient colors={['#FFFFFF', '#E9B6A5']}>
          
         
//             <View style={style.MainContainerView}>
//               {/* <KeyboardAwareScrollView showsVerticalScrollIndicator={false}> */}
//               <View style={{width: '90%', alignSelf: 'center'}}>
//                 <CodeField
//                   ref={ref}
//                   {...layout}
//                   value={value}
//                   onChangeText={value => {
//                     setValue(value);
//                     setEnterPasswordError(
//                       checkPinCode(value, 'Please enter 4 digit OTP'),
//                     );
//                     if (value.length != CELL_COUNT) {
//                       setEnterPasswordError(
//                         checkPinCode(value, 'Please enter 4 digit OTP'),
//                       );
//                     }
//                   }}
//                   cellCount={CELL_COUNT}
//                   rootStyle={style.codeFieldRoot}
//                   autoFocus={!!buildNameTextInput}
//                   onFocus={() => <Cursor />}
//                   keyboardType="number-pad"
//                   textContentType="oneTimeCode"
//                   renderCell={({index, symbol, isFocused}) => (
//                     <View
//                       // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
//                       onLayout={getCellOnLayoutHandler(index)}
//                       key={index}
//                       style={[style.cellRoot, isFocused && style.focusCell]}>
//                       <Text style={style.cellText}>
//                         {symbol || (isFocused ? <Cursor /> : null)}
//                       </Text>
//                     </View>
//                   )}
//                   onSubmitEditing={() => submit()}
//                 />
//               </View>
             

//               <View style={style.ResendView}>
//                 <Text style={style.resendOtp}>
//                   {'00  :  ' +
//                     (resendButtonDisabledTime < 10
//                       ? '0' + resendButtonDisabledTime
//                       : resendButtonDisabledTime)}
//                 </Text>
//                 <TouchableOpacity
//                   disabled={resendButtonDisabledTime !== 0}
//                   onPress={() => onResendOtpButtonPress()}>
//                   <Text
//                     style={[
//                       style.resendOtp,
//                       {
//                         color:
//                           resendButtonDisabledTime !== 0
//                             ? 'grey'
//                             : COLORS.buttonColor,
//                       },
//                     ]}>
//                     {'Resend OTP'}
//                   </Text>
//                 </TouchableOpacity>
//               </View>
              
             
//             </View>
         
          
//         </LinearGradient>
//       </View>

//       {animating && <ActivityIndicator />}
//     </>
//   );
// };

// export default OTP;

// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: COLORS.white,
//   },
//   MainContainerView: {
//     // height: hp('75%'),
//     height: Platform.OS == 'ios' ? hp('74%') : hp('80%'),

//     width: wp('100%'),
//     backgroundColor: COLORS.white,
//     borderTopRightRadius: 32,
//     borderTopLeftRadius: 32,
    
//   },
//   //otp box
//   otp: {
   
//     fontSize: 15,
//     marginLeft: 20,
//     marginTop: 20,
//     color: COLORS.white,
//   },
//   resendOtp: {
   
//     fontSize: 15,
//     color: COLORS.black,
//   },
//   forgot: {
//     fontSize: 15,
//     marginLeft: 20,
//     marginTop: 10,
//     color: COLORS.white,
//   },
//   codeFieldRoot: {
//     marginTop: 20,
//     width: 280,
//     marginLeft: 'auto',
//     marginRight: 'auto',
//   },
//   cellRoot: {
//     width: 60,
//     height: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderBottomColor: '#ccc',
//     borderBottomWidth: 1,
//   },
//   cellText: {
//     color: '#000',
//     fontSize: 36,
//     textAlign: 'center',
//   },
//   focusCell: {
//     borderBottomColor: COLORS.buttonColor,
//     borderBottomWidth: 2,
//   },
//   ErrorView: {
//     width: '80%',
//     alignSelf: 'center',
//     marginTop: 5,
//   },
//   ResendView: {
//     width: '80%',
//     justifyContent: 'space-between',
//     alignSelf: 'center',
//     flexDirection: 'row',
//     marginTop: 20,
//   },
// });
