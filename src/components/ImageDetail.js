import React from "react";
import { View,Text,StyleSheet,Image } from "react-native";

const ImageDetail= (props) =>{
    return (
    <View>
    <Image source = {props.imageToShow}/>    
    <Text>{props.title}</Text>
    <Text>Image Score-{props.imageScore}</Text>
    </View>
    )
}       

const styles = StyleSheet.create({})

export default ImageDetail