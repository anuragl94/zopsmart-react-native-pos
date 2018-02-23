import React, { Component } from 'react'
import { TouchableNativeFeedback, TouchableOpacity, Text, View, Platform } from 'react-native'
import PropTypes from 'prop-types'
import CONSTANTS from '../../../constants'

/* A custom button implementation that is similar to the Button provided by react-native, but more flexible */

export default class CustomButton extends Component {
  render () {
    const { onPress, children: text, style, disabled } = this.props
    const buttonStyles = (style || []).map(style => BUTTON_STYLES[style]).reduce((style, iter) => (
      Object.assign(style, iter)
    ), {})
    const textStyles = (style || []).map(style => TEXT_STYLES[style]).reduce((style, iter) => (
      Object.assign(style, iter)
    ), {})
    const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity
    const variableButtonStyles = [disabled ? BUTTON_STYLES.DISABLED : {}]
    const variableTextStyles = [disabled ? TEXT_STYLES.DISABLED : {}]
    return (
      <Touchable onPress={onPress} disabled={disabled}>
        <View style={[buttonStyles, BUTTON_STYLES._BASE, ...variableButtonStyles]}>
          <Text style={[textStyles, TEXT_STYLES._BASE, ...variableTextStyles]}>
            {typeof text === 'string' ? text.toUpperCase() : ''}
          </Text>
        </View>
      </Touchable>
    )
  }
}

const STYLES = {
  PRIMARY: 'PRIMARY',
  MUTED: 'MUTED',
  DANGER: 'DANGER'
}

/* TODO: Define button styles for iOS platform */

const BUTTON_STYLES = Platform.select({
  ios: {},
  android: {
    _BASE: {
      elevation: CONSTANTS.ELEVATIONS.LEVEL1,
      borderRadius: CONSTANTS.BORDERS.ROUNDED_RADIUS
    },
    'PRIMARY': {
      backgroundColor: CONSTANTS.COLOURS.PRIMARY
    },
    'MUTED': {
      backgroundColor: CONSTANTS.COLOURS.MUTED_LIGHT
    },
    'DANGER': {
      backgroundColor: CONSTANTS.COLOURS.DANGER
    },
    'DISABLED': {
      opacity: 0.5,
      backgroundColor: CONSTANTS.COLOURS.MUTED_LIGHT,
      elevation: CONSTANTS.ELEVATIONS.FLAT
    }
  }
})

const TEXT_STYLES = Platform.select({
  ios: {},
  android: {
    _BASE: {
      textAlign: 'center',
      padding: CONSTANTS.PADDING.SM,
      fontWeight: CONSTANTS.FONT_WEIGHTS.SEMIBOLD
    },
    'PRIMARY': {
      color: CONSTANTS.COLOURS.PRIMARY_INVERTED
    },
    'MUTED': {
      color: CONSTANTS.COLOURS.MUTED_LIGHT_INVERTED
    },
    'DANGER': {
      color: CONSTANTS.COLOURS.DANGER_INVERTED
    },
    'DISABLED': {
      opacity: 0.5,
      color: CONSTANTS.COLOURS.MUTED_LIGHT_INVERTED
    }
  }
})

CustomButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.string.isRequired,
  style: PropTypes.arrayOf(PropTypes.oneOf(Object.keys(STYLES).map(key => STYLES[key])))
}

export { STYLES }
