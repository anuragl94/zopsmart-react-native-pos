// import { get } from '../../api'
import { multiSet, multiGet, getAllKeys } from '../../storage'

function updateCatalogue () {
  // Each product will be saved as a flat key-value pair where
  // key = `product:{id}:{name}` (for quick searches)
  return Promise.resolve(testProducts)
    .then(products => multiSet(
      products.map(product => [
        `product:${product.id}:${product.name.replace(/:/g, '')}`,
        JSON.stringify(product)
      ])
    ))
}

function getProducts () {
  return getAllKeys(() => {})
    .then(keys => keys.filter(key => /^product:/.test(key)))
    .then(multiGet)
    .then(keyVals => keyVals.map(([key, val]) => JSON.parse(val)))
}

export {
  updateCatalogue,
  getProducts
}

const testProducts = [
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
