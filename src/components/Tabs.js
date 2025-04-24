import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Shop from './Shop';
import MyProfile from './MyProfile';
import Log from './Log';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
const Tab = createBottomTabNavigator();

const Tabs = () => {
const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          elevation: 5,
         height:100,
         justifyContent:"center",
         alignItems:"center",
         backgroundColor:"white",

        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
        headerShown:false,
        tabBarIcon: ({ focused }) => (
                    <View style={styles.tabItem}>
                      <MaterialCommunityIcons name="home" size={24} color={focused ? '#89A97A' : 'black'} />
                      <Text style={[styles.tabLabel, { color: focused ? '#89A97A' : 'black' }]}>Home</Text>
                    </View>
                  ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          headerShown:false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabItem}>
              <Ionicons name="apps" size={24} color={focused ? '#89A97A' : 'black'} />
              <Text style={[styles.tabLabel, { color: focused ? '#89A97A' : 'black' }]}>Shop</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
              name="Log"
              component={Log}
              options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                  <View style={styles.tabItem}>
                    <MaterialCommunityIcons name="book-check" size={24} color={focused ? '#89A97A' : 'black'} />
                    <Text style={[styles.tabLabel, { color: focused ? '#89A97A' : 'black' }]}>Log</Text>
                  </View>
                ),
              }}
            />

      <Tab.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabItem}>
              <Ionicons name="person" size={24} color={focused ? '#89A97A' : 'black'} />
              <Text style={[styles.tabLabel, { color: focused ? '#89A97A' : 'black' }]}>Profile</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width:100,
    marginTop:50,
    height:90,

  },
  tabLabel: {
    fontSize: 15,

  },
  headerLeftText: {
      fontSize: 24,
      fontWeight: 'bold',
      marginLeft: 20, // Add some left margin
    },
    headerRightContainer: {
      marginRight: 20, // Add some right margin
      padding: 10, // Add padding for touchable area
      backgroundColor:"#e0e0e0",
      borderRadius:50
    },
});

export default Tabs;