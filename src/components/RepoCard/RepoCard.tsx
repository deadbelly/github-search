import React from 'react'
import { Repo } from '../App/App'

interface Props {
  key: number
  repo: Repo
}

export const RepoCard: React.FC<Props> = ({ repo }) => {
  return (
    <div className='repo-card'>
      <h2>{repo.name}</h2>
      <h3>{repo.ownerName}</h3>
      <h3>{repo.language}</h3>
    </div>
  )
}
