import React, { useState } from 'react'
import { Repo, Filters } from '../App/App'
import { getRepos } from '../../apiCalls'

interface Props {
  setAllResults: React.Dispatch<React.SetStateAction<Repo[]>>
  setFilters: React.Dispatch<React.SetStateAction<Filters>>
  filters: Filters
  allResults: Repo[]
}

export const SearchBar: React.FC<Props> =
  ({ setAllResults, setFilters, filters, allResults }) => {

  const [query, setQuery] = useState<string>('')
  const [sort, setSort] = useState<string>('')

  const fetchResults = (query: string): void => {
    getRepos(query, sort)
      .then((results: any) => setAllResults(results))
  }

  const renderLangOptions = (): JSX.Element[] | void => {
    const languages = allResults.reduce<Record<string, boolean>>((acc, repo) => {
      if (!acc[repo.language]) {
        acc[repo.language] = true
      }

      return acc
    }, {})

    return Object.keys(languages).map((language, i) => {
      return (
        <option value={language} key={i}>{language}</option>
      )
    })
  }

  return (
    <div>
      <select
        value={filters.language}
        onChange={e => setFilters({ language: e.target.value })}
      >
        <option value=''>Any</option>
        {renderLangOptions()}
      </select>
      <select
        value={sort}
        onChange={e => setSort(e.target.value)}
      >
        <option value='best match'>Best Match</option>
        <option value='stars'>Stars</option>
      </select>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={() => fetchResults(query)}>SEARCH</button>
    </div>
  )
}
