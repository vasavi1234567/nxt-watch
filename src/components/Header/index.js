import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

import HeaderContext from '../../context/HeaderContext'

import {
  Navbar,
  LogoLink,
  WebsiteLogo,
  Itemscontainer,
  Theme,
  ProfileLogo,
  LogoutButton,
  ModalContainer,
  ModalDesc,
  ButtonsContainer,
  CloseButton,
  ConfirmButton,
  LogoutIconButton,
} from './styledComponents'

const Header = props => (
  <HeaderContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const color = isDarkTheme ? '#ffffff' : '#00306e'
      const backgroundColor = isDarkTheme ? '#231f20' : '#f1f5f9'

      const onChangeTheme = () => {
        toggleTheme()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <Navbar backgroundColor={backgroundColor}>
          <LogoLink to="/">
            <WebsiteLogo
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </LogoLink>
          <Itemscontainer>
            <Theme type="button" data-testid="theme" onClick={onChangeTheme}>
              {isDarkTheme ? (
                <BsBrightnessHigh color="#ffffff" size={27} />
              ) : (
                <BsMoon size={27} />
              )}
            </Theme>
            <ProfileLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              trigger={
                <LogoutButton
                  type="button"
                  color={color}
                  backgroundColor={backgroundColor}
                >
                  Logout
                </LogoutButton>
              }
            >
              {close => (
                <ModalContainer>
                  <ModalDesc>Are you sure, you want to logout?</ModalDesc>
                  <ButtonsContainer>
                    <CloseButton
                      data-testid="closeButton"
                      type="button"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
            <Popup
              modal
              trigger={
                <LogoutIconButton type="button">
                  <FiLogOut color={color} size={27} />
                </LogoutIconButton>
              }
              className="popup-content"
            >
              {close => (
                <ModalContainer>
                  <ModalDesc>Are you sure, you want to logout?</ModalDesc>
                  <ButtonsContainer>
                    <CloseButton
                      data-testid="closeButton"
                      type="button"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
          </Itemscontainer>
        </Navbar>
      )
    }}
  </HeaderContext.Consumer>
)

export default withRouter(Header)
