import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import moment from 'moment';

const { width } = Dimensions.get('window');

const CustomCalendar = () => {
  const [currentWeek, setCurrentWeek] = useState([]);
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));

  useEffect(() => {
    const today = moment();
    const startOfWeek = today.clone().startOf('week');
    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      weekDays.push(startOfWeek.clone().add(i, 'days'));
    }
    setCurrentWeek(weekDays);
  }, []);

  const handleDayPress = (date) => {
    setSelectedDate(date.format('YYYY-MM-DD'));
  };

  return (
    <View style={styles.container}>
      {currentWeek.map((day) => (
        <TouchableOpacity
          key={day.format('YYYY-MM-DD')}
          style={[
            styles.dayContainer,
            selectedDate === day.format('YYYY-MM-DD') && styles.selectedDayContainer,
          ]}
          onPress={() => handleDayPress(day)}
        >
          <Text
            style={[
              styles.weekdayText,
              selectedDate === day.format('YYYY-MM-DD') && styles.selectedWeekdayText,
            ]}
          >
            {day.format('ddd').toUpperCase()}
          </Text>
          <Text
            style={[
              styles.dateText,
              selectedDate === day.format('YYYY-MM-DD') && styles.selectedDateText,
            ]}
          >
            {day.format('D')}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: width * 0.03,
    backgroundColor: '#ffffff',
    borderRadius: width * 0.01,
    margin: width * 0.02,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,

  },
  dayContainer: {
    alignItems: 'center',
    paddingVertical: width * 0.02,
    paddingHorizontal: width * 0.015,
    borderRadius: width * 0.01,
  },
  selectedDayContainer: {
    backgroundColor: '#89A97A',
    borderRadius: width * 0.02,
  },
  weekdayText: {
    fontSize: width * 0.035,
    color: '#777',
    fontWeight: 'bold',
  },
  selectedWeekdayText: {
    color: 'white',
  },
  dateText: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#333',
    marginTop: width * 0.005,
  },
  selectedDateText: {
    color: 'white',
  },
});

export default CustomCalendar;