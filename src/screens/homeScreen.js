import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Dimensions,
  FlatList,
} from "react-native";
import RenderCountriesList from "../components/renderCountriesList";
import SelectDropdown from "react-native-select-dropdown";
import Feather from "react-native-vector-icons/Feather";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import axios from "axios";

const HomeScreen = ({ navigation }) => {
  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState([]);
  const [selected, setSelected] = useState("All");
  const [input, setInput] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  let regionsArray = [];
  counter = 1;

  const getAllCountries = async () => {
    try {
      response = await axios.get("https://restcountries.com/v3.1/all");

      let data = response.data;

      const sortedData = data.sort((country1, country2) => {
        const name1 = country1.name.common.toUpperCase();
        const name2 = country2.name.common.toUpperCase();

        if (name1 < name2) {
          return -1;
        } else if (name1 > name2) {
          return 1;
        }

        return 0;
      });
      setCountries(sortedData);

      response.data.forEach((country) => {
        if (!regionsArray.includes(country.region)) {
          regionsArray.push(country.region);
        }
      });

      regionsArray.unshift("All");
      setRegions(regionsArray);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (input) => {
    if (selected == "All") {
      setFilteredCountries(
        countries.filter((country) => {
          if (
            country.name.common.toLowerCase().startsWith(input.toLowerCase()) ||
            country.name.common.toLowerCase().includes(input.toLowerCase())
          ) {
            return country;
          }
        })
      );
    } else {
      setFilteredCountries(
        countries.filter((country) => {
          if (input == "" && country.region == selected) {
            return country;
          } else if (
            (country.name.common
              .toLowerCase()
              .startsWith(input.toLowerCase()) ||
              country.name.common
                .toLowerCase()
                .includes(input.toLowerCase())) &&
            country.region == selected
          ) {
            return country;
          }
        })
      );
    }
  };

  const handleSelection = (region) => {
    if (region == "All") {
      setFilteredCountries(countries);
    } else {
      setFilteredCountries(
        countries.filter((country) => {
          if (country.region == region) {
            return country;
          }
        })
      );
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  useEffect(() => {
    setInput("");
  }, [selected]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Feather name="search" color={"gray"} style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Search country"
          placeholderTextColor="gray"
          value={input}
          onChangeText={(input) => {
            setInput(input);
            handleSearch(input);
          }}
        />
        <SelectDropdown
          data={regions}
          onSelect={(selectedItem) => {
            handleSelection(selectedItem);
            setSelected(selectedItem);
          }}
          buttonTextAfterSelection={(item) => item}
          rowTextForSelection={(item) => item}
          dropdownStyle={styles.dropDrown}
          buttonStyle={styles.buttonDropdown}
          buttonTextStyle={styles.buttonTextStyle}
          defaultButtonText="Continent"
          renderDropdownIcon={() => (
            <SimpleLineIcons
              name="arrow-down"
              style={{ left: Dimensions.get("window").height * 0.009 }}
            />
          )}
        />
      </View>

      <View style={styles.countriesListContainer}>
        <FlatList
          data={
            input == "" && selected == "All" ? countries : filteredCountries
          }
          renderItem={({ item }) => (
            <RenderCountriesList country={item} navigation={navigation} />
          )}
          numColumns={2}
          keyExtractor={(item) => item.name.official}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  searchContainer: {
    flex: 0.175,
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    height: Dimensions.get("window").height * 0.05,
    width: Dimensions.get("window").width * 0.5,
    right: Dimensions.get("window").width * 0.01,
    marginRight: Dimensions.get("window").width * 0.02,
    marginLeft: Dimensions.get("window").width * 0.02,
    borderRadius: 8,
    borderColor: "black",
    borderWidth: 0.5,
    textAlign: "center",
    color: "black",
  },

  inputIcon: {
    left: Dimensions.get("window").width * 0.1,
    top: Dimensions.get("window").height * 0.004,
    position: "relative",
    height: 18,
    width: 18,
  },

  countriesListContainer: {
    flex: 0.725,
    alignItems: "center",
  },

  dropDownText: {
    color: "black",
  },

  dropDrown: {
    height: Dimensions.get("window").height * 0.48,
  },

  buttonDropdown: {
    backgroundColor: "white",
    borderColor: "black",
    marginRight: Dimensions.get("window").width * 0.0005,
    width: Dimensions.get("window").width * 0.35,
    height: Dimensions.get("window").height * 0.05,
    borderWidth: 0.5,
    borderRadius: 10,
  },

  buttonTextStyle: {
    color: "black",
    fontSize: 14,
  },
});

export default HomeScreen;
