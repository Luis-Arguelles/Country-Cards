import {View, Text, StyleSheet, Image, Dimensions,TouchableOpacity} from 'react-native';

const RenderCountriesList = (props) => {

    const country = props.country;

    return(
    <TouchableOpacity>
        <View style={styles.container}>
            <Image source={{uri: country.flags.png}} style={styles.image}/>
            <Text style={styles.text}>{country.name.common}</Text>
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        marginHorizontal: Dimensions.get('window').width * 0.03,
        marginVertical: Dimensions.get('window').height * 0.01,
        height: Dimensions.get('window').height * 0.075,
        width: Dimensions.get('window').width * 0.9,
        borderRadius: 8,
        backgroundColor: 'white',
        alignItems: 'center'
    },

    text: {
        color: 'black',
        fontSize: 15
    },

    image: {
        marginHorizontal: 5,
        height: 25,
        width: 40
    }
});


export default RenderCountriesList;