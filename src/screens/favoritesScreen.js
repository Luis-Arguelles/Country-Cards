import { setStatusBarBackgroundColor } from 'expo-status-bar';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import { useSelector } from 'react-redux';
import RenderCountriesList from '../components/renderCountriesList';

const FavoritesScreen = ({navigation}) => {

    const favoritesArray = useSelector((state) => state.favoritesArray.value);

    return(
        <View style={styles.container}>
            <FlatList data={favoritesArray} renderItem={({item}) => <RenderCountriesList country={item} navigation={navigation}/>} style={styles.flatList} numColumns={2}/>
        </View>

    )
}


const styles = StyleSheet.create({

    container: {
        flex: 0.9,
        backgroundColor: 'white',
        alignItems: 'center',
    },

    flatList: {
        marginTop: Dimensions.get('window').height * 0.025
    }
})
export default FavoritesScreen;