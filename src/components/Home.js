import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import CardDetails from './CardDetails';
import PageViewComponent from './PageViewComponent';
import CustomCalendar from './CustomCalendar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import CustomTabbar from './CustomTabbar';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');


const MainComponent = () => {

const navigation = useNavigation()

  return (
    <View style={styles.mainContainer}>
<View style={styles.container}>
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>Good Morning</Text>
        <Text style={styles.nameText}>Ketan Kumar</Text>
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity  style={styles.iconButton} onPress={()=>{navigation.navigate("Notifications")}}>
          <Ionicons name="notifications-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity  style={styles.iconButton} onPress={()=>{navigation.navigate("MyCart")}} >
          <Feather name="shopping-cart" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
      <ScrollView style={{marginBottom:100}}>
      <PageViewComponent />
        <CustomCalendar />
        <CardDetails />
      </ScrollView>
      <View style={styles.floatingButtonContainer}>
        <TouchableOpacity style={styles.floatingButton}>
          <Image source={require('../assets/scan.png')} style={styles.floatingButtonIcon} />
        </TouchableOpacity>

      </View>
      <CustomTabbar/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#89A97A', // Match the green background
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    greetingContainer: {
      flexDirection: 'column',
    },
    greetingText: {
      fontSize: 16,
      fontWeight:700,

      color: '#FFFFFF',
    },
    nameText: {
      fontSize: 23,
      fontWeight: 700,
      color: '#FFFFFF',
    },
    iconsContainer: {
      flexDirection: 'row',
    },
    iconButton: {
      marginLeft: 20,
    },
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',

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
  calendarContainer: {
    margin: screenWidth * 0.05, // Adjust margin as needed
  },
  calendar: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  floatingButtonContainer: {
    position: 'absolute',
    top: '75%', // Start at 70% from the top
    right: screenWidth * 0.05,
    // Ensure it's above other content
    zIndex: 10,

  },
  floatingButton: {
    backgroundColor: '#89A97A',
    borderRadius: screenWidth * 0.1,
    padding: screenWidth * 0.04,
    elevation: 5, // Add shadow for better visibility
    width:73,
        height:73,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingButtonIcon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',

  },
});

export default MainComponent;