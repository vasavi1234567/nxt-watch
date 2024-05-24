import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 10vh;
  background-color: ${props => props.backgroundColor};
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`
export const LogoLink = styled(Link)`
  text-decoration: none;
`
export const WebsiteLogo = styled.img`
  height: 5vh;
`
export const Itemscontainer = styled.div`
  display: flex;
  jjustify-content: flex-end;
  align-items: center;
`
export const Theme = styled.button`
  margin-right: 10px;
  background-color: transparent;
  border: 0;
`
export const ProfileLogo = styled.img`
  height: 2vh;
  background-color: transparent;
  border: 0;
  margin-right: 10px;
`
export const LogoutButton = styled.button`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  font-family: 'Roboto';
  border: 1px solid;
  border-radius: 5px;
  padding: 6px;
  border-color: ${props => props.color};
  margin-left: 7px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const LogoutIconButton = styled.button`
  border: 0;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 130px;
  width: 230px;
  background-color: #d7dfe9;
  padding: 15px;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    height: 210px;
    width: 410px;
  }
`
export const ModalDesc = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin: 10px;
  text-align: center;
  color: #000000;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const CloseButton = styled.button`
  backgrounud-color: transparent;
  border: 1px solid #7e858e;
  padding: 10px;
  margin: 10px;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 10px;
  @media screen and (min-width: 768px) {
    padding: 12px;
    font-size: 15px;
  }
`
export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  color: #ebebeb;
  padding: 5px;
  margin: 10px;
  align-self: flex-end;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 10px;
  border: 1px solid #3b82f6;
  @media screen and (min-width: 768px) {
    padding: 12px;
    font-size: 15px;
  }
`
