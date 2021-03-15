export type RepoItemProps = {
  id?: string
  name: string
  description: string
  html_url: string
}

const RepositoryItem = ({ name, description, html_url }: RepoItemProps) => {
  return (
    <li>
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={html_url} rel="noreferrer noopener" target="_blank">
        Acessar Repositório
      </a>
    </li>
  )
}

export default RepositoryItem
