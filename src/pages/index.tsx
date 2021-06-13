import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles";

import FinishedQuizModal from '@/components/FinishQuizModal'
import SelectQuestModal from "@/components/QuestSelectModal";
import Header from "@/components/Header";
import Question from "@/components/Question";

import rootStore from '@/stores/root'
import modalStore from '@/stores/modals'

const useHome = makeStyles({
  container: {
    width: "100vw",
    height: "100vh",
    background: "#f0f2f5",
  }});

function Home() {
  const { container } = useHome();

  useEffect(()=>{
    modalStore.toggleSelectModal()
  }, [])

  return (
    <div className={container}>
      <Header />
      <Question quiz={rootStore.quests} />
      <SelectQuestModal toggleModal={modalStore.toggleSelectModal} isOpen={modalStore.isSelectModalOpen} />
      <FinishedQuizModal toggleModal={modalStore.toggleQuizEndModal} isOpen={modalStore.isQuestEndModalOpen} />
    </div>
  );
}

export default observer(Home)
