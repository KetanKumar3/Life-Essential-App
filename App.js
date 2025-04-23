import React from 'react';
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


const Stack = createNativeStackNavigator();

const App = () => {
return(
<NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
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
      <Stack.Screen name="MainTabs" component={Tabs} options={{ headerShown: false }} />
      <Stack.Screen name="MedicineSchedule" component={MedicineSchedule}
       options={{
                                                     headerTitle: '',

                                                      headerLeft: () => {
                                                        const navigation = useNavigation();
                                                        return (
                                                          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerContainer}> // Use goBack()
                                                            <MaterialIcons name="arrow-back-ios" size={20} color="black" style={{ marginLeft: 2 }} />
                                                          </TouchableOpacity>
                                                        );
                                                      },

                                          }}
       />
      <Stack.Screen name="MedicineSchedule2" component={MedicineSchedule2}
       options={{
                                                     headerTitle: '',

                                                      headerLeft: () => {
                                                        const navigation = useNavigation();
                                                        return (
                                                          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerContainer}> // Use goBack()
                                                            <MaterialIcons name="arrow-back-ios" size={20} color="black" style={{ marginLeft: 2 }} />
                                                          </TouchableOpacity>
                                                        );
                                                      },

                                          }}
       />
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