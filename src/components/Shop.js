import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const { width } = Dimensions.get('window');

const Shop = () => {
const navigation = useNavigation();

  const products = [
    {
      image: require('../assets/image1.png'),
      title: 'Tongkat All',
      price: '$24.99',
    },
    {
      image: require('../assets/image1.png'),
      title: 'Product 2',
      price: '$19.99',
    },
    {
      image: require('../assets/image1.png'),
      title: 'Product 3',
      price: '$29.99',
    },
    {
      image: require('../assets/image1.png'),
      title: 'Product 4',
      price: '$34.99',
    },
    {
      image: require('../assets/image1.png'),
      title: 'Product 5',
      price: '$39.99',
    },
    {
      image: require('../assets/image1.png'),
      title: 'Product 6',
      price: '$44.99',
    },
    // Add more products as needed
  ];

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
      <View style={{flexDirection:"row",alignItems:"center",gap:20}}>
        <TouchableOpacity style={styles.backButton} onPress={()=>{navigation.goBack()}} >
          <Ionicons name="chevron-back" size={width * 0.06} color="black" />
        </TouchableOpacity>
        <Text style={styles.title2}>Shop</Text>
      </View>
        <View style={styles.rightIcons}>
          <TouchableOpacity style={styles.iconContainer} onPress={()=>{navigation.navigate("Notifications")}} >
            <Ionicons name="notifications-outline" size={width * 0.06} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer} onPress={()=>{navigation.navigate("MyCart")}}>
            <Ionicons name="cart-outline" size={width * 0.06} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.productsGrid}>
          {products.map((product, index) => (
            <View key={index} style={styles.productContainer}>
              <View style={styles.imageContainer}>
                <Image source={product.image} style={styles.image} />
                <View style={styles.cartIconContainer}>
                  <Entypo name="heart-outlined" size={22} color="black" />
                </View>
              </View>
              <Text style={styles.title}>{product.title}</Text>
              <View style={styles.starContainer}>
                {[...Array(5)].map((_, starIndex) => (
                  <FontAwesome key={starIndex} name="star" size={16} color="#89A97A" />
                ))}
              </View>
              <View style={styles.priceRow}>
                <Text style={styles.price}>{product.price}
                <Text style={styles.subscriptionText}>
                                  {' '}— available on subscription from £19.99 / mon
                                </Text>
                </Text>

              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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
  backButton: {
    padding: width * 0.02,
    borderColor:"#E6E6E6",
    borderWidth:1,
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
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 100,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productContainer: {
    width: '48%', // Adjust width for 2 items per row
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 171,
    resizeMode: 'cover',
  },
  cartIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 5,
    borderRadius: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#272928",
    marginTop: 8,
    marginLeft: 5,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
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
  starContainer: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 5,
    marginLeft: 5,
  },
});

export default Shop;