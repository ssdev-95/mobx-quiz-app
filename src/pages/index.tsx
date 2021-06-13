import { observer } from 'mobx-react-lite'
import { makeStyles } from "@material-ui/core/styles";

import { FinishedQuizModal } from '@/components/FinishQuizModal'
import { SelectQuestModal } from "@/components/QuestSelectModal";
import { Header } from "@/components/Header";
import { Question } from "@/components/Question";
import rootStore from '@/stores/root'

const useHome = makeStyles({
  container: {
    width: "100vw",
    height: "100vh",
    background: "#f0f2f5",
  }});

function Home() {
  const { container } = useHome();


  const quests = rootStore.quests

  return (
    <div className={container}>
      <Header />
      <Question quiz={quests} />
      <SelectQuestModal />
      <FinishedQuizModal />
    </div>
  );
}

export default observer(Home)
