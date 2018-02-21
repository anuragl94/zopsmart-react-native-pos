import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button, { STYLES as BUTTON_STYLES } from './components/Interactive/Button'
import CONSTANTS, { STRINGS } from './constants'

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{STRINGS['HOME.HEADING']}</Text>
          <Text>{STRINGS['HOME.SUBHEADING']}</Text>
        </View>
        <Button style={[ BUTTON_STYLES.PRIMARY ]} onPress={() => {}}>
          {STRINGS['HOME.CONTINUE_BUTTON']}
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: CONSTANTS.FONT_SIZES.H2,
    fontWeight: CONSTANTS.FONT_WEIGHTS.BOLD
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 40
  }
})
