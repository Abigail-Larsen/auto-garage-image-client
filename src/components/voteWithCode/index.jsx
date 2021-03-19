import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useLazyQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { Input } from '@material-ui/core'
import { GET_ID } from './queries/getCode'

export const VoteWithCode = () => {
  const [value, setValue] = useState('income')
  const [sendQuery, { data, loading }] = useLazyQuery(GET_ID, {
    variables: { keyword: value },
  })
  console.log("vote with code", data)
  return (
    <div>
      <Input
        type="text"
        placeholder="enter your code to vote"
        inputProps={{ 'aria-label': 'enter your code to vote' }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Link to={setTimeout(function () {
          `/vote/${data?.getId}`
        }, 10000)}>
        <Button onClick={() => sendQuery()}>GO!</Button>
      </Link>
    </div>
  )
}

const TableWrapper = styled.div`
  padding: 30px;
`
