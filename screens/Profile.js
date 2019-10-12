import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

export default function SplashScreen(props){

    return(
        <View style={styles.container}>

            <View style={styles.header}>

                <View style={{marginRight: 5}}>
                    <Text style={{fontSize: 30}}>Norah Smith</Text>
                </View>
                
                <View>
                    <Image source={require("../assets/images/profile_photo.png")} style={{height: 100, width: 100}}/>
                </View>

                
            
            </View>

            <View style={{flex: .5, flexDirection: 'row', justifyContent: "space-evenly", alignItems: "space-evenly"}}>
                
                    <Text style={{textDecorationLine: "underline", fontSize: 15, marginRight: 10}} >Catalog</Text>

                    <Text style={{fontSize: 15}} > Social Impact </Text>

                    <Text style={{fontSize: 15, marginLeft: 10}} >Skin Profile</Text>
                
            </View>

            <View style={{flex: 7, marginTop: 10, alignItems: "center"}}>

            
                <ScrollView>

                    <View style={styles.catalog_category}>
                    
                        <Text style={{fontSize: 20}}>Face</Text>
                    
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image source={require("../assets/images/Profile/Foundation.png")} style={styles.image}/>
                            <Image source={require("../assets/images/Profile/Contour.png")} style={styles.image}/>
                            <Image source={require("../assets/images/Profile/Highlighter.png")} style={styles.image}/>
                        </View>
                    
                    </View>

                    <View style={styles.catalog_category}>
                 
                    
                        <Text style={{fontSize: 20}}>Eyes</Text>
                    
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image source={require("../assets/images/Profile/Eyeshadow_Palette_3.png")} style={styles.image}/>
                            <Image source={require("../assets/images/Profile/Eyeshadow_Palette_2.png")} style={styles.image}/>
                            <Image source={require("../assets/images/Profile/Eyeshadow_Palette_1.png")} style={styles.image}/>
                        </View>
                    
                    </View>

                    <View style={styles.catalog_category}>
                                      
                        <Text style={{fontSize: 20}}>Lips</Text>
                    
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image source={require("../assets/images/Profile/Lipstick_1.png")} style={styles.image}/>
                            <Image source={require("../assets/images/Profile/Lipstick_2.png")} style={styles.image}/>
                            <Image source={require("../assets/images/Profile/Bitmapcopy.png")} style={styles.image}/>
                        </View>
                    
                    </View>
                    
                </ScrollView>
           
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    title: {
        
        fontSize: 30
    },
    header: {
        flex: 2.75,
        width: "80%",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between"
    },  
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    catalog_category : {
        flex:1, alignSelf: "flex-start"
    }
})

SplashScreen.navigationOptions = {
    title: 'Profile',
  };