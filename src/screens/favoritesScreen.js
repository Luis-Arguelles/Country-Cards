import { setStatusBarBackgroundColor } from 'expo-status-bar';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import { useSelector } from 'react-redux';
import RenderCountriesList from '../components/renderCountriesList';

const FavoritesScreen = ({navigation}) => {

    const favoritesArray = useSelector((state) => state.favoritesArray.value);

        if(favoritesArray.length > 0){
            return(
                <View style={styles.containerFlatList}>
                    <FlatList data={favoritesArray} renderItem={({item}) => <RenderCountriesList country={item} navigation={navigation}/>} style={styles.flatList} numColumns={2}/>
                </View>
            )
        } else{
            return(
                <View style={styles.emptyContainer}>
                    <Text>Mark countries as favorites ★ to see them here!</Text>
                </View>
            )
        }

}


const styles = StyleSheet.create({

    containerFlatList: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },

    emptyContainer: {
        flex: 0.9,
        alignItems: 'center',
        justifyContent: 'center'
    },

    flatList: {
        marginTop: Dimensions.get('window').height * 0.025,
    }
})
export default FavoritesScreen;