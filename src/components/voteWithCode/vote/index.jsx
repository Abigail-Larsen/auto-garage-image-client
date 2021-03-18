import React, { useState } from "react";
import { GetVote } from '../queries';
import {
  Link
} from "react-router-dom";
import {Button} from "@material-ui/core";

export const Vote = ({code}) => {

    return (
        <>
            <GetVote>
                {({data, loading, error}) => {
                    if(error){
                        return 'error'
                    }
                    if(loading){
                        return 'loading...'
                    }
                    console.log("data',", data)
                    return (
                        <div>
                            this is the vote
                        </div>
                    )
                }}
            </GetVote>
            <Link to='/'>
                <Button>
                    home
                </Button>
            </Link>
        </>
    );
}
