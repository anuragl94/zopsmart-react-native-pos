import React, { Component } from 'react'
import { StatusBar, View, StyleSheet, Platform } from 'react-native'
import Welcome from './screens/Welcome'
import Catalogue from './screens/Catalogue'
import CONSTANTS from './constants'

export default class App extends Component {
  render () {
    return (
      <View style={styles.app}>
        <StatusBar
          backgroundColor='blue'
          barStyle='light-content'
          translucent
        />
        <View style={styles.statusBar} />
        <View style={styles.content}>
          <Catalogue />
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
  statusBar: Platform.select({
    ios: {},
    android: {
      paddingTop: StatusBar.currentHeight,
      backgroundColor: CONSTANTS.COLOURS.PRIMARY
    }
  }),
  content: Platform.select({
    ios: {},
    android: {
      flex: 1
    }
  })
})
