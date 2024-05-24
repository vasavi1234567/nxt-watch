import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
`
export const NavContainer = styled.div`
  height: 80vh;
  width: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavOptions = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0;
  margin-top: 0;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
export const NavLinkContainer = styled.li`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
`
export const NavContent = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 20px;
  margin-left: 15px;
`
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`
export const ContactHeading = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 800;
`
export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
`
export const Icon = styled.img`
  height: 25px;
  width: 25px;
  margin-right: 10px;
  border-radius: 50%;
`
export const ContactContent = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 20px;
`
export const NavSmallContainer = styled.nav`
  background-color: ${props => props.bgColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 5vh;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
