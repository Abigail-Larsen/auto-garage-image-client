import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import styled from '@emotion/styled'
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import {
  Input,
  Typography,
  Paper,
  Button
} from '@material-ui/core';
import {
  AddOption
} from './button'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    width: '50%',
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center', 
    justifyContent:'center',
  },
  paper: {
    width: '50%',
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '20px'
  },
  input: {
    margin: '30px',
    width: '80%',
  }
}));

export const CreateAVote = () => {
  const [ id, setId ] = useState(uuidv4())
  const [ title, setTitle ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ question, setQuestion ] = useState('')
  const [ form, setForm ] = useState({})
  const classes = useStyles();

  const createTheVote = () => {
    let randomID = uuidv4();
    console.log("random", randomID);
    const Form = {
      id,
      title,
      description,
      question
    }
    setForm(Form)
    console.log("form'", Form)
  }
    return (
      <Wrapper>
        <Typography variant="h2" gutterBottom>
          Create your vote HERE
        </Typography>

        <Paper className={classes.paper}>
            <Input 
              className={classes.input}
              type="text" 
              placeholder="Title of vote" 
              inputProps={{ 'aria-label': 'Title' }} 
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input 
              className={classes.input}
              type="text" 
              placeholder="Description of Vote" 
              inputProps={{ 'aria-label': 'Description of Vote' }} 
              value={description} 
              onChange={(e) => setDescription(e.target.value)}
            />
            <Input 
              className={classes.input}
              type="text" 
              placeholder="Question for yes or no" 
              multiline
              label="Question for yes or no"
              inputProps={{ 'aria-label': 'Question' }} 
              value={question} 
              onChange={(e) => setQuestion(e.target.value)}
            />
            <div>
            <InputWrapper>
              <input type='checkbox' name='yes' id='yes'/>
              <label for="yes">YES</label>
            </InputWrapper>
            <InputWrapper>
              <input type='checkbox' name='no' id='no'/>
              <label for="no">NO</label>
            </InputWrapper>
            </div>
        </Paper>

        <Link
          to={{
            pathname: `/completed/${id}`,
            // hash: `${form?.id}`,
            state: { FORM: form }
          }}
        >
          <Button variant="contained" color="primary" onClick={() => createTheVote()}>
            SUBMIT VOTE
          </Button>
        </Link>

      </Wrapper>
    );
}


const Wrapper = styled.div`
  padding: 30px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const InputWrapper = styled.div`
  display: flex;
`;

const TableWrapper = styled.div`
    // padding: 30px;
`;


// {
//   voteOptions.map((i) => {
//     if(i === 'radio'){
//       return (
//         <>
//           <FormControlLabel value="female" control={<Radio />} label="Female" />
//           <FormControlLabel value="male" control={<Radio />} label="Male" />
//           <FormControlLabel value="other" control={<Radio />} label="Other" />
//           <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
//         </>
//       )
//     } else if (i === 'checkboxes'){
//       return (
//         <FormGroup>
//           <FormControlLabel
//             control={<Checkbox name="gilad" />}
//             label="Gilad Gray"
//           />
//           <FormControlLabel
//             control={<Checkbox name="jason" />}
//             label="Jason Killian"
//           />
//           <FormControlLabel
//             control={<Checkbox name="antoine" />}
//             label="Antoine Llorca"
//           />
//         </FormGroup>
//       )
//     }
//     return (
//       <Input placeholder="Input" inputProps={{ 'aria-label': 'Input' }} />
//     )
//   })
// }