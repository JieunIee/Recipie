import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/Logo.png')}
          style={styles.logo}
        />
      </View>
      <View>
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>continue with</Text>
          <View style={styles.divider} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Image
            source={require('../assets/GoogleLoginButton.png')}
            style={styles.loginButton}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButtonContainer}>
          <Image
            source={require('../assets/KakaoLoginButton.png')}
            style={styles.loginButton}
          />
        </TouchableOpacity>
        <Text style={styles.footerText}>
          By clicking continue, you agree to our{' '}
          <Text style={styles.footerLink}>Terms of Service</Text>{' '}
          and{' '}
          <Text style={styles.footerLink}>Privacy Policy</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFF',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 205,
    height: 76,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 327,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#B4B4B4',
  },
  dividerText: {
    fontSize: 14,
    lineHeight: 14,
    color: '#828282',
    marginHorizontal: 9.5,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 24,
  },
  loginButtonContainer: {
    paddingVertical: 24,
  },
  loginButton: {
    width: 327,
    height: 40,
  },
  footerText: {
    fontSize: 12,
    lineHeight: 15,
    color: '#828282',
    textAlign: 'center',
  },
  footerLink: {
    color: '#000',
  },
});

export default Login;
