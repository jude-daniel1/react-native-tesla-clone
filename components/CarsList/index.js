import {View, FlatList, Dimensions } from 'react-native'
import React from 'react'
import cars from './cars.js'
import CarItem from '../CarItem'
import styles from './styles'

const CarsList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList 
      data={cars} 
      renderItem={({item})=><CarItem car={item} />} 
      snapToAlignment={'start'}
      decelerationRate={'fast'}
      showsVerticalScrollIndicator={false}
      snapToInterval={Dimensions.get('window').height}
      />
    </View>
  )
}

export default CarsList
