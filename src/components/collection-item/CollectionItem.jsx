import React from 'react'
import './collectionItem.scss'

const CollectionItem = ({id, name, price, imageUrl}) => {
  return (
    <div className="collection-item">
      <div className="image" style={{
        backgroundImage: `url${imageUrl}`
      }}/>
      <div className="collection-footer">
        <span className="name"></span>
        <span className="price"></span>
      </div>
      
    </div>
  )
}

export default CollectionItem