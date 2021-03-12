import React, { useState } from 'react'
import CollectionPreview from '../../components/collection-preview/CollectionPreview'
import SHOP_DATA from './shop-data'

const ShopPage = () => {
  const [collections] = useState(SHOP_DATA)
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview
          key={id}
          {...otherCollectionProps}
        ></CollectionPreview>
      ))}
    </div>
  )
}

export default ShopPage
