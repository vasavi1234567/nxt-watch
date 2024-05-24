import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  background-color: ${props => props.backgroundColor};
  overflow-y: auto;
  height: 100vh;
  margin-top: 50px;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-left: 230px;
  }
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
`
