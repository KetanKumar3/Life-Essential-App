import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'; // Import

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Page = ({ children }) => {
  return <View style={styles.page}>{children}</View>;
};

const Splash = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const scrollViewRef = useRef();
  const pageCount = 4; // Number of pages
  const navigation = useNavigation();

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
                <Text style={styles.text}>Text line 1</Text>
                <Text style={styles.subText}>It is a long established fact that a reader will be distracted by the </Text>
              </View>
            )}
            {index === 1 && (
              <View style={styles.contentContainer}>
                <Image source={require('../assets/image3.png')} style={styles.image} />
                <Text style={styles.text}>Text line 2</Text>
                <Text style={styles.subText}>It is a long established fact that a reader will be distracted by the </Text>
              </View>
            )}
            {index === 2 && (
              <View style={styles.contentContainer}>
                <Image source={require('../assets/image4.png')} style={styles.image} />
                <Text style={styles.text}>Text line 3</Text>
                <Text style={styles.subText}>It is a long established fact that a reader will be distracted by the </Text>
              </View>
            )}
            {index === 3 && (
              <KeyboardAwareScrollView // Wrap this content
                style={{ flex: 1, width: screenWidth, padding: 20 }} // Adjust styles as needed
                contentContainerStyle={styles.phoneNumberContainer} // Apply existing styles
                behavior={Platform.OS === 'ios' ? 'padding' : undefined} // Optional: Adjust for iOS
                keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0} // Optional: Adjust for iOS
              >
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
                <TouchableOpacity style={styles.generateOTPButton} onPress={() => { navigation.navigate('OtpVerification')}} >
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
              </KeyboardAwareScrollView>
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
    width: 398,
    height: 398,
    resizeMode: 'contain',
    marginBottom: 69,
  },
  text: {
    fontSize: 19.2,
    fontWeight: 700,
    marginBottom: 16 ,
    color:"#272928",
  },
  subText: {
    paddingTop: 15,
    fontSize: 16,
    paddingBottom:30,
    color:"#787878",
    fontWeight:500,
    textAlign:"center",
  },
  phoneNumberContainer: {
    flexGrow: 1, // Important for KeyboardAwareScrollView to scroll content
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

  },
  phoneNumberText: {
    fontSize: 39,
    fontWeight: 500,
    marginTop: 130,
    color:"#272928",
  },
  phoneInputContainer: {
    marginTop: 20,
    width: '100%',
    height: 50,
  },
  phoneInputTextContainer: {
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    borderWidth: 1, // Added border
    borderColor: '#ccc', // Added border color
  },
  phoneInputTextInput: {
    fontSize: 16,
    color: 'black', // Ensured text color
  },
  phoneInputCodeText: {
    fontSize: 16,
    color: 'black', // Ensured code text color
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
      color: '#B5B5B5',
      fontWeight:400,
      fontSize:14,
    },
    greenText: {
      color: '#89A97A',
      fontWeight:400,
      fontSize:14,
    },
});

export default Splash;