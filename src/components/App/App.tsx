import React, { useState } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import { ToastContainer } from 'react-toastify'


import { RepoDetails } from '../RepoDetails/RepoDetails'
import { SearchBar } from '../SearchBar/SearchBar'
import { SearchResults } from '../SearchResults/SearchResults'

import './App.css'

export interface Repo {
  [key: string]: any
  id: number,
  name: string,
  ownerName: string,
  ownerAviUrl: string,
  ownerProfUrl: string,
  ownerType: string,
  isPrivate: boolean,
  repoUrl: string,
  repoDescrip: string,
  isFork: boolean,
  createdAt: string,
  updatedAt: string,
  size: number,
  watchersCount: number,
  language: string,
  forksCount: number,
  openIssuesCount: number,
  stars: number,
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


  return (
    <div className="App">
      <h1 className='app-title'> GitHub Search </h1>
      <Switch>
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
        <Route
          render={() => {
            return (
              <>
                <Link to='/' >
                  <button>Back to Search</button>
                </Link>
                <h1> PAGE NOT FOUND! </h1>
              </>
            )
          }}
        />
      </Switch>
      <ToastContainer limit={1} />
    </div>
  )
}
