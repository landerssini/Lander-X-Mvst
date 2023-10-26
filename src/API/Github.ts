

  /**
  * Function to search for github users that match the query that the user has indicated.
  * @param {string} query - The query that the user wants to search for.
  */
export const getUsersList = async (query: string) => {
  const getUsersQuery = `
    query Search {
      search(query: "${query}", type: USER, first: 30) {
        edges {
          node {
            ... on User {
              avatarUrl
              url
              isGitHubStar
              location
              followers {
                totalCount
              }
              following {
                totalCount
              }
              id
              login
              bio
            }
          }
        }
      }
    }`
  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_GITHUB_API_KEY}`
      },
      body: JSON.stringify({ query: getUsersQuery }),
    })
    const data = await response.json()
    return data.data.search.edges
  } catch (error) {
    console.error('Error:', error)
  }
}
  /**
  * Function that searches the repositories of the username that the user has selected.
  * @param {string} userLogin - The user from whom the repositories are to be searched.
  */
export const getUserRepositories = async (userLogin: string) => {
  const getUserRepositoriesQuery = `
  query RepositoryOwner {
    repositoryOwner(login: "${userLogin}") {
        resourcePath
        url
        repositories(first: 100) {
            totalCount
            nodes {
                collaborators(first: 5) {
                    totalCount
                    nodes {
                        avatarUrl
                        login
                    }
                }
                createdAt
                description
                diskUsage
                forkCount
                id
                name
                stargazerCount
                url
                isPrivate
            }
            totalDiskUsage
        }
    }
}`
  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_GITHUB_API_KEY}`
      },
      body: JSON.stringify({ query: getUserRepositoriesQuery }),
    })
    const data = await response.json()
    return data.data.repositoryOwner.repositories.nodes
  } catch (error) {
    console.error('Error:', error)
  }
}