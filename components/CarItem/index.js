import {Text, View, ImageBackground } from 'react-native'
import React from 'react'
import styles from './styles'
import StyledButton from '../StyledButton/index'

const CarItem = (props) => {
  const {image, name,tagline, taglineCTA} = props.car;
  return (
    <View style={styles.carContainer}>
        <ImageBackground
          style={styles.image}
          source={image}
        />
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{tagline}{" "}<Text style={styles.subtitleCTA}>{taglineCTA}</Text></Text>
        </View>

        <View style={styles.buttonsContainer}>
          <StyledButton type="primary" text = "Custom Order" onPress={()=>console.warn("Custom Order was pressed")} />
          <StyledButton type="secondary" text = "Existing Inventory" onPress={()=>console.warn("Existing Inventory was pressed")} />
        </View>
      </View>
  )
}

export default CarItem