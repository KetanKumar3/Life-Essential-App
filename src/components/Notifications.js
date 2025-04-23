import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');

const Card = ({ title, subtitle, imageSource, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <View style={styles.cardContent}>
      <Image source={imageSource} style={styles.cardImage} resizeMode="contain" />
      <View style={styles.cardText}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
    <Image source={require('../assets/arrow.png')} style={styles.arrowIcon} resizeMode="contain" />
  </TouchableOpacity>
);

const Notifications = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={width * 0.06} color="#272928" style={{ marginLeft: width * 0.02 }} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Notifications</Text>
        </View>
      </View>
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
    paddingHorizontal: width * 0.04,
    paddingTop: height * 0.02,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: width * 0.02,
    padding: width * 0.04,
    marginBottom: height * 0.015,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: width * 0.06,
    borderWidth: 1,
    borderColor: '#F4F4F4',
    height:94,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: 58,
    height: 58,
    marginRight: width * 0.03,
  },
  cardText: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: '#ADADAD',
  },
  subtitle: {
    fontSize: width * 0.035,
    color: '#272928',
    fontWeight:500,
  },
  arrowIcon: {
    width: width * 0.05,
    height: width * 0.05,
  },
});

export default Notifications;