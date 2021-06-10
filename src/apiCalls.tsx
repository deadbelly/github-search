import { Repo } from './components/App/App'
import { cleanRepoData } from './dataCleaning'


const authHeader = {
  headers: { authorization: `token ${process.env.REACT_APP_GH_KEY}` }
}

const checkResponse = (response: any): any => {
  if (response.ok) {
    return response.json()
  } else {
    throw response
  }
}

export const getRepos = (query: string, sort: string): Promise<Repo[]> => {
  return fetch(`https://api.github.com/search/repositories?q=${query}&sort=${sort}`, authHeader)
    .then(response => checkResponse(response))
      .then(data => data.items.map((repo: any) => cleanRepoData(repo)))
}

export const getSingleRepo = (ownerName: string, name: string): Promise<Repo> => {
  return fetch(`https://api.github.com/repos/${ownerName}/${name}`, authHeader)
    .then(response => checkResponse(response))
      .then(data => cleanRepoData(data))
}
