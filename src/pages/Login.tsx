import React from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity} from 'react-native';

const Login = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFF',
      }}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Image
          source={require('../assets/Logo.png')}
          style={{width: 205, height: 76}}
        />
      </View>
      <View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', width: 327}}>
          <View style={{flex: 1, height: 1, backgroundColor: '#B4B4B4'}} />
          <Text
            style={{
              fontSize: 14,
              lineHeight: 14,
              color: '#828282',
              marginHorizontal: 9.5,
            }}>
            continue with
          </Text>
          <View style={{flex: 1, height: 1, backgroundColor: '#B4B4B4'}} />
        </View>
      </View>
      <View style={{flex: 1, alignItems: 'center', margin: 24}}>
        <TouchableOpacity>
          <Image
            source={require('../assets/GoogleLoginButton.png')}
            style={{width: 327, height: 40}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{paddingVertical: 24}}>
          <Image
            source={require('../assets/KakaoLoginButton.png')}
            style={{width: 327, height: 40}}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 12, lineHeight: 15, color: '#828282', textAlign: 'center'}}>
          By clicking continue, you agree to our{' '}
          <Text style={{color: '#000'}}>Terms of Service</Text>{' '}
          and{' '}
          <Text style={{color: '#000'}}>Privacy Policy</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
