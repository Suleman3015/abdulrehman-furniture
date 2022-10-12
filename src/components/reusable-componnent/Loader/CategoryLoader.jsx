import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={358}
    height={242}
    viewBox="0 0 358 242"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <path d="M 1 1 h 356 v 240 H 1 z" /> 
    <rect x="129" y="110" rx="11" ry="11" width="100" height="22" /> 
    <path d="M 1 1 h 356 v 240 H 1 z" />
  </ContentLoader>
)

export default MyLoader