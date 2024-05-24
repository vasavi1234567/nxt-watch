import {
  NoVideosContainer,
  NoVideosImage,
  NoVideosHeading,
  NoVideosContent,
  NoVideosButton,
  VideosList,
} from './styledComponents'

import HeaderContext from '../../context/HeaderContext'
import HomeVideos from '../HomeVideos'

const NoHomeVideos = props => {
  const {homeVideos, onRetry} = props
  const {videosLength} = homeVideos.length

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <HeaderContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const contentColor = isDarkTheme ? '#e2e8f0' : '#475569'

        return videosLength > 0 ? (
          <VideosList>
            {homeVideos.map(eachVideo => (
              <HomeVideos key={eachVideo.id} video={eachVideo} />
            ))}
          </VideosList>
        ) : (
          <NoVideosContainer>
            <NoVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideosHeading headingColor={headingColor}>
              No Search results found
            </NoVideosHeading>
            <NoVideosContent contentColor={contentColor}>
              Try different key words or remove search filter
            </NoVideosContent>
            <NoVideosButton type="button" onClick={onClickRetry}>
              Retry
            </NoVideosButton>
          </NoVideosContainer>
        )
      }}
    </HeaderContext.Consumer>
  )
}

export default NoHomeVideos
