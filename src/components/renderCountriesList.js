import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const RenderCountriesList = ({ country, navigation }) => {
  const handlePress = () => {
    navigation.navigate("CountryDetailsScreen", { country: country });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Image
          source={{ uri: country.flags.png }}
          style={styles.image}
          testID="countryFlag"
        />
        <Text style={styles.text} testID="countryName">
          {country.name.common}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginHorizontal: Dimensions.get("window").width * 0.015,
    marginVertical: Dimensions.get("window").height * 0.008,
    height: Dimensions.get("window").height * 0.2,
    width: Dimensions.get("window").width * 0.42,
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 7,
  },

  text: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: Dimensions.get("window").height * 0.01,
    marginHorizontal: Dimensions.get("window").width * 0.02,
  },

  image: {
    marginHorizontal: 5,
    height: 80,
    width: 135,
    borderRadius: 10,
  },
});

export default RenderCountriesList;
