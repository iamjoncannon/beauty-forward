import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

export default function SplashScreen(props){

    return(
        <View style={styles.container}>

            <View style={styles.searchBox}>
                <Image source={require("../assets/images/Search/Search_Icon.png")} style={styles.Searchicon} />
            </View>

                <ScrollView contentContainerStyle={{minHeight: 500, alignItems: "center", width: "90%", marginTop: 10}}>

                    <View>

                    <Text>Recent searches</Text>
                    <Text style={styles.bigText}>#becca #highlighter</Text>
                    <Text style={styles.bigText}>#colorful #eyeshadow</Text>
                    <Text style={styles.bigText}>#mac #liquidfoundation</Text>
                    </View>
                

                
                    <Text style={{alignSelf: "flex-start", marginTop: 10}}>Suggestions For you </Text>

                    <View style={{flexDirection: "row"}}>
                        <Image 
                            source={require("../assets/images/Search/eyeshadow_primer_group.png")} 
                            style={styles.image}
                        />
                        <Image 
                            source={require("../assets/images/Search/Group_4.png")} 
                            style={styles.image}
                        />
                    </View>
                    <View style={{flexDirection: "row"}}>

                        <Image 
                            source={require("../assets/images/Search/Group_7.png")} 
                            style={styles.image}
                        />
                        <Image 
                            source={require("../assets/images/Search/Group_8.png")} 
                            style={styles.image}
                        />
                    </View> 

                    <View style={{flexDirection: "row"}}>

                        <Image 
                            source={require("../assets/images/Search/Group_10.png")} 
                            style={styles.image}
                        />
                        <Image 
                            source={require("../assets/images/Search/eyeshadow_primer_group.png")} 
                            style={styles.image}
                        />
                    </View> 

                </ScrollView>        
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        alignItems: "center"
    },
    searchBox : {
        marginTop: 10,
        width: "90%",
        backgroundColor: "#CDCDCD",
        height: 30,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    Searchicon : {
        marginLeft: 10        
    },
    bigText : {
        fontSize: 25,
        fontWeight: "bold"
    },
    image : {
        height: 75,
        width: 125,
        resizeMode: "cover",
        borderRadius: 10,
        margin: 10
    }
})