import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button, { STYLES as BUTTON_STYLES } from '../../components/Interactive/Button'
import CONSTANTS, { STRINGS } from '../../constants'
import { updateCatalogue } from '../../lib/model/product'

class DownloadProductsButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dataState: this.dataStates.initial
    }
    this.getCatalogue = this.getCatalogue.bind(this)
  }
  getCatalogue () {
    this.setState({
      dataState: this.dataStates.loading
    }, () => {
      updateCatalogue().then(() => {
        this.setState({
          dataState: this.dataStates.loaded
        }, () => {
          this.props.onSuccess && this.props.onSuccess([])
        })
      })
    })
  }
  render () {
    return (
      <Button
        style={[ BUTTON_STYLES.PRIMARY ]}
        onPress={this.getCatalogue}
        disabled={this.state.dataState === this.dataStates.loading}
      >
        {this.state.dataState === this.dataStates.loading ? STRINGS['WELCOME.CONTINUE_BUTTON.LOADING'] : STRINGS['WELCOME.CONTINUE_BUTTON']}
      </Button>
    )
  }
}

DownloadProductsButton.prototype.dataStates = {
  initial: 0,
  loading: 1,
  loaded: 2
}

export default class Welcome extends Component {
  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{STRINGS['WELCOME.HEADING']}</Text>
          <Text>{STRINGS['WELCOME.SUBHEADING']}</Text>
        </View>
        <DownloadProductsButton onSuccess={() => {
          navigate('catalogue')
        }} />
      </View>
    )
  }
}

Welcome.navigationOptions = {
  header: null
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
