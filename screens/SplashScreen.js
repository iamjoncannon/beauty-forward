import { View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react';

export default function SplashScreen(props){

    return(
        <View style={styles.container}>


            <Image source={require('../assets/images/Login/Beauty_Forward_Logo.png')} style={styles.logo}/>

          <TouchableOpacity onPress={props.exit}>
            <View>
                <Image source={require('../assets/images/Login/Google_Group.png')} style={styles.image}/>
                <Image source={require('../assets/images/Login/Instagram_Group.png')} style={styles.image}/>
            </View>
          
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
    logo: {
        height: 200,
        width: 275,
        resizeMode: 'contain',
    },
    image: {

        width: 275,
        height: 50,
        resizeMode: 'contain',
    }
})

