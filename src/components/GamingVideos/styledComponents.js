import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
  text-decoration: none;
`
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 250px;
    margin-right: 20px;
  }
`
export const ThumbnailImage = styled.img`
  height: 280px;
  width: 100vw;
  display: flex;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 250px;
  }
`
export const GamingContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
`
export const GamingTitle = styled.p`
  color: ${props => props.color};
  font-fammily: 'Roboto';
  font-size: 15px;
  margin-bottom: 0;
`
export const GamingViews = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 13px;
`
