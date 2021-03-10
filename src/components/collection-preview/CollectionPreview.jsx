import React from 'react'
import CollectionItem from '../collection-item/CollectionItem'
import './collectionPreview.scss'

// style
import './collectionPreview.scss'

const CollectionPreview = ({title, items}) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview"></div>
      {
        items.filter((item, i) => i < 4).map(({id, ...itemOtherProps}) => (
          <CollectionItem key={id} {...itemOtherProps}/>  
        ))
      }
    </div>
  )
}

export default CollectionPreview
