import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

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
        <View style={{flexDirection:"row",alignItems:"center",marginTop:15,gap:3}}>
          <FontAwesome5 name="truck" size={12} style={{color:"gray"}} />
          <Text style={{color:"gray",fontSize:12}}>Order has been shipped</Text>
        </View>
      </View>
    </View>
  );
};

const MyOrder = () => {
const navigation = useNavigation()
  return (
    <View style={styles.container}>
    <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <MaterialIcons name="arrow-back-ios" size={width * 0.06} color="#272928" style={{ marginLeft: width * 0.02 }} />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>My Orders</Text>
            </View>
          </View>
      <View style={styles.productList}>

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
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: height * 0.02,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F3F3',
  },
  backButton: {
    padding: width * 0.02,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: width * 0.01,
    marginLeft: width * 0.04,
  },
  titleContainer: {
    flex: 1,

    marginRight: width * 0.1, // Adjust to center properly with back button
  },
  titleText: {
    fontSize: 19.2,
    fontWeight: '500',
    color: '#272928',
    marginLeft:20,

  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  productList: {
    flex: 1,
    padding: width * 0.04,
  },
  header: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    marginBottom: height * 0.02,
    marginLeft:10,
  },
  productCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: width * 0.03,
    borderRadius: 10,
    marginBottom: height * 0.015,
  },
  productImage: {
    width: width * 0.3,
    height: width * 0.35,
    marginRight: width * 0.03,
  },
  productDetails: {
    flex: 1,
  },
  productTitle: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    marginTop:10,
  },
  rating: {
    flexDirection: 'row',
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

export default MyOrder;