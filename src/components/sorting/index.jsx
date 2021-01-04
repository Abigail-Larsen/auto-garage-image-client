import React,{useState} from 'react';
import {
    Link
} from "react-router-dom";
import { emphasize } from "@material-ui/core/styles/colorManipulator";
import styled from '@emotion/styled'
import {
    Typography,
    Button,
    Grid,
    Paper
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const Sorting = () => {
    const classes = useStyles();
    const [ sorting, setSorting] = useState('')
    return (
        <Wrapper>
            <TextWrapper>
                <Typography variant="h3">
                    How do you want to sort your photos?
                </Typography>
            </TextWrapper>

            {/* <ContentWrapper>
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={3}>
                        <Paper 
                            className={classes.paper}
                            onClick={() => {
                                console.log("clicked faces");
                              }}
                        >
                            sort by faces
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper 
                            className={classes.paper}
                            onClick={() => {
                                console.log("clicked date");
                              }}
                        >
                            sort by date
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper 
                            className={classes.paper}
                            onClick={() => {
                                console.log("clicked location");
                            }}
                        >
                            sort by location
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper 
                            className={classes.paper}
                            onClick={() => {
                                console.log("clicked create your own");
                            }}
                        >
                            create your own!
                        </Paper>
                    </Grid>
                </Grid>
            </ContentWrapper> */}

            <Link to='/sorted'>
                <Button
                    variant="contained" 
                    color="primary"
                    // onClick={() => sendData()}
                >
                    SORT
                </Button>
            </Link>

        </Wrapper>

    )
}

const Wrapper = styled.div`
    padding: 30px;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #673ab7;
    height: 80%;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    margin: 50px;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-grow: 1;
    width: 95%;
    // border: 1px solid black;
`;

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        minHeight: '220px',
        cursor: 'pointer',
        "&:hover, &:focus": {
            backgroundColor: () => emphasize('#c5cae9', 0.08)
            },
        "&:active": {
            backgroundColor: () => emphasize('#c5cae9', 0.12)
            }
        }
  }));