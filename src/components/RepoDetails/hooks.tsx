import { useEffect } from 'react'
import { Repo } from '../App/App'
import { getSingleRepo } from '../../apiCalls'

const findMatch = (ownerName: string, name: string, allResults: Repo[]): Repo | undefined => {
  return allResults.find(repo => repo.ownerName === ownerName && repo.name === name)
}

export const useUrl = (ownerName: string, name: string, allResults: Repo[]) => {
  useEffect(() => {
    if (findMatch(ownerName, name, allResults)) {
      console.log(findMatch(ownerName, name, allResults))
    } else {
      console.log(getSingleRepo(ownerName, name))
    }
  })
}
