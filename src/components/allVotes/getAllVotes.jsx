import React, { useEffect, useState } from 'react'
import { SingleVote } from './singleVote'
import { Modal } from './modal'

import { EditModal } from './editModal'

export const GetAllVotesList = ({ results, setData, setFilteredData, filteredData }) => {
  const [modalOpen, setModal] = useState(false)
  const [editModalOpen, setEditModal] = useState(false)
  const [vote, setVote] = useState({})

  useEffect(() => {
    setData(results)
    setFilteredData(results)
  }, [])

  return (
    <>
      {modalOpen ? (
        <Modal setModal={setModal} vote={vote} />
      ) : editModalOpen ? (
        <>
          <EditModal setEditModal={setEditModal} vote={vote} />
        </>
      ) : (
        filteredData?.map((i) => {
          return (
            <SingleVote
              vote={i}
              setModal={setModal}
              setVote={setVote}
              setEditModal={setEditModal}
            />
          )
        })
      )}
    </>
  )
}
