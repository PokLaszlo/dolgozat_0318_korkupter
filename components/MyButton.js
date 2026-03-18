import {StyleSheet, Text } from 'react-native'
import React from 'react'
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

    },
    buttonText:{

    }
})