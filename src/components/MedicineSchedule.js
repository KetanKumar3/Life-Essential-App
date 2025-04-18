import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window');

const MedicineItem = () => (
  <View style={styles.medicineRow}>
    <View style={styles.imageContainer}>
      <Image
        source={require('../assets/image1.png')}
        style={styles.medicineImage}
        resizeMode="cover"
      />
    </View>
    <View style={styles.medicineInfo}>
      <Text style={styles.medicineName} numberOfLines={3} ellipsizeMode="tail">
        balnce Life advance
      </Text>
      <Text style={styles.medicineDosage}>Dosage - 2 Times a day</Text>
      <TouchableOpacity style={styles.scheduleButton}>
        <Text style={styles.scheduleButtonText}>Set Schedule</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const MedicineSchedule = () => {
  const numberOfItems = 5; // You can change this number

  return (
    <ScrollView style={styles.container}>

      {Array.from({ length: numberOfItems }).map((_, index) => (
        <MedicineItem key={index} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Added flex: 1 to make the ScrollView take up the screen
    backgroundColor: '#f9f9f9',
    marginHorizontal: 20,
    marginTop: 40,
  },
  header: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    marginBottom: height * 0.02,
    color: '#333',
  },
  medicineRow: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: width * 0.02,
    padding: width * 0.04,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: height * 0.015, // Added margin between items
  },
  imageContainer: {
    marginRight: width * 0.04,
    width: width * 0.25,
    aspectRatio: 1,
    borderRadius: width * 0.02,
    overflow: 'hidden',
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  medicineImage: {
    width: '100%',
    height: '100%',
  },
  medicineInfo: {
    flex: 1,
    marginLeft: width * 0.02,
    justifyContent: 'space-between',
    height: width * 0.25,
  },
  medicineName: {
    fontSize: width * 0.035,
    fontWeight: 'bold',
    color: '#333',
    flexShrink: 1,
  },
  medicineDosage: {
    fontSize: width * 0.03,
    color: '#777',
  },
  scheduleButton: {
    backgroundColor: '#89A97A',
    paddingVertical: height * 0.008,
    paddingHorizontal: width * 0.02,
    borderRadius: width * 0.015,
    alignSelf: 'flex-start',
  },
  scheduleButtonText: {
    color: 'white',
    fontSize: width * 0.03,
    fontWeight: 'bold',
  },
});

export default MedicineSchedule;