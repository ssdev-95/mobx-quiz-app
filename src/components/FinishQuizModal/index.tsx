/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react"

import { Modal, Button } from "@material-ui/core"
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'

import { makeStyles } from "@material-ui/core/styles"

const useModalStyle = makeStyles({
  modal: {
    height: "15rem",
    width: "15rem",
    zIndex: "600",
    margin: "auto",
    background: "#f0f2f5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    outline: "none",
    width: "100%",
    height: "100%",
    borderRadius: "6px",
    display: "flex",
    padding: '1rem 2rem',
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "space-around",
    position: 'relative',
    background: "#f0f2f5",
  },
  actions: {
    width: '100%',
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    gap: '2rem'
  },
  msg: {
    textAlign: 'center',
    fontWeight: 500,
    fontSize: '2rem',
    color: 'rgba(0,0,0,.68)'
  },
  icon: {
    fontSize: '3rem',
    filter: 'invert(35%)'
  }
})

export const FinishedQuizModal = () => {
  const { modal, container, actions, msg, icon } = useModalStyle()
  const [isFinishedQuizModalOpen, setIsFinishedQuizModalOpen] = useState(false)

  const handleSubmit = () => {
    console.log('quiz finalyzed')
  }

  return (
    <Modal open={isFinishedQuizModalOpen} className={modal}>
      <div className={container}>
        <ErrorOutlineIcon className={icon} />
        <h2 className={msg}>Really end this quiz?</h2>
        <div className={actions}>
          <Button
             style={{background: 'red', color: "#f0f2f5"}}
          >Nope</Button>
          <Button
             style={{background: 'green', color: "#f0f2f5"}}
             onClick={handleSubmit}
          >Yes</Button>
        </div>
      </div>
    </Modal>
  )
}
