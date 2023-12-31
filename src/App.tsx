import {useState} from 'react';
import './App.css';
import styled from 'styled-components';
import {Top} from "./components/top" 
import { UserProps } from './types';
import { Main } from './components/users/main';

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
    <MainContainer>
      <Top setUser={setUserData}/>
      {user && <Main user={user}/>}
    </MainContainer>
  );
}


const MainContainer = styled.main`
  background-color: #191919;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`
export default App;
