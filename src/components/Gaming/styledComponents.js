import styled from 'styled-components'

export const LoaderContainer = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const GamingVideosContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
  @media screen and (min-width: 768px) {
    margin-left: 30px;
  }
`
export const GamingContainer = styled.div`
  background-color: ${props => props.bgColor};
  overflow-y: auto;
  height: 100vh;
  margin-top: 50px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-left: 230px;
  }
`
export const GamingHeader = styled.div`
  display: flex;
  align-items: center;
`
export const GamingIcon = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 70px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-left: 30px;
  }
`
export const GamingTitle = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 28px;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
