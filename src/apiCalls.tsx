import { Repo } from './components/App/App'
import { cleanRepoData } from './dataCleaning'

const checkResponse = (response: any): any => {
  if (response.ok) {
    return response.json()
  } else {
    throw response
  }
}

export const getRepos = (query: string, sort: string): Promise<Repo[]> => {
  return fetch(`https://api.github.com/search/repositories?q=${query}&sort=${sort}`)
    .then(response => checkResponse(response))
      .then(data => data.items.map((repo: any) => cleanRepoData(repo)))
}

export const getSingleRepo = (ownerName: string, name: string): Promise<Repo> => {
  return fetch(`https://api.github.com/repos/${ownerName}/${name}`)
    .then(response => checkResponse(response))
      .then(data => cleanRepoData(data))
}
