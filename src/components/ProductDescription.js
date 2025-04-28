import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity, // Import TouchableOpacity for button functionality
  Image, // Import the Image component
} from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import ProductDescription2 from './ProductDescription2';

const { width } = Dimensions.get('window');

const ProductDescription = () => {
  const navigation = useNavigation(); // Initialize the navigation object
  const [selectedContainer, setSelectedContainer] = useState(null);

  const handleContainerPress = (containerId) => {
    setSelectedContainer(containerId);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.backButton} onPress={() => { navigation.goBack() }}>
            <Ionicons name="chevron-back" size={width * 0.06} color="black" />
          </TouchableOpacity>
          {/* You removed the title, if you want it back, uncomment this: */}
          {/* <Text style={styles.title2}>Shop</Text> */}
        </View>
        <View style={styles.rightIcons}>
          <TouchableOpacity style={styles.iconContainer} onPress={() => { navigation.navigate("Notifications") }}>
            <Ionicons name="notifications-outline" size={width * 0.06} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer} onPress={() => { navigation.navigate("MyCart") }}>
            <Ionicons name="cart-outline" size={width * 0.06} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      {/* Add your product description content below the header */}
      <ScrollView style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/image1.png')}
            style={styles.productImage}
            resizeMode="contain" // Or 'cover', 'stretch', etc., depending on your preference
          />
        </View>
        <Text style={styles.productTitle}>Magnesium Blend</Text>
        <View style={styles.starContainer}>
          {[...Array(5)].map((_, starIndex) => (
            <FontAwesome key={starIndex} name="star" size={16} color="#89A97A" />
          ))}
        </View>
        {/* Add more product details here, like price, description, etc. */}
        <View style={styles.priceRow}>
          <Text style={styles.price}>£29.99
            <Text style={styles.subscriptionText}>
              {' '}— available on subscription from £19.99 / mon
            </Text>
          </Text>
        </View>
        <Text style={styles.quantityTitle}>How many containers would you like?</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={[
              styles.unitContainer,
              selectedContainer === 1 && styles.selectedUnitContainer,
            ]}
            onPress={() => handleContainerPress(1)}
          >
            <View style={[styles.unitHeader, selectedContainer === 1 && styles.selectedUnitHeader]}>
              <Text style={[styles.unitHeaderText, selectedContainer === 1 && styles.selectedUnitHeaderText]}>1 Unit</Text>
            </View>
            <Text style={[styles.unitPrice, selectedContainer === 1 && styles.selectedUnitTextColor]}>$14.99</Text>
            <Text style={[styles.unitShipping, selectedContainer === 1 && styles.selectedUnitTextColor]}>Free Shipping</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.unitContainer,
              selectedContainer === 2 && styles.selectedUnitContainer,
            ]}
            onPress={() => handleContainerPress(2)}
          >
            <View style={[styles.unitHeader, selectedContainer === 2 && styles.selectedUnitHeader]}>
              <Text style={[styles.unitHeaderText, selectedContainer === 2 && styles.selectedUnitHeaderText]}>1 Unit</Text>
            </View>
            <Text style={[styles.unitPrice, selectedContainer === 2 && styles.selectedUnitTextColor]}>$14.99</Text>
            <Text style={[styles.unitShipping, selectedContainer === 2 && styles.selectedUnitTextColor]}>Free Shipping</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.unitContainer,
              selectedContainer === 3 && styles.selectedUnitContainer,
            ]}
            onPress={() => handleContainerPress(3)}
          >
            <View style={[styles.unitHeader, selectedContainer === 3 && styles.selectedUnitHeader]}>
              <Text style={[styles.unitHeaderText, selectedContainer === 3 && styles.selectedUnitHeaderText]}>1 Unit</Text>
            </View>
            <Text style={[styles.unitPrice, selectedContainer === 3 && styles.selectedUnitTextColor]}>$14.99</Text>
            <Text style={[styles.unitShipping, selectedContainer === 3 && styles.selectedUnitTextColor]}>Free Shipping</Text>
          </TouchableOpacity>
        </View>
        <ProductDescription2 />
      </ScrollView>
    </View>
  );
};

export default ProductDescription;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.04,
    paddingVertical: width * 0.03,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: 'white',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  backButton: {
    padding: width * 0.02,
    borderColor: "#E6E6E6",
    borderWidth: 1,
  },
  title2: {
    fontSize: 19.2,
    fontWeight: 500,
    color: '#272928',
  },
  rightIcons: {
    flexDirection: 'row',
  },
  iconContainer: {
    marginLeft: width * 0.04,
    padding: width * 0.02,
  },
  content: {
    flex: 1,
    padding:10,
  },
  imageContainer: {
    backgroundColor: "#CDE0EE",
    width: "100%",
    height: 273,
    justifyContent: 'center', // Center the image vertically
    alignItems: 'center',     // Center the image horizontally
  },
  productImage: {
    width: '80%', // Adjust as needed
    height: '80%', // Adjust as needed
  },
  productTitle: {
    fontSize: 19.2,
    fontWeight: 500,
    marginTop: 10,
    marginLeft: 10,
    color: '#272928',
  },
  starContainer: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 5,
    marginLeft: 10,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 5,
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 500,
    color: "#272928",
  },
  subscriptionText: {
    fontSize: 13,
    fontWeight: '400',
    color: "#787878",
    marginLeft: 5,
  },
  quantityTitle: {
    fontSize: 19.2,
    fontWeight: 500,
    marginTop: 34,
    marginLeft: 10,
    color: '#272928',
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 5,
    paddingHorizontal: 10,
    height:89,
  },
  unitContainer: {
    flex: 1 / 3,
    borderWidth: 2,
    borderColor: "black",
  },
  unitHeader: {
    height: 25,
    width: "100%",
    backgroundColor: "#222222",
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unitHeaderText: {
    color: "white",
    fontSize: 14,
  },
  unitPrice: {
    fontSize: 18,
    fontWeight: '500',
    color: "#222222",
    textAlign: "center",
  },
  unitShipping: {
    fontSize: 13.33,
    fontWeight: '500',
    color: "#787878",
    textAlign: "center",
  },
  selectedUnitContainer: {
    borderColor: "#89A97A",
    backgroundColor: "#89A97A",
  },

  selectedUnitHeaderText: {
    color: "white",
  },
  selectedUnitTextColor: {
    color: "white",
  },
});