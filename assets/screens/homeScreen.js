import {View, Text, StyleSheet, SafeAreaView, TextInput, Dimensions} from 'react-native';
import AllCountriesList from '../components/allCountriesList';
import Feather from 'react-native-vector-icons/Feather'
import axios from 'axios';

const HomeScreen = () => {

/*     axios.get('https://restcountries.com/v3.1/all')
        .then(response => {
            console.log(response.data[0].flags.png)
            console.log(response.data[0].name.official);
            console.log(response.data[0].languages);
        })
        .catch(error => console.log(error)) */

    return(
        <SafeAreaView style={styles.container}>

            <View style={styles.search}>
                <Feather name='search' color={'white'} size={15} style={styles.inputIcon}/>
                <TextInput style={styles.input} placeholder="Insert country" placeholderTextColor="white"/>
            </View>

            <View style={styles.countriesList}>
                <AllCountriesList/>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'black',
    },


    search: {
        flex: 0.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
    },

    input: {

        height: Dimensions.get('window').height * 0.04,
        width: Dimensions.get('window').width * 0.5,
        marginHorizontal: Dimensions.get('window').width * 0.005,
        borderWidth: 0.5,
        borderColor: '#03fcba',
        borderRadius: 8,
        textAlign: 'center',
        color: 'white'    
    },

    inputIcon: {
        left: Dimensions.get('window').width * 0.07
    },

    countriesList: {
        flex: 0.8,
        alignItems: 'center'
    
    }
})
export default HomeScreen;