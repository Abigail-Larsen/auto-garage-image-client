import React, { useEffect, useState } from 'react'
import { SingleVote } from './singleVote'
import Ellipsis from '../../assets/Ellipsis.svg'
import { Modal } from './modal'

export const GetAllVotesList = ({ results, setData, setFilteredData, filteredData }) => {
  const [modalOpen, setModal] = useState(false)
  const [vote, setVote] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setData(results)
    setFilteredData(results)
  }, [])

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [filteredData])

  return (
    <>
      {modalOpen ? (
        <Modal setModal={setModal} vote={vote} />
      ) : loading ? (
        <>
          <iframe src={Ellipsis} width="100%" height="120%" />
        </>
      ) : (
        filteredData?.map((i) => {
          return <SingleVote vote={i} setModal={setModal} setVote={setVote} />
        })
      )}
    </>
  )
}
