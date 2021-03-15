import { useEffect, useState } from "react"
import axios from "axios"

import RepositoryItem, { RepoItemProps } from "./RepositoryItem"

import "../../styles/repos.scss"

const URL = "https://api.github.com/orgs/rocketseat/repos"

const RepositoryList = () => {
  const [repos, setRepos] = useState<RepoItemProps[]>([])

  useEffect(() => {
    async function getRepos() {
      const response = await axios.get(URL)
      setRepos(response.data)
    }

    getRepos()
  }, [])

  return (
    <section className="container">
      <h1>Repository List</h1>
      <ul>
        {repos.map((repo) => (
          <RepositoryItem
            key={repo.id}
            name={repo.name}
            description={repo.description}
            html_url={repo.html_url}
          />
        ))}
      </ul>
    </section>
  )
}

export default RepositoryList
