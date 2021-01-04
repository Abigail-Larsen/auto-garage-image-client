import React, { useState } from "react";
import styled from '@emotion/styled'
import { GetPhotos } from './queries/getPhotos';
import {
  Link
} from "react-router-dom";
import {Button} from "@material-ui/core";

export const SortedPictures = () => {

    return (
        <>
            <GetPhotos>
                {({data, loading, error}) => {
                    if(error){
                        return 'error'
                    }
                    if(loading){
                        return 'loading...'
                    }
                    console.log('data',data?.photos.name)
                    return (
                        <div>
                            <img src='file://Users/abigailthelin/Desktop/node-service/src/static/category/0acd13b832a3adb3b5260facc119c3c6' />
                        </div>
                    )
                }}
            </GetPhotos>
            <Link to='/'>
                <Button>
                    home
                </Button>
            </Link>
        </>
    );
}

const TableWrapper = styled.div`
    padding: 30px;
`;
