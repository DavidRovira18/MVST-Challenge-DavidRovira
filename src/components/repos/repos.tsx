import { useState, useEffect } from "react";
import styled from "styled-components"
import { UserRepoProps } from "../../types"

export function Repos({ repos }: { repos: UserRepoProps[] }) {
  const [filterName, setFilterName] = useState("");
  const [filterLanguage, setFilterLanguage] = useState("");
  const [userLanguages, setUserLanguages] = useState<string[]>([]);

  useEffect(() => { //To show only languages the user have in its repositories
    const languagesSet = new Set<string>();
    repos.forEach((repo) => {
      if (repo.language) {
        languagesSet.add(repo.language);
      }
    });
    setUserLanguages(Array.from(languagesSet));
  }, [repos]);

  const filteredRepos = repos.filter((repo) => //Create the list of filtered repos 
    repo.name.toLowerCase().includes(filterName.toLowerCase()) &&
    (filterLanguage === "" || repo.language === filterLanguage)
  )
  return (
    <ReposZoneContainer>

      <FiltersContainer>
        <input
          type="text"
          placeholder="Filter by name"
          value={filterName}
          onChange={(e) => setFilterName(e.target.value)}
        />
        <select
          value={filterLanguage}
          onChange={(e) => setFilterLanguage(e.target.value)}
        >
          <option value="">Filter Language</option>
          {userLanguages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </FiltersContainer>

      <ReposContainer>
          {filteredRepos.map((repo) => (
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

    </ReposZoneContainer>

  )
}

const ReposZoneContainer = styled.div`
  
`;

const FiltersContainer = styled.div`
  position: sticky;
  top: 0;
  background: rgba(48, 64, 106, 0.4);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  border: 1.5px solid rgba(44, 62, 102, 0.3);
  border-radius: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 5px;

  input{
    min-width: 20vw;
    padding: 10px;
    background-color: #2d3338;
    border: none;
    border-radius: 5px;
    color: #c9d1d9;
    outline: none;
    transition: background-color 0.3s;

    &:focus {
      background-color: #40474d;
    }
  }

  select{
    min-width: 20vw;
    padding: 8px;
    background-color: #2d3338;
    border: 1px solid #6a737d;
    border-radius: 5px;
    color: #c9d1d9;
    outline: none;
    transition: background-color 0.3s;

    &:focus {
      background-color: #40474d;
    }

    option {
      color: #f6f8fa;
    }
  }
`;

const ReposContainer = styled.div`
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #f6f8fa;
    padding: 1.6rem 3rem;
    gap: 20px;
`

const RepoItem = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items:center;
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
`

const RepoProp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 200px;
  max-width: 300px;

  strong {
    color: #0366d6;
    margin-bottom: 4px;
  }

  small {
    color: #586069;
  }
`