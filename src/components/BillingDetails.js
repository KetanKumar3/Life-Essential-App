import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');

const BillingDetails = () => {

const navigation = useNavigation();

  return (
    <View style={styles.container}>
    <View style={styles.container2}>
                    <TouchableOpacity  style={styles.backButton} onPress={() => navigation.goBack()}>
                      <MaterialIcons name="arrow-back-ios" size={width * 0.06} color="#272928" style={{marginLeft:8}} />
                    </TouchableOpacity>
                    <View style={styles.progressContainer}>
                      <Text style={styles.progressText}>Edit Address</Text>
                    </View>
                  </View>
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
            <MaterialIcons name="my-location"   size={20} style={{color:"#89A97A"}} />
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

        <TouchableOpacity style={styles.checkoutButton} onPress={()=>{navigation.navigate("CongratulationScreen")}}>
                    <Text style={styles.checkoutButtonText}>Make Payment</Text>
                  </TouchableOpacity>
      </ScrollView>


    </View>
  );
};

const styles = StyleSheet.create({
container2: {
    marginLeft:24,
    flexDirection: 'row',
    alignItems:"center",
    marginTop:27,
    paddingVertical: width * 0.03, // Adjust vertical padding as needed
    backgroundColor: 'white', // Optional background color
    borderBottomWidth: 1, // Optional bottom border
    borderBottomColor: '#F3F3F3', // Optional bottom border color
  },
  backButton: {
    padding: width * 0.02,
    borderWidth:1,
    borderColor:"#E6E6E6",

  },
  progressContainer: {
    // No specific styling needed for the container itself in this layout
  },
  progressText: {
    fontSize: 19.2,
    fontWeight:500,
    color: '#272928',
    marginLeft:15,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {

    flex: 1,
    paddingHorizontal: 24,
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
      marginBottom:30,
    },
  multilineInput: {
    minHeight: height * 0.1,
    textAlignVertical: 'top',
  },
  infoText: {
    fontSize: 12,
    fontWeight:500,
    color: '#89A97A',
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
    backgroundColor: '#89A97A1A',
    borderRadius: 8,
    borderColor:"#89A97A",
    borderWidth:1,
    paddingVertical: height * 0.012,
    paddingHorizontal: width * 0.025,
    flexDirection: 'row',
    alignItems: 'center',
    gap:3,
  },
  locationIcon: {
    width: width * 0.04,
    height: width * 0.04,
    borderRadius: 8,
    backgroundColor: '#89A97A1A', // Light sea green
    marginRight: width * 0.015,
    borderWidth:1,
    borderColor:"#89A97A",
  },
  locationText: {
    color: '#89A97A',
    fontSize: 13,
    fontWeight:500,
  },
  checkoutButton: {
      backgroundColor: '#89A97A', // Dark sea green
      paddingVertical: height * 0.02,
      alignItems: 'center',
      marginBottom:30,
    },
    checkoutButtonText: {
      color: 'white',
      fontSize: width * 0.045,
      fontWeight: 'bold',
    },
});

export default BillingDetails;