import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const { width } = Dimensions.get('window');

const PhoneNumberScreen = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInput = useRef(null);

  const handleGenerateOTP = () => {
    const isValid = phoneInput.current?.isValidNumber(phoneNumber);
    if (isValid) {
      const fullNumber = phoneInput.current?.getNumberAfterPossiblyEliminatingZero();
      navigation.navigate("OtpVerification", { Number: fullNumber.formattedNumber });
    } else {
      console.log('Invalid number');
      navigation.navigate("OtpVerification", { Number: phoneNumber });
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <Text style={styles.title}>Enter Your Phone Number</Text>
      <Text style={styles.subtitle}>We use OTP to Login or Register into the App</Text>

      <PhoneInput
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode="IN"
        layout="second"
        onChangeFormattedText={setPhoneNumber}
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.textInput}
        textInputStyle={styles.textInputStyle}
        codeTextStyle={styles.codeTextStyle}
        withDarkTheme
        withShadow
        autoFocus
        withFlag
        placeholder="" // Set placeholder to an empty string
        countryPickerButtonStyle={styles.countryPickerButtonStyle}
      />

      <TouchableOpacity style={styles.button} onPress={handleGenerateOTP}>
        <Text style={styles.buttonText}>Generate OTP</Text>
      </TouchableOpacity>

      <View style={styles.termsContainer}>
        <Text style={styles.termsText}>
          By signing up I agree to the{' '}
          <Text style={styles.greenText}>Terms and Conditions</Text>
          {' '}and{' '}
          <Text style={styles.greenText}>Privacy Policy</Text>
        </Text>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default PhoneNumberScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 39,
    fontWeight: '700',
    color: '#272928',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#787878',
    marginBottom: 30,
  },
  phoneContainer: {
    width: '100%',
    height: 60,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    overflow: 'hidden', // important for smooth corners
  },
  textInput: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 0,
    paddingLeft: 0, // important: remove padding
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyle: {
    fontSize: 16,
    paddingVertical: 0,
    paddingLeft: 0, // very important
  },
  codeTextStyle: {
    fontSize: 16,
    marginLeft: -5, // pull country code closer
  },
  countryPickerButtonStyle: {
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  button: {
    marginTop: 40,
    backgroundColor: '#89A97A',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  termsContainer: {
    marginVertical: 20,
    marginHorizontal: 20,
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