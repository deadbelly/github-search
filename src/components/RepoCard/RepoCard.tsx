import React from 'react'
import { Repo } from '../App/App'

export const RepoCard: React.FC<Repo> = ({ repo }) => {
  return (
    <div className='repo-card'>
      <h2>{repo.name}</h2>
      <h3>{repo.owner}</h3>
      <h3>{repo.language}</h3>
    </div>
  )
}
