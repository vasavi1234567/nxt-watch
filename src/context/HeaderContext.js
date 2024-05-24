import React from 'react'

const HeaderContext = React.createContext({
  isDarkTheme: false,
  activeTab: 'Home',
  savedVideos: [],
  toggleTheme: () => {},
  addVideo: () => {},
  changeTab: () => {},
  removeVideo: () => {},
})

export default HeaderContext
