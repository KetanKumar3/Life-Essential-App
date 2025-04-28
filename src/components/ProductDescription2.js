import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProductDescription3 from './ProductDescription3';

const { width } = Dimensions.get('window');

const ProductDescription2 = () => {
  const [activeTab, setActiveTab] = useState('Description');
  const [selectedUnit, setSelectedUnit] = useState(null);

  const handleTabPress = useCallback((tabName) => {
    setActiveTab(tabName);
    // In a real app, you would load different components based on the tabName
    console.log(`Tab "${tabName}" pressed`);
  }, []);

  const handleUnitPress = useCallback((unit) => {
    setSelectedUnit(unit);
  }, []);

  const renderTabContent = useCallback(() => {
    switch (activeTab) {
      case 'Description':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.descriptionTitle}>What is Magnesium Blend?</Text>
            <Text style={styles.descriptionText}>
              Made up of Magnesium Glycinate, Magnesium Citrate and Magnesium Malate.
              Glycinate is a form absorbed really well in the body. Citrate is readily
              found in supplements and Malate is believed to support energy production.
            </Text>
            <View style={styles.productImageContainer}>
              <Image
                source={require('../assets/image1.png')} // Replace with your actual image path
                style={styles.productImage}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.howToUseTitle}>How to use Magnesium Blend</Text>
            <Text style={styles.howToUseText}>
              Here's a brief guide on how to take Magnesium Blend Capsules.
              {/* Add detailed usage instructions here */}
            </Text>
            {/* Add more description details */}
            <View style={styles.medicineImageContainer}>
              <Image source={require('../assets/MedicineImage.png')} style={styles.medicineImage} />
            </View>

            <View style={styles.qualitySection}>
              <Text style={styles.qualityTitle}>No Compromises on Quality</Text>
              <Text style={styles.qualityIntroText}>
                We believe in being completely honest about what we do. And we believe
                that nothing is more important than your health. We therefore promise
                that all our supplements are...
              </Text>

              <View style={styles.qualityItem}>
                <View style={styles.iconContainer}>
                  <Image
                    source={require('../assets/image9.png')} // Replace with your actual icon path
                    style={styles.qualityIcon}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.qualityText}>
                  Each and every product has been especially selected for their unique
                  qualities by our extremely experienced and knowledgeable team. All
                  capsules are 'clean' meaning they only contain active ingredients.
                </Text>
              </View>

              <View style={styles.qualityItem}>
                <View style={styles.iconContainer}>
                  <Image
                    source={require('../assets/image10.png')} // Replace with your actual icon path
                    style={styles.qualityIcon}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.qualityText}>
                  All of our supplements are manufactured in the United Kingdom. All of
                  our raw ingredient suppliers have to go through stringent quality
                  control tests to ensure all ingredients are to the highest order.
                </Text>
              </View>

              <View style={styles.qualityItem}>
                <View style={styles.iconContainer}>
                  <Image
                    source={require('../assets/image11.png')} // Replace with your actual icon path
                    style={styles.qualityIcon}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.qualityText}>
                  We don't use fillers, binders, flow agents, artificial colours or
                  preservatives. All our supplements are meticulously tested so no
                  pesticides or heavy metals get through.
                </Text>
              </View>

              <View style={styles.qualityItem}>
                <View style={styles.iconContainer}>
                  <Image
                    source={require('../assets/image12.png')} // Replace with your actual icon path
                    style={styles.qualityIcon}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.qualityText}>
                  As part of our quality management services, we have several different
                  accreditations which include HACCP and ISO9001. Our top of the range
                  laboratory is ISO Class 7.
                </Text>
              </View>
            </View>

            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
              <Text style={styles.descriptionTitle}>You might also like</Text>
              <Text>See all</Text>
            </View>

            <ProductDescription3 />
          </View>
        );
      case 'Additional information':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.infoTitle}>Additional Information</Text>
            {/* Add additional product information here (e.g., ingredients, dosage) */}
            <Text>Ingredients: Magnesium Glycinate, Magnesium Citrate, Magnesium Malate, Capsule Shell (Vegetable Cellulose).</Text>
            <Text>Dosage: Take 2 capsules daily with water.</Text>
            {/* More info */}
          </View>
        );
      case 'Reviews':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.reviewsTitle}>Reviews</Text>
            {/* Display product reviews here */}
            <Text>No reviews yet.</Text>
            {/* Add review components */}
          </View>
        );
      default:
        return null;
    }
  }, [activeTab]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.tabs}>
          <TouchableOpacity onPress={() => handleTabPress('Description')}>
            <Text style={[styles.tabText, activeTab === 'Description' && styles.activeTabText]}>
              Description
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabPress('Additional information')}>
            <Text style={[styles.tabText, activeTab === 'Additional information' && styles.activeTabText]}>
              Additional information
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabPress('Reviews')}>
            <Text style={[styles.tabText, activeTab === 'Reviews' && styles.activeTabText]}>
              Reviews
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.content}>
        {renderTabContent()}
        {/* Add more product details below the tabs */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
  },
  tabText: {
    fontSize: width * 0.04,
    color: '#777',
  },
  activeTabText: {
    color: '#333',
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: '#89A97A',
    paddingBottom: 5,
  },
  content: {
    flex: 1,
    padding: width * 0.04,
  },
  tabContent: {
    paddingVertical: 20,
  },
  descriptionTitle: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: width * 0.04,
    color: '#555',
    lineHeight: width * 0.06,
    marginBottom: 20,
  },
  productImageContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
  productImage: {
    width: '80%',
    height: undefined,
    aspectRatio: 1.5, // Adjust based on your image aspect ratio
  },
  howToUseTitle: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
  },
  howToUseText: {
    fontSize: width * 0.04,
    color: '#555',
    lineHeight: width * 0.06,
  },
  infoTitle: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  reviewsTitle: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },

  qualitySection: {
    paddingVertical: 20,
  },
  qualityTitle: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center', // Center the title
  },
  qualityIntroText: {
    fontSize: width * 0.04,
    color: '#555',
    lineHeight: width * 0.06,
    marginBottom: 20,
    textAlign: 'center', // Center the intro text
  },
  qualityItem: {
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically in the row
    marginBottom: 25,
    paddingHorizontal: width * 0.04, // Add some horizontal padding
  },
  iconContainer: {
    width: width * 0.15,
    height: width * 0.15,
    marginRight: 15,
    justifyContent: 'center', // Center the icon vertically
    alignItems: 'center',    // Center the icon horizontally
  },
  qualityIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  qualityText: {
    fontSize: width * 0.04,
    color: '#555',
    lineHeight: width * 0.06,
    flex: 1,
  },
});

export default ProductDescription2;