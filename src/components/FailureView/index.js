import {
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureContent,
  FailureButton,
} from './styledComponents'

import HeaderContext from '../../context/HeaderContext'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <HeaderContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const contentColor = isDarkTheme ? '#e2e8f0' : '#475569'

        const failureImage = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureContainer>
            <FailureImage src={failureImage} alt="failure view" />
            <FailureHeading headingColor={headingColor}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureContent contentColor={contentColor}>
              We are having some trouble to complete your request. <br /> Please
              try again.
            </FailureContent>
            <FailureButton type="button" onClick={onClickRetry}>
              Retry
            </FailureButton>
          </FailureContainer>
        )
      }}
    </HeaderContext.Consumer>
  )
}

export default FailureView
