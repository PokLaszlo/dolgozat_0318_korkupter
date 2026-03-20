/*
* File: Header.js
* Author: Pók László
* Copyright: 2026, Pók László
* Group: Szoft II-N
* Date: 2026-03-20
* Github: https://github.com/pokLaszlo/
* Licenc: MIT
*/

import { StyleSheet, Text, View } from 'react-native'


export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Köralapú henger térfogatának kiszámítása</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"rgba(53, 165, 81, 0.32)",
    padding:10,
    height:"10%"
  },
  text: {
    fontFamily:"arial",
    fontSize:20,
    fontWeight:"bold",
    textAlign:"center",
    color:"white",
    textShadow: 'rgba(0, 0, 0, 0.75) 15px 15px 10px',
  }
})