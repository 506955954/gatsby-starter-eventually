const React = require("react")
const Layout = ...
const MobileLayout = ...

exports.wrapPageElement = ({ element, props }) => {

   // a made up hook to detect browser size, implement your own
   const isMobile = useDetectMobile()

  return (
    isMobile 
      ? <MobileLayout {...props}>{element}</MobileLayout> 
      : <Layout {...props}>{element}</Layout>

  )
}