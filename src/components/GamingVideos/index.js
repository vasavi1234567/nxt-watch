import HeaderContext from '../../context/HeaderContext'

import {
  ItemLink,
  ListItem,
  ThumbnailImage,
  GamingContentContainer,
  GamingTitle,
  GamingViews,
} from './styledComponents'

const VideoCard = props => {
  const {videoDetails} = props
  const {id, thumbnailUrl, title, viewCount} = videoDetails

  return (
    <HeaderContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const contentColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <ItemLink className="link" to={`/videos/${id}`}>
            <ListItem>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <GamingContentContainer>
                <GamingTitle color={contentColor}>{title}</GamingTitle>
                <GamingViews color={contentColor}>
                  {viewCount} Watching Worlwide
                </GamingViews>
              </GamingContentContainer>
            </ListItem>
          </ItemLink>
        )
      }}
    </HeaderContext.Consumer>
  )
}

export default VideoCard
