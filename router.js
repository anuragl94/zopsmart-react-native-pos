import React, { Component } from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { StackNavigator } from 'react-navigation'
import CONSTANTS from './constants'

import Welcome from './screens/Welcome'
import Catalogue from './screens/Catalogue'

const Navigator = StackNavigator({
  'home': {
    screen: Welcome
  },
  'catalogue': {
    screen: Catalogue
  }
}, {
  initialRouteName: 'home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: CONSTANTS.COLOURS.PRIMARY
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: CONSTANTS.FONT_SIZES.H2,
      fontWeight: CONSTANTS.FONT_WEIGHTS.REGULAR
    }
  }
})

export default class Router extends Component {
  render () {
    return (
      <View style={styles.app}>
        <View style={styles.content}>
          <Navigator />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  app: Platform.select({
    ios: {},
    android: {
      flex: 1
    }
  }),
  content: Platform.select({
    ios: {},
    android: {
      flex: 1
    }
  })
})
