import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'

//components
import { RepoDetails } from '../RepoDetails/RepoDetails'
import { SearchBar } from '../SearchBar/SearchBar'
import { SearchResults } from '../SearchResults/SearchResults'

//styles
import './App.css'

export interface Repo {
  [key: string]: any
  id: number,
  name: string,
  fullName: string,
  ownerName: string,
  ownerAviUrl: string,
  ownerProfUrl: string,
  ownerType: string,
  isPrivate: boolean,
  repoUrl: string,
  repoDescrip: string,
  isFork: boolean,
  createdAt: Date,
  updatedAt: Date,
  pushedAt: Date,
  size: number,
  watchersCount: number,
  language: string,
  forksCount: number,
  openIssuesCount: number,
  score: number,
  openIssues: number,
  hasIssues: boolean,
  hasProjects: boolean,
  hasPages: boolean,
  hasWiki: boolean,
  isArchived: boolean,
  isDisabled: boolean,
}

export interface Filters {
  [key: string]: any
  language: string,
}

interface Match {
  ownerName: string
  name: string
}

export const App: React.FC = () => {
  const [allResults, setAllResults] = useState<Array<Repo>>([])
  const [filters, setFilters] = useState<Filters>({language: ''})
  const [selection, setSelection] = useState<Repo | null>(null)


  return (
    <div className="App">
      <Route
        exact path='/'
        render={(): any =>
          <>
            <SearchBar
            setAllResults={setAllResults}
            setFilters={setFilters}
            filters={filters}
            allResults={allResults}
            />
            <SearchResults
            allResults={allResults}
            filters={filters}
            />
        </>
        }
      />
      <Route
        exact path='/details/:ownerName/:name'
        render={({ match }: RouteComponentProps<Match>) =>
          <RepoDetails
            ownerName={match.params.ownerName}
            name={match.params.name}
            allResults={allResults}
          />
        }
      />
    </div>
  )
}
