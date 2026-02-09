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
    fromText,
    result,
    loading,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
  } = useTranslate()

  const {
    selector,
    setFromSelector,
    setToSelector,
    isSelectorOpen,
    toggleSelector,
    closeSelector
  } = useSelector()

  return (
    <>
      <Header />
      <main className="w-10/12 max-w-5xl mx-auto pb-4">
        <div>
          <div className="mb-3 flex justify-between items-center gap-2">
            <Selector
              option={fromLanguage}
              setFromSelector={setFromSelector}
              isSelectorOpen={isSelectorOpen}
              toggleSelector={toggleSelector}
            />
            <InterchangeBtn
              interchangeLanguages={interchangeLanguages}
              fromLanguage={fromLanguage}
            />
            <Selector
              option={toLanguage}
              setToSelector={setToSelector}
              isSelectorOpen={isSelectorOpen}
              toggleSelector={toggleSelector}
            />
          </div>
          {
            isSelectorOpen
              ? <ModalSelector
                selector={selector}
                closeSelector={closeSelector}
                setFromLangague={setFromLanguage}
                setToLanguage={setToLanguage}
              />
              : <InputOutput
                fromText={fromText}
                setFromText={setFromText}
                loading={loading}
                result={result}
              />
          }
        </div>
      </main>
    </>
  )
}

export default App