import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Slider } from '@material-ui/core'

export const Percentage = ({ setAnswer }) => {
  const classes = useStyles()
  const [value, setValue] = useState(50)

  const handleChange = (e, v) => {
    setValue(v)
    setAnswer(v)
  }
  return (
    <div>
      <Slider
        className={classes.slider}
        onChange={handleChange}
        value={value}
        step={5}
        min={0}
        max={100}
        valueLabelDisplay="auto"
      />
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  slider: {
    margin: '30px',
    width: '150%',
  },
}))
