export const getFact = async () => {
  try {
    const response = await fetch('https://catfact.ninja/fact')
    const data = await response.json()
    return data.fact
  } catch (err) {
    console.log(err)
  }
  return 
}