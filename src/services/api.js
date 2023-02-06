
import axios from 'axios';
import {Alert} from 'native-base';
import {Platform} from 'react-native';

const baseURL = 'https://dummyjson.com/auth/';





export const postAPI = async (method, data) => {
  console.log('data in post api in api page->', data);
  let response = {};
  console.log('baseURL + method', baseURL + method);
  console.log('Request params', data, {
    headers: {
      'Content-Type': 'application/json',
      //Header Defination
      // Accept: 'application/json',
    },
  });
  await axios
    .post(baseURL + method, data, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    .then(function (res) {
      console.log('res--0-----78787', res?.data);
      response = res.data;
    })
    .catch(e => {
      console.log('catch of api page------', e);
      return e;
    });
  return response;
};