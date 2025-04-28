import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const CongratulationScreen = () => {
const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={()=> {navigation.navigate("MainTabs")} } >
        <Text style={styles.closeIcon}>X</Text>
      </TouchableOpacity>
      <Image
        source={require('../assets/congratulation.png')} // Replace with your actual image path
        style={styles.illustration}
        resizeMode="contain"
      />
      <Text style={styles.congratulationText}>Congratulation!!</Text>
      <Text style={styles.messageText}>You have taken a big step in improving your health!</Text>
      <TouchableOpacity style={styles.backHomeButton} onPress={()=>{navigation.navigate("MainTabs")}} >
        <Text style={styles.backHomeText}>Back to home</Text>
      </TouchableOpacity>
      <Text style={styles.scheduleReminder}>
        Set the schedule so that you don't miss any dose
      </Text>
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
    fontSize: 27, // Responsive title size
    fontWeight: 500,
    color: '#272928',
    textAlign: 'center',
    marginTop: height * 0.03, // Responsive top margin
  },
  messageText: {
    fontSize: 16, // Responsive message size
    fontWeight:500,
    color: '#787878',
    textAlign: 'center',
    paddingHorizontal: width * 0.1,
    marginTop: height * 0.02, // Responsive top margin
  },
  backHomeButton: {

    paddingVertical: height * 0.015, // Responsive vertical padding
    paddingHorizontal: width * 0.08, // Responsive horizontal padding
    borderRadius: 4, // Responsive border radius
    borderWidth: 1,
    borderColor: '#89A97A', // Light green border
    marginTop: height * 0.02, // Responsive top margin
  },
  backHomeText: {
    fontSize: 16, // Responsive button text size
    color: '#89A97A',
    fontWeight: 500,
  },
  scheduleReminder: {
    fontSize: 16, // Responsive reminder size
    fontWeight:500,
    color: '#787878',
    textAlign: 'center',
    paddingHorizontal: width * 0.1,
    marginTop: height * 0.02, // Responsive top margin
  },

  termsContainer: {



          position: 'absolute',
          bottom: 34, // Responsive bottom margin
          paddingHorizontal: width * 0.05,
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

export default CongratulationScreen;