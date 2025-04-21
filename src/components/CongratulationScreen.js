import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const CongratulationScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton}>
        <Text style={styles.closeIcon}>X</Text>
      </TouchableOpacity>
      <Image
        source={require('../assets/congratulation.png')} // Replace with your actual image path
        style={styles.illustration}
        resizeMode="contain"
      />
      <Text style={styles.congratulationText}>Congratulation!!</Text>
      <Text style={styles.messageText}>You have taken a big step in improving your health!</Text>
      <TouchableOpacity style={styles.backHomeButton}>
        <Text style={styles.backHomeText}>Back to home</Text>
      </TouchableOpacity>
      <Text style={styles.scheduleReminder}>
        Set the schedule so that you don't miss any dose
      </Text>
      <Text style={styles.termsAndPolicy}>
        By signing up I agree to the Terms and Conditions and Privacy Policy
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

    paddingHorizontal: width * 0.05, // Responsive horizontal padding
    paddingVertical: height * 0.05, // Responsive vertical padding
    backgroundColor: '#fff', // Assuming white background
  },
  closeButton: {
    position: 'absolute',
    top: height * 0.02, // Responsive top margin
    right: width * 0.03, // Responsive right margin
    padding: width * 0.02,
  },
  closeIcon: {
    fontSize: width * 0.06, // Responsive close icon size
    color: 'gray',
  },
  illustration: {
    marginTop: height * 0.10, // Responsive top margin
    width: width * 0.6, // Responsive image width
    height: width * 0.6, // Keep aspect ratio
  },
  congratulationText: {
    fontSize: width * 0.07, // Responsive title size
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: height * 0.03, // Responsive top margin
  },
  messageText: {
    fontSize: width * 0.045, // Responsive message size
    color: '#555',
    textAlign: 'center',
    paddingHorizontal: width * 0.1,
    marginTop: height * 0.02, // Responsive top margin
  },
  backHomeButton: {
    backgroundColor: '#f0f8f0', // Light green background
    paddingVertical: height * 0.015, // Responsive vertical padding
    paddingHorizontal: width * 0.08, // Responsive horizontal padding
    borderRadius: width * 0.02, // Responsive border radius
    borderWidth: 1,
    borderColor: '#a9d1a9', // Light green border
    marginTop: height * 0.02, // Responsive top margin
  },
  backHomeText: {
    fontSize: width * 0.04, // Responsive button text size
    color: '#333',
    fontWeight: 'bold',
  },
  scheduleReminder: {
    fontSize: width * 0.035, // Responsive reminder size
    color: '#777',
    textAlign: 'center',
    paddingHorizontal: width * 0.1,
    marginTop: height * 0.02, // Responsive top margin
  },
  termsAndPolicy: {
    fontSize: width * 0.03, // Responsive terms size
    color: '#999',
    textAlign: 'center',
    position: 'absolute',
    bottom: height * 0.02, // Responsive bottom margin
    paddingHorizontal: width * 0.05,
  },
});

export default CongratulationScreen;