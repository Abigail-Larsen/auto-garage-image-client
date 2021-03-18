import React, { useState } from "react";
import styled from '@emotion/styled'
import {
  Link
} from "react-router-dom";
import {Button} from "@material-ui/core";import {
    Input
  } from '@material-ui/core';

export const VoteWithCode = () => {
    const [value, setValue ] = useState('dog')

    return (
        <div>
            <Input
              type="text" 
              placeholder="enter your code to vote" 
              inputProps={{ 'aria-label': 'enter your code to vote' }} 
              value={value} 
              onChange={(e) => setValue(e.target.value)}
            />
            <Link to={`/vote/${value}`}>
                <Button>GO!</Button>
            </Link>
        </div>
    );
}

const TableWrapper = styled.div`
    padding: 30px;
`;
