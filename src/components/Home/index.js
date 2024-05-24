import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import HeaderContext from '../../context/HeaderContext'
import NoHomeVideos from '../NoHomeVideos'
import FailureView from '../FailureView'

import {
  HomeContainer,
  BannerContainer,
  BannerLeft,
  BannerImage,
  BannerContent,
  BannerButton,
  BannerRight,
  BannerCloseIcon,
  SearchContainer,
  SearchInput,
  SearchIconContainer,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    homeVideos: [],
    banner: 'flex',
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        name: video.channel.name,
        profileImageUrl: video.channel.profile_image_url,
        viewCount: video.view_count,
        publishedAt: video.published_at,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        homeVideos: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onCloseBanner = () => {
    this.setState({banner: 'none'})
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearchResults = () => {
    this.getVideos()
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#00306e" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideosView = () => {
    const {homeVideos} = this.state
    return <NoHomeVideos homeVideos={homeVideos} onRetry={this.onRetry} />
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderHomeVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {searchInput, banner} = this.state
    return (
      <HeaderContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const display = banner === 'flex' ? 'flex' : 'none'
          const backgroundColor = isDarkTheme ? '#181818' : '#f9f9f9'
          const color = isDarkTheme ? '#f9f9f9' : '#231f20'

          return (
            <>
              <Header />
              <NavigationBar />
              <HomeContainer
                data-testid="home"
                backgroundColor={backgroundColor}
              >
                <BannerContainer data-testid="banner" display={display}>
                  <BannerLeft>
                    <BannerImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="nxt watch logo"
                    />
                    <BannerContent>
                      Buy Nxt Watch Premium Prepaid plans with <br /> UPI
                    </BannerContent>
                    <BannerButton type="button">GET IT NOW</BannerButton>
                  </BannerLeft>
                  <BannerRight>
                    <BannerCloseIcon
                      data-testid="close"
                      onClick={this.onCloseBanner}
                    >
                      <AiOutlineClose size={25} />
                    </BannerCloseIcon>
                  </BannerRight>
                </BannerContainer>
                <SearchContainer>
                  <SearchInput
                    type="search"
                    value={searchInput}
                    placeholder="Search"
                    onChange={this.onChangeInput}
                    color={color}
                  />
                  <SearchIconContainer
                    data-testid="searchButton"
                    onClick={this.onSearchResults}
                  >
                    <AiOutlineSearch size={20} />
                  </SearchIconContainer>
                </SearchContainer>
                {this.renderHomeVideos()}
              </HomeContainer>
            </>
          )
        }}
      </HeaderContext.Consumer>
    )
  }
}

export default Home
