import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import CardDetails2 from './CardDetails';

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

const Log = () => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={{marginBottom:100}}>

        <CalendarComponent />
        <CardDetails2 />
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',

  },

  calendarContainer: {
    margin: screenWidth * 0.05, // Adjust margin as needed
  },
  calendar: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },

});

export default Log;