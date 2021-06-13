import { makeAutoObservable } from 'mobx'
import axios from 'axios'
import { Quest, QuizResults } from '@/types'

class RootStore {
  api_uri: string = `${process.env.NEXT_APP_API_URI}`
  quests: Quest[] = []
  results: QuizResults[] = []

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  async getQuests(quantity: number) {
    const res = await axios.get(this.api_uri.concat(`=${quantity}`))
    
    this.quests = (res.data.results).map(ponse=>({
      category: ponse.category,
      correct_answer: 0,
      answers: [ponse.correct_answer, ...ponse.incorrect_answers],
      difficult: ponse.difficulty,
      question: ponse.question,
      type: ponse.type,
    }))
  }

  handleQuizEnd(results: QuizResults[]) {
    this.results = results
  }
}

const rootStore = new RootStore()

export default rootStore
