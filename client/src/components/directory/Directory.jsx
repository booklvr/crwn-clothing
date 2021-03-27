import React from 'react'
import { useSelector } from 'react-redux'

// COMPONENTS
import MenuItem from '../menu-item/MenuItem'

// SELECTORS
import { selectDirectorySections } from '../../redux/directory/directory.selectors'

// STYLE
import { DirectoryMenuContainer } from './directory.styles'

const Directory = () => {
  const sections = useSelector(selectDirectorySections)

  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps}></MenuItem>
      ))}
    </DirectoryMenuContainer>
  )
}

export default Directory
