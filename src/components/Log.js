import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import CardDetails2 from './CardDetails';
import CustomCalendar from './CustomCalendar';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomTabbar from './CustomTabbar';

const Log = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={screenWidth * 0.06} color="#272928" style={{marginLeft:6}} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>My Logs</Text>
        </View>
      </View>
      <ScrollView style={{ marginBottom: 100 }}>
        <View style={styles.calendarContainer}>
          <CustomCalendar />
        </View>
        <CardDetails2 />
      </ScrollView>
      <CustomTabbar />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: screenWidth * 0.05, // Responsive vertical padding
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F3F3',
    paddingHorizontal: screenWidth * 0.04, // Responsive horizontal padding
  },
  backButton: {
    padding: screenWidth * 0.03, // Responsive padding
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: screenWidth * 0.03, // Responsive border radius

  },
  titleContainer: {
    flex: 1,
    marginLeft:20,
    marginRight: screenWidth * 0.1, // Adjust to center properly with back button
  },
  titleText: {
    fontSize: screenWidth * 0.05, // Responsive font size
    fontWeight: '500',
    color: '#272928',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  calendarContainer: {
    margin: screenWidth * 0.04, // Responsive margin
  },
  calendar: {
    borderRadius: screenWidth * 0.02, // Responsive border radius
    padding: screenWidth * 0.04, // Responsive padding
    backgroundColor: '#f9f9f9',
  },
});

export default Log;