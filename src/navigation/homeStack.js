import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/homeScreen';
import CountryDetailsScreen from '../screens/countryDetailsScreen';

const Stack = createStackNavigator();

const HomeStack = () => {

    return(

        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>
            <Stack.Screen name='CountryDetailsScreen' component={CountryDetailsScreen}/>
        </Stack.Navigator>
    )
}

export default HomeStack;