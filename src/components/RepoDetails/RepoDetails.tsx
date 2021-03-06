import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Repo } from '../App/App'
import { useUrl } from './hooks'

import './RepoDetails.css'

export interface Props {
  ownerName: string
  name: string
  allResults: Repo[]
}

export const RepoDetails: React.FC<Props> = (props) => {
  const [selection, setSelection] = useState<Repo | undefined>(undefined)

  useUrl(props, setSelection)

  return (
    <div className='details'>
    <Link to='/' >
      <button>Back to Search</button>
    </Link>
      {selection &&
        <>
          <div className='detail-top'>
            <h1>{selection.name}</h1>
            <h2>Description: {selection.repoDescrip}</h2>
          </div>
          <div className='detail-info'>
            <div className='detail-info--column'>
              <h3>Language: {selection.language}</h3>
              <h3>Stars: {selection.stars}</h3>
              <p>Created: {selection.createdAt}</p>
              <p>Last Updated: {selection.updatedAt}</p>
              <p>Watchers: {selection.watchersCount}</p>
              <p>Forks: {selection.forksCount}</p>
              <p>Open Issues: {selection.openIssuesCount}</p>
              <a href={selection.repoUrl}>View on GitHub</a>
            </div>
            <div className='detail-info--column'>
              <img src={selection.ownerAviUrl} alt='owner profile img'/>
              <h3>Owner: {selection.ownerName}</h3>
              <p>Type: {selection.ownerType}</p>
              <a href={selection.ownerProfUrl}>Visit Owner Profile</a>
            </div>
          </div>
          <div className='detail-bottom'>
            <input type='checkbox' checked={selection.isPrivate} />
            <label>Is Private</label>
            <input type='checkbox' checked={selection.isFork} />
            <label>Is a Fork</label>
            <input type='checkbox' checked={selection.isArchived} />
            <label>Is Archived</label>
            <input type='checkbox' checked={selection.isDisabled} />
            <label>Is Disabled</label>
            <input type='checkbox' checked={selection.hasIssues} />
            <label>Has Issues</label>
            <input type='checkbox' checked={selection.hasProjects} />
            <label>Has Projects</label>
            <input type='checkbox' checked={selection.hasPages} />
            <label>Has Pages</label>
            <input type='checkbox' checked={selection.hasWiki} />
            <label>Has Wiki</label>
          </div>
        </>
      }
    </div>
  )
}
