import styled from 'styled-components'
import { Top } from '../top'
import {Stats} from './Stats'
import { TopUser } from './top_user'
import { UserData } from '../../types'
import { Repos } from './repos'

export const Main = ({user}: UserData) => {
  return (
    <MainUserContainer>
      <SideArea>
        <TopUser username={user.nick} name={user.name} avatar={user.avatar} bio={user.bio} url={user.url}></TopUser>
        <Stats repos={user.num_repos} followers={user.followers} following={user.following}></Stats>
      </SideArea> 
      <ReposArea>
        <Repos repos={user.repos}></Repos>
      </ReposArea>
    </MainUserContainer>
  )
}

const MainUserContainer = styled.section`
  min-width: 80vw;
  max-height: 70vh;
  background: rgba(48, 64, 106, 0.4);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  border: 1.5px solid rgba(44, 62, 102, 0.3);
  border-radius: 1.5rem;
  margin-top: 1.6rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

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

const SideArea = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ReposArea = styled.div`
  width: 100%;
  overflow-y: scroll;
`;