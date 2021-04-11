import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useLazyQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { Input } from '@material-ui/core'
import { GET_ID } from './queries/getCode'

export const VoteWithCode = () => {
  const [value, setValue] = useState('')

  const [sendQuery, { data, loading }] = useLazyQuery(GET_ID, {
    variables: { keyword: value },
  })

  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="enter your code to vote"
        inputProps={{ 'aria-label': 'enter your code to vote' }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div>
        <Button variant="contained" color="primary" onClick={() => sendQuery()}>
          Enter Code
        </Button>

        {data?.getId ? (
          <Link to={`vote/${data.getId}`}>
            <Button variant="contained" color="primary">
              Correct Code! Move on
            </Button>
          </Link>
        ) : null}

      </div>

    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
`
