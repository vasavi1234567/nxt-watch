import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import HeaderContext from '../../context/HeaderContext'

import {
  NavBar,
  NavContainer,
  NavOptions,
  NavLink,
  NavLinkContainer,
  NavContent,
  ContactContainer,
  ContactHeading,
  ContactIcons,
  Icon,
  ContactContent,
  NavSmallContainer,
} from './styledComponents'

class NavigationBar extends Component {
  renderItems = () => (
    <HeaderContext.Consumer>
      {value => {
        const {isDarkTheme, changeTab, activeTab} = value
        const activeTagBackgroundColor = isDarkTheme ? '#475569' : '#cbd5e1'
        const backgroundColor = isDarkTheme ? '#231f20' : '#f1f5f9'
        const contentColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        const onClickHome = () => {
          changeTab('Home')
        }

        const onClickTrending = () => {
          changeTab('Trending')
        }

        const onClickGaming = () => {
          changeTab('Gaming')
        }

        const onClickSavedVideos = () => {
          changeTab('Saved')
        }

        return (
          <NavBar>
            <NavContainer backgroundColorr={backgroundColor}>
              <NavOptions>
                <NavLink to="/">
                  <NavLinkContainer
                    bgColor={
                      activeTab === 'Home' ? activeTagBackgroundColor : 'none'
                    }
                    key="home"
                    onClick={onClickHome}
                  >
                    <AiFillHome
                      size={28}
                      color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                    />
                    <NavContent color={contentColor}>Home</NavContent>
                  </NavLinkContainer>
                </NavLink>
                <NavLink to="/trending">
                  <NavLinkContainer
                    bgColor={
                      activeTab === 'Trending'
                        ? activeTagBackgroundColor
                        : 'none'
                    }
                    key="trending"
                    onClick={onClickTrending}
                  >
                    <HiFire
                      size={28}
                      color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                    />
                    <NavContent color={contentColor}>Trending</NavContent>
                  </NavLinkContainer>
                </NavLink>
                <NavLink to="/gaming">
                  <NavLinkContainer
                    bgColor={
                      activeTab === 'Gaming' ? activeTagBackgroundColor : 'none'
                    }
                    key="gaming"
                    onClick={onClickGaming}
                  >
                    <SiYoutubegaming
                      size={28}
                      color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                    />
                    <NavContent color={contentColor}>Gaming</NavContent>
                  </NavLinkContainer>
                </NavLink>
                <NavLink to="/saved-videos">
                  <NavLinkContainer
                    bgColor={
                      activeTab === 'Saved' ? activeTagBackgroundColor : 'none'
                    }
                    key="saved"
                    onClick={onClickSavedVideos}
                  >
                    <CgPlayListAdd
                      size={28}
                      color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                    />
                    <NavContent color={contentColor}>Saved videos</NavContent>
                  </NavLinkContainer>
                </NavLink>
              </NavOptions>
              <ContactContainer>
                <ContactHeading color={contentColor}>CONTACT US</ContactHeading>
                <ContactIcons>
                  <Icon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <Icon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <Icon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </ContactIcons>
                <ContactContent color={contentColor}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactContent>
              </ContactContainer>
            </NavContainer>
            <NavSmallContainer backgroundColor={backgroundColor}>
              <NavLink to="/">
                <AiFillHome
                  size={28}
                  onClick={onClickHome}
                  color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                />
              </NavLink>
              <NavLink to="/trending">
                <HiFire
                  size={28}
                  onClick={onClickTrending}
                  color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                />
              </NavLink>
              <NavLink to="/gaming">
                <SiYoutubegaming
                  size={28}
                  onClick={onClickGaming}
                  color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                />
              </NavLink>
              <NavLink to="/saved-videos">
                <CgPlayListAdd
                  size={28}
                  onClick={onClickSavedVideos}
                  color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                />
              </NavLink>
            </NavSmallContainer>
          </NavBar>
        )
      }}
    </HeaderContext.Consumer>
  )

  render() {
    return <>{this.renderItems()}</>
  }
}

export default NavigationBar
