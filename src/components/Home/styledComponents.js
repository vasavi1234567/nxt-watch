import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.backgroundColor};
  overflow-y: auto;
  min-height: 100vh;
  margin-top: 30px;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    margin-left: 200px;
    margin-bottom: 0;
  }
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  height: 200px;
  justify-content: space-between;
  padding: 20px;
  display: ${props => props.display};
`
export const BannerLeft = styled.div`
  width: 50vw;
`
export const BannerImage = styled.img`
  height: 5vh;
`
export const BannerContent = styled.p`
  font-family: 'roboto';
  color: #000000;
  font-size: 15px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const BannerButton = styled.button`
  height: 2vh;
  background-color: transparent;
  border: none;
`
export const BannerRight = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const BannerCloseIcon = styled.button`
  height: 2vh;
  background-color: trasparent;
  border: none;
`
export const SearchContainer = styled.div`
  display: flex;
  align-self: center;
  border: 1px solid #909090;
  border-radius: 4px;
  margin: 15px;
  height: 8vh;
  width: 70%;
`
export const SearchInput = styled.input`
  font-family: 'Roboto';
  color: ${props => props.color};
  background-color: transparent;
  border: none;
  padding: 5px;
  outline: none;
  width: 100%;
`
export const SearchIconContainer = styled.button`
  background-color: #909090;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`
