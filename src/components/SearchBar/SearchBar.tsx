import React, { useState } from 'react'
import { Repo, Filters } from '../App/App'
import { getRepos } from '../../apiCalls'

interface Props {
  setAllResults: React.Dispatch<React.SetStateAction<Repo[]>>
  setFilters: React.Dispatch<React.SetStateAction<Filters>>
}

export const SearchBar: React.FC<Props> =
  ({ setAllResults, setFilters }) => {

  const [query, setQuery] = useState<string>('')
  const [sort, setSort] = useState<string>('')

  const fetchResults = (query: string): void => {
    getRepos(query, sort)
      .then((results: any) => setAllResults(results))
  }

  return (
    <div>
      <select value={sort} onChange={e => setSort(e.target.value)}>
        <option value="best match">Best Match</option>
        <option value="stars">Stars</option>
      </select>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={() => fetchResults(query)}>SEARCH</button>
    </div>
  )
}
