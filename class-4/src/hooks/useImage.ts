import { useEffect, useState } from "react"
import { getImage } from "../utils/getImage"

export const useImage = (firstWord: string | null, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
  const [catImageUrl, setCatImageUrl] = useState<null | string>(null)

  useEffect(() => {
    if (firstWord === null) return
    
    getImage(firstWord).then(res => {
      setCatImageUrl(res)
      setLoading(false)
    })

    return () => {
      setLoading(true)
    }
  }, [firstWord, setLoading])

  return {
    catImageUrl,
  }
}
