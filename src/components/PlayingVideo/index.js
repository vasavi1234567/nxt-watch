import ReactPlayer from 'react-player'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import HeaderContext from '../../context/HeaderContext'

import {
  VideoPlayer,
  VideoTitle,
  VideoStatusContainer,
  VideoStatus,
  VideoDot,
  SocialButtonsContainer,
  ButtonContainer,
  SocialButton,
  ButtonLabel,
  HrLine,
  ChannelContainer,
  ChannelImage,
  ChannelContent,
  ChnnelName,
  ChannelSubscribers,
  ChannelDescription,
} from './styledComponents'

const PlayingVideo = props => {
  const {videoDetails, isLiked, isDisliked, clickLiked, clickDisliked} = props

  const onClickLike = () => {
    clickLiked()
  }

  const onClickDislike = () => {
    clickDisliked()
  }

  return (
    <HeaderContext.Consumer>
      {value => {
        const {isDarkTheme, addVideo, savedVideos} = value
        const contentColor = isDarkTheme ? '#64748b' : '#231f20'
        let isSaved
        const index = savedVideos.findIndex(
          video => video.id === videoDetails.id,
        )
        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }
        const saveColor = isSaved ? '#2563eb' : contentColor

        const onClickSave = () => {
          addVideo(videoDetails)
        }

        return (
          <VideoPlayer>
            <ReactPlayer url={videoDetails.videoUrl} controls width="100%" />
            <VideoTitle color={contentColor}>{videoDetails.title}</VideoTitle>
            <VideoStatusContainer>
              <VideoStatus color={contentColor}>
                {videoDetails.viewCount} views
                <VideoDot>.</VideoDot>
                {videoDetails.publishedAt}
              </VideoStatus>
              <SocialButtonsContainer>
                <ButtonContainer>
                  <SocialButton
                    type="button"
                    onClick={onClickLike}
                    color={isLiked ? '#2563eb' : '#64748b'}
                  >
                    <AiOutlineLike size={25} />
                    <ButtonLabel>Like</ButtonLabel>
                  </SocialButton>
                </ButtonContainer>
                <ButtonContainer>
                  <SocialButton
                    type="button"
                    onClick={onClickDislike}
                    color={isDisliked ? '#2563eb' : '#64748b'}
                  >
                    <AiOutlineDislike size={25} />
                    <ButtonLabel>Dislike</ButtonLabel>
                  </SocialButton>
                </ButtonContainer>
                <ButtonContainer>
                  <SocialButton
                    type="button"
                    onClick={onClickSave}
                    color={saveColor}
                  >
                    <BiListPlus size={25} />
                    <ButtonLabel>{isSaved ? 'Saved' : 'Save'}</ButtonLabel>
                  </SocialButton>
                </ButtonContainer>
              </SocialButtonsContainer>
            </VideoStatusContainer>
            <HrLine />
            <ChannelContainer>
              <ChannelImage
                src={videoDetails.profileImageUrl}
                alt="channel logo"
              />
              <ChannelContent>
                <ChnnelName color={contentColor}>
                  {videoDetails.name}
                </ChnnelName>
                <ChannelSubscribers color={contentColor}>
                  {videoDetails.subscriberCount} subscribers
                </ChannelSubscribers>
                <ChannelDescription color={contentColor}>
                  {videoDetails.description}
                </ChannelDescription>
              </ChannelContent>
            </ChannelContainer>
          </VideoPlayer>
        )
      }}
    </HeaderContext.Consumer>
  )
}

export default PlayingVideo
