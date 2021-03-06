import React from 'react'
import { withRouter } from 'react-router-dom'


import {
  BackgroundImageContainer,
  ContentContainer,
  MenuItemContainer,
  SubtitleContainer,
  TitleContainer,
} from './menuItem.styles'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <MenuItemContainer
      size={size}
      onClick={() => {
        history.push(`${match.url}${linkUrl}`)
      }}
    >
      <BackgroundImageContainer
        className='bacground-image'
        imageUrl={imageUrl}
      ></BackgroundImageContainer>
      <ContentContainer>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <SubtitleContainer>SHOP NOW</SubtitleContainer>
      </ContentContainer>
    </MenuItemContainer>
  )
}

export default withRouter(MenuItem)
