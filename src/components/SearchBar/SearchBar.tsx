import React, { useState } from 'react'
import { Repo, Filters } from '../App/App'

interface Props {
  setAllResults: React.Dispatch<React.SetStateAction<Repo[]>>
  setFilters: React.Dispatch<React.SetStateAction<Filters>>
  setSelection: React.Dispatch<React.SetStateAction<Repo | null>>
}

export const SearchBar: React.FC<Props> =
  ({ setAllResults, setFilters, setSelection }) => {

  const [query, setQuery] = useState<string>('')

  return (
    <div>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </div>
  )
}
