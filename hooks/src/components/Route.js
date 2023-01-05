import React, { useEffect, useState } from 'react'

const Route = ({path,children}) => {

  const [currentPath, setcurrentPath] = useState(window.location.pathname);


  useEffect(() => {
    const onLocationChange = () => {
      console.log('location change ');
      setcurrentPath(window.location.pathname);
    }
    window.addEventListener('popstate',onLocationChange); 
  
    return () => {
      window.removeEventListener('popstate', onLocationChange)
    }
  }, [])
  
  return (
    currentPath ===path ? children : null
  )
}

export default Route