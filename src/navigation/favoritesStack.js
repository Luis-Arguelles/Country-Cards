import { createStackNavigator } from "@react-navigation/stack";
import FavoritesScreen from "../screens/favoritesScreen";
import CountryDetailsScreen from "../screens/countryDetailsScreen";

const Stack = createStackNavigator();

const FavoritesStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
      <Stack.Screen
        name="CountryDetailsScreen"
        component={CountryDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default FavoritesStack;
