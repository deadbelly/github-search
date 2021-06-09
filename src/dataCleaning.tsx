import { Repo } from './components/App/App'

export const cleanRepoData = (repo: any): Repo => {
  return {
    id: repo.id,
    name: repo.name,
    fullName: repo.full_name,
    ownerName: repo.owner.login,
    ownerAviUrl: repo.owner.avatar_url,
    ownerProfUrl: repo.owner.url,
    ownerType: repo.owner.type,
    isPrivate: repo.private,
    repoUrl: repo.html_url,
    repoDescrip: repo.description,
    isFork: repo.fork,
    createdAt: new Date(repo.created_at),
    updatedAt: new Date(repo.updated_at),
    pushedAt: new Date(repo.pushed_at),
    size: repo.size,
    watchersCount: repo.watchers_count,
    language: repo.language,
    forksCount: repo.forks_count,
    openIssuesCount: repo.open_issues_count,
    score: repo.score,
    openIssues: repo.open_issues,
    hasIssues: repo.has_issues,
    hasProjects: repo.has_projects,
    hasPages: repo.has_pages,
    hasWiki: repo.has_wiki,
    hasDownloads: repo.has_downloads,
    isArchived: repo.archived,
    isDisabled: repo.disabled,
  }
}
