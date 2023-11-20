import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TextInput, Dimensions, FlatList, TouchableOpacity} from 'react-native';
import RenderCountriesList from '../components/renderCountriesList';
import { SelectList } from 'react-native-dropdown-select-list';
import Feather from 'react-native-vector-icons/Feather'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import axios from 'axios';

const HomeScreen = ({navigation}) => {

/*     axios.get('https://restcountries.com/v3.1/all')
        .then(response => {
            console.log(response.data[0].flags.png)
            console.log(response.data[0].name.official);
            console.log(response.data[0].languages);
            console.log(response.data[0].region)

        })
        .catch(error => console.log(error)) */

    const [countries, setCountries] = useState([]);
    const [regions, setRegions] = useState([]);
    const [selected, setSelected] = useState("All");
    const [input, setInput] = useState("");
    const [filteredCountries, setFilteredCountries] = useState([]);

    let regionsArray = [];
    counter = 1;
 

    const getAllCountries = async () => {

        try{
            response = await axios.get('https://restcountries.com/v3.1/all');
           
            let data = response.data;

            const sortedData = data.sort((country1, country2) => {
                const name1 = country1.name.common.toUpperCase();
                const name2 = country2.name.common.toUpperCase();

                if(name1 < name2){
                    return -1;
                }

                else if(name1 > name2){
                    return 1;
                }

                return 0;
            })

            setCountries(sortedData);
                
            response.data.forEach((country) => {
                if(!regionsArray.includes(country.region)){
                    regionsArray.push(country.region);
                }
            })
        
            regionsArray = regionsArray.map((region) => {
                counter++;
                return {key: counter, value: region};
            })

            regionsArray.unshift({key: 1, value: "All"});
            
            setRegions(regionsArray);
            console.log("Regions array:",regionsArray);

        } catch (error) {
            console.log(error);
        }

    }
    
    const handleSearch = (input) => {

        const index = regions.indexOf(selected);

        if(selected == "All"){
            setFilteredCountries(countries.filter((country) => {
                if(country.name.common.toLowerCase().startsWith(input.toLowerCase()) ||  country.name.common.toLowerCase().includes(input.toLowerCase())){
                    return country;
                }
            }))
        } else {
            setFilteredCountries(countries.filter((country) => {

                if(input == "" && country.region == selected){
                    return country;
                }
                else if((country.name.common.toLowerCase().startsWith(input.toLowerCase()) || country.name.common.toLowerCase().includes(input.toLowerCase())) && (country.region == selected)){
                    return country;
                }
            }))

        }
            
    }

    const handleSelection = (region) => {
        console.log(region);

        if(region == "All"){
            setFilteredCountries(countries);
            
        }

        else{
            setFilteredCountries(countries.filter((country) => {
                if(country.region == region){
                    console.log(country.region);
                    return country;
                }
            }));
        }

    }

    useEffect(() => {
        getAllCountries();
    }, [])

    useEffect(() => {
        setInput("");
    }, [selected])


    return(
        <SafeAreaView style={styles.container}>

            <View style={styles.searchContainer}>
                <Feather name='search' color={'gray'} style={styles.inputIcon}/>
                <TextInput style={styles.input} placeholder="Search country" placeholderTextColor="gray" value={input} onChangeText={input => {
                    
                    setInput(input);
                    handleSearch(input)}}/>

                <SelectList data={regions} onSelect={() => handleSelection(selected)} setSelected={(val) => setSelected(val)} save="value" boxStyles={styles.SelectionListBox}  dropdownStyles={styles.SelectionListDropDown} maxHeight={Dimensions.get('window').height * 0.12} placeholder='Select by continent' search={false} dropdownTextStyles={styles.dropDownText} arrowicon={<SimpleLineIcons name='arrow-down' size={15} style={{top: Dimensions.get('window').height * 0.0035}}/>}/>

            </View>

            <View style={styles.countriesListContainer}>
                <FlatList data={input == "" && selected == "All" ? countries : filteredCountries} renderItem={({item}) => <RenderCountriesList country={item} navigation={navigation}/>} numColumns={2} keyExtractor={item => item.name.official}/>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',

    },


    searchContainer: {
        flex: 0.225,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },

    input: {

        height: Dimensions.get('window').height * 0.05,
        width: Dimensions.get('window').width * 0.4,
        marginLeft: Dimensions.get('window').width * 0.01,
        borderRadius: 8,
        borderColor: 'black',
        borderWidth: 0.5,
        textAlign: 'center',
        color: 'black',

           
    },

    inputIcon: {
        left: Dimensions.get('window').width * 0.055,
        marginTop: Dimensions.get('window').height * 0.077,
        position: 'absolute',
        height: 18,
        width: 18,

    },

    countriesListContainer: {
        flex: 0.675,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: Dimensions.get('window').height * 0.02,
        borderTopWidth: 0.5,
        borderStartColor: 'black',
    
    },

    SelectionListBox: {
        height: 50, 
        width: 180,
        backgroundColor: 'white',
        color: 'white',
    },

    SelectionListDropDown: {
        backgroundColor: 'white'
    },

    dropDownText: {
        color: 'black'
    },

    selectionList: {
        backgroundColor: 'orange',
        top: Dimensions.get('window').height * 0.05,
        height: Dimensions.get('window').height * 0.08,
        width: Dimensions.get('window').width * 0.55,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default HomeScreen;