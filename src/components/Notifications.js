import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

const Card = ({ title, subtitle, imageSource, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <View style={styles.cardContent}>
      <Image source={imageSource} style={styles.cardImage} />
      <View style={styles.cardText}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
    <Image source={require('../assets/arrow.png')} style={styles.arrowIcon} />
  </TouchableOpacity>
);

const Notifications = () => {
  return (
    <ScrollView style={styles.container}>
      <Card
        title="Survey"
        subtitle="Complete your Survey"
        imageSource={require('../assets/image5.png')}
        onPress={() => console.log('Survey pressed')}
      />
      <Card
        title="Recommendations"
        subtitle="You've a recommendation"
        imageSource={require('../assets/image5.png')}
        onPress={() => console.log('Recommendations pressed')}
      />
      <Card
        title="Items Left"
        subtitle="You left something in your cart"
        imageSource={require('../assets/image5.png')}
        onPress={() => console.log('Items Left pressed')}
      />
      <Card
        title="Blood Report"
        subtitle="Received Blood Report"
        imageSource={require('../assets/image5.png')}
        onPress={() => console.log('Blood Report pressed')}
      />
      <Card
        title="Pedometer"
        subtitle="Check You todays score"
        imageSource={require('../assets/image5.png')}
        onPress={() => console.log('Pedometer pressed')}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: width * 0.03,

  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: width * 0.04,
    marginBottom: height * 0.015,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight:40,
    borderWidth:2,
    borderColor:"#F4F4F4",
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: width * 0.1,
    height: width * 0.1,
    marginRight: width * 0.03,
  },
  cardText: {
    flex: 1,
  },
  title: {
    fontSize: width * 0.035,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: width * 0.035,
    color: 'gray',
  },
  arrowIcon: {
    width: width * 0.06,
    height: width * 0.06,

  },
});

export default Notifications;