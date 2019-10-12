import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

export default function Catalog(props){

    return(
         <ScrollView>

            <Text style={{marginBottom: 10, fontSize: 20, alignSelf: "flex-start"}}>You Saved...</Text>

            <View style={{marginBottom: 10}}>

                <View style={{flexDirection: "row", alignItems: "center"}}>
                <Image 
                    source={require("../../assets/images/Profile/recycling_plastic_icon.png")} 
                    style={styles.image}
                />
                

                <Text style={{fontSize: 20, marginLeft: 20, color: "green"}}>40 lbs </Text>
                <Text style={{fontSize: 20}}>of plastic</Text>
                </View>

            </View>

            <View style={{marginBottom: 10}}>

                <View style={{flexDirection: "row", alignItems: "center"}}>
                <Image 
                    source={require("../../assets/images/Profile/tree_icon.png")} 
                    style={styles.image}
                />
                

                <Text style={{fontSize: 20, marginLeft: 20, color: "green"}}>35 trees </Text>
             
                </View>

            </View>

            <View style={{marginBottom: 10}}>

                <View style={{flexDirection: "row", alignItems: "center"}}>
                <Image 
                    source={require("../../assets/images/Profile/water_drop_icon.png")} 
                    style={styles.image}
                />
                

                <Text style={{fontSize: 20, marginLeft: 20, color: "green"}}>20 gallons </Text>
                <Text style={{fontSize: 20}}>of water</Text>
                </View>

            </View>

            <View style={{marginBottom: 10}}>

                <View style={{flexDirection: "row", alignItems: "center"}}>
                <Image 
                    source={require("../../assets/images/Profile/carbon_footprint_icon.png")} 
                    style={styles.image}
                />
                
                <View style={{flexDirection: "row", maxWidth: 150}}>

                <Text style={{fontSize: 20, marginLeft: 20, color: "green"}}>15 lbs </Text>
                <Text style={{fontSize: 20}}>of carbon emissions</Text>
                </View>
                </View>

            </View>

         </ScrollView>
        
    )

}


const styles = StyleSheet.create({
    image: {
        width: 100,
        resizeMode: "contain"
    }
})