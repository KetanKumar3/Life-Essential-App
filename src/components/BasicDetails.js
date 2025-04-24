import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width: screenWidth } = Dimensions.get('window');

const BasicDetails = () => {
  const navigation = useNavigation();
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }} // Ensure KeyboardAvoidingView takes up the whole screen
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Adjust behavior based on platform
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -50} // Adjust offset if needed
    >
      <View style={styles.container}>
        <Text style={styles.title}>Basic Info</Text>

        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#888"
        />

        <TextInput
          style={styles.input}
          placeholder="Email ID"
          placeholderTextColor="#888"
          keyboardType="email-address"
        />

        <Text style={styles.genderLabel}>Gender</Text>

        <View style={styles.genderContainer}>
          <TouchableOpacity
            style={[
              styles.genderButton,
              selectedGender === 'Male' && styles.selectedGenderButton,
            ]}
            onPress={() => handleGenderSelect('Male')}
          >
            <Text style={styles.genderText}>Male</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.genderButton,
              selectedGender === 'Female' && styles.selectedGenderButton,
            ]}
            onPress={() => handleGenderSelect('Female')}
          >
            <Text style={styles.genderText}>Female</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.genderButton,
              selectedGender === 'Others' && styles.selectedGenderButton,
            ]}
            onPress={() => handleGenderSelect('Others')}
          >
            <Text style={styles.genderText}>Others</Text>
          </TouchableOpacity>
        </View>

        {/* Move the Done button out of the absolutely positioned area */}
        <TouchableOpacity style={styles.doneButton} onPress={() => { navigation.navigate("SurveyDetails") }}>
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>

        {/* Move the terms and conditions out of the absolutely positioned area */}
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>
            By signing up I agree to the{' '}
            <Text style={styles.greenText}>Terms and Conditions</Text>
            {' '}and{' '}
            <Text style={styles.greenText}>Privacy Policy</Text>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 27,
    justifyContent: 'flex-start',
    backgroundColor:"white",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 41,
    marginTop: 131,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    color: 'black',
  },
  genderLabel: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  genderButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  selectedGenderButton: {
    backgroundColor: '#89A97A',
    borderColor: '#89A97A',
  },
  genderText: {
    color: 'black',
  },
  doneButton: {
    backgroundColor: '#89A97A',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
    width: '100%',
  },
  doneButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  termsContainer: {
    textAlign: 'center',
    marginHorizontal: 30,
    marginTop: 20,
    fontSize: 12,
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

export default BasicDetails;