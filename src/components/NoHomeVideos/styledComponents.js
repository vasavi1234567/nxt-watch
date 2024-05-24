import styled from 'styled-components'

export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`
export const NoVideosImage = styled.img`
  height: 10vh;
  @media screen and (min-width: 768px) {
    height: 20vh;
  }
`
export const NoVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.headingColor};
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const NoVideosContent = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.contentColor};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const NoVideosButton = styled.button`
  font-family: 'Roboto';
  font-size: 15px;
  background-color: #4f46e5;
  border: none;
  border-radius: 3px;
  padding: 10px;
`
export const VideosList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`
