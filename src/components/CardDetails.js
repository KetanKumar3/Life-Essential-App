import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const { width, height } = Dimensions.get('window');

const cardBackgroundColors = ['#FBE6D5', '#D5E6EA', '#E1EADE', '#F8EFD0']; // Array of background colors

const Card = ({ time, title, description, imageSource, backgroundColor }) => (
  <View style={[styles.card, { backgroundColor }]}>
    <View style={styles.cardHeader}>
      <Text style={styles.time}>{time}</Text>
      <TouchableOpacity style={styles.logButton}>
        <FontAwesome name="lock" size={18} color="black" />
        <Text style={styles.logButtonText}>Log this</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.cardContent}>
      <Image source={imageSource} style={styles.cardImage} />
      <View style={styles.cardText}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  </View>
);

const CardDetails = () => {
  const cardsData = [
    {
      time: "8:40 AM",
      title: "Berberine HCL",
      description: "Take 1 serving, 1 x 500mg capsule.",
      imageSource: require('../assets/image9.png'),
    },
    {
      time: "12:00 PM",
      title: "Vitamin D3",
      description: "Take 1 tablet with a meal.",
      imageSource: require('../assets/image10.png'),
    },
    {
      time: "7:00 PM",
      title: "Magnesium Glycinate",
      description: "Take 2 capsules before bed.",
      imageSource: require('../assets/image11.png'),
    },
    {
      time: "9:00 PM",
      title: "Melatonin",
      description: "Take 1 tablet 30 minutes before sleep.",
      imageSource: require('../assets/image12.png'),
    },
    // Add more card data here
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.stepsCard}>
        <Text style={styles.stepsTitle}>
          <Image source={require('../assets/footprint.png')} style={styles.footprintsIcon} /> 4899 Steps
        </Text>
        <Text style={styles.stepsDetails}>
          8.22 Km | 1hr 2m | 345 Calories
        </Text>
        <TouchableOpacity style={styles.statsButton}>
          <Text style={styles.statsButtonText}>See stats >></Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.scheduleTitle}>Today's schedule</Text>

      {cardsData.map((card, index) => (
        <Card
          key={index}
          {...card}
          backgroundColor={cardBackgroundColors[index % cardBackgroundColors.length]}
        />
      ))}

      {/* Floating Button */}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: width * 0.03,
  },
  stepsCard: {
    backgroundColor: '#89A97A',
    padding: width * 0.05,
    borderRadius: 10,
    marginBottom: height * 0.02,
    height: 151,
  },
  stepsTitle: {
    fontSize: width * 0.07,
    fontWeight: 700,
    color: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  footprintsIcon: {
    width: width * 0.05,
    height: width * 0.05,
    marginRight: width * 0.02,
  },
  stepsDetails: {
    fontSize: width * 0.04,
    color: 'white',
    marginTop: height * 0.01,
  },
  statsButton: {
    backgroundColor: '#5A784C',
    padding: width * 0.02,
    borderRadius: 5,
    marginTop: 7,
    alignSelf: 'flex-start',
  },
  statsButtonText: {
    color: 'white',
    fontSize: width * 0.035,
  },
  scheduleTitle: {
    fontSize: 23,
    fontWeight: 700,
    color: "#272928",
    marginBottom: height * 0.02,
  },
  card: {
    borderRadius: 10,
    padding: width * 0.04,
    marginBottom: height * 0.015,
    height: 136,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: height * 0.01,
  },
  time: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  logButton: {
    backgroundColor: '#FFFFFF',
    padding: width * 0.02,
    borderRadius: 5,
    flexDirection:"row",
    justifyContent:"center",
    gap:6,
  },
  logButtonText: {
    fontSize: 13,
    fontWeight:500,
    color:"#272928",
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: width * 0.15,
    height: width * 0.15,
    marginRight: width * 0.03,
  },
  cardText: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 700,
    color:"#272928",
  },
  description: {
    fontSize: 13,
    fontWeight:500,
    color: '#787878',
  },
});

export default CardDetails;