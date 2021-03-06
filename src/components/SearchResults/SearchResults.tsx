import React, { useState } from 'react'
import { Repo, Filters } from '../App/App'
import { RepoCard } from '../RepoCard/RepoCard'
import { useFilters } from './hooks'

import './SearchResults.css'

interface Props {
  allResults: Repo[]
  filters: Filters
}

export const SearchResults: React.FC<Props> = ({ allResults, filters }) => {
  const [filteredResults, setFilteredResults] = useState<Repo[]>([])

  useFilters(filters, allResults, setFilteredResults)

  const renderCards = (): JSX.Element[] => {
    return filteredResults.map((repo, i) => <RepoCard key={i} repo={repo} />)
  }

  return (
    <div className='search-results'>
      {renderCards()}
    </div>
  )
}
