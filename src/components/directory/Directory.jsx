import React from 'react'
import { useSelector } from 'react-redux'

// COMPONENTS
import MenuItem from '../menu-item/MenuItem'

// SELECTORS
import { selectDirectorySections } from '../../redux/directory/directory.selectors'

// STYLE
import './directory.scss'

const Directory = () => {
  const sections = useSelector(selectDirectorySections)

  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps}></MenuItem>
      ))}
    </div>
  )
}

export default Directory
