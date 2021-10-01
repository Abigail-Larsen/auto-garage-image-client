import React, { useState } from 'react'
import { Checkbox, FormControlLabel } from '@material-ui/core'

export const Toggle = ({ setAnswer }) => {
  const [checked, setChecked] = useState(false)
  const [yesChecked, yesSetChecked] = useState(false)

  const handleChange2 = (event) => {
    yesSetChecked(true)
    setChecked(false)
    setAnswer('yes')
  }

  const handleChange3 = (event) => {
    setChecked(true)
    yesSetChecked(false)
    setAnswer('no')
  }

  return (
    <div>
      <FormControlLabel
        label="Yes"
        control={<Checkbox checked={yesChecked} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="No"
        control={<Checkbox checked={checked} onChange={handleChange3} />}
      />
    </div>
  )
}
