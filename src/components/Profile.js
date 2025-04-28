import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const Profile = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const handleDone = () => {
    // In a real application, you would handle the submission of the profile data here
    console.log('Full Name:', fullName);
    console.log('Email ID:', emailId);
    console.log('Gender:', selectedGender);
    // You might want to navigate to another screen or update user data
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -50}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Ionicons name="chevron-back" size={width * 0.06} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>My Profile</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#888"
          value={fullName}
          onChangeText={setFullName}
        />

        <TextInput
          style={styles.input}
          placeholder="Email ID"
          placeholderTextColor="#888"
          keyboardType="email-address"
          value={emailId}
          onChangeText={setEmailId}
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

        <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',

    paddingVertical: width * 0.03,   // Added vertical padding
    marginBottom: width * 0.1,       // Adjusted marginBottom for better spacing
  },
  backButton: {
    padding: width * 0.02,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: width * 0.01,
  },
  headerTitle: {
    fontSize: width * 0.05,
    fontWeight: '500',
    color: '#272928',
    marginLeft: width * 0.05,
  },
  container: {
    flex: 1,
    paddingHorizontal: width * 0.07, // Consistent horizontal padding
    justifyContent: 'flex-start',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: width * 0.013,
    padding: width * 0.026,
    marginBottom: width * 0.04,
    color: 'black',
    fontSize: width * 0.04, // Added font size for input text
  },
  genderLabel: {
    fontSize: width * 0.045,
    marginTop: width * 0.026,
    marginBottom: width * 0.026,
    color: 'black', // Added text color for label
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: width * 0.06, // Added marginBottom after gender buttons
  },
  genderButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: width * 0.013,
    paddingVertical: width * 0.026, // Added vertical padding for better touch area
    alignItems: 'center',
    flex: 1,
    marginHorizontal: width * 0.013,
  },
  selectedGenderButton: {
    backgroundColor: '#89A97A',
    borderColor: '#89A97A',
  },
  genderText: {
    color: 'black',
    fontSize: width * 0.04,
  },
  selectedGenderTextColor: {
    color: 'white',
  },
  doneButton: {
    backgroundColor: '#89A97A',
    padding: width * 0.04,
    borderRadius: width * 0.02,
    alignItems: 'center',
    marginTop: width * 0.08,
    width: '100%',
  },
  doneButtonText: {
    color: 'white',
    fontSize: width * 0.05,
    fontWeight: 'bold',
  },
});

export default Profile;