import styled from "styled-components"
interface TopUserProps {
  username: string,
  name: string,
  avatar: string,
  bio: string,
  url: string
}

export const TopUser = ({username, name, avatar, bio, url}: TopUserProps) => {

  const display_name = name || username; //If user does not have name display username
  return (
      <TopUserContainer>
        <UserLogo src={avatar} alt={username}></UserLogo>
        <UserInfo>
          <Name>{display_name} <br></br></Name>
          <Username><a href={url}>@{username}</a></Username>
        </UserInfo>
        <Bio>{bio}</Bio>
      </TopUserContainer>   
  )
}


const TopUserContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: transparent;
  gap: 10px;
`;

const UserInfo = styled.div`
  flex-grow: 1;
  margin-left: 20px;
`;

const Bio = styled.p`
  font-size: 1.4rem;
  line-height: 1.8;
  margin-top: 10px;
  color: white;
  font-family: 'Rethink Sans', sans-serif;
`;

const UserLogo = styled.img`
  height: 75px;
  width: 75px;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 117px;
    height: 117px;
  }
`;

const Name = styled.strong`
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 1.8;
  color: #fff;
  font-family: 'Rethink Sans', sans-serif;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Username = styled.span`
  font-size: 1.4rem;
  line-height: 1.6;
  color: #0366d6;
  margin-top: 4px;
  font-family: 'Rethink Sans', sans-serif;

  a {
    color: #0366d6;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;