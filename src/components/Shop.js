import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Shop = () => {
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

            <Text style={styles.price}>{product.price}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    marginBottom:100,
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
    height:200,
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
    fontSize: 18,
    fontWeight: 'bold',
    marginTop:8,
    marginLeft:5,
  },
  price: {
    fontSize: 16,
    marginTop: 5,
    marginLeft:5,
    marginBottom:10,
  },
  starContainer: {
    flexDirection: 'row',
    gap:5,
    marginTop: 5,
    marginLeft:5,
  },
});

export default Shop;