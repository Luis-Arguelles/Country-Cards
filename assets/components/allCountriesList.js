import {View, Text, FlatList, StyleSheet} from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';
import RenderCountriesList from './renderCountriesList';

const AllCountriesList = () => {

    const [countries, setCountries] = useState([]);

    const getAllCountries = async () => {

        await axios.get('https://restcountries.com/v3.1/all')
        .then(response => {
            setCountries(response.data);
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        getAllCountries();
    }, [])

    return(
        <View style={styles.container}>
            <FlatList data={countries} renderItem={({item}) => <RenderCountriesList country={item}/>} keyExtractor={item => item.name.official}/>
        </View>
    )
}


const styles = StyleSheet.create({

});

export default AllCountriesList;

