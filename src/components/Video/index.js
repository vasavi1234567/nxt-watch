import HeaderContext from '../../context/HeaderContext'

import {
  ItemLink,
  TrendingItem,
  TrendingThumbnailImage,
  TrendingVideoDetails,
  TrendingVideoImage,
  TrendingContentContainer,
  TrendingTitle,
  TrendingChannelName,
  TrendingViewsAndDate,
  TrendingDot,
} from './styledComponents'

const Video = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    name,
    profileImageUrl,
    viewCount,
    publishedAt,
  } = videoDetails

  return (
    <HeaderContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const contentColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <ItemLink to={`/videos/${id}`} className="link">
            <TrendingItem>
              <TrendingThumbnailImage
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <TrendingVideoDetails>
                <TrendingVideoImage src={profileImageUrl} alt="channel logo" />
                <TrendingContentContainer>
                  <TrendingTitle color={contentColor}>{title}</TrendingTitle>
                  <TrendingChannelName color={contentColor}>
                    {name}
                  </TrendingChannelName>
                  <TrendingViewsAndDate color={contentColor}>
                    {viewCount} views <TrendingDot>.</TrendingDot> {publishedAt}
                  </TrendingViewsAndDate>
                </TrendingContentContainer>
              </TrendingVideoDetails>
            </TrendingItem>
          </ItemLink>
        )
      }}
    </HeaderContext.Consumer>
  )
}

export default Video
