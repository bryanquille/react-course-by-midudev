export const getImage = async (firstWord: string) => {
  try {
    const imageBaseUrl = 'https://cataas.com/cat/says/'
    const response = await fetch(`${imageBaseUrl}${firstWord}?json=true`)
    const data = await response.json()
    return data.url
  } catch (err) {
    console.log(err)
  }
}
