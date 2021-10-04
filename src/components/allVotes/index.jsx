import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, TextField } from '@material-ui/core'
import { GetAllVotes } from '../../sharedQueries/queries'
import { GetAllVotesList } from './getAllVotes'

export const AllVotes = () => {
  const [search, setSearch] = useState('')

  const [allData, setAllData] = useState([])
  const [filteredData, setFilteredData] = useState(allData)

  const classes = useStyles()

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase()
    setSearch(event.target.value)
    let result = []
    result = allData.filter((data) => {
      const name = data.name.toLowerCase()
      return name.search(value) !== -1
    })
    setFilteredData(result)
  }

  return (
    <GetAllVotes>
      {(results) => {
        if (results.loading) {
          return <div>loading</div>
        }
        if (results.error) {
          return <div>error</div>
        }
        return (
          <>
            <div className={classes.wrapper}>
              <Typography variant="h2">
                <b>View all poll's:</b>
              </Typography>

              <TextField
                className={classes.search}
                value={search}
                onChange={(e) => handleSearch(e)}
                id="standard-basic"
                label="Search For Poll based off title"
                variant="standard"
              />

              <div>
                <GetAllVotesList
                  results={results.data}
                  setData={(e) => setAllData(e)}
                  setFilteredData={(e) => setFilteredData(e)}
                  filteredData={filteredData}
                />
              </div>
            </div>
          </>
        )
      }}
    </GetAllVotes>
  )
}

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: '100px',
  },
  search: {
    margin: '24px',
    width: '70%',
  },
}))
