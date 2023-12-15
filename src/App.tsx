import {useState} from 'react';
import './App.css';
import styled, { ThemeContext } from 'styled-components';
//import {themes_provider} from "./themes/themes"
import {Top} from "./components/top" 
import { UserProps } from './types';

// Define GitHub repos structure
interface repo{
  name: string;
  url: string;
}

function App() {
  const [user, setUser] = useState<UserProps | null>(null);

  function setUserData(user: UserProps | null): void{
    setUser(user);
  }

  return (
    <>
      <MainContainer>
        <Top setUser={setUserData} />
      </MainContainer>
    </>
  );
}

const MainContainer = styled.main`
background-color: #545554;
padding: 20px;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export default App;
