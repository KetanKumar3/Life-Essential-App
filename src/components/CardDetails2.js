import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

const Card = ({ time, title, description, imageSource }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Text style={styles.time}>{time}</Text>
      <TouchableOpacity style={styles.logButton}>
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

const CardDetails2 = () => {
  return (
    <ScrollView style={styles.container}>



      <Text style={styles.scheduleTitle}>Today's schedule</Text>

      <Card
        time="8:40 AM"
        title="Berberine HCL"
        description="Take 1 serving, 1 x 500mg capsule."
        imageSource={require('../assets/image1.png')}
      />
      <Card
        time="8:40 AM"
        title="Berberine HCL"
        description="Take 1 serving, 1 x 500mg capsule."
        imageSource={require('../assets/image1.png')}
      />
      <Card
        time="8:40 AM"
        title="Berberine HCL"
        description="Take 1 serving, 1 x 500mg capsule."
        imageSource={require('../assets/image1.png')}
      />
      <Card
        time="8:40 AM"
        title="Berberine HCL"
        description="Take 1 serving, 1 x 500mg capsule."
        imageSource={require('../assets/image1.png')}
      />

      {/* Floating Button */}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: width * 0.03, // Responsive padding
  },
  stepsCard: {
    backgroundColor: '#89A97A',
    padding: width * 0.05,
    borderRadius: 10,
    marginBottom: height * 0.02,
  },
  stepsTitle: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
    color: 'white',
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
    marginTop: height * 0.02,
    alignSelf: 'flex-start',
  },
  statsButtonText: {
    color: 'white',
    fontSize: width * 0.035,
  },
  scheduleTitle: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    marginBottom: height * 0.02,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: width * 0.04,
    marginBottom: height * 0.015,
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
    backgroundColor: '#e0e0e0',
    padding: width * 0.02,
    borderRadius: 5,
  },
  logButtonText: {
    fontSize: width * 0.035,
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
    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
  description: {
    fontSize: width * 0.04,
    color: 'gray',
  },

});

export default CardDetails2;