import React from 'react';
import { View, FlatList, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Image, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function CheckOut(props){

    return(

        <View style={styles.container}>

            <TouchableOpacity onPress={ ()=> props.exit( null ) } >
                        
                <View style={styles.header}>

                        <Ionicons
                            name={"ios-arrow-back"}
                            size={26}
                            style={{ marginBottom: -3 }} 
                        />

                        <Text style={{fontSize: 15, marginLeft: 5}}>Back</Text>
                    

                </View>
           
            </TouchableOpacity>

            <SafeAreaView>

            <ScrollView style={{maxHeight: 375}}>

                <View style={styles.body}>

                    <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-around"}}>
                    
                        <View style={{marginRight: 40}}>
                       
                            <Text>  
                                SHIP TO
                            </Text>

                        </View>

                        <View style={{marginLeft: 40}}>

                            <Text>Norah Smith</Text>
                            <Text>123 Delancy St</Text>
                            <Text>Brookly, NY 11111</Text>

                        </View>
                            
                    
                    
                    </View>

                    <View style={{alignItems: "center"}}>

                        <Text style={{fontWeight: "bold", margin: 10}}>CHOOSE YOUR CAUSE</Text>

                        <View style={styles.cause}>
                        
                            <Image source={require("../assets/images/Checkout/The_Nature_Conservancy_Logo.png")} style={styles.cause_image} />
                            <Text style={styles.cause_text}>
                                The Nature Conservancy is tackling climate change, protecting land & water, providing food & water sustainability, and building healthy cities.
                            </Text>
                        </View>
                        <View style={styles.cause}>
                        
                            <Image source={require("../assets/images/Checkout/Trees_for_the_Future_Logo.png")} style={styles.cause_image}/>
                            <Text style={styles.cause_text}>                           
                                Trees for the Future plants specific types of fast-growing trees, fruit trees, hardwoods and food crops in a systematic manner over a four year period so families can positively change their lives forever.
                            </Text>
                        </View>
                        <View style={styles.cause}>
                        
                            <Image source={require("../assets/images/Checkout/Coalition_for_Clean_Air_Logo.png")} style={styles.cause_image}/>
                            <Text style={styles.cause_text}>                          
                                Our mission is to protect public health, improve air quality, and prevent climate change.
                            </Text>
                        </View>
                        <View style={styles.cause}>
                        
                            <Image source={require("../assets/images/Checkout/Plastics_for_Change_Logo.png")} style={styles.cause_image}/>
                            <Text style={styles.cause_text}>                          
                                Plastics for Change are the first recycler to be certified by The World Fair Trade Organization. We practice all 10 principles of fair trade and build ethical livelihoods for waste-workers in developing regions.
                            </Text>
                        </View>

                    </View>
 
            
                </View>

            </ScrollView>

            </SafeAreaView>

            <TouchableOpacity onPress={ ()=> props.exit( null ) }>

                <Image 
                    source={require('../assets/images/Checkout/checkout.png')} 
                    style={{alignSelf: "center", marginTop: 10, borderRadius: 5, width: 250, height: 20}}
                />

            </TouchableOpacity>

        </View>

    )
}

const styles = StyleSheet.create({

    body: {
        // alignItems: "center" 
    },
    container: {
        justifyContent: "flex-start",
    },
    header: {

        marginLeft: 10,
        marginTop: 10,
        flexDirection: "row",
        // alignItems: "center"
    },
    cause: {
        width: "90%",
        flexDirection: "row",
        marginBottom: 10
    },
    cause_image: {
        height: 75,
        width: 150,
        resizeMode: "contain"
    },
    cause_text: {
        marginLeft: 5,
        width: 145, 
        fontSize: 15
    }
})