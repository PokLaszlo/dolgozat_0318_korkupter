/*
* File: Footer.js
* Author: Pók László
* Copyright: 2026, Pók László
* Group: Szoft II-N
* Date: 2026-03-20
* Github: https://github.com/pokLaszlo/
* Licenc: MIT
*/

import { StyleSheet, Text, View } from 'react-native'

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Készítette: Pók László, 2026.03.20,Szoft II/N</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"grey",
    height:"10%",
    alignContent:"center"
  },
  text:{
    color:"white",
    fontWeight:"bold",
    textAlign:"center",
  }
})