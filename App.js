import React, { useState, useEffect } from 'react';
import Splash from './src/components/Splash';
import OtpVerification from './src/components/OtpVerification';
import BasicDetails from './src/components/BasicDetails';
import Home from './src/components/Home';
import Notifications from './src/components/Notifications';
import EnableOrDisable from './src/components/EnableOrDisable';
import MyCart from './src/components/MyCart';
import MedicineSchedule from './src/components/MedicineSchedule';
import MedicineSchedule2 from './src/components/MedicineSchedule2';
import MyProfile from './src/components/MyProfile';
import CartItemsDisplay from './src/components/CartItemsDisplay';
import BillingDetails from './src/components/BillingDetails';
import SurveyDetails from './src/components/SurveyDetails';
import SurveyDetails2 from './src/components/SurveyDetails2';
import SurveyTest1 from './src/components/SurveyTest1';
import SurveyTest2 from './src/components/SurveyTest2';
import SurveyRecommendation from './src/components/SurveyRecommendation';
import CongratulationScreen from './src/components/CongratulationScreen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './src/components/Tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity,StyleSheet,View,Text } from 'react-native';
import Profile from './src/components/Profile';
import SplashScreen from './src/components/SplashScreen';
import ProductDescription from './src/components/ProductDescription';
import Shop from './src/components/Shop';
import Log from './src/components/Log';
import MyOrder from './src/components/MyOrder';

const Stack = createNativeStackNavigator();

const App = () => {
const [isSplashScreenVisible, setIsSplashScreenVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplashScreenVisible(false);
    }, 3000); // Hide SplashScreen after 3 seconds
  }, []);
return(
<NavigationContainer>
      <Stack.Navigator>

      {isSplashScreenVisible ? (
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}} />
              ) : (
                <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
              )}
      <Stack.Screen name="OtpVerification" component={OtpVerification} options={{ headerShown: false }} />
      <Stack.Screen name="BasicDetails" component={BasicDetails} options={{ headerShown: false }} />
      <Stack.Screen name="SurveyDetails" component={SurveyDetails}
       options={{
           headerShown: false,

         }}
       />
      <Stack.Screen name="SurveyDetails2" component={SurveyDetails2}
       options={{
                  headerShown:false,
                }}
       />
      <Stack.Screen name="SurveyRecommendation" component={SurveyRecommendation} options={{ headerShown: false }} />
      <Stack.Screen name="BillingDetails" component={BillingDetails} options={{ headerShown: false }} />
      <Stack.Screen name="CongratulationScreen" component={CongratulationScreen} options={{ headerShown: false }} />
      <Stack.Screen name="MyCart" component={MyCart}
       options={{
                                              headerShown: false,



                                   }}
       />
      <Stack.Screen name="Notifications" component={Notifications}
       options={{

                                        headerShown:false,


                            }}
       />

      <Stack.Screen name="MedicineSchedule" component={MedicineSchedule}
       options={{
                                                     headerShown: false ,

                                          }}
       />
      <Stack.Screen name="MedicineSchedule2" component={MedicineSchedule2}
       options={{
                                                     headerShown: false ,
                                          }}
       />
       <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Stack.Screen name="EnableOrDisable" component={EnableOrDisable} options={{ headerShown: false }} />
      <Stack.Screen name="ProductDescription" component={ProductDescription} options={{ headerShown: false }} />
      <Stack.Screen name="Shop" component={Shop} options={{ headerShown: false }} />
      <Stack.Screen name="Log" component={Log} options={{ headerShown: false }} />
      <Stack.Screen name="MyProfile" component={MyProfile} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="MyOrder" component={MyOrder} options={{ headerShown: false }} />
      </Stack.Navigator>
</NavigationContainer>
);
}


const styles = StyleSheet.create({
  headerContainer: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 50,
    flexDirection: 'row',
        alignItems: 'center',

  },
  headerRightContainer: {
      paddingHorizontal: 16,

    },
    headerRightText: {
      fontWeight:500,
      fontSize: 15.2,
      color: '#272928', // Or any color you prefer
      // Add other text styles if needed
    }
});

export default App;