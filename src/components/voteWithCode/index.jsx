import React, { useState } from "react";
import styled from '@emotion/styled'
import {
  Link
} from "react-router-dom";
import {Button} from "@material-ui/core";

export const VoteWithCode = () => {
    return (
        <div>
            enter your code to vote
            <input/>
            <Link to='/vote'>
                <Button>GO!</Button>
            </Link>
        </div>
    );
}

const TableWrapper = styled.div`
    padding: 30px;
`;
