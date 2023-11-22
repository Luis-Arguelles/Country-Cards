import { useState, useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { addCountry, removeCountry } from '../redux/favorites';

const CountryDetailsHeader = ({ country, navigation }) => {

    const [starPressed, setStarPressed] = useState(false);
    const favoritesArray = useSelector((state) => state.favoritesArray.value);
    const dispatch = useDispatch();

    useEffect(() => {
        setStarPressed(favoritesArray.includes(country));
    }, [favoritesArray])

    const handleStarPress = () => {

        if(starPressed){
            dispatch(removeCountry(country));
        }
        else{
            dispatch(addCountry(country));
        }

    }
    
    const handleArrowPress = () => {
        navigation.goBack();
    }

    return(
        <View style={styles.container}>
            
            <TouchableOpacity style={styles.touchable} onPress={handleArrowPress} testID='arrowLogo'>
                <AntDesign name="arrowleft" size={25}/>
            </TouchableOpacity>

            <Text style={styles.countryName} testID='countryName'>{country.name.common.length > 30 ? country.name.common.slice(0, 23) + "..." : country.name.common}</Text>

            <TouchableOpacity style={styles.touchable} onPress={handleStarPress} testID='starLogo'>
                <AntDesign name={starPressed ? 'star' : 'staro'} size={25}/>
            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: Dimensions.get('window').height * 0.06,
        width: Dimensions.get('window').width * 0.9,
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    countryName: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    touchable:{
        height: Dimensions.get('window').height * 0.07,
        width: Dimensions.get('window').width * 0.2,
        alignItems: 'center',
        justifyContent: 'center'

    }
});

export default CountryDetailsHeader;