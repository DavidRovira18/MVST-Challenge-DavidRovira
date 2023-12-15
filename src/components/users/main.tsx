import React from 'react'
import styled from 'styled-components'
import { Top } from '../top'
import {Start} from './start'
import { TopUser } from './top_user'
import { UserData } from '../../types'

export const Main = ({user}: UserData) => {
  return (
    <MainUserContainer>
        <TopUser username={user.nick} name={user.name} avatar={user.avatar} bio={user.bio} url={user.url}></TopUser>
    </MainUserContainer>
  )
}

const MainUserContainer = styled.section`
  width: 60%;
  background: rgba(255, 255, 255, .3);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  border: 1.5px solid rgba(209, 213, 219, 0.3);
  border-radius: 1.5rem;
  margin-top: 1.6rem;
  max-width: 73.3rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;

  @media (min-width: 768px) {
    padding: 5.2rem 4.8rem;
  }

  @media (min-width: 900px) {
    padding: 4.8rem;
  }

  a {
    all: unset;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`

const UserLogo = styled.img`
  height: 117px;
  width: 117px;
  border-radius: 50%;
  @media (min-width: 900px) {
    display: block;
  }
`
