import { AsyncStorage } from 'react-native'

function getItem (key) {
  return AsyncStorage.getItem(key)
}

function setItem (key, value) {
  return AsyncStorage.setItem(key, value)
}

function multiGet (keys) {
  return AsyncStorage.multiGet(keys)
}

function multiSet (keyValuePairs) {
  return AsyncStorage.multiSet(keyValuePairs)
}

function getAllKeys (callback) {
  return AsyncStorage.getAllKeys(callback)
}

export {
  getItem,
  setItem,
  multiGet,
  multiSet,
  getAllKeys
}
