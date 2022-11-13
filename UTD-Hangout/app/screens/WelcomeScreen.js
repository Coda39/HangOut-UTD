import { StyleSheet, Text, View , SafeAreaView, Button, Alert, TextInput, Pressable, TouchableHighlight} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

import colors from '../config/colors'
import font from '../config/font'


const Separator = () => (
  <View style={styles.separator} />
);



export default function WelcomeScreen() {
  return (
  <View style={styles.container}>
   <StatusBar style="auto" />
    <View style={styles.rect}>
        <Text style={styles.text}>
            HangOut UTD
        </Text>
    </View>
        <TouchableHighlight activeopacit={0.6} underlayColor = "#BD735F" style={styles.button} onPress={() => Alert.alert('Simple Button pressed')}>
            <Text style={styles.text}>Login</Text>
        </TouchableHighlight>
    <TouchableHighlight activeopacit={0.6} underlayColor = "#BD735F" style={styles.button} onPress={() => Alert.alert('Simple Button pressed')}>
            <Text style={styles.text}>Sign Up</Text>
        </TouchableHighlight>
  </View>  

  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    inputView: {
        backgroundColor: "FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,

        alignItems: "center",
    },
    text: {
        fontSize: 50,
        fontFamily: font.primary, 
        color: colors.mainText

    },
    rect:{
        height: 200,
        width: 125*2,
        borderRadius:30,
        backgroundColor: colors.primary,
        marginBottom: 150,
        alignItems: "center",
        justifyContent: "center"
    },
    button:{
        height:100,
        width:150*2,
        borderRadius:30,
        backgroundColor: colors.primary,
        marginBottom: 40,
        alignItems: "center",
        justifyContent: "center",


    } 
    
})