import { useEffect } from 'react'
import { Repo, Filters } from '../App/App'

const filterResults = (resultsArr: Repo[], filterKey: string, filterVal: any) => {
  return resultsArr.filter(repo => repo[filterKey] === filterVal)
}

export const useFilters = (
  filters: Filters,
  allResults: Repo[],
  setFilteredResults: React.Dispatch<React.SetStateAction<Repo[]>>
) => {
  useEffect(() => {
    let filteredResults = allResults
    for (const key in filters) {
      if (filters[key] !== '') {
        filteredResults = filterResults(filteredResults, key, filters[key])
      }
    }
    setFilteredResults(filteredResults)
  }, [allResults, filters])
}
