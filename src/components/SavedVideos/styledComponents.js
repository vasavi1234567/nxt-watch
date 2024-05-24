import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  backgronud-color: ${props => props.bgColor};
  overflow-y: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  height: 100vh;
  @media screen and (min-width: 768px) {
    margin-left: 230px;
    margin-bottom: 0;
  }
`
export const SavedHeader = styled.div`
  display: flex;
  align-items: center;
`
export const SavedIconTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;
  border-radius: 70px;
  margin-left: 10px;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    margin-left: 35px;
  }
`
export const SavedTitle = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 25px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const SavedVideosList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`
export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`
export const NoSavedVideosImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`
export const NoSavedVideosHeading = styled.h1`
  color: ${props => props.headingColor};
  font-family: 'Roboto';
  font-size: 25px;
  text-align: center;
`
export const NoSavedVideosContent = styled.p`
  color: ${props => props.contentColor};
  font-family: 'Roboto';
  font-size: 20px;
  text-align: center;
`
