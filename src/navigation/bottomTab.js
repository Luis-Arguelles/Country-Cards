import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Dimensions } from "react-native";
import HomeStack from "./homeStack";
import FavoritesStack from "./favoritesStack";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.bottomTab,
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={25}
              color={focused ? "#03fcba" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FavoritesStack"
        component={FavoritesStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="staro"
              size={25}
              color={focused ? "#03fcba" : "black"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTab: {
    position: "absolute",
    borderRadius: 5,
    bottom: Dimensions.get("window").height * 0.015,
    borderRadius: 15,
    width: Dimensions.get("window").width * 0.6,
    left: Dimensions.get("window").width * 0.2,
  },
});
export default BottomTab;
