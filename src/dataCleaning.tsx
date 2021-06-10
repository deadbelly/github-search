import { Repo } from './components/App/App'

export const cleanRepoData = (repo: any): Repo => {
  return {
    id: repo.id,
    name: repo.name,
    ownerName: repo.owner.login,
    ownerAviUrl: repo.owner.avatar_url,
    ownerProfUrl: repo.owner.html_url,
    ownerType: repo.owner.type,
    isPrivate: repo.private,
    repoUrl: repo.html_url,
    repoDescrip: repo.description,
    isFork: repo.fork,
    createdAt: new Date(repo.created_at).toDateString(),
    updatedAt: new Date(repo.updated_at).toDateString(),
    size: repo.size,
    watchersCount: repo.watchers_count,
    language: repo.language,
    forksCount: repo.forks_count,
    openIssuesCount: repo.open_issues_count,
    stars: repo.stargazers_count,
    hasIssues: repo.has_issues,
    hasProjects: repo.has_projects,
    hasPages: repo.has_pages,
    hasWiki: repo.has_wiki,
    hasDownloads: repo.has_downloads,
    isArchived: repo.archived,
    isDisabled: repo.disabled,
  }
}
