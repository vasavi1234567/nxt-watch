import Header from '../Header'
import NavigationBar from '../NavigationBar'
import HeaderContext from '../../context/HeaderContext'

import {
  NotFoundContainer,
  NotFoundVideos,
  NotFoundImage,
  NotFoundHeading,
  NotFoundContent,
} from './styledComponents'

const NotFound = () => (
  <HeaderContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const backgroundColor = isDarkTheme ? '#181818' : '#f1f5f9'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const contentColor = isDarkTheme ? '#e2e8f0' : '#475569'
      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      return (
        <>
          <Header />
          <NavigationBar />
          <NotFoundContainer backgroundColor={backgroundColor}>
            <NotFoundVideos>
              <NotFoundImage src={imageUrl} alt="not found" />
              <NotFoundHeading headingColor={headingColor}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundContent contentColor={contentColor}>
                We are sorry, the page you requested could not be found.
              </NotFoundContent>
            </NotFoundVideos>
          </NotFoundContainer>
        </>
      )
    }}
  </HeaderContext.Consumer>
)

export default NotFound
