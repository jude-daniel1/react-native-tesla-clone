import {Text, View, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'

const StyledButton = (props) => {
  const type = props.type;
  const backgroundColor = type === 'primary' ? '#171A2BCC':'#FFFFFFA6';
  const textColor = type === 'primary' ? '#FFFFFF':'#171A20';
  return (
    <View style={styles.container}>
      <Pressable style={[styles.button,{backgroundColor:backgroundColor}  ]} onPress={props.onPress}>
        <Text style={[styles.text, {color:textColor}]}>{props.text}</Text>
      </Pressable>
    </View>
  )
}

export default StyledButton
