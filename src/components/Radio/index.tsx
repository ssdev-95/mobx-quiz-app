/* eslint-disable no-unused-vars */
import React from "react";
import { useField } from 'formik'

export const Radio = (props) => {
  const [meta, helper, field] = useField(`option_${props.index+1}`)
  const {results, func} = props

  return (
    <label className={props.class} htmlFor={`quest${props.index+1}-option-${props.id}`}>
      <input
        type="radio"
        value={props.answer}
        name={`option_${props.index+1}`}
        id={`quest${props.index+1}-option-${props.id}`}
        onChange={(e)=>func([...results, {answer: e.target.value}])}
      />{props.answer}
    </label>

  )
}
