import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const Profile = () => {
  const navigation = useNavigation();
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1,backgroundColor:"white" }}
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

        <TouchableOpacity style={styles.doneButton} >
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingVertical: width * 0.03,

    backgroundColor: 'white',
    marginBottom:50,
  },
  backButton: {
    padding: width * 0.02,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: width * 0.01, // Added border radius for visual consistency
  },
  headerTitle: {
    fontSize: width * 0.05, // Made font size responsive
    fontWeight: '500',
    color: '#272928',
    marginLeft: width * 0.05, // Made marginLeft responsive
  },
  container: {
    flex: 1,
    padding: width * 0.07, // Made padding responsive
    justifyContent: 'flex-start',

  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: width * 0.013, // Made borderRadius responsive
    padding: width * 0.026, // Made padding responsive
    marginBottom: width * 0.04, // Made marginBottom responsive
    color: 'black',
  },
  genderLabel: {
    fontSize: width * 0.045, // Made fontSize responsive
    marginTop: width * 0.026, // Made marginTop responsive
    marginBottom: width * 0.026, // Made marginBottom responsive
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  genderButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: width * 0.013, // Made borderRadius responsive
    padding: width * 0.026, // Made padding responsive
    alignItems: 'center',
    flex: 1,
    marginHorizontal: width * 0.013, // Made marginHorizontal responsive
  },
  selectedGenderButton: {
    backgroundColor: '#89A97A',
    borderColor: '#89A97A',
  },
  genderText: {
    color: 'black',
    fontSize: width * 0.04, // Made fontSize responsive
  },
  doneButton: {
    backgroundColor: '#89A97A',
    padding: width * 0.04, // Made padding responsive
    borderRadius: width * 0.02, // Made borderRadius responsive
    alignItems: 'center',
    marginTop: width * 0.08, // Made marginTop responsive
    width: '100%',
  },
  doneButtonText: {
    color: 'white',
    fontSize: width * 0.05, // Made fontSize responsive
    fontWeight: 'bold',
  },
});

export default Profile;