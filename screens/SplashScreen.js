import { View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react';

export default function SplashScreen(props){

    return(
        <View style={styles.container}>

          <TouchableOpacity onPress={props.exit} style={styles.helpLink}>
          
            <Image source={require('../assets/images/insta.png')} style={styles.image}/>
          
          </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 250,
        height: 150,
        resizeMode: 'contain',

    }
})