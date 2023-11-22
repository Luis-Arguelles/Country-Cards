import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking,
} from "react-native";
import CountryDetailsHeader from "../components/countryDetailsHeader";

const CountryDetailsScreen = ({ route, navigation }) => {
  const { country } = route.params;
  let languagesString = "";

  for (let language in country.languages) {
    languagesString = languagesString + " " + country.languages[language] + ",";
  }

  languagesString = languagesString.slice(0, -1);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CountryDetailsHeader navigation={navigation} country={country} />
      </View>

      <View style={styles.detailsCard}>
        <Image source={{ uri: country.flags.png }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.textInfo}>
            Official name:{" "}
            <Text style={{ fontWeight: "normal" }}>
              {country.name.official}
            </Text>
          </Text>
          <Text style={styles.textInfo}>
            Capital:{" "}
            <Text style={{ fontWeight: "normal" }}>
              {country.capital
                ? country.capital
                : "This territory has no capital"}
            </Text>
          </Text>
          <Text style={styles.textInfo}>
            Continent:{" "}
            <Text style={{ fontWeight: "normal" }}>{country.region}</Text>
          </Text>
          <Text style={styles.textInfo}>
            Population:{" "}
            <Text style={{ fontWeight: "normal" }}>{country.population}</Text>
          </Text>
          <Text style={styles.textInfo}>
            Languages:{" "}
            <Text style={{ fontWeight: "normal" }}>{languagesString}</Text>
          </Text>
          <Text style={styles.textInfo}>
            Area:{" "}
            <Text style={{ fontWeight: "normal" }}>{country.area} km2</Text>
          </Text>
          <Text style={styles.textInfo}>
            Independent:{" "}
            <Text style={{ fontWeight: "normal" }}>
              {country.independent ? "Yes" : "No"}
            </Text>
          </Text>
        </View>
        <TouchableOpacity
          style={styles.goToMapButton}
          onPress={() => Linking.openURL(country.maps.googleMaps)}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 17 }}>
            Open map
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  header: {
    marginTop: Dimensions.get("window").height * 0.015,
    top: Dimensions.get("window").height * 0.005,
    marginBottom: Dimensions.get("window").height * 0.025,
    borderRadius: 15,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },

  detailsCard: {
    height: Dimensions.get("window").height * 0.8,
    width: Dimensions.get("window").width * 0.85,
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },

  infoContainer: {
    backgroundColor: "white",
    height: Dimensions.get("window").height * 0.4,
    width: Dimensions.get("window").width * 0.7,
    marginVertical: Dimensions.get("window").height * 0.02,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    justifyContent: "center",
  },

  image: {
    height: 150,
    width: 250,
    marginTop: Dimensions.get("window").height * 0.025,
    borderRadius: 8,
  },

  textInfo: {
    marginVertical: Dimensions.get("window").height * 0.01,
    marginHorizontal: Dimensions.get("window").width * 0.02,
    fontWeight: "bold",
  },

  goToMapButton: {
    height: Dimensions.get("window").height * 0.075,
    width: Dimensions.get("window").width * 0.3,
    marginVertical: Dimensions.get("window").height * 0.01,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    fontWeight: "bold",
    borderRadius: 10,
  },
});

export default CountryDetailsScreen;
