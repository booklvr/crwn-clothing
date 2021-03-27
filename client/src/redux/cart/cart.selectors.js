import { createSelector } from 'reselect'

const selectCart = (state) => state.cart

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
)

export const selectHidden = createSelector([selectCart], (cart) => cart.hidden)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, { quantity }) => accumulatedQuantity + quantity,
      0
    )
)

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, { quantity, price }) =>
      accumulatedQuantity + quantity * price,
    0
  )
)