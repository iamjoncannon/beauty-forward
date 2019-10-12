import React from 'react';
import { View, FlatList, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Image, Text } from 'react-native'

export default function CheckOut(props){
    return(
        
        <View style={styles.container}>

            <ScrollView style={{width: "80%"}}>

                <Text style={styles.title}>Gifts</Text>

                <View style={styles.picture_row}>

                    <Image source={require("../assets/images/Gifts/Norah_Smith.png")} style={styles.picture} />
                    <Image source={require("../assets/images/Gifts/Plastics_for_Change.png")} style={styles.picture} />
                    <Image source={require("../assets/images/Gifts/Mac_Lipstick.png")} style={styles.picture} />

                </View>

                <Text style={styles.primary_text}>Shirley Lee received from Norah Smith and contributed to Plastics for Change</Text>
                <Text style={styles.secondary_text}>MAC Lipstick</Text>
              
                <View style={styles.bar}></View>

                <View style={styles.picture_row}>

                    <Image source={require("../assets/images/Gifts/emily_park.png")} style={styles.picture} />
                    <Image source={require("../assets/images/Gifts/the_nature_conservancy.png")} style={styles.picture} />
                    <Image source={require("../assets/images/Gifts/clinique_foundation.png")} style={styles.picture} />

                </View>

                <Text style={styles.primary_text}>Norah Smith received from Emily Park and contributed to The Nature Conservancy</Text>
                <Text style={styles.secondary_text}>Clinique Foundation Liquid</Text>

                <View style={styles.bar}></View>

                <View style={styles.picture_row}>

                    <Image source={require("../assets/images/Gifts/shirley_lee.png")} style={styles.picture} />
                    <Image source={require("../assets/images/Gifts/Plastics_for_Change.png")} style={styles.picture} />
                    <Image source={require("../assets/images/Gifts/becca_highlighter.png")} style={styles.picture} />

                </View>

                <Text style={styles.primary_text}>Caitlyn Fernandez received from Shirley Lee and contributed to Plastics for Change</Text>
                <Text style={styles.secondary_text}>Becca Highlighter</Text>

                <View style={styles.bar}></View>

            </ScrollView>
     
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        alignItems: 'center',
        
    },
    title: {
        fontWeight: "bold",
        marginTop: 10,
        fontSize: 30,
        marginBottom: 20,
        alignSelf: "center"
    },
    picture_row : {
        flexDirection: "row",
        alignSelf: "center" 
    },
    picture: {
        height: 60,
        width: 60,
        margin: 10
    },
    primary_text : {
        fontSize: 15
    },
    secondary_text: {
        fontSize: 10,
        fontWeight: "100",
        marginBottom: 2
    },
    bar : {
        height: 1,
        width: "100%",
        backgroundColor: "#CDCDCD"
    }
})