import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, Image } from 'react-native';
import PhoneNumberScreen from './PhoneNumberScreen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Page = ({ children }) => {
  return <View style={styles.page}>{children}</View>;
};

const Splash = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const scrollViewRef = useRef();
  const pageCount = 4;

  const handleScroll = (event) => {
    const page = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
    setCurrentPage(page);
  };

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: false });
    }
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {[...Array(pageCount)].map((_, index) => (
          <Page key={index}>
            {index === 0 && (
              <View style={styles.contentContainer}>
                <Image source={require('../assets/image2.png')} style={styles.image} resizeMode="contain" />
                <Text style={styles.text}>Welcome to our app!</Text>
                <Text style={styles.subText}>Discover amazing features.</Text>
              </View>
            )}
            {index === 1 && (
              <View style={styles.contentContainer}>
                <Image source={require('../assets/image3.png')} style={styles.image} resizeMode="contain" />
                <Text style={styles.text}>Explore new possibilities.</Text>
                <Text style={styles.subText}>Experience the best.</Text>
              </View>
            )}
            {index === 2 && (
              <View style={styles.contentContainer}>
                <Image source={require('../assets/image4.png')} style={styles.image} resizeMode="contain" />
                <Text style={styles.text}>Get started today!</Text>
                <Text style={styles.subText}>Join our community.</Text>
              </View>
            )}
            {index === 3 && currentPage === 3 && (
              <KeyboardAwareScrollView
                style={{ flex: 1, width: screenWidth }}
                contentContainerStyle={styles.phoneNumberContainer}
                enableOnAndroid={true}
                extraScrollHeight={20}
                keyboardShouldPersistTaps="handled"
              >
                <PhoneNumberScreen />
              </KeyboardAwareScrollView>
            )}
          </Page>
        ))}
      </ScrollView>

      {currentPage < pageCount - 1 && (
        <View style={styles.pagination}>
          {[...Array(pageCount)].map((_, index) => (
            <View
              key={index}
              style={[styles.dot, currentPage === index && styles.activeDot]}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  page: {
    width: screenWidth,
    height: screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: screenWidth * 0.6,
    height: screenWidth * 0.6,
    resizeMode: 'contain',
    marginBottom: screenHeight * 0.03,
  },
  text: {
    fontSize: screenWidth * 0.07,
    fontWeight: 'bold',
    marginBottom: screenHeight * 0.015,
    textAlign: 'center',
  },
  subText: {
    fontSize: screenWidth * 0.04,
    color: 'gray',
    textAlign: 'center',
  },
  phoneNumberContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 27,
    paddingTop: 130,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: screenHeight * 0.03,
    width: '100%',
  },
  dot: {
    width: screenWidth * 0.02,
    height: screenWidth * 0.02,
    borderRadius: screenWidth * 0.01,
    backgroundColor: 'gray',
    margin: screenWidth * 0.01,
  },
  activeDot: {
    backgroundColor: '#89A97A',
  },
});

export default Splash;
