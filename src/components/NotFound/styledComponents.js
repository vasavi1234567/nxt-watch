import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  background-color: ${props => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: 50px;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    margin-left: 230px;
    margin-bottom: 0;
  }
`
export const NotFoundVideos = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NotFoundImage = styled.img`
  width: 180px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`
export const NotFoundHeading = styled.h1`
  color: ${props => props.headingColor};
  text-align: center;
  font-family: 'Roboto';
  font-size: 27px;
`
export const NotFoundContent = styled.p`
  color: ${props => props.contentColor};
  text-align: center;
  font-family: 'Roboto';
  font-size: 16px;
`
