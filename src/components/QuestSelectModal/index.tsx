/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react"

import { Modal, Button } from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"
import { DoubleArrow } from "@material-ui/icons"

const useModalStyle = makeStyles({
  modal: {
    height: "15rem",
    width: "15rem",
    borderRadius: "4px",
    zIndex: "600",
    margin: "auto",
    background: "rgba(0,0,0,0)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    filter: "invert(.5) sepia(.1) saturate(50) hue-rotate(90deg)",
    height: "3.15rem",
    width: "3.15rem",
  },
  container: {
    outline: "none",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: 'relative'
  },
  input: {
    height: "6rem",
    width: "6rem",
    fontSize: "4rem",
    textAlign: "center",
  },
  submit: {
    zIndex: 800,
    background: "green",
    color: "white",
    position: 'absolute',
    top: '12rem'
  },
})

export const SelectQuestModal = () => {
  const { modal, icon, container, input, submit } = useModalStyle()
  const [questionsQuantity, setQuestionsQuantity] = useState(0)
  const [ isSelectModalOpen, setIsSelectModalOpen ] = useState(false)

  const handleUpDown = (how) => {
    if(String(how)==='up') {
      const howMuch = (questionsQuantity<=99) ? (questionsQuantity+1) : 99
      setQuestionsQuantity(howMuch)
    }

    if(String(how)==='down'){
      const howMany = (questionsQuantity>0) ? (questionsQuantity-1) : 0
      setQuestionsQuantity(howMany)
    }
  }

  return (
    <Modal open={isSelectModalOpen} className={modal}>
      <div className={container}>
        <Button
          onClick={()=>handleUpDown('down')}
        >
          <DoubleArrow
            className={icon}
            style={{ transform: "rotate(180deg)" }}
          />
        </Button>
        <input
           className={input}
           type="number"
           value={questionsQuantity}
        />
        <Button
          onClick={()=>handleUpDown('up')}
        >
          <DoubleArrow className={icon} />
        </Button>
      <Button
        className={submit}
      >Init</Button>
      </div>
    </Modal>
  )
}
