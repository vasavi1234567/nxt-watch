import styled from 'styled-components'

export const TrendingVideosList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0px;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
`
export const TrendingVideosContainer = styled.div`
  background-color: ${props => props.bgColor};
  heigth: 100vh;
  overflow-y: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-left: 230px;
  }
`
export const TrendingHeader = styled.div`
  display: flex;
  align-items: center;
`
export const TrendingIconTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border-radius: 70px;
  margin-left: 10px;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    margin-left: 35px;
  }
`
export const TrendingContent = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 25px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
