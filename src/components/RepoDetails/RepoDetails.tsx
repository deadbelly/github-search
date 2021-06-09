import React from 'react'
import { Repo } from '../App/App'
import { useUrl } from './hooks'

interface Props {
  ownerName: string
  name: string
  allResults: Repo[]
}

export const RepoDetails: React.FC<Props> = ({ ownerName, name, allResults }) => {
  useUrl(ownerName, name, allResults)
  return (
    <>
    </>
  )
}
