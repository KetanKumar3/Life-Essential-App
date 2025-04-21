import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Slider from '@react-native-community/slider'; // Ensure you have this installed

const { width, height } = Dimensions.get('window');

const SurveyTest2 = () => {
  const [sleepRating, setSleepRating] = useState(1);

  const handleSliderChange = (value) => {
    setSleepRating(Math.round(value)); // Round to the nearest integer
  };

  const getRatingText = () => {
    if (sleepRating <= 3) {
      return 'Not Good';
    } else if (sleepRating <= 7) {
      return 'Okay';
    } else {
      return 'Good';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.emoji}>😍</Text>
        <Text style={styles.greeting}>Good Evening, David</Text>
        <Text style={styles.question}>How was your mood?</Text>
      </View>
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={10}
          step={1}
          value={sleepRating}
          onValueChange={handleSliderChange}
          minimumTrackTintColor="#8fbc8f" // Dark sea green
          maximumTrackTintColor="#ccc"
          thumbTintColor="#a9d1a9" // Light sea green
        />
        <View style={styles.scale}>
          {Array.from({ length: 10 }, (_, i) => (
            <Text key={i} style={styles.scaleValue}>{i + 1}</Text>
          ))}
        </View>
        <Text style={styles.ratingText}>
          {getRatingText()} ({sleepRating}/10)
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: width * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: height * 0.05,
  },
  emoji: {
    fontSize: width * 0.2,
    marginBottom: height * 0.01,
  },
  greeting: {
    fontSize: width * 0.045,
    color: '#555',
    marginBottom: height * 0.005,
  },
  question: {
    fontSize: width * 0.055,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  sliderContainer: {
    width: '90%',
    alignItems: 'center',
  },
  slider: {
    width: '100%',
    height: height * 0.05,
  },
  scale: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.02,
    marginTop: height * 0.01,
    width: '100%',
  },
  scaleValue: {
    fontSize: width * 0.035,
    color: '#777',
  },
  ratingText: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    marginTop: height * 0.03,
    color: '#4CAF50', // Green for good by default
  },
});

export default SurveyTest2;