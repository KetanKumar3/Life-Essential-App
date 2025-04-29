import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useRoute } from '@react-navigation/native';

const CustomTabbar = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [activeTab, setActiveTab] = useState(route.name || 'Home'); // Initialize with the current route name or 'Home'

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
    navigation.navigate(tabName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => handleTabPress('Home')}
      >
        <MaterialCommunityIcons
          name="home"
          size={24}
          color={activeTab === 'Home' ? '#89A97A' : 'black'} // Change color based on activeTab
        />
        <Text style={[styles.tabText, { color: activeTab === 'Home' ? '#89A97A' : 'black' }]}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => handleTabPress('Shop')}
      >
        <Ionicons
          name="apps"
          size={24}
          color={activeTab === 'Shop' ? '#89A97A' : 'black'} // Change color based on activeTab
        />
        <Text style={[styles.tabText, { color: activeTab === 'Shop' ? '#89A97A' : 'black' }]}>
          Shop
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => handleTabPress('Log')}
      >
        <MaterialCommunityIcons
          name="book-check"
          size={24}
          color={activeTab === 'Log' ? '#89A97A' : 'black'} // Change color based on activeTab
        />
        <Text style={[styles.tabText, { color: activeTab === 'Log' ? '#89A97A' : 'black' }]}>
          Log
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => handleTabPress('MyProfile')}
      >
        <Ionicons
          name="person"
          size={24}
          color={activeTab === 'MyProfile' ? '#89A97A' : 'black'} // Change color based on activeTab
        />
        <Text style={[styles.tabText, { color: activeTab === 'MyProfile' ? '#89A97A' : 'black' }]}>
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    width: '100%',
    height: 100, // Adjusted height for better spacing
    alignItems: 'center',
    borderTopWidth: 1, // Optional: Add a border at the top
    borderTopColor: '#e0e0e0', // Optional: Border color
  },
  tabItem: {
    flex: 1, // Distribute space evenly
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 15, // Adjusted font size
    marginTop: 5,
  },
});

export default CustomTabbar;