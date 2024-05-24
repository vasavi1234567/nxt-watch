import styled from 'styled-components'

export const ListItem = styled.li`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    margin-right: 20px;
    width: 250px;
  }
`
export const ThumbnailImage = styled.img`
  width: 100%;
`
export const VideoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`
export const ProfileImage = styled.img`
  height: 28px;
  width: 28px;
  margin: 20px;
  border-radius: 50%;
`
export const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
`
export const VideoTitle = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 17px;
`
export const ChannelName = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 14px;
`
export const ViewsAndDate = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 13px;
`
export const Dot = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  padding-left: 3px;
  padding-right: 3px;
`
