/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

const React = require("react")
const Layout = ...
const MobileLayout = ...

exports.wrapPageElement = ({ element, props }) => {
   const isMobile = useDetectMobile()

  return (
    isMobile 
      ? <MobileLayout {...props}>{element}</MobileLayout> 
      : <Layout {...props}>{element}</Layout>

  )
}