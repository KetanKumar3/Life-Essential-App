import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // For the radio button
import { SafeAreaView } from 'react-native-safe-area-context';

const FilterScreen = ({ closeModal, applyFilters }) => {
  const [activeTab, setActiveTab] = useState('Categories');
  const [selectedFilters, setSelectedFilters] = useState({
    Categories: [],
    Price: [],
    Brands: [],
    Expiry: [],
  });

  const filterOptions = {
    Categories: ['Fever Supplement', 'Health Supplement', 'Weight Gain Capsule', 'Ashwagandh'],
    Price: ['Under ₹500', '₹500 - ₹1000', '₹1000+'],
    Brands: ['Himalaya', 'Patanjali', 'Dabur'],
    Expiry: ['< 6 Months', '6-12 Months', '1+ Year'],
  };

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  const handleFilterSelect = (tab, option) => {
    const currentSelection = selectedFilters[tab];
    const isSelected = currentSelection.includes(option);

    if (isSelected) {
      setSelectedFilters({
        ...selectedFilters,
        [tab]: currentSelection.filter(item => item !== option),
      });
    } else {
      setSelectedFilters({
        ...selectedFilters,
        [tab]: [...currentSelection, option],
      });
    }
  };

  const handleApply = () => {
    applyFilters(selectedFilters);
    closeModal();
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <SafeAreaView style={styles.safeArea}>
      <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginBottom:20,}}>
        <Text style={{fontSize:19.2,fontWeight:500,color:"#272928" }}>Filter</Text>
        <Text style={{fontSize:16,fontWeight:700,color:"#89A97A" }}>Reset</Text>
      </View>
        <View style={styles.filterContainer}>
          <View style={styles.leftPanel}>
            {Object.keys(filterOptions).map(item => (
              <TouchableOpacity key={item} onPress={() => handleTabPress(item)}>
                <Text style={[styles.tabText, activeTab === item && styles.activeTab]}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.rightPanel}>
            <Text style={styles.heading}>{activeTab}</Text>
            <ScrollView>
              {filterOptions[activeTab].map((option, idx) => (
                <TouchableOpacity
                  key={idx}
                  style={styles.optionContainer}
                  onPress={() => handleFilterSelect(activeTab, option)}
                >
                  <View style={styles.radioContainer}>
                    <View style={styles.radioOuter}>
                      {selectedFilters[activeTab].includes(option) && <View style={styles.radioInner} />}
                    </View>
                    <Text style={styles.optionText}>{option}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>

        {/* Bottom Buttons */}
        <View style={styles.bottomButtons}>
          <TouchableOpacity style={styles.cancelBtn} onPress={closeModal}>
            <Text style={{ color: 'red',textAlign:"center" }}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.applyBtn} >
            <Text style={{ color: 'white',textAlign:"center" }}>Apply</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  filterContainer: {
    flexDirection: 'row',
    paddingBottom: 70, // To avoid overlapping with buttons
  },
  leftPanel: {
    width: '30%',
    backgroundColor: '#f7f7f7',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  rightPanel: {
    flex: 1,
    padding: 20,
  },
  tabText: {
    paddingVertical: 12,
    color: 'gray',
  },
  activeTab: {
    color: '#89A97A',
    fontWeight: 'bold',
    borderLeftWidth: 3,
    borderLeftColor: '#89A97A',
    paddingLeft: 7,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#272928',
  },
  optionContainer: {
    marginBottom: 15,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  bottomButtons: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent:"space-evenly",
    alignItems: 'center',

  },
  cancelBtn: {
    borderWidth: 1,
    borderColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    width:"40%",

  },
  applyBtn: {
    backgroundColor: '#89A97A',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    width:"40%",

  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#89A97A',
  },
});

export default FilterScreen;