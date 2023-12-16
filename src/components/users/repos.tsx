import styled from "styled-components"
import { UserRepoProps } from "../../types"

export function Repos({ repos }: { repos: UserRepoProps[] }) {
  return (
    <ReposContainer>
        {repos.map((repo) => (
        <RepoItem key={repo.name}>
            <h3><a href={repo.html_url}>{repo.name}</a></h3>
            <small>Description</small>
            <strong>{repo.description}</strong>
            <small>Forks</small>
            <strong>{repo.forks}</strong>    
            {repo.language && <small>Language</small> && <strong>{repo.language}</strong>}
            <small>License</small>
            {repo.license && <strong>{repo.license}</strong> || <strong>None</strong>}
            
        </RepoItem>
      ))}
    </ReposContainer>
  )
}


const ReposContainer = styled.div`
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    padding: 1.6rem 3rem;
    gap: 20px;
`

const RepoItem = styled.div`

`