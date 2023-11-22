import "react-native-gesture-handler";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./src/navigation/bottomTab";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import { Provider } from "react-redux";
import store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle={setStatusBarBackgroundColor("black")} />
          <BottomTab />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
