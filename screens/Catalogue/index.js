import React, { Component } from 'react'
import { StyleSheet, Text, Image, View, FlatList, Platform, ActivityIndicator } from 'react-native'
import CONSTANTS from '../../constants'
import { getProducts } from '../../lib/model/product'

const Product = Platform.select({
  ios: null,
  android: ({
    name,
    images = [],
    categories = []
  }) => (
    <View style={styles.listItem}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={images ? {
            uri: images[0]
          } : require('./image-placeholder.png')}
        />
      </View>
      <Text>
        {name}
      </Text>
    </View>
  )
})

class ProductList extends Component {
  render () {
    const { items = [] } = this.props
    return (
      <FlatList
        data={items}
        renderItem={({ item }) => <Product {...item} />}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => <View style={styles.separator} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListFooterComponent={() => <View style={styles.separator} />}
      />
    )
  }
}

export default class Catalogue extends Component {
  constructor (props) {
    super(props)
    this.state = {
      products: null,
      dataState: this.dataStates.initial
    }
    this.getProducts = this.getProducts.bind(this)
  }
  getProducts () {
    this.setState({ dataState: this.dataStates.loading })
    getProducts().then(products => {
      this.setState({
        products,
        dataState: this.dataStates.loaded
      })
    })
  }
  componentDidMount () {
    this.getProducts()
  }
  render () {
    switch (this.state.dataState) {
      case this.dataStates.loading: return (
        <View style={styles.loader}>
          <ActivityIndicator size='large' color={CONSTANTS.COLOURS.PRIMARY} />
        </View>
      )
      case this.dataStates.loaded: return (
        <View>
          <ProductList items={this.state.products} />
        </View>
      )
      default: return null
    }
  }
}

Catalogue.prototype.dataStates = {
  initial: 0,
  loading: 1,
  loaded: 2
}

Catalogue.navigationOptions = {
  title: 'Catalogue'
}

const styles = StyleSheet.create({
  listItem: {
    padding: CONSTANTS.PADDING.SM,
    height: 70,
    paddingLeft: CONSTANTS.PADDING.LG,
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'row'
  },
  imageContainer: {
    width: 54,
    alignItems: 'flex-start',
    paddingTop: 5
  },
  image: {
    borderRadius: CONSTANTS.BORDERS.ROUNDED_RADIUS,
    height: 70 - 10 - (2 * CONSTANTS.PADDING.SM),
    width: 70 - 10 - (2 * CONSTANTS.PADDING.SM)
  },
  separator: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: CONSTANTS.COLOURS.BORDER
  },
  loader: {
    margin: 70
  }
})
