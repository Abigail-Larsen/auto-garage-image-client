import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Input,
  Checkbox,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core'

export const Toggle = ({ type, setType, setQuestion, question }) => {
  const [value, setValue] = useState(type)
  const classes = useStyles()

  const handleToggle = (e) => {
    setType(e)
    setValue(e)
  }

  console.log('setvalue', value)
  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Response Type</FormLabel>
        <RadioGroup
          value={value}
          onChange={(e) => handleToggle(e.target.value)}
          row
          aria-label="gender"
          defaultValue={type}
          name="radio-buttons-group"
        >
          <FormControlLabel value="text" control={<Radio />} label="Text" />
          <FormControlLabel value="checkbox" control={<Radio />} label="Yes or No" />
          <FormControlLabel value="percentage" control={<Radio />} label="Percentage" />
        </RadioGroup>
      </FormControl>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  input: {
    margin: '30px',
    width: '80%',
  },
}))
