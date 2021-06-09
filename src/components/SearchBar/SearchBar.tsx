import React, { useState } from 'react'
import { Repo, Filters } from '../App/App'
import { getRepos } from '../../apiCalls'

interface Props {
  setAllResults: React.Dispatch<React.SetStateAction<Repo[]>>
  setFilters: React.Dispatch<React.SetStateAction<Filters>>
  setSelection: React.Dispatch<React.SetStateAction<Repo | null>>
}

export const SearchBar: React.FC<Props> =
  ({ setAllResults, setFilters, setSelection }) => {

  const [query, setQuery] = useState<string>('')

  const fetchResults = (query: string): void => {
    getRepos(query)
      .then((results: any) => setAllResults(results))
  }

  return (
    <div>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={() => fetchResults(query)}>SEARCH</button>
    </div>
  )
}
