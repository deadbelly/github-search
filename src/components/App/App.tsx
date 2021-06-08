import React, { useState } from 'react'

//components
import { RepoCard } from '../RepoCard/RepoCard'
import { RepoDetails } from '../RepoDetails/RepoDetails'
import { SearchBar } from '../SearchBar/SearchBar'
import { SearchResults } from '../SearchResults/SearchResults'

//styles
import './App.css'

export interface Repo {
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
  url: string,
  createdAt: Date,
  updatedAt: Date,
  pushedAt: Date,
  size: number,
  stargazersCount: number,
  watchersCount: number,
  language: string,
  forksCount: number,
  openIssuesCount: number,
  mainBranch: string,
  defaultBranch: string,
  score: number,
  forks: number,
  openIssues: number,
  watchers: number,
  hasIssues: boolean,
  hasProjects: boolean,
  hasPages: boolean,
  hasWiki: boolean,
  hasDownloads: boolean,
  isArchived: boolean,
  isDisabled: boolean,
  licenseName?: string,
  licenseUrl?: string,
}

export interface Filters {
  language: string | null,
}

export const App: React.FC = () => {
  const [allResults, setAllResults] = useState<Array<Repo>>([])
  const [filters, setFilters] = useState<Filters>({language: null})
  const [selection, setSelection] = useState<Repo | null>(null)

  return (
    <div className="App">
      <SearchBar
        setAllResults={setAllResults}
        setFilters={setFilters}
        setSelection={setSelection}
      />
    </div>
  )
}
