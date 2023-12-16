import { useContext, useEffect, useState, useRef, HtmlHTMLAttributes } from "react"
import styled from "styled-components"
import { UserProps, TopProps, UserRepoProps} from "../types"

export const Top = ({setUser}: TopProps) => {
  
  const [empty, setEmpty] = useState<boolean>(false);
  const [userNotFound, setUserNotFound] = useState<boolean>(false);
  const [userRepos, setUserRepos] = useState([]);
  const userReference = useRef<HTMLInputElement>(null);
  const [input] = useState("octocat");

  async function fetchUserAPI(username: string){ //Fetch User data from Github API
    const response = await fetch(`https://api.github.com/users/${username}`);
    const user_data = await response.json();

    if (response.status != 200){ //status 200 response OK!
      setUserNotFound(true);
      setUser(null);
      setUserRepos([]);
      return;
    }

    setUserNotFound(false);
    
    //Get user from response
    console.log(user_data);

    const user: UserProps = { //Store user properties
      nick: user_data.login,
      name: user_data.name,
      avatar: user_data.avatar_url,
      url: user_data.html_url,
      followers: user_data.followers,
      following: user_data.following,
      repos_url: user_data.repos_url,
      num_repos: user_data.public_repos,
      repos: [],
      email: user_data.email,
      bio: user_data.bio
    }


    const repos_response = await fetch(user_data.repos_url);
    const repos_data = await repos_response.json();

    const userRepos: UserRepoProps[] = repos_data.map((repo: any) => ({
      name: repo.name,
      description: repo.description,
      forks: repo.forks,
      language: repo.language,
      license: repo.license?.name,
      html_url: repo.html_url,
    }));
    
    user.repos = userRepos;
    setUser(user);

    console.log(user);
  }

  function handleInput(){ //Request to the GitHub API
    if(userReference.current?.value.trim() === " " || userReference.current?.value === undefined) //If user not found or API does not return any value
    {
      setEmpty(true);
      setUser(null);
      return;
    }

    setEmpty(false);
    fetchUserAPI(userReference.current.value);
  }

  useEffect(() => {
    fetchUserAPI(input)
  }, [input]);

  return (
    <HeaderContainer>
      <HeaderArea>
        <HeaderTitle>Github Repos Tool</HeaderTitle>
        <a href="https://github.com" aria-label="Homepage" title="GitHub">
        <svg aria-hidden="true" height="100" version="1.1" viewBox="0 0 16 16" width="100"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
        fill="white"></path>
        </svg>
        </a>
      </HeaderArea>
      <SearchAreaContainer>
        <SearchForm onSubmit = {e=>{e.preventDefault(); handleInput();}}>
          <SearchArea placeholder="Enter GitHub Username" ref={userReference} name="username" type="text"></SearchArea>
          {userNotFound && <NotFound>User not found :(</NotFound>}
          <button type="submit">Search!</button>
        </SearchForm>
      </SearchAreaContainer>
      
    </HeaderContainer>
  )
}


const HeaderContainer = styled.header`
  width: 100%;
`

const HeaderArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10%;
`

const HeaderTitle = styled.h1`
  font-size: 50px;
  color: white;
  font-family: 'Rethink Sans', sans-serif;
`

const SearchAreaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px; /* Añadido para ajustar el espacio superior */
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-width: 20vw;
  padding: 10px;
  background-color: #404040;
  border: none;
  border-radius: 5px;
  color: #fff;
  outline: none;
  transition: background-color 0.3s;

  &:focus {
    background-color: #505050;
  }

  button {
    background-color: #30406a;
    color: #fff;
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color ease-in .5s;

    &:hover {
      background-color: #3498db;
    }
  }
`;

const SearchArea = styled.input`
  width: 15vw;
  background-color: transparent;
  border: none;
  color: #fff;
  outline: none;
`;

const NotFound = styled.small`
  font-family: 'Rethink Sans', sans-serif;
  font-weight: bold;
  color: red;
  margin-right: 2.4rem;
`;
