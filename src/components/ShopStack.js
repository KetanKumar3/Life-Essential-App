import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Shop from './Shop';  // your Shop main screen
import ProductDescription from './ProductDescription'; // example inner screen (optional)

const Stack = createNativeStackNavigator();

const ShopStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ShopHome"
        component={Shop}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDescription"
        component={ProductDescription}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ShopStack;
