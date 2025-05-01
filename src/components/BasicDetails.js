import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Dimensions, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';

const { width: screenWidth } = Dimensions.get('window');

const BasicDetails = () => {
  const navigation = useNavigation();
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, backgroundColor: "white" }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -50}
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
            <Text style={[styles.genderText, selectedGender === 'Male' && styles.selectedGenderTextColor]}>Male</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.genderButton,
              selectedGender === 'Female' && styles.selectedGenderButton,
            ]}
            onPress={() => handleGenderSelect('Female')}
          >
            <Text style={[styles.genderText, selectedGender === 'Female' && styles.selectedGenderTextColor]}>Female</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.genderButton,
              selectedGender === 'Others' && styles.selectedGenderButton,
            ]}
            onPress={() => handleGenderSelect('Others')}
          >
            <Text style={[styles.genderText, selectedGender === 'Others' && styles.selectedGenderTextColor]}>Others</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.doneButton} onPress={() => { navigation.navigate("SurveyDetails") }}>
          <Text style={styles.doneButtonText}>Done</Text>
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
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 27,
    justifyContent: 'flex-start',
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
  selectedGenderTextColor: {
    color: "white",
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
    marginVertical: 20,
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