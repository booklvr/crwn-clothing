import React from 'react'

// STYLES
import {
  FormInputContainer,
  FormInputLabel,
  GroupContainer,
} from './formInput.styles'

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormInputContainer
        onChange={(e) => handleChange(e.target.value)}
        {...otherProps}
      />
      {label && (
        <FormInputLabel
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </FormInputLabel>
      )}
    </GroupContainer>
  )
}

export default FormInput
