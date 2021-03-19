import React, { useState } from "react";
import { GetVoteResults } from './queries/getResults';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import {
  Link
} from "react-router-dom";
import {
    Button,
    Paper,
    Typography,
    Input
} from "@material-ui/core";

export const Results = (props) => {

    const classes = useStyles();
    console.log('Results props', props.match.params.id)
    return (
        <>
            <GetVoteResults id={props.match.params.id}>
                {({data, loading, error}) => {
                    if(error){
                        return 'error'
                    }
                    if(loading){
                        return 'loading...'
                    }
                    console.log("DATA.getVote", data)
                    return (
                        <>
                            {data.map(i => {
                                return (
                                    <Paper className={classes.paper}>
                                        <b>answer:</b>{i.answer}
                                    </Paper>
        
                                )
                            })}
                        </>
                    )
                }}
            </GetVoteResults>

            {/* <Link to='/'>
                <Button>
                    home
                </Button>
            </Link> */}
        </>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '30px',
        margin: '30px'
    },
  }));