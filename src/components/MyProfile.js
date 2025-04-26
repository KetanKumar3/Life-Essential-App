import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const MyProfile = () => {
  const navigation = useNavigation();
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleWeekContainerClick = (weeks) => {
    setSelectedPlan(weeks);
    console.log(`Clicked on ${weeks} Weeks container`);
    // Implement your logic for when a week container is clicked
    // For example, navigate to a payment screen or show details
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f4f4f4' }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Ionicons name="chevron-back" size={width * 0.06} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Account</Text>
      </View>

      <View style={styles.plansContainer}>
        <TouchableOpacity
          style={[
            styles.planContainer,
            selectedPlan === 4 && styles.activePlan,
          ]}
          onPress={() => handleWeekContainerClick(4)}
        >
          <Text style={styles.weekText}>4 Weeks</Text>
          {selectedPlan === 4 && (
            <Ionicons name="checkmark-circle" size={width * 0.06} color="white" style={styles.checkmark} />
          )}
          <Text style={styles.priceText}>299.99 GBP</Text>
          <Text style={styles.billingText}>Billed Monthly</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.planContainer,
            selectedPlan === 8 && styles.activePlan,
          ]}
          onPress={() => handleWeekContainerClick(8)}
        >
          <Text style={styles.weekText}>8 Weeks</Text>
          {selectedPlan === 8 && (
            <Ionicons name="checkmark-circle" size={width * 0.06} color="white" style={styles.checkmark} />
          )}
          <Text style={styles.priceText}>299.99 GBP</Text>
          <Text style={styles.billingText}>Billed Monthly</Text>
        </TouchableOpacity>
      </View>

      {/* My profile starts */}
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <View style={myProfileStyles.container}>
          <View style={myProfileStyles.iconBackground}>
            <Ionicons name="person" size={width * 0.06} color="black" />
          </View>
          <Text style={myProfileStyles.title}>My Profile</Text>
          <View style={myProfileStyles.spacer} /> {/* Pushes the last icon to the end */}
          <MaterialIcons name="keyboard-arrow-right" size={width * 0.08} color="black" />
        </View>
      </TouchableOpacity>
      {/* My profile end */}

      {/* wellness history Start */}
      <TouchableOpacity>
        <View style={myProfileStyles.container}>
          <View style={myProfileStyles.iconBackground}>
            <MaterialCommunityIcons name="map-marker-radius-outline" size={width * 0.06} color="black" />
          </View>
          <Text style={myProfileStyles.title}>wellness history</Text>
          <View style={myProfileStyles.spacer} /> {/* Pushes the last icon to the end */}
          <MaterialIcons name="keyboard-arrow-right" size={width * 0.08} color="black" />
        </View>
      </TouchableOpacity>
      {/* wellness history end */}

      {/* My cart starts */}
      <TouchableOpacity onPress={() => { navigation.navigate('MyCart') }}>
        <View style={myProfileStyles.container}>
          <View style={myProfileStyles.iconBackground}>
            <AntDesign name="shoppingcart" size={width * 0.06} color="black" />
          </View>
          <Text style={myProfileStyles.title}>My Cart</Text>
          <View style={myProfileStyles.spacer} /> {/* Pushes the last icon to the end */}
          <MaterialIcons name="keyboard-arrow-right" size={width * 0.08} color="black" />
        </View>
      </TouchableOpacity>
      {/* My cart ends */}

      {/* my order starts */}
      <TouchableOpacity>
        <View style={myProfileStyles.container}>
          <View style={myProfileStyles.iconBackground}>
            <MaterialCommunityIcons name="cube-outline" size={width * 0.06} color="black" />
          </View>
          <Text style={myProfileStyles.title}>My Orders</Text>
          <View style={myProfileStyles.spacer} /> {/* Pushes the last icon to the end */}
          <MaterialIcons name="keyboard-arrow-right" size={width * 0.08} color="black" />
        </View>
      </TouchableOpacity>
      {/* My order ends */}

      {/* test report starts */}
      <TouchableOpacity>
        <View style={myProfileStyles.container}>
          <View style={myProfileStyles.iconBackground}>
            <MaterialIcons name="report" size={width * 0.06} color="black" />
          </View>
          <Text style={myProfileStyles.title}>Test report</Text>
          <View style={myProfileStyles.spacer} /> {/* Pushes the last icon to the end */}
          <MaterialIcons name="keyboard-arrow-right" size={width * 0.08} color="black" />
        </View>
      </TouchableOpacity>
      {/* test report end */}

      {/* supplement starts */}
      <TouchableOpacity onPress={() => { navigation.navigate("MedicineSchedule") }}>
        <View style={myProfileStyles.container}>
          <View style={myProfileStyles.iconBackground}>
            <MaterialIcons name="schedule" size={width * 0.06} color="black" />
          </View>
          <Text style={myProfileStyles.title}>Supplement Schedule</Text>
          <View style={myProfileStyles.spacer} /> {/* Pushes the last icon to the end */}
          <MaterialIcons name="keyboard-arrow-right" size={width * 0.08} color="black" />
        </View>
      </TouchableOpacity>
      {/* supplement end */}

      {/* notification start */}
      <TouchableOpacity onPress={() => { navigation.navigate('EnableOrDisable') }}>
        <View style={myProfileStyles.container}>
          <View style={myProfileStyles.iconBackground}>
            <Ionicons name="notifications-outline" size={width * 0.06} color="black" />
          </View>
          <Text style={myProfileStyles.title}>Notification</Text>
          <View style={myProfileStyles.spacer} /> {/* Pushes the last icon to the end */}
          <MaterialIcons name="keyboard-arrow-right" size={width * 0.08} color="black" />
        </View>
      </TouchableOpacity>
      {/* notification end */}

      {/* pedometer start */}
      <TouchableOpacity>
        <View style={myProfileStyles.container}>
          <View style={myProfileStyles.iconBackground}>
            <Ionicons name="footsteps" size={width * 0.06} color="black" />
          </View>
          <Text style={myProfileStyles.title}>Pedometer</Text>
          <View style={myProfileStyles.spacer} /> {/* Pushes the last icon to the end */}
          <MaterialIcons name="keyboard-arrow-right" size={width * 0.08} color="black" />
        </View>
      </TouchableOpacity>
      {/* pedometer end */}

      {/* signOut start */}
      <TouchableOpacity style={{ marginBottom:100 }}>
        <View style={myProfileStyles.container}>
          <View style={myProfileStyles.iconBackground}>
            <MaterialIcons name="logout" size={width * 0.06} color="black" />
          </View>
          <Text style={myProfileStyles.title}>Sign Out</Text>
          <View style={myProfileStyles.spacer} /> {/* Pushes the last icon to the end */}
          <MaterialIcons name="keyboard-arrow-right" size={width * 0.08} color="black" />
        </View>
      </TouchableOpacity>
      {/* signOut end */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
    paddingVertical: width * 0.03,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: 'white',
  },
  backButton: {
    padding: width * 0.02,
    borderWidth:1,
    borderColor:"#E6E6E6",
  },
  headerTitle: {
    fontSize: 19.2,
    fontWeight: 500,
    color: '#272928',
    marginLeft: 20,
  },
  plansContainer: {
    flexDirection: 'row',
    padding: width * 0.04,
    justifyContent: 'space-around',
    gap:10,
  },
  planContainer: {
    backgroundColor: 'white',
    borderRadius: width * 0.02,
    padding: width * 0.04,
    width: width * 0.45, // Adjust width for spacing
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    height: width * 0.35, // Adjust height as needed
  },
  activePlan: {
    backgroundColor: '#89A97A',
  },
  weekText: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    color: '#333',
  },
  priceText: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#333',
  },
  billingText: {
    fontSize: width * 0.035,
    color: '#333',
  },
  checkmark: {
    position: 'absolute',
    top: width * 0.02,
    right: width * 0.02,
  },
});

const myProfileStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#E0E3E7',
    borderRadius: width * 0.05, // Responsive border radius
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically
    padding: width * 0.04, // Responsive padding
    marginHorizontal: width * 0.05, // Responsive horizontal margin
    marginVertical: width * 0.025, // Responsive vertical margin
  },
  iconBackground: {
    padding: width * 0.03, // Responsive padding
    borderRadius: width * 0.125, // Responsive border radius for circle
    backgroundColor: '#F1F4F8',
  },
  title: {
    fontSize: width * 0.05, // Responsive font size
    fontWeight: 'bold',
    marginLeft: width * 0.06, // Responsive margin
  },
  spacer: {
    flex: 1, // Takes up all available space, pushing the next element to the end
  },
});

export default MyProfile;