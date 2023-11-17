import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homeScreen';
import FavoritesScreen from '../screens/favoritesScreen';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const ButtomTab = () => {

    return(
        <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false, tabBarStyle: {backgroundColor: 'black'}}}>
            <Tab.Screen name='HomeScreen' component={HomeScreen} options={{tabBarIcon: ({focused}) => <Feather name='home' size={25} color={focused ? '#03fcba' : 'white'}/>}}/>
            <Tab.Screen name='FavoritesScreen' component={FavoritesScreen} options={{tabBarIcon: ({focused}) => <Feather name='star' size={25} color={focused ? '#03fcba' : 'white'}/>}}/>
        </Tab.Navigator>
    );
}

export default ButtomTab;