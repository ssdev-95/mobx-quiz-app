/* eslint-disable @typescript-eslint/no-unused-vars */
import { observer } from 'mobx-react-lite'
import { Form, Formik } from 'formik'
import { Card, Button } from "@material-ui/core"
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import { makeStyles } from "@material-ui/core/styles"

import Radio from '@/components/Radio'

import rootStore from '@/stores/root'
import { QuestionProps } from '@/types'

const useQuestionStyles = makeStyles({
  container: {
    height: "100%",
    width: "100%",
    padding: "1rem 0",
    overflowY: "scroll"
  },
  card: {
    height: "18rem",
    width: "36rem",
    maxWidth: "90%",
    margin: "1rem auto 0",
    padding: "3rem 2rem"
  },
  form: {
    height: "100%",
    width: "100%",
    display: "flex",
    marginTop: '.45rem',
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "stretch",
    gap: ".8rem"
  },
  option: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "1rem"
  },
  heading: {
    fontWeight: 500,
    fontSize: "1.1rem"
  },
  finishBtn: {
    height: '3.85rem',
    borderWidth: 0,
    borderRadius: '50px',
    backgroundColor: 'rgba(0,0,0,0)',
    position: 'absolute',
    bottom: '2.5rem',
    right: '2.5rem'
  },
  icon: {
    fontSize: '3rem',
    filter: 'invert(.5) sepia(.1) saturate(50) hue-rotate(90deg)'
  }
})

const Question = ({ quiz }: QuestionProps) => {
  const { card, form, option, heading, container, finishBtn, icon } = useQuestionStyles()

  return (
    <div className={container}>{
      rootStore.quests.map((question, index) => (
        <Card
          key={`question${index + 1}`}
          className={card}
        >
          <h2>{question.question}</h2>
          <Formik
             initialValues={null}
             onSubmit={(e)=>console.log(e)}
          >
            <Form className={form}>{
              question.answers.map(answer => (
                <Radio answer={answer} index={question.answers.indexOf(answer)} class={option} />
              ))
            }
              <Button
                type="submit"
                className={finishBtn}
              ><VerifiedUserIcon className={icon} /></Button>
            </Form>
          </Formik>
        </Card>
      ))
    }</div>
  )
}

export default observer(Question)
