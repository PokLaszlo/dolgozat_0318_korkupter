import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Input({labeltext="",readonly=false,onChangeText,value=0}) {
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
    container:{},
    containerText:{},
    textInput:{}
})