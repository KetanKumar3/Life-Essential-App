import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const BottomSheet = ({ closeModal }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    // You can also perform your sorting logic here based on the selected option
    console.log('Selected option:', option);
    // Optionally close the modal after selection
    // closeModal();
  };

  const renderOption = (label, value) => (
    <TouchableOpacity
      key={value}
      style={styles.optionContainer}
      onPress={() => handleOptionPress(value)}
    >
      <Text style={[styles.optionText, selectedOption === value && styles.selectedOptionText]}>
        {label}
      </Text>
      {selectedOption === value && <AntDesign name="check" size={22} color="green" />}
    </TouchableOpacity>
  );

  return (
    <View style={styles.bottomSheetContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Sort</Text>
        <TouchableOpacity onPress={closeModal}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.separator} />

      {renderOption('Popularity', 'popularity')}
      <View style={styles.separator} />

      {renderOption('Price - low to high', 'price_low_to_high')}
      <View style={styles.separator} />

      {renderOption('Price - high to low', 'price_high_to_low')}
      <View style={styles.separator} />

      {renderOption('Discount', 'discount')}
      <View style={styles.separator} />

      {renderOption('Rating', 'rating')}
      <View style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomSheetContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    height: 380,
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 19.2,
    fontWeight: '700',
    color: '#272928',
  },
  closeButtonText: {
    fontSize: 19.2,
    fontWeight: '700',
    color: '#272928',
  },
  separator: {
    borderColor: '#F3F3F3',
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black', // Default text color
  },
  selectedOptionText: {
    color: 'green', // Color when the option is selected
  },
});

export default BottomSheet;