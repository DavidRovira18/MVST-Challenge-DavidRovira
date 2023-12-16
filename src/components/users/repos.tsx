import styled from "styled-components"
import { UserRepoProps } from "../../types"

export function Repos({ repos }: { repos: UserRepoProps[] }) {
  return (
    <ReposContainer>
        {repos.map((repo) => (
        <RepoItem key={repo.name}>
            <a href={repo.html_url}><h3>{repo.name}</h3></a>
            <RepoProp>
              <strong>Description</strong>
              {repo.description && <small>{repo.description}</small> || <small>-</small>}
            </RepoProp>
            <RepoProp>
              <strong>Forks</strong>
              <small>{repo.forks}</small>    
            </RepoProp>
            <RepoProp>
              <strong>Language</strong>
              {repo.language && <small>{repo.language}</small> || <small>-</small>}
            </RepoProp>
            <RepoProp>
              <strong>License</strong>
              {repo.license && <small>{repo.license}</small> || <small>-</small>}
            </RepoProp>           
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
  display:flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items:center;
  border-radius: 1rem;
  width: 100%;
  background-color: cadetblue;

  a{  //not working CHECK :()
    &:focus{
      color: #0366d6;
    }
  }
`

const RepoProp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`