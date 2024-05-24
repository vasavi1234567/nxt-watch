import {CgPlayListAdd} from 'react-icons/cg'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import HeaderContext from '../../context/HeaderContext'
import Video from '../Video'

import {
  SavedVideosContainer,
  SavedHeader,
  SavedIconTitleContainer,
  SavedTitle,
  SavedVideosList,
  NoSavedVideosContainer,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosContent,
} from './styledComponents'

const SavedVideos = () => (
  <HeaderContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      const backgroundColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const titleColor = isDarkTheme ? '#f9f9f9' : '#231f20'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const contentColor = isDarkTheme ? '#e2e8f0' : '#475569'

      return (
        <>
          <Header />
          <NavigationBar />
          <SavedVideosContainer
            backgroundColor={backgroundColor}
            data-testid="savedVideos"
          >
            <SavedHeader>
              <SavedIconTitleContainer>
                <CgPlayListAdd color="#ff0000" size={35} />
              </SavedIconTitleContainer>
              <SavedTitle color={titleColor}>Saved Videos</SavedTitle>
            </SavedHeader>
            {savedVideos.length > 0 ? (
              <SavedVideosList>
                {savedVideos.map(video => (
                  <Video key={video.id} videoDetails={video} />
                ))}
              </SavedVideosList>
            ) : (
              <NoSavedVideosContainer>
                <NoSavedVideosImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoSavedVideosHeading headingColor={headingColor}>
                  No saved videos found
                </NoSavedVideosHeading>
                <NoSavedVideosContent contentColor={contentColor}>
                  You can save your videos while watching them
                </NoSavedVideosContent>
              </NoSavedVideosContainer>
            )}
          </SavedVideosContainer>
        </>
      )
    }}
  </HeaderContext.Consumer>
)

export default SavedVideos
