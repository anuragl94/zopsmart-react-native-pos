import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, Platform } from 'react-native'
import CONSTANTS from '../../constants'

const Product = Platform.select({
  ios: null,
  android: ({
    name,
    images = [],
    categories = []
  }) => (
    <View style={styles.listItem}>
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

const testItems = [
  {
    'id': 3531,
    'name': 'Collector',
    'images': [
      'https://s3.ap-south-1.amazonaws.com/zopnow-uploads/daniel-cheung-129839-20180101-063252.jpg',
      'https://s3.ap-south-1.amazonaws.com/zopnow-uploads/luiz-hanfilaque-342635-20180101-063252.jpg',
      'https://s3.ap-south-1.amazonaws.com/zopnow-uploads/jack-hamilton-320934-20180101-063253.jpg'
    ],
    'categories': [
      {
        'id': 302,
        'name': 'Resources',
        'slug': 'resources',
        'description': null,
        'status': 'ENABLED',
        'image': null,
        'productsCount': 2,
        'parentCategory': null
      }
    ]
  },
  {
    'id': 1998,
    'name': 'Startup Simulator',
    'images': '',
    'categories': [
      {
        'id': 305,
        'name': 'Simulation',
        'slug': 'simulation',
        'description': null,
        'status': 'ENABLED',
        'image': null,
        'productsCount': 1,
        'parentCategory': null
      }
    ]
  },
  {
    'id': 1997,
    'name': 'The Elementals',
    'images': null,
    'categories': [
      {
        'id': 304,
        'name': 'RPG',
        'slug': 'rpg',
        'description': null,
        'status': 'ENABLED',
        'image': null,
        'productsCount': 1,
        'parentCategory': null
      }
    ]
  },
  {
    'id': 1996,
    'name': 'Golden runner',
    'images': null,
    'categories': [
      {
        'id': 303,
        'name': 'Platformer',
        'slug': 'platformer',
        'description': null,
        'status': 'ENABLED',
        'image': null,
        'productsCount': 1,
        'parentCategory': null
      }
    ]
  },
  {
    'id': 13531,
    'name': 'Collector',
    'images': [
      'https://s3.ap-south-1.amazonaws.com/zopnow-uploads/daniel-cheung-129839-20180101-063252.jpg',
      'https://s3.ap-south-1.amazonaws.com/zopnow-uploads/luiz-hanfilaque-342635-20180101-063252.jpg',
      'https://s3.ap-south-1.amazonaws.com/zopnow-uploads/jack-hamilton-320934-20180101-063253.jpg'
    ],
    'categories': [
      {
        'id': 302,
        'name': 'Resources',
        'slug': 'resources',
        'description': null,
        'status': 'ENABLED',
        'image': null,
        'productsCount': 2,
        'parentCategory': null
      }
    ]
  },
  {
    'id': 11998,
    'name': 'Startup Simulator',
    'images': '',
    'categories': [
      {
        'id': 305,
        'name': 'Simulation',
        'slug': 'simulation',
        'description': null,
        'status': 'ENABLED',
        'image': null,
        'productsCount': 1,
        'parentCategory': null
      }
    ]
  },
  {
    'id': 19197,
    'name': 'The Elementals',
    'images': null,
    'categories': [
      {
        'id': 304,
        'name': 'RPG',
        'slug': 'rpg',
        'description': null,
        'status': 'ENABLED',
        'image': null,
        'productsCount': 1,
        'parentCategory': null
      }
    ]
  },
  {
    'id': 19296,
    'name': 'Golden runner',
    'images': null,
    'categories': [
      {
        'id': 303,
        'name': 'Platformer',
        'slug': 'platformer',
        'description': null,
        'status': 'ENABLED',
        'image': null,
        'productsCount': 1,
        'parentCategory': null
      }
    ]
  },
  {
    'id': 324531,
    'name': 'Collector',
    'images': [
      'https://s3.ap-south-1.amazonaws.com/zopnow-uploads/daniel-cheung-129839-20180101-063252.jpg',
      'https://s3.ap-south-1.amazonaws.com/zopnow-uploads/luiz-hanfilaque-342635-20180101-063252.jpg',
      'https://s3.ap-south-1.amazonaws.com/zopnow-uploads/jack-hamilton-320934-20180101-063253.jpg'
    ],
    'categories': [
      {
        'id': 302,
        'name': 'Resources',
        'slug': 'resources',
        'description': null,
        'status': 'ENABLED',
        'image': null,
        'productsCount': 2,
        'parentCategory': null
      }
    ]
  },
  {
    'id': 192498,
    'name': 'Startup Simulator',
    'images': '',
    'categories': [
      {
        'id': 305,
        'name': 'Simulation',
        'slug': 'simulation',
        'description': null,
        'status': 'ENABLED',
        'image': null,
        'productsCount': 1,
        'parentCategory': null
      }
    ]
  },
  {
    'id': 124997,
    'name': 'The Elementals',
    'images': null,
    'categories': [
      {
        'id': 304,
        'name': 'RPG',
        'slug': 'rpg',
        'description': null,
        'status': 'ENABLED',
        'image': null,
        'productsCount': 1,
        'parentCategory': null
      }
    ]
  },
  {
    'id': 241996,
    'name': 'Golden runner',
    'images': null,
    'categories': [
      {
        'id': 303,
        'name': 'Platformer',
        'slug': 'platformer',
        'description': null,
        'status': 'ENABLED',
        'image': null,
        'productsCount': 1,
        'parentCategory': null
      }
    ]
  }
]

export default class Catalogue extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Products</Text>
        <View style={styles.list}>
          <ProductList items={testItems} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    padding: CONSTANTS.PADDING.LG,
    fontSize: CONSTANTS.FONT_SIZES.H2,
    fontWeight: CONSTANTS.FONT_WEIGHTS.REGULAR,
    backgroundColor: CONSTANTS.COLOURS.PRIMARY,
    color: CONSTANTS.COLOURS.PRIMARY_INVERTED
  },
  list: {
    flex: 1
  },
  listItem: {
    padding: CONSTANTS.PADDING.SM,
    height: 70,
    paddingLeft: CONSTANTS.PADDING.LG,
    backgroundColor: '#ffffff'
  },
  separator: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: CONSTANTS.COLOURS.BORDER
  }
})
