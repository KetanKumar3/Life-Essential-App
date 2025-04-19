import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window');

const BillingDetails = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput style={styles.input} placeholder="Enter your full name" />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput style={styles.input} placeholder="Enter your phone number" keyboardType="phone-pad" />

        <Text style={styles.label}>Email Id</Text>
        <TextInput style={styles.input} placeholder="Enter your email address" keyboardType="email-address" />

        <Text style={styles.infoText}>Your order update and invoices will be sent</Text>
        <Text style={styles.label}>Pincode</Text>
        <View style={styles.pincodeContainer}>

          <View style={{ flex: 1 }}>

            <TextInput style={styles.input} placeholder="Enter pincode" keyboardType="number-pad" />
          </View>
          <TouchableOpacity style={styles.locationButton}>
            <View style={styles.locationIcon} />
            <Text style={styles.locationText}>Get my location</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Full Address</Text>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          placeholder="Enter your full address"
          multiline
          textAlignVertical="top"
        />

        <Text style={styles.label}>Country</Text>
        <TextInput style={styles.input} placeholder="Enter country" />

        <Text style={styles.label}>City</Text>
        <TextInput style={styles.input} placeholder="Enter city" />

        <Text style={styles.label}>State</Text>
        <TextInput style={styles.inputs}
         placeholder="Enter state" />
      </ScrollView>

    <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutButtonText}>Proceed For Checkout</Text>
          </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {

    flex: 1,
    padding: width * 0.04,
    paddingBottom: height * 0.1, // Adjust based on the payment button height
  },
  label: {
    fontSize: width * 0.038,
    color: '#333',
    marginBottom: height * 0.005,
    marginTop: height * 0.02,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: width * 0.015,
    padding: width * 0.03,
    fontSize: width * 0.04,
    color: '#555',
  },
  inputs: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: width * 0.015,
      padding: width * 0.03,
      fontSize: width * 0.04,
      color: '#555',
      marginBottom:150,
    },
  multilineInput: {
    minHeight: height * 0.1,
    textAlignVertical: 'top',
  },
  infoText: {
    fontSize: width * 0.035,
    color: '#777',
    marginTop: height * 0.02,
    marginBottom: height * 0.01,
  },
  pincodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.02,
    gap:20,
  },
  pincodeInnerContainer: { // New inner container for the input
    flex: 1,
    marginRight: width * 0.02, // Add some spacing between input and button
  },
  locationButton: {
    backgroundColor: '#8fbc8f', // Dark sea green
    borderRadius: width * 0.015,
    paddingVertical: height * 0.012,
    paddingHorizontal: width * 0.025,
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    width: width * 0.04,
    height: width * 0.04,
    borderRadius: width * 0.02,
    backgroundColor: '#a9d1a9', // Light sea green
    marginRight: width * 0.015,
  },
  locationText: {
    color: 'white',
    fontSize: width * 0.035,
  },
  checkoutButton: {
      backgroundColor: '#8fbc8f', // Dark sea green
      paddingVertical: height * 0.02,
      alignItems: 'center',
      position: 'absolute',
      bottom: 30,
      left: "4%",
      right: "4%",
    },
    checkoutButtonText: {
      color: 'white',
      fontSize: width * 0.045,
      fontWeight: 'bold',
    },
});

export default BillingDetails;