import { useEffect, useState } from "react"
import { getFirstWord } from "../utils/getFirstWord"
import { getFact } from "../utils/getFact"

export const useFact = (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
  const [fact, setFact] = useState<null | string>(null)
  const [firstWord, setFirstWord] = useState<null | string>(null)

  const updateFact = () => {
    getFact().then(res => {
      const newFact = res
      setFact(newFact)
      setFirstWord(getFirstWord(newFact))
    })
  }

  useEffect(() => {
    if (fact === null) {
      getFact().then(res => {
        const newFact = res
        setFact(newFact)
        setFirstWord(getFirstWord(newFact))
      })
      return
    }
  
    return () => {
      setLoading(true)
    }
  }, [fact, setLoading])
  

  return {
    fact,
    firstWord,
    updateFact
  }
}
