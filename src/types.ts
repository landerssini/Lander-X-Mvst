export interface UserList {
  node: User
}

export interface User {
  avatarUrl: string
  followers: Followers
  following: Following
  id: string
  login: string
  bio: any
  isGitHubStar: boolean
  location: string
  url: string
}

export interface Followers {
  totalCount: number
}

export interface Following {
  totalCount: number
}

export interface Repository {
  collaborators: Collaborators
  createdAt: string
  description: any
  diskUsage: number
  forkCount: number
  id: string
  name: string
  stargazerCount: number
  url: string
  isPrivate: boolean
}

export interface Collaborators {
  totalCount: number
  nodes: Collaborator[]
}

export interface Collaborator {
  avatarUrl: string
  login: string
}
