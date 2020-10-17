import '../styles/globals.css'
import React from 'react'

function MyApp({ Component, pageProps }) {
  console.log("waaa");
  // React.useEffect(() => alert("waaaaay"));
  return <Component {...pageProps} />
}

export default MyApp
