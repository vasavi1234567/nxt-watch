import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
  text-decoration: none;
`
export const TrendingItem = styled.li`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding-left: 35px;
  }
`
export const TrendingThumbnailImage = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 270px;
  }
`
export const TrendingVideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`
export const TrendingVideoImage = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  margin: 20px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const TrendingContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 6px;
  @media screen and (min-width: 768px) {
    margin-left?: 20px;
  }
`
export const TrendingTitle = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 16px;
`
export const TrendingChannelName = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 13px;
`
export const TrendingViewsAndDate = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 12px;
`
export const TrendingDot = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
