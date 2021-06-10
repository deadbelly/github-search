import { useEffect } from 'react'
import { Repo } from '../App/App'
import { Props } from './RepoDetails'
import { getSingleRepo } from '../../apiCalls'
import { errToast } from '../../errorHandling'

const findMatch = (props: Props): Repo | undefined => {
  const { ownerName, name, allResults } = props
  return allResults.find(repo => repo.ownerName === ownerName && repo.name === name)
}

export const useUrl =
(props: Props, setSelection: React.Dispatch<React.SetStateAction<Repo | undefined>>) => {

  useEffect(() => {
    if (findMatch(props)) {
      setSelection(findMatch(props))
    } else {
      getSingleRepo(props.ownerName, props.name)
        .then(selection => setSelection(selection))
          .catch(() => errToast())
    }
  })
}
