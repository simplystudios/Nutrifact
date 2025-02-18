import React,{useEffect, useState} from 'react';
import { Text, View, Button, StyleSheet,Image } from 'react-native';
import Bento from '../components/Bentogrid';
import Icon from 'react-native-ionicons';
import NutriScore from "../components/nutriscore";


export default function Homepage({navigation}) {
  const nutriScoreMapping = [
  { grade: 'a', range: [0, 2], color: '#007A00' },
  { grade: 'b', range: [3, 10], color: '#85BB2F' },
  { grade: 'c', range: [11, 18], color: '#FFD700' },
  { grade: 'd', range: [19, 40], color: '#FF6600' },
  { grade: 'e', range: [41, 100], color: '#FF0000' },
];
  return (
    
      <View style={styles.container}>
      <View style={{ alignItems:"center", height:"100%",marginTop:30}}>
        <View style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
          <Bento navigation={navigation} bgcolor="#000000" title={"Scan"} icon={"barcode-outline"} icolor={"#fff"} whereto={"Scanner"} fsize={45} smalltxt={"with barcode"} tfsize={25} smalltfsize={15}/>
        <Bento navigation={navigation} bgcolor="#2e5274" title={"Search"} icon={"search-outline"} icolor={"#fff"} whereto={"Search"} fsize={45} smalltxt={"with name"} tfsize={25} smalltfsize={15}/>
        </View>
        <View style={{alignItems:"center",marginTop:30,backgroundColor:"#180202",borderColor:"#2e5274",borderWidth:2,padding:20,margin:10,borderRadius:12}}>
            <View style={{alignItems:"center"}}>
              <Image/>
              <Text style={{fontSize:18, color:"#fff"}}>How Our Rating System Works</Text>
              <NutriScore grade={"a"} mapping={nutriScoreMapping}/>
              <Text style={styles.smallt}>The rating system in your application appears to be based on the Nutri-Score, which is a nutritional rating system used to evaluate the nutritional quality of food products. The Nutri-Score assigns a grade from 'A' to 'E' based on the nutritional content of the product, with 'A' being the healthiest and 'E' being the least healthy.</Text>
            </View>
        </View> 
        {/* <Bento navigation={navigation} bgcolor="#6b2828" title={"Support The Developer"} icon={"cafe-outline"} whereto={"Scanner"} fsize={45} smalltxt={"by buying them a coffee                           "} tfsize={25} smalltfsize={15}/> */}
      </View>
    </View>
  );  
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    bigt: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    smallt: {
        fontSize: 15,
        marginBottom: 10,
        color:"#fff",
        textAlign: "center",
    },
    });