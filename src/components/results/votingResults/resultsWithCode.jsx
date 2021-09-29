import React, { useState } from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'
import { Button, Input } from '@material-ui/core'

import { GET_ID } from '../queries/getCode'

export const ResultsWithCode = () => {
  const [value, setValue] = useState('')
  const [sendQueryForRes, { data }] = useLazyQuery(GET_ID, {
    variables: { keyword: value },
  })
  console.log('data', data)
  return (
    <div style={{ paddingTop: '300px' }}>
      <Input
        type="text"
        placeholder="enter your code to view results of the vote"
        inputProps={{ 'aria-label': 'enter your code to vote' }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={() => sendQueryForRes()}>ENTER CODE</Button>
      {data?.getId ? (
        <Link to={`/results/${data?.getId}`}>
          <Button>Correct Code! Move on</Button>
        </Link>
      ) : null}
    </div>
  )
}
