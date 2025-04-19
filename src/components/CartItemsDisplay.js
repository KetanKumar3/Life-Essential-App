import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window');

const CartItem = ({ imageSource, title, price, subscriptionPrice }) => {
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
    <View style={styles.cartItem}>
      <Image source={imageSource} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{title}</Text>
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

const OrderSummary = ({ totalMRP, deliveryCharge, tax, totalPrice }) => (
  <View style={styles.orderSummary}>
    <Text style={styles.summaryTitle}>Order Summary (2 items)</Text>
    <View style={styles.summaryRow}>
      <Text style={styles.summaryLabel}>Total MRP</Text>
      <Text style={styles.summaryValue}>{totalMRP}</Text>
    </View>
    <View style={styles.summaryRow}>
      <Text style={styles.summaryLabel}>Delivery Charge</Text>
      <Text style={[styles.summaryValue, deliveryCharge === 'FREE' && styles.freeDelivery]}>{deliveryCharge}</Text>
    </View>
    <View style={styles.summaryRow}>
      <Text style={styles.summaryLabel}>TAX</Text>
      <Text style={styles.summaryValue}>{tax}</Text>
    </View>
    <View style={styles.summaryRow}>
      <Text style={styles.totalLabel}>Total Price</Text>
      <Text style={styles.totalValue}>{totalPrice}</Text>
    </View>
  </View>
);

const CartItemsDisplay = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <CartItem
          imageSource={require('../assets/image1.png')}
          title="Tongkat Ali"
          price="£24.99"
          subscriptionPrice="£19.99"
        />

        <CartItem
          imageSource={require('../assets/image1.png')}
          title="Another Product"
          price="£19.99"
          subscriptionPrice="£15.99"
        />

        <OrderSummary
          totalMRP="£44.98"
          deliveryCharge="£2.99"
          tax="£5.00"
          totalPrice="£52.97"
        />
      </ScrollView>
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Proceed For Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  content: {
    flex: 1,
    padding: width * 0.04,
    paddingBottom: height * 0.12, // Adjust for the height of the checkout button
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: width * 0.03,
    borderRadius: width * 0.02,
    marginBottom: height * 0.015,
    borderColor: "#E6E6E6",
    borderWidth: 1,
  },
  itemImage: {
    width: width * 0.3,
    height: width * 0.3,
    marginRight: width * 0.03,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  rating: {
    flexDirection: 'row',
    marginTop: height * 0.005,
  },
  star: {
    color: 'gold',
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

  orderSummary: {
    backgroundColor: 'white',
    borderRadius: width * 0.02,
    padding: width * 0.04,
    marginTop: height * 0.02,
  },
  summaryTitle: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    marginBottom: height * 0.015,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height * 0.008,
  },
  summaryLabel: {
    fontSize: width * 0.038,
    color: '#555',
  },
  summaryValue: {
    fontSize: width * 0.038,
    color: '#333',
  },
  totalLabel: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  totalValue: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  freeDelivery: {
    color: 'green',
  },
  checkoutButton: {
    backgroundColor: '#8fbc8f', // Dark sea green
    paddingVertical: height * 0.02,
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    left: "4%",
    right: "4%",
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
});

export default CartItemsDisplay;