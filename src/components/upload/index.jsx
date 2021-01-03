import React, { useState } from "react";
import axios from 'axios';
import styled from '@emotion/styled'
import {
  Link
} from "react-router-dom";
import {Button} from "@material-ui/core";
import EnhancedTable from './body'
import { readFile } from './utils/index';

const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
  { id: 'size', numeric: true, disablePadding: false, label: 'Size' },
  { id: 'date', numeric: true, disablePadding: false, false: 'Date' },
];


export const ImageUploadCard = () => {
  const [testRows, setTestRows] = useState([])
  const [ testimg, setTestImg] = useState()

    const handleUploadClick = event => {
      var files = Object.values(event.target.files); 

      const bar = files.map(e => {
        let base64 = readFile(e)
        setTestImg(base64)
        return {name:e.name, size: e.size, date: e.lastModifiedDate, img: base64}
      })
      const foo = [...testRows, ...bar]
      setTestRows(foo)
    };
    
    const sendData = () => {
      axios({
        url: "/sendPhotos",
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(testRows)
      }).then(res => {
      })
    }

    return (
        <>
        <form>
            <input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              onChange={handleUploadClick}
            />
        </form>

            <TableWrapper>
              <EnhancedTable headCells={headCells} rows={testRows}/>
            </TableWrapper>

        <img src={testimg} width='90px'/>

        <Link to='/sorting'>
          <Button
            variant="contained" 
            color="primary"
            onClick={() => sendData()}
          >
            NEXT
          </Button>
        </Link>
        </>
    );
}

const TableWrapper = styled.div`
    padding: 30px;
`;
