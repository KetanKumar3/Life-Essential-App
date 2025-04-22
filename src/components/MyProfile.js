import React from 'react';
import {View, Text,Image,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

function MyProfile(){
const navigation = useNavigation();

return(
<ScrollView style={{flex:1,backgroundColor:"white"}}>
<View>

// Profile Start
<Text style={{textAlign:"center",fontWeight:"bold",fontSize:24,marginTop:40,marginBottom:30}}>Profile</Text>


// My profile starts
<TouchableOpacity>
<View style={styles.container}>
      <View style={styles.iconBackground}>
        <Ionicons name="person" size={24} color="black" />
      </View>
      <Text style={styles.title}>My Profile</Text>
       <View style={styles.spacer} /> {/* Pushes the last icon to the end */}
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
       </View>
</TouchableOpacity>
// My profile end

// wellness history Start

<TouchableOpacity>
<View style={styles.container}>
      <View style={styles.iconBackground}>
        <MaterialCommunityIcons name="map-marker-radius-outline" size={24} color="black" />
      </View>
      <Text style={styles.title}>wellness history</Text>
       <View style={styles.spacer} /> {/* Pushes the last icon to the end */}
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
       </View>
</TouchableOpacity>
// wellness history end

// My cart starts

<TouchableOpacity onPress={()=>{navigation.navigate('MyCart')}} >
<View style={styles.container}>
      <View style={styles.iconBackground}>
        <AntDesign name="shoppingcart" size={24} color="black" />
      </View>
      <Text style={styles.title}>My Cart</Text>
       <View style={styles.spacer} /> {/* Pushes the last icon to the end */}
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
       </View>
</TouchableOpacity>
// My cart ends

// my order starts

<TouchableOpacity >
<View style={styles.container}>
      <View style={styles.iconBackground}>
        <MaterialCommunityIcons name="cube-outline" size={24} color="black" />
      </View>
      <Text style={styles.title}>My Orders</Text>
       <View style={styles.spacer} /> {/* Pushes the last icon to the end */}
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
       </View>
</TouchableOpacity>
// My order ends

// test report starts

<TouchableOpacity>
<View style={styles.container}>
      <View style={styles.iconBackground}>
        <MaterialIcons name="report" size={24} color="black" />
      </View>
      <Text style={styles.title}>Test report</Text>
       <View style={styles.spacer} /> {/* Pushes the last icon to the end */}
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
       </View>
</TouchableOpacity>
// test report end

// supplement starts

<TouchableOpacity onPress={()=>{navigation.navigate("MedicineSchedule")}} >
<View style={styles.container}>
      <View style={styles.iconBackground}>
        <MaterialIcons name="schedule" size={24} color="black" />
      </View>
      <Text style={styles.title}>Supplement Schedule</Text>
       <View style={styles.spacer} /> {/* Pushes the last icon to the end */}
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
       </View>
</TouchableOpacity>

// supplement end

// notification start

<TouchableOpacity onPress={()=>{navigation.navigate('Notifications')}} >
<View style={styles.container}>
      <View style={styles.iconBackground}>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>
      <Text style={styles.title}>Notification</Text>
       <View style={styles.spacer} /> {/* Pushes the last icon to the end */}
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
       </View>
</TouchableOpacity>

//notification end

// pedometer start

<TouchableOpacity>
<View style={styles.container}>
      <View style={styles.iconBackground}>
        <Ionicons name="footsteps" size={24} color="black" />
      </View>
      <Text style={styles.title}>Pedometer</Text>
       <View style={styles.spacer} /> {/* Pushes the last icon to the end */}
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
       </View>
</TouchableOpacity>

// pedometer end

// signOut start

<TouchableOpacity style={{marginBottom:90}}>
<View style={styles.container}>
      <View style={styles.iconBackground}>
        <MaterialIcons name="logout" size={24} color="black" />
      </View>
      <Text style={styles.title}>Sign Out</Text>
       <View style={styles.spacer} /> {/* Pushes the last icon to the end */}
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
       </View>
</TouchableOpacity>

// signOut end
</View>

</ScrollView>
);
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#E0E3E7',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically
    padding: 15,
    marginHorizontal:20,
    marginVertical:10
  },
  iconBackground: {
      padding: 10,
      borderRadius: 50,
      backgroundColor: '#F1F4F8',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 25,
    },
    spacer: {
        flex: 1, // Takes up all available space, pushing the next element to the end
      },


      image: {
        width: 50, // Changed width here
        height: 50, // Changed height here
        borderRadius: 25,
      },
      textContainer: {
          marginLeft: 20,
        },
        name: {
          fontWeight: 'bold',
          fontSize: 20,
        },
        email: {
          fontSize: 15,
        },
    });

export default MyProfile;