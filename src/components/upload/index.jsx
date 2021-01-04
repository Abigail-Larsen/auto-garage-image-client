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

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);


const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
  { id: 'size', numeric: true, disablePadding: false, label: 'Size' },
  { id: 'date', numeric: true, disablePadding: false, false: 'Date' },
];


export const ImageUploadCard = () => {
  const [ testRows, setTestRows ] = useState([])
  const [ testimg, setTestImg ] = useState()

  const [files, setFiles] = useState([]);

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
  
    console.log("file'", files)
    return (
        <Wrapper>
          <UploadHeader>

            <TextWrapper>
              <Typography variant="h4">
                Photos 
              </Typography>
              <Typography variant="h5" color="primary">
                ({files.length})
              </Typography>
            </TextWrapper>

            <div style={{width:'100%'}}>
                <FilePond
                  enctype="multipart/form-data"
                  server='http://localhost:9000/sendPhotos'
                  files={files}
                  allowMultiple={true}
                  onupdatefiles={setFiles}
                  labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                />
            </div>

          </UploadHeader>

          {/* <TableWrapper>
            <EnhancedTable headCells={headCells} rows={testRows}/>
          </TableWrapper> */}

          <Link to='/sorting'>
            <Button
              variant="contained" 
              color="primary"
              onClick={() => sendData()}
            >
              NEXT
            </Button>
          </Link>
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
