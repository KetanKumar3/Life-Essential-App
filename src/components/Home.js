import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';
import { Calendar } from 'react-native-calendars';
import CardDetails from './CardDetails';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const PageViewComponent = () => {
  return (
    <View style={styles.pageViewContainer}>
      <Image
        source={require('../assets/image1.png')} // Replace with your image path
        style={styles.pageViewImage}
        resizeMode="cover"
      />

    </View>
  );
};

const CalendarComponent = () => {
  const [selected, setSelected] = useState('2024-06-12'); // Set initial selected date

  return (
    <View style={styles.calendarContainer}>

      <Calendar
        style={styles.calendar}
        current={'2024-06-22'}
        markedDates={{
          [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' },
        }}
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        theme={{
          selectedDayBackgroundColor: '#89A97A',
          selectedDayTextColor: 'white',
          todayTextColor: '#89A97A',
          arrowColor: '#89A97A',
          'stylesheet.calendar.header': {
            week: {
              marginTop: 5,
              flexDirection: 'row',
              justifyContent: 'space-around',
            },
          },
        }}
      />

    </View>
  );
};

const MainComponent = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      <PageViewComponent />
      <CalendarComponent />
      <CardDetails />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pageViewContainer: {
    width: screenWidth * 0.9, // Adjust width as needed
    height: screenHeight * 0.25, // Adjust height as needed
    margin: screenWidth * 0.05, // Adjust margin as needed
    borderRadius: 10,
    backgroundColor: '#f0f0f0', // Placeholder background color
    overflow: 'hidden',
  },
  pageViewImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  pageViewTextContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  pageViewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  pageViewSubtitle: {
    fontSize: 14,
    color: 'black',
  },
  pageViewButton: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  pageViewButtonText: {
    color: 'white',
    fontSize: 12,
  },
  calendarContainer: {
    margin: screenWidth * 0.05, // Adjust margin as needed
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  calendarHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  calendarHeaderArrow: {
    fontSize: 18,
    color: 'black',
  },
  calendar: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
});

export default MainComponent;