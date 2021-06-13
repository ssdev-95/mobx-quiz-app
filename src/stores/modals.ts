import { makeAutoObservable } from 'mobx'

class ModalsStore {
  isSelectModalOpen: boolean = false
  isQuestEndModalOpen: boolean = false

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  toggleSelectModal() {
      this.isSelectModalOpen = !this.isSelectModalOpen
  }

  toggleQuizEndModal() {
      this.isQuestEndModalOpen = !this.isQuestEndModalOpen
  }
}

const modalStore = new ModalsStore()

export default modalStore
