/*
* File: MyButton.js
* Author: Pók László
* Copyright: 2026, Pók László
* Group: Szoft II-N
* Date: 2026-03-20
* Github: https://github.com/pokLaszlo/
* Licenc: MIT
*/

import {StyleSheet, Text } from 'react-native'
import { TouchableHighlight } from 'react-native'

export default function MyButton({text="mytext",onpress=console.log(műkszik)}) {
  return (
    <TouchableHighlight 
        style={styles.container}
        onPress={onpress}
    >
        <Text style={styles.buttonText}>{text}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
    container:{
      border:"1px solid black",
      width:100,
      borderRadius:5,
      backgroundColor:"rgba(10,10,240,0.5)",
      alignSelf:"center",
      padding:5
    },
    buttonText:{
      color:"white",
      textAlign:"center",
      fontSize:22,
    }
})