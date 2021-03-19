import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useLazyQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { Input } from '@material-ui/core'
import { GET_ID } from './queries/getCode'

export const VoteWithCode = () => {
  const [value, setValue] = useState('')
  const [route, setRoute] = useState('')

  const [sendQuery, { data, loading }] = useLazyQuery(GET_ID, {
    variables: { keyword: value },
  })

  return (
    <div>
      <Input
        type="text"
        placeholder="enter your code to vote"
        inputProps={{ 'aria-label': 'enter your code to vote' }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={() => sendQuery()}>Enter Code</Button>

      {data?.getId ? (
        <Link to={`vote/${data.getId}`}>
          <Button>Correct Code! Move on</Button>
        </Link>
      ) : null}
    </div>
  )
}

const TableWrapper = styled.div`
  padding: 30px;
`
