import React from 'react'
import { Link } from 'react-router-dom'
import { Repo } from '../App/App'

interface Props {
  key: number
  repo: Repo
}

export const RepoCard: React.FC<Props> = ({ repo }) => {
  return (
    <Link
      style={{ textDecoration: 'none' }}
      className='repo-card'
      to={`/details/${repo.ownerName}/${repo.name}`}
    >
      <h2>{repo.name}</h2>
      <h3>{repo.ownerName}</h3>
      <h3>{repo.language}</h3>
    </Link>
  )
}
