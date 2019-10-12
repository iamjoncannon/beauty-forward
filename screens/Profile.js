import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Catalog from "./Profile/Catalog"
import Social_Impact from "./Profile/Social_Impact"

export default class SplashScreen extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            page: "Catalog"
        }
    }

    render(){

        const { page } = this.state

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
                    
                    <TouchableOpacity onPress={()=>{this.setState({page: "Catalog"})}}>

                        <Text 
                            style={{textDecorationLine: page === "Catalog" ? "underline" : "none", fontSize: 15, marginRight: 10}} 
                            >Catalog
                        </Text>
                   
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{this.setState({page: "Social Impact"})}}>
                 
                        <Text style={{textDecorationLine: page === "Social Impact" ? "underline" : "none", fontSize: 15}} > Social Impact </Text>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{this.setState({page: "Skin Profile"})}}>
                  
                        <Text style={{textDecorationLine: page === "Skin Profile" ? "underline" : "none", fontSize: 15, marginLeft: 10}} >Skin Profile</Text>
                    </TouchableOpacity>
                    
                </View>

                <View style={{flex: 7, marginTop: 10, alignItems: "center"}}>

                    {page === "Catalog" && <Catalog />}
                    {page === "Social Impact" && <Social_Impact />}
                    {page === "Skin Profile" && <View />}
                   
            
                </View>
            </View>
        )
    }

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