import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const  CategoryMealsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>FiltersScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CategoryMealsScreen;