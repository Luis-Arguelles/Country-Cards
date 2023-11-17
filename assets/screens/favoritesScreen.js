import { setStatusBarBackgroundColor } from 'expo-status-bar';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

const FavoritesScreen = () => {

    return(

        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Favorites!</Text>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        color: 'white'
    }
})
export default FavoritesScreen;