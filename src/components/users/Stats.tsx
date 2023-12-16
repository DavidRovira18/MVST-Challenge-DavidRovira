import styled from "styled-components"

interface UserStatsProps{
  repos: string;
  following: string;
  followers: string;
}

export const Stats = ({repos, following, followers}: UserStatsProps) => {
  return (
    <StatsContainer>
      <StatsList>
        <span>Repos</span>
        <strong>{repos}</strong>
      </StatsList>
      <StatsList>
        <span>Followers</span>
        <strong>{followers}</strong>
      </StatsList>
      <StatsList>
        <span>Following</span>
        <strong>{following}</strong>
      </StatsList>
    </StatsContainer>
  )
};

const StatsContainer = styled.div`
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 1.6rem 3rem;
  gap: 20px;
  max-height: 5vh;
`

const StatsList = styled.li`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span{
    font-size: 1.3rem;
    font-family: 'Rethink Sans', sans-serif;
  }
`
