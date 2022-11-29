import '../styles/globals.css'
// import { useRouter } from 'next/router'
// import { useEffect, useState } from 'react'
// import PageTransition from './components/PageTransition/PageTransition'

// function Loading(){
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   useEffect(()=>{
//     const handleStart = (url) => (url !== router.asPath) && setLoading(true);
//     const handleComplete = (url) => (url === router.asPath) && setTimeout(()=>{setLoading(false);},5000)

//     router.events.on('routerChangesStart', handleStart)
//     router.events.on('routerChangesComplete', handleComplete)
//     router.events.on('routerChangesError', handleComplete)

//   })
// }

function MyApp({ Component, pageProps }) {
  return(
      <Component {...pageProps} />
  ) 
}

export default MyApp
