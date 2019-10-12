import React from 'react';
import { View, FlatList, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Image, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function FeedItem(props){

    return(

        <View style={styles.feed_item_container}>

            <TouchableOpacity onPress={ ()=> props.exit( null ) } >
                
                <View style={styles.feed_item_header}>

                        <Ionicons
                            name={"ios-arrow-back"}
                            size={26}
                            style={{ marginBottom: -3 }} 
                        />

                        <Text style={{fontSize: 15, marginLeft: 5}}>Back</Text>
                    
                </View>
           
            </TouchableOpacity>
            
            <ScrollView style={{minHeight: 1000}}>

                <View style={styles.feed_item_body}>

                    <View style={{width: "80%", alignItems: "center"}}>

                        <Text style={{fontSize: 20, fontWeight: "bold"}}>BECCA</Text>
                        <Text style={{textAlign: 'center', marginBottom: 5}}>Shimmering Skin Perfector Pressed Highlighter</Text>
                    
                    </View>

                    <Image 
                        source={require('../assets/images/Feed/group_forking.png')} 
                        style={{width: 250, height: 300}}
                    />

                    <TouchableOpacity onPress={ ()=> props.exit( "checkout" ) }>

                        <Image 
                            source={require('../assets/images/Feed/Reserve_Item_Button.png')} 
                            style={{marginTop: 10, borderRadius: 5, width: 250, height: 20}}
                        />
                    
                    </TouchableOpacity>
            
                </View>

            </ScrollView>

        </View>

    )
}

const styles = StyleSheet.create({

    feed_item_body: {
        alignItems: "center" 
    },
    feed_item_container: {
        justifyContent: "flex-start"
    },
    feed_item_header: {
        marginLeft: 10,
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center"

    }
})