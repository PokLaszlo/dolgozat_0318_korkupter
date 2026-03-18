import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'
import MyButton from './MyButton'

export default function Body() {
    const [radius, setRadius] = useState(0)
    const [height, setHeight] = useState(0)
    const [res, setRes] = useState(0)
    return (
        <View style={styles.container}>
            <Text>Köralapú henger térfogatának kiszámítása</Text>
            <Input labeltext='Henger alapjának sugara (méterben)' onChangeText={setRadius}/>
            <Input labeltext='Henger magassága (méterben)' onChangeText={setHeight}/>
            <MyButton text='Számítás' onpress={()=>{
                setRes(radius*radius*Math.PI*height)
            }}/>
            <Input readonly={true} value={res} labeltext='Eredmény'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})