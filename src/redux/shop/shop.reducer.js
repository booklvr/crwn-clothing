import { UPDATE_COLLECTIONS } from './shop.constants'

const shopReducer = (state = { collections: null }, action) => {
  const { type, payload } = action
  switch (type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: payload,
      }
    default:
      return state
  }
}

export default shopReducer
