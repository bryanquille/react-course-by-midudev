import { useTranslate } from "./hooks/useTranslate"

function App() {
  const { fromLanguage, setFromLanguage } = useTranslate()
  return (
    <>
      <h1
        className="my-4 text-center font-semibold text-4xl"
      >
        Traductor de Google
      </h1>
      <button 
        type="button"
        className="cursor-pointer block mx-auto mb-4 px-5 py-2 border-2 border-slate-800 rounded-lg transition-all duration-200 hover:bg-slate-300/75"
        onClick={() => setFromLanguage("es")}
      >
        Cambiar a Español
      </button>
      <p
        className="text-center"
      >
        { fromLanguage }
      </p>
    </>
  )
}

export default App