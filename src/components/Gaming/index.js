import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import HeaderContext from '../../context/HeaderContext'
import GamingVideos from '../GamingVideos'
import FailureView from '../FailureView'

import {
  LoaderContainer,
  GamingVideosContainer,
  GamingContainer,
  GamingHeader,
  GamingIcon,
  GamingTitle,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    gamingVideos: [],
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(video => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        viewCount: video.view_count,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        gamingVideos: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#00306e" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideosview = () => {
    const {gamingVideos} = this.state
    return (
      <GamingVideosContainer>
        {gamingVideos.map(video => (
          <GamingVideos key={video.id} videoDetails={video} />
        ))}
      </GamingVideosContainer>
    )
  }

  onRetry = () => {
    this.getVideos()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderTrendingVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosview()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <HeaderContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const backgroundColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const contentColor = isDarkTheme ? '#f9f9f9' : '#181818'

          return (
            <>
              <Header />
              <NavigationBar />
              <GamingContainer
                backgroundColor={backgroundColor}
                data-testid="gaming"
              >
                <GamingHeader>
                  <GamingIcon>
                    <SiYoutubegaming size={30} color="#ff0000" />
                  </GamingIcon>
                  <GamingTitle color={contentColor}>Gaming</GamingTitle>
                </GamingHeader>
                {this.renderTrendingVideos()}
              </GamingContainer>
            </>
          )
        }}
      </HeaderContext.Consumer>
    )
  }
}

export default Gaming
