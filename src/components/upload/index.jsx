import React, { useState } from "react";
import axios from 'axios';
import styled from '@emotion/styled'
import {
  Link
} from "react-router-dom";
import {
  Button,
  Typography,
  Input,
  withStyles
} from "@material-ui/core";
import EnhancedTable from './body'
import { readFile } from './utils/index';

import { FilePond, registerPlugin } from "react-filepond";


export const ImageUploadCard = () => {
  const [ testRows, setTestRows ] = useState([])
  const [ testimg, setTestImg ] = useState()

  const [files, setFiles] = useState([]);
    return (
        <Wrapper>
          <span>Create your own </span>
        </Wrapper>
    );
}


const Wrapper = styled.div`
  padding: 30px;
`;

const UploadHeader = styled.div`
  width: 100%;
  flex-direction: column;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-around: space-between;
`;

const input = styled.input`
  visibility: hidden;
`;

const TableWrapper = styled.div`
    // padding: 30px;
`;
