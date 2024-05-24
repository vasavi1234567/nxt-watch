import styled from 'styled-components'

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: trasparent;
`
export const FailureImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`
export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 27px;
  text-align: center;
  color: ${props => props.headingColor};
`
export const FailureContent = styled.p`
  font-family: 'Roboto';
  font-size: 17px;
  text-align: center;
  color: ${props => props.contentColor};
`
export const FailureButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  font-family: 'Roboto';
  padding: 7px;
  font-size: 15px;
`
