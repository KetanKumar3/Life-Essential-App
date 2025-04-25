import React from 'react';
import {View,Image} from 'react-native';

const SplashScreen = () => {
return(
<View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#89A97A'}}>
<Image source={require('../assets/lifeessential.png')} />
</View>
);
}

export default SplashScreen;