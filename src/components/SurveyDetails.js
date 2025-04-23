import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const { width, height } = Dimensions.get('window');

const SurveyDetails = () => {
const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    // You can add logic here to store the selected option
    console.log('Selected:', option);
  };

  const handleNext = () => {
    if (selectedOption) {
      // Navigate to the next screen or perform further actions
      console.log('Proceeding to the next step...');
      navigation.navigate("SurveyDetails2");
    } else {
      // Optionally, provide feedback to the user to select an option
      console.log('Please select an option.');
    }
  };

  const options = [
    'Less than 6 hours',
    '6-7 hours',
    '7-8 hours',
    'More than 8 hours',
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
       <View style={styles.container2}>
            <TouchableOpacity  style={styles.backButton} onPress={() => navigation.goBack()}>
              <MaterialIcons name="arrow-back-ios" size={width * 0.06} color="#272928" style={{marginLeft:8}} />
            </TouchableOpacity>
            <View style={styles.progressContainer}>
              <Text style={styles.progressText}>1 Of 2</Text>
            </View>
          </View>
        <Text style={styles.question}>What is the average hours you sleep in night?</Text>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedOption === option && styles.selectedOption,
            ]}
            onPress={() => handleOptionSelect(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={[styles.nextButton, selectedOption && styles.nextButtonActive]}
        onPress={handleNext}
        disabled={!selectedOption}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
container2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingVertical: width * 0.03, // Adjust vertical padding as needed
    backgroundColor: '#f9f9f9', // Optional background color
    borderBottomWidth: 1, // Optional bottom border
    borderBottomColor: '#F3F3F3', // Optional bottom border color
  },
  backButton: {
    padding: width * 0.02,
    borderWidth:1,
    borderColor:"#E6E6E6",

  },
  progressContainer: {
    // No specific styling needed for the container itself in this layout
  },
  progressText: {
    fontSize: 19.2,
    fontWeight:500,
    color: '#272928',
  },
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  content: {
    flex: 1,
    padding: 27,
    paddingBottom: height * 0.15, // Adjust based on button height
  },
  question: {
    fontSize: 27,
    fontWeight: 500,
    marginBottom: 40,
    color: '#272928',
    marginTop:40,
  },
  optionButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: width * 0.02,
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.04,
    marginBottom: height * 0.015,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionText: {
    fontSize: width * 0.04,
    color: '#555',
  },
  selectedOption: {
    backgroundColor: '#89A97A1A', // Light cyan
    borderColor: '#89A97A',
    border:2,
  },
  nextButton: {
    backgroundColor: '#89A97A', // Light green
    paddingVertical: height * 0.025,
    borderRadius: width * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: height * 0.03,
    left: width * 0.05,
    right: width * 0.05,
    opacity: 0.7, // Indicate disabled state
  },
  nextButtonActive: {
    backgroundColor: '#89A97A', // Green
    opacity: 1,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
});

export default SurveyDetails;