import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');

const ProductCard = ({ imageSource, title, price, subscriptionPrice }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.productCard}>
      <Image source={imageSource} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{title}</Text>
        <View style={styles.rating}>
          {Array(5).fill().map((_, i) => (
            <Text key={i} style={styles.star}>★</Text>
          ))}
        </View>
        <Text style={styles.price}>{price} - available on subscription from {subscriptionPrice} / mon</Text>
        <View style={styles.actions}>

          <View style={styles.quantity}>
            <TouchableOpacity style={styles.quantityButton} onPress={handleDecrement}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity style={styles.quantityButton} onPress={handleIncrement}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const SurveyRecommendation = () => {
const navigation = useNavigation();

  return (
    <View style={styles.container}>
    <View style={styles.container2}>
                <TouchableOpacity  style={styles.backButton} onPress={() => navigation.goBack()}>
                  <MaterialIcons name="arrow-back-ios" size={width * 0.06} color="#272928" style={{marginLeft:8}} />
                </TouchableOpacity>
                <View style={styles.progressContainer}>
                  <Text style={styles.progressText}>Recommendations</Text>
                </View>
              </View>
      <View style={styles.productList}>
        <Text style={styles.header}>Based on a survey Here is the recommendations for you</Text>
        <ProductCard
          imageSource={require('../assets/image1.png')}
          title="Tongkat Ali"
          price="£24.99"
          subscriptionPrice="£19.99"
        />
        <ProductCard
          imageSource={require('../assets/image1.png')}
          title="Tongkat Ali"
          price="£24.99"
          subscriptionPrice="£19.99"
        />
      </View>
      <TouchableOpacity style={styles.buyButton} onPress={()=>{navigation.navigate("BillingDetails")}} >
        <Text style={styles.buyButtonText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
container2: {
    marginLeft:24,
    flexDirection: 'row',
    alignItems:"center",

    paddingVertical: width * 0.03, // Adjust vertical padding as needed
    backgroundColor: '#f9f9f9', // Optional background color
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
    backgroundColor: '#f9f9f9',
  },
  productList: {
    flex: 1,
    paddingHorizontal:24,
    marginTop:20,
  },
  header: {
    fontSize: 27,
    fontWeight: 500,
    marginBottom: 40,
    color:"#272928",
  },
  productCard: {
    flexDirection: 'row',
    backgroundColor: 'white',

    borderRadius: 8,
    marginBottom: height * 0.015,
    borderWidth:1,
    borderColor:"#F4F4F4",
  },
  productImage: {
    width: width * 0.3,
    height: 151,
    marginRight: width * 0.03,
  },
  productDetails: {
    flex: 1,
    marginTop:10,
  },
  productTitle: {
    fontSize: 16,
    color:"#272928",
    fontWeight: 500,
  },
  rating: {
    flexDirection: 'row',
    gap:2,
    marginTop: height * 0.005,
  },
  star: {
    color: '#89A97A',
    fontSize: width * 0.035,
  },
  price: {
    fontSize: width * 0.035,
    color: 'gray',
    marginTop: height * 0.005,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.01,
  },
  actionButton: {
    padding: width * 0.02,
  },
  actionIcon: {
    width: width * 0.04,
    height: width * 0.04,
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    padding: width * 0.02,
  },
  quantityButtonText: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: width * 0.04,
    marginHorizontal: width * 0.02,
  },
  buyButton: {
    backgroundColor: '#89A97A',
    padding: height * 0.02,
    borderRadius: 10,
    alignItems: 'center',
    width: '92%', // Adjusted width
    position: 'absolute',
    bottom: height * 0.02, // Added bottom margin
    left: '4%', // Added left margin
    right: '4%', // Added right margin
  },
  buyButtonText: {
    color: 'white',
    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
});

export default SurveyRecommendation;