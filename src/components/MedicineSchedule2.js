import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const TimeButton = ({ time, isSelected, onPress }) => (
  <TouchableOpacity
    style={[styles.timeButton, isSelected && styles.timeButtonSelected]}
    onPress={() => onPress(time)}
  >
    <Text style={[styles.timeButtonText, isSelected && styles.timeButtonTextSelected]}>
      {time}
    </Text>
  </TouchableOpacity>
);

const ReminderButton = ({ time, isSelected, onPress }) => (
  <TouchableOpacity
    style={[styles.reminderButton, isSelected && styles.reminderButtonSelected]}
    onPress={() => onPress(time)}
  >
    <Text style={[styles.reminderButtonText, isSelected && styles.reminderButtonTextSelected]}>
      {time}
    </Text>
  </TouchableOpacity>
);

const MedicineSchedule2 = () => {
const navigation = useNavigation();

const handleGoBack = () => {
  navigation.goBack();
};

  const [selectedMorningTime, setSelectedMorningTime] = useState(null);
  const [selectedAfterNoonTime, setSelectedAfterNoonTime] = useState(null);
  const [selectedNightTime, setSelectedNightTime] = useState('6 AM'); // Default night time
  const [selectedReminder, setSelectedReminder] = useState('before 15 min'); // Default reminder

  const handleMorningTimePress = (time) => {
    setSelectedMorningTime(time === selectedMorningTime ? null : time);
  };

  const handleAfterNoonTimePress = (time) => {
    setSelectedAfterNoonTime(time === selectedAfterNoonTime ? null : time);
  };

  const handleNightTimePress = (time) => {
    setSelectedNightTime(time === selectedNightTime ? null : time);
  };

  const handleReminderPress = (time) => {
    setSelectedReminder(time === selectedReminder ? null : time);
  };

  return (
    <View style={styles.container}>
    <View style={styles.header}>
            <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
              <Ionicons name="chevron-back" size={width * 0.06} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Supplement Schedule</Text>
          </View>
      <ScrollView style={styles.content}>



        {/* Medicine Image */}
        <View style={styles.imageContainer}>

          <Image
            source={require('../assets/image1.png')} // Replace with your image path
            style={styles.medicineImage}
            resizeMode="contain"
          />
        </View>

        {/* Medicine Details */}
        <Text style={styles.medicineName}>Paracetamol Tablet - 500mg</Text>
        <View style={styles.instructionContainer}>
          <Text style={styles.instructionTitle}>Instruction</Text>
          <Text style={styles.instructionText}>• Must be taken after meal</Text>
          <Text style={styles.instructionText}>• 2 pills a day</Text>
        </View>

        {/* Start Date */}
        <View style={styles.startDateContainer}>
          <Text style={styles.startDateTitle}>Select the start date</Text>
          <TouchableOpacity style={styles.startDateButton}>
            <Text style={styles.startDateButtonText}>Tap to set</Text>
          </TouchableOpacity>
        </View>

        {/* Recommended Dosage */}
        <View style={styles.dosageContainer}>
          <Text style={styles.dosageTitle}>Recommended Dosage</Text>

          <View style={styles.timeSlot}>
            <Text style={styles.timeSlotTitle}>Morning</Text>
            <View style={styles.timeButtonsRow}>
              {['6 AM', '7 AM', '8 AM', '9 AM', '10 AM'].map((time) => (
                <TimeButton
                  key={`morning-${time}`}
                  time={time}
                  isSelected={selectedMorningTime === time}
                  onPress={handleMorningTimePress}
                />
              ))}
            </View>
          </View>

          <View style={styles.timeSlot}>
            <Text style={styles.timeSlotTitle}>After Noon</Text>
            <View style={styles.timeButtonsRow}>
              {['12 PM', '1 PM', '2 PM', '3 PM', '4 PM'].map((time) => (
                <TimeButton
                  key={`afternoon-${time}`}
                  time={time}
                  isSelected={selectedAfterNoonTime === time}
                  onPress={handleAfterNoonTimePress}
                />
              ))}
            </View>
          </View>

          <View style={styles.timeSlot}>
            <Text style={styles.timeSlotTitle}>Night</Text>
            <View style={styles.timeButtonsRow}>
              {['8 PM', '9 PM', '10 PM', '11 PM', '12 AM'].map((time) => (
                <TimeButton
                  key={`night-${time}`}
                  time={time}
                  isSelected={selectedNightTime === time}
                  onPress={handleNightTimePress}
                />
              ))}
            </View>
          </View>
        </View>

        {/* Remind Me */}
        <View style={styles.remindContainer}>
          <Text style={styles.remindTitle}>Remind Me</Text>
          <View style={styles.reminderButtonsRow}>
            {['before 15 min', 'before 10 min'].map((time) => (
              <ReminderButton
                key={`reminder-${time}`}
                time={time}
                isSelected={selectedReminder === time}
                onPress={handleReminderPress}
              />
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.doneButton}>
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: width * 0.03,
    backgroundColor: 'white',
    paddingHorizontal: width * 0.04, // Added horizontal padding for consistency
  },
  backButton: {
    padding: width * 0.02,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: width * 0.01,
    marginRight:20, // Added some spacing between back button and title
  },
  headerTitle: {
    fontSize: 19.2,
    fontWeight: '500',
    color: '#272928',
  },
  container: {
    flex: 1,
    backgroundColor: 'white', // Light blue background
  },
  content: {
    flex: 1,
    padding: width * 0.04,
  },
  imageContainer: {
    alignItems: 'center',
    paddingVertical: height * 0.02,
    backgroundColor: "#CDE0EE",
  },
  medicineImage: {
    width: width * 0.6,
    height: width * 0.6,
    resizeMode: 'contain',
  },
  medicineName: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    marginTop: height * 0.01,
    color: '#333',
  },
  instructionContainer: {
    marginTop: height * 0.02,
  },
  instructionTitle: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: height * 0.005,
  },
  instructionText: {
    fontSize: width * 0.035,
    color: '#777',
    marginLeft: width * 0.02,
  },
  startDateContainer: {
    marginTop: height * 0.03,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  startDateTitle: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: '#555',
  },
  startDateButton: {
    borderColor: '#8fbc8f', // Dark sea green
    borderWidth: 1,
    borderRadius: width * 0.015,
    paddingVertical: height * 0.008,
    paddingHorizontal: width * 0.03,
  },
  startDateButtonText: {
    fontSize: width * 0.035,
    color: '#8fbc8f',
  },
  dosageContainer: {
    marginTop: height * 0.03,
  },
  dosageTitle: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: height * 0.01,
  },
  timeSlot: {
    marginBottom: height * 0.02,
  },
  timeSlotTitle: {
    fontSize: width * 0.038,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: height * 0.008,
  },
  timeButtonsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  timeButton: {
    backgroundColor: '#e0e0e0',
    borderRadius: width * 0.015,
    paddingVertical: height * 0.008,
    paddingHorizontal: width * 0.03,
    marginRight: width * 0.02,
    marginBottom: height * 0.01,
  },
  timeButtonText: {
    fontSize: width * 0.035,
    color: '#555',
  },
  timeButtonSelected: {
    backgroundColor: '#8fbc8f',
  },
  timeButtonTextSelected: {
    color: 'white',
  },
  remindContainer: {
    marginTop: height * 0.03,
    marginBottom: 20,
  },
  remindTitle: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: height * 0.01,
  },
  reminderButtonsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  reminderButton: {
    backgroundColor: '#e0e0e0',
    borderRadius: width * 0.03,
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.04,
    marginRight: width * 0.02,
    marginBottom: height * 0.01,
  },
  reminderButtonText: {
    fontSize: width * 0.035,
    color: '#555',
  },
  reminderButtonSelected: {
    backgroundColor: '#8fbc8f',
  },
  reminderButtonTextSelected: {
    color: 'white',
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: height * 0.02, // Increased vertical padding
    paddingHorizontal: width * 0.06, // Increased horizontal padding
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  editButton: {
    backgroundColor: '#ffe4e1', // Misty rose
    borderRadius: width * 0.02,
    paddingVertical: height * 0.01, // Increased vertical padding
    paddingHorizontal: width * 0.15, // Increased horizontal padding
  },
  editButtonText: {
    fontSize: width * 0.045, // Slightly increased font size
    color: '#d2691e', // Chocolate
    fontWeight: 'bold',
  },
  doneButton: {
    backgroundColor: '#8fbc8f', // Dark sea green
    borderRadius: width * 0.02,
    paddingVertical: height * 0.01, // Increased vertical padding
    paddingHorizontal: width * 0.15, // Increased horizontal padding
  },
  doneButtonText: {
    fontSize: width * 0.045, // Slightly increased font size
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MedicineSchedule2;