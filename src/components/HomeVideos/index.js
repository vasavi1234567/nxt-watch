import {Link} from 'react-router-dom'

import HeaderContext from '../../context/HeaderContext'

import {
  ListItem,
  ThumbnailImage,
  VideoContainer,
  ProfileImage,
  VideoDetails,
  VideoTitle,
  ChannelName,
  ViewsAndDate,
  Dot,
} from './styledComponents'

import './index.css'

const HomeVideos = props => {
  const {video} = props
  const {
    id,
    title,
    thumbnailUrl,
    name,
    profileImageUrl,
    viewCount,
    publishedAt,
  } = video

  return (
    <HeaderContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const contentColor = isDarkTheme ? '#f9f9f9' : '#181818'

        return (
          <Link className="link" to={`/videos/${id}`}>
            <ListItem>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoContainer>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <VideoDetails>
                  <VideoTitle color={contentColor}>{title}</VideoTitle>
                  <ChannelName color={contentColor}>{name}</ChannelName>
                  <ViewsAndDate color={contentColor}>
                    {viewCount} views <Dot>.</Dot> {publishedAt}
                  </ViewsAndDate>
                </VideoDetails>
              </VideoContainer>
            </ListItem>
          </Link>
        )
      }}
    </HeaderContext.Consumer>
  )
}

export default HomeVideos
