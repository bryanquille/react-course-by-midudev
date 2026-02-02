import Header from "./components/header/Header"
import InterchangeBtn from "./components/InterchangeBtn"
import Selector from "./components/Selector"
import ModalSelector from "./components/ModalSelector"
import InputOutput from "./components/InputOutput"
import { useTranslate } from "./hooks/useTranslate"
import { useSelector } from "./hooks/useSelector"

function App() {
  const {
    fromLanguage,
    toLanguage,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
  } = useTranslate()
  const { isSelectorOpen, toggleSelector, closeSelector } = useSelector()

  return (
    <>
      <Header />
      <main className="w-10/12 max-w-5xl mx-auto pb-4">
        <div>
          <div className="mb-3 flex justify-between items-center gap-2">
            <Selector
              option={fromLanguage}
              isSelectorOpen={isSelectorOpen}
              toggleSelector={toggleSelector}
            />
            <InterchangeBtn interchangeLanguages={interchangeLanguages} fromLanguage={fromLanguage} />
            <Selector
              option={toLanguage}
              isSelectorOpen={isSelectorOpen}
              toggleSelector={toggleSelector}
            />
          </div>
          {
            isSelectorOpen
              ? <ModalSelector
                closeSelector={closeSelector}
                setFromLangague={setFromLanguage}
                setToLanguage={setToLanguage}
              />
              : <InputOutput />
          }
        </div>
      </main>
    </>
  )
}

export default App