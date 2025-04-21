import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';


const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Page = ({ children }) => {
  return <View style={styles.page}>{children}</View>;
};

const Splash = () => {

  const [currentPage, setCurrentPage] = useState(0);
  const scrollViewRef = useRef();
  const pageCount = 4; // Number of pages

  const handleScroll = (event) => {
    const page = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
    setCurrentPage(page);
  };



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
                <Image source={require('../assets/image2.png')} style={styles.image} />
                <Text style={styles.text}>Welcome to our app!</Text>
                <Text style={styles.subText}>Discover amazing features.</Text>
              </View>
            )}
            {index === 1 && (
              <View style={styles.contentContainer}>
                <Image source={require('../assets/image3.png')} style={styles.image} />
                <Text style={styles.text}>Explore new possibilities.</Text>
                <Text style={styles.subText}>Experience the best.</Text>
              </View>
            )}
            {index === 2 && (
              <View style={styles.contentContainer}>
                <Image source={require('../assets/image4.png')} style={styles.image} />
                <Text style={styles.text}>Get started today!</Text>
                <Text style={styles.subText}>Join our community.</Text>
              </View>
            )}
            {index === 3 && (
              <View style={styles.phoneNumberContainer}>
                <Text style={styles.phoneNumberText}>Enter Your Phone Number</Text>
                <Text style={styles.subText}>
                  We use OTP to Login or Register into the App
                </Text>
                <PhoneInput
                  defaultValue=""
                  defaultCode="IN"
                  layout="first"
                  containerStyle={styles.phoneInputContainer}
                  textContainerStyle={styles.phoneInputTextContainer}
                  textInputStyle={styles.phoneInputTextInput}
                  codeTextStyle={styles.phoneInputCodeText}
                />
                <TouchableOpacity style={styles.generateOTPButton}  >
                  <Text style={styles.generateOTPText}>Generate OTP</Text>
                </TouchableOpacity>

                <View style={{marginHorizontal:50,marginTop:20}} >
                      <Text style={styles.text2}>
                        By signing up I agree to the{' '}
                        <Text style={styles.greenText}>Terms and Conditions</Text>
                        {' '}and{' '}
                        <Text style={styles.greenText}>Privacy Policy</Text>
                      </Text>
                    </View>
              </View>
            )}
          </Page>
        ))}
      </ScrollView>

      {currentPage < pageCount - 1 && (
        <View style={styles.pagination}>
          {[...Array(pageCount)].map((index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentPage === index && styles.activeDot,
              ]}
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
  },
  page: {
    width: screenWidth,
    height: screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'gray',
    margin: 5,
  },
  activeDot: {
    backgroundColor: 'blue',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    paddingTop: 15,
    fontSize: 18,
    paddingBottom:30,
  },
  phoneNumberContainer: {
    width: screenWidth,
    height: screenHeight,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,

  },
  phoneNumberText: {
    fontSize: 49,
    fontWeight: 'semi-bold',
    marginTop: 100,
  },
  phoneInputContainer: {
    marginTop: 20,
    width: '100%',
    height: 50,
  },
  phoneInputTextContainer: {
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
  },
  phoneInputTextInput: {
    fontSize: 16,
  },
  phoneInputCodeText: {
    fontSize: 16,
  },
  generateOTPButton: {
    backgroundColor: '#89A97A',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 50,
    width: '100%',
  },
  generateOTPText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text2: {
      textAlign: 'center',
      color: 'black',
    },
    greenText: {
      color: 'green',
    },
});

export default Splash;