import { useState } from "react"
import FactImage from "./components/FactImage"
import Loader from "./components/Loader"
import { useFact } from "./hooks/useFact"
import { useImage } from "./hooks/useImage"

function App() {
  const [loading, setLoading] = useState(true)
  const { fact, firstWord, updateFact } = useFact(setLoading)
  const { catImageUrl } = useImage(firstWord, setLoading)

  return (
    <>
      <h1
        className="m-6 text-center font-bold text-3xl"
      >
        Junior Technical Test
      </h1>
      <button
        type="button"
        className="cursor-pointer block mx-auto mb-6 px-3 py-2 rounded-2xl border-2 border-neutral-300 font-semibold hover:bg-purple-600 hover:text-neutral-50"
        onClick={updateFact}
      >
        Change fact
      </button>
      {
        loading
          ? <Loader />
          : (fact && firstWord && catImageUrl)
          && <FactImage
               fact={fact}
               firstWord={firstWord}
               catImageUrl={catImageUrl}
             />
      }

    </>
  )
}

export default App