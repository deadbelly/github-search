import React, { useState } from 'react'
import { Repo, Filters } from '../App/App'
import { useFilters } from './hooks'

interface Props {
  allResults: Repo[]
  filters: Filters
}

export const SearchResults: React.FC<Props> = ({ allResults, filters }) => {
  const [filteredResults, setFilteredResults] = useState<Repo[]>([])

  useFilters(filters, allResults, setFilteredResults)

  return (
    <>
    </>
  )
}
