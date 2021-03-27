import React from 'react'

// COMPONENTS
import CollectionItem from '../collection-item/CollectionItem'

// STYLES
import {
  CollectionPreviewContainer,
  PreviewContainer,
  TitleContainer,
} from './collectionPreview.styles'

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <TitleContainer>{title.toUpperCase()}</TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
)

export default CollectionPreview
