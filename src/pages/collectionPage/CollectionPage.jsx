import React from 'react'
import { useSelector } from 'react-redux'

// COMPONENTS
import CollectionItem from '../../components/collection-item/CollectionItem'

// SELECTORS
import { selectShopCollection } from '../../redux/shop/shop.selectors'

// STYLES
import './collectionPage.scss'

const CollectionPage = ({ match: { params } }) => {
  const { title, items } = useSelector(
    selectShopCollection(params.collectionId)
  )

  return (
    <div className='collection-page'>
      <h2>{title}</h2>
      <div className='items'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default CollectionPage
