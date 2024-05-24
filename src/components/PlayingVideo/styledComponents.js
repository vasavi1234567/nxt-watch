import styled from 'styled-components'

export const VideoPlayer = styled.div`
  padding: 15px;
`
export const VideoTitle = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 25px;
`
export const VideoStatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const VideoStatus = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 13px;
`
export const VideoDot = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  padding: 5px;
`
export const SocialButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const ButtonContainer = styled.div`
  display: flex;
  background-color: transparent;
`

export const SocialButton = styled.button`
  color: ${props => props.color};
  color: #2563eb;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin-right: 10px;
`
export const ButtonLabel = styled.span`
  color: #2563eb;
  margin-left: 5px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const HrLine = styled.hr`
  border: 1px solid #909090;
`
export const ChannelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`
export const ChannelImage = styled.img`
  height: 27px;
  width: 27px;
  border-radius: 50%;
  margin-right: 20px;
`
export const ChannelContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChnnelName = styled.p`
  color: 4{props => props.color};
  font-family: 'Roboto';
  font-size: 15px;
  margin: 0;
`
export const ChannelSubscribers = styled.p`
  color: 4{props => props.color};
  font-family: 'Roboto';
  font-size: 13px;
`
export const ChannelDescription = styled.p`
  color: 4{props => props.color};
  font-family: 'Roboto';
  font-size: 15px;
`
