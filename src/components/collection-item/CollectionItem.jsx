import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'
import CustomButton from '../custom-button/CustomButton'

import './collectionItem.scss'

const CollectionItem = ({ item }) => {
  console.log(item)
  const { name, price, imageUrl } = item
  const dispatch = useDispatch()

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton inverted onClick={() => dispatch(addItem(item))}>
        ADD TO CART
      </CustomButton>
    </div>
  )
}

export default CollectionItem
