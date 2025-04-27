import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {useNavigation} from '@react-navigation/native';

const { width } = Dimensions.get('window');

const PhoneNumberScreen = () => {
const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInput = useRef(null);

  const handleGenerateOTP = () => {
    const isValid = phoneInput.current?.isValidNumber(phoneNumber);
    if (isValid) {
      const fullNumber = phoneInput.current?.getNumberAfterPossiblyEliminatingZero();
      console.log('Phone Number:', fullNumber.formattedNumber);
      // Navigate to OTP screen or handle logic
      navigation.navigate("OtpVerification");
    } else {
      console.log('Invalid number');
      navigation.navigate("OtpVerification");
    }
  };


  return (
    <View style={styles.container}>
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
        textInputStyle={{ fontSize: 16 }}
        codeTextStyle={{ fontSize: 16 }}
        withDarkTheme
        withShadow
        autoFocus
        renderDropdownImage={true}
        countryPickerButtonStyle={{ justifyContent: 'center' }}
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
    </View>
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
    fontWeight: 500,
    color: '#272928',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight:500,
    color: '#787878',
    marginBottom: 30,
  },
  phoneContainer: {
    width: '100%',
    height: 60,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
  },
  textInput: {
    backgroundColor: '#f2f2f2',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingVertical: 0,
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
      marginTop: 20,
      marginHorizontal:20,
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
