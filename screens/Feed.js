import { View, FlatList, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Image, Text } from 'react-native'
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import FeedItem from './FeedItem'
import CheckOut from './Checkout'

export default class Feed extends React.Component{

    constructor(props){
        super(props)

        this.state = {

            view: null  
        }
    }

    render(){

        if(this.state.view === "feedItem"){

            return(

                <FeedItem exit={(scene)=>this.setState({view: scene})} />

            )
        }
        else if(this.state.view === "checkout"){

                return (
                    <CheckOut exit={(scene)=>this.setState({view: scene})}/>
                )
        }
        else{

            return(
                    <ScrollView contentContainerStyle={styles.scrollview}>

                        <View style={styles.feedLine}>

                            <TouchableOpacity 
                                onPress={()=>this.setState( { view: "feedItem"} )} 
                               
                            >

                                <Image 
                                    source={require('../assets/images/Feed/becca_highlighter_image.png')} 
                                    style={{...styles.image, height: 150}}
                                />


                            </TouchableOpacity>


                            <Image 
                                source={require('../assets/images/Group_2.png')} 
                                style={{...styles.image, height: 300}}
                            />
                            
                            <Image 
                                source={require('../assets/images/Profile/Lipstick_2.png')} 
                                style={{...styles.image, height: 150}}
                            />

                        </View>

                        <View>
                            <Image 
                                source={require('../assets/images/Feed/Group.png')} 
                                style={{...styles.image, height: 300}}
                            />
                            <Image 
                                source={require('../assets/images/Profile/Eyeshadow_Palette_3.png')} 
                                style={{...styles.image, height: 150}}
                            />
                            <Image 
                                source={require('../assets/images/Contour.png')} 
                                style={{...styles.image, height: 150}}
                            />

                        </View>

                    </ScrollView>
            )
        }

    }

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        flex: 1,
        flexDirection: 'row'
    },  
    image: {
        resizeMode: 'contain',
        width: 150,
        marginBottom: 20
    },
    scrollview: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 15,
        minHeight: 700,
        justifyContent: 'center',
    },
    feedLine: {
        minHeight: 700
    }
})

Feed.navigationOptions = {
    title: 'Community',
};

