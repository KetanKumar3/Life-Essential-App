import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window');

const SurveyDetails2 = () => {
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
        <Text style={styles.question}>Do You want to have your?</Text>
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
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  content: {
    flex: 1,
    padding: width * 0.05,
    paddingBottom: height * 0.15, // Adjust based on button height
  },
  question: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    marginBottom: height * 0.03,
    color: '#333',
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
    borderColor: '#89A97A1A',
  },
  nextButton: {
    backgroundColor: '#aed581', // Light green
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
    backgroundColor: '#7cb342', // Green
    opacity: 1,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
});

export default SurveyDetails2;