import React from 'react';
import './App.css';
import styled, { ThemeContext } from 'styled-components';
import {themes_provider} from "./themes/themes"
import {top} from "./components/top"

// Define GitHub repos structure
interface repo{
  name: string;
  url: string;
}

function App() {
  return (
    <>
      <MainContainer>
        
      </MainContainer>
    </>
  );
}

const MainContainer = styled.main`
background-color: #f0f0f0;
padding: 20px;
`
export default App;
