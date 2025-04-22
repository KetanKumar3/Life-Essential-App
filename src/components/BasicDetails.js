import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const { width: screenWidth } = Dimensions.get('window');

const BasicDetails = () => {

const navigation = useNavigation();

  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  return (
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

      <TouchableOpacity style={styles.doneButton} onPress={()=>{navigation.navigate("SurveyDetails")}}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Added to make the content fill the screen
    padding: 20,
    justifyContent: 'flex-start', // Added to align items from the top
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 100,
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
    position: 'absolute',
    bottom: 80,
    left: 20,
    right: 20,
  },
  doneButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  termsContainer: {
     textAlign: 'center',
         marginHorizontal:30,
         marginTop: 20,
         fontSize: 12,
         position: 'absolute',
         bottom: 15,
         left:20,
         right:20,

         bottom:30,
    },
    termsText: {
      textAlign: 'center',
      color: 'black',
      fontSize: 14,
    },
    greenText: {
      color: '#89A97A',
      fontWeight: 'bold',
    },
});

export default BasicDetails;