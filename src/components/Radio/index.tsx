/* eslint-disable @typescript-eslint/no-unused-vars */
import { useField } from 'formik'

const Radio = (props) => {
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

export default Radio
