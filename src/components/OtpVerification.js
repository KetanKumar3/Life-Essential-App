import React, { useState, useRef } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  Keyboard,
  Alert,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';

const { width: screenWidth } = Dimensions.get('window');

const OtpVerification = ({ route }) => {
  const navigation = useNavigation();
  const { Number } = route.params;

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleInputChange = (index, value) => {
    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyPress = (index, event) => {
    if (event.nativeEvent.key === 'Backspace') {
      const newOtp = [...otp];

      if (otp[index]) {
        // Clear current field if not empty
        newOtp[index] = '';
        setOtp(newOtp);
      } else if (index > 0) {
        // Move back and clear previous field
        newOtp[index - 1] = '';
        setOtp(newOtp);
        inputRefs.current[index - 1]?.focus();
      }
    }
  };


  const handleVerify = () => {


    // You can validate OTP with backend here

    navigation.navigate('BasicDetails');
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Enter OTP</Text>

      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitleText}>
          Enter the OTP sent to{' '}
          <Text style={styles.highlightedNumber}>{Number}</Text>
        </Text>
      </View>

      <View style={styles.otpContainer}>
        <View style={styles.otpView}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.inputView}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(value) => handleInputChange(index, value)}
              onKeyPress={(event) => handleKeyPress(index, event)}
              ref={(ref) => (inputRefs.current[index] = ref)}
              returnKeyType="next"
              selectionColor="#89A97A"
            />
          ))}
        </View>
      </View>

      <View style={styles.resendContainer}>
        <Text style={styles.resendText}>Didn't Receive OTP? </Text>
        <TouchableOpacity onPress={() => console.log('Resend Pressed')}>
          <Text style={styles.resendLink}>Resend</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyButtonText}>Verify & Continue</Text>
      </TouchableOpacity>

      <View style={styles.termsContainer}>
        <Text style={styles.termsText}>
          By signing up I agree to the{' '}
          <Text style={styles.greenText}>Terms and Conditions</Text> and{' '}
          <Text style={styles.greenText}>Privacy Policy</Text>
        </Text>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContent: {
    paddingHorizontal: 27,
  },
  title: {
    fontSize: 39,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 131,
  },
  subtitleContainer: {
    marginBottom: 45,
  },
  subtitleText: {
    color: '#787878',
    fontWeight: '500',
    fontSize: 16,
  },
  highlightedNumber: {
    color: '#89A97A',
    fontSize: 16,
    fontWeight: '700',
  },
  otpContainer: {
    width: '100%',
    alignItems: 'center',
  },
  otpView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputView: {
    width: screenWidth * 0.12,
    height: screenWidth * 0.12,
    borderWidth: 0.5,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    marginHorizontal: screenWidth * 0.01,
  },
  resendContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  resendText: {
    color: '#787878',
    fontWeight: '500',
    fontSize: 16,
  },
  resendLink: {
    color: '#89A97A',
    fontWeight: '700',
    fontSize: 16,
  },
  verifyButton: {
    backgroundColor: '#89A97A',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 65,
  },
  verifyButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  termsContainer: {
    marginTop: 30,
    marginHorizontal: 40,
    marginBottom: 20,
  },
  termsText: {
    textAlign: 'center',
    color: '#B5B5B5',
    fontWeight: '400',
    fontSize: 14,
  },
  greenText: {
    color: '#89A97A',
    fontWeight: '400',
    fontSize: 14,
  },
});

export default OtpVerification;
