import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import {useNavigation} from '@react-navigation/native';
const { width: screenWidth } = Dimensions.get('window');

const OtpVerification = () => {
const navigation = useNavigation();

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text.length === 1 && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (event, index) => {
    if (event.nativeEvent.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputRefs.current[index - 1].focus();
    }
  };

  const verifyOTP = () => {
    const enteredOTP = otp.join('');
    console.log('Entered OTP:', enteredOTP);
    navigation.navigate("BasicDetails");
    // Add your OTP verification logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            value={digit}
            onChangeText={(text) => handleOtpChange(text, index)}
            onKeyPress={(event) => handleKeyPress(event, index)}
            keyboardType="number-pad"
            maxLength={1}
            ref={(ref) => (inputRefs.current[index] = ref)}
          />
        ))}
      </View>
      <View style={styles.resendContainer}>
        <Text style={styles.resendText}>Didn't Receive OTP? </Text>
        <TouchableOpacity onPress={() => console.log('Resend Pressed')}>
          <Text style={styles.resendLink}>Resend</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.verifyButton} onPress={verifyOTP}>
        <Text style={styles.verifyButtonText}>Verify & Continue</Text>
      </TouchableOpacity>

      <View style={styles.termsContainer}>
        <Text style={styles.termsText}>
          By signing up I agree to the{' '}
          <Text style={styles.greenText}>Terms and Conditions</Text>
          {' '}and{' '}
          <Text style={styles.greenText}>Privacy Policy</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:27,

  },
  title: {
    fontSize: 39, // Adjusted font size
    fontWeight: 500,
    marginBottom: 65,
    marginTop:131,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Center OTP inputs horizontally
    marginBottom: 20,
  },
  otpInput: {
    width: screenWidth * 0.12, // Responsive width
    height: screenWidth * 0.12, // Responsive height
    borderWidth: 1,
    borderColor: '#ADADAD',
    borderRadius: 8,
    marginHorizontal: 8,
    textAlign: 'center',
    fontSize: 20,
  },
  verifyButton: {
    backgroundColor: '#89A97A',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 85,
  },
  verifyButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resendContainer: {
    flexDirection: 'row',

    marginTop: 18,
  },
  resendText: {
    color: '#787878',
    fontWeight:500,
    fontSize:16
  },
  resendLink: {
    color: '#89A97A',
    fontWeight: 700,
    fontSize:16,
  },
  termsContainer: {
    marginTop: 30,
    marginHorizontal: 40,
  },
  termsText: {
    textAlign: 'center',
            color: '#B5B5B5',
            fontWeight:400,
            fontSize:14,
  },
  greenText: {
    color: '#89A97A',
            fontWeight:400,
            fontSize:14,
  },
});

export default OtpVerification;