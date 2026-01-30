import { useEffect } from "react"

type SearchPagePropsTypes = {
  routeParams?: { query?: string }
}

function SearchPage({ routeParams }: SearchPagePropsTypes) {
  const query = routeParams?.query || 'No query provided'
  
  useEffect(() => {
    document.title = `Your finding ${query}`
  }, [query])
  
  return (
    <>
      <h1>SearchPage</h1>
      <p>This is a page with a dynamic path {query}</p>
    </>
  )
}

export default SearchPage