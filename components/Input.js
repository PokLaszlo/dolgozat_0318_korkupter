/*
* File: Input.js
* Author: Pók László
* Copyright: 2026, Pók László
* Group: Szoft II-N
* Date: 2026-03-20
* Github: https://github.com/pokLaszlo/
* Licenc: MIT
*/

import { StyleSheet, Text, TextInput, View } from 'react-native'

export default function Input({ labeltext, readonly = false, onChangeText, value }) {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>{labeltext}</Text>
      <TextInput
        readOnly={readonly}
        onChangeText={onChangeText}
        value={value}
        style={styles.textInput}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding:10
  },
  containerText: {
    fontSize: 18,
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: 'white',
  },
  textInput: {
    backgroundColor: 'white',
    borderColor: 'navy',
    borderWidth: 1,
    fontSize: 24,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 5,
    textAlign: 'center',
  }
})