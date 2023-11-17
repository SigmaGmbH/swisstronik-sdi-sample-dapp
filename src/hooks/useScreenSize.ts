import { useState, useEffect } from 'react'

const useScreenSize = () => {
  const getCurrentDimension = () => ({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const [screenSize, setScreenSize] = useState(getCurrentDimension())

  useEffect(() => {
    const updateDimension = () => setScreenSize(getCurrentDimension())
    window.addEventListener('resize', updateDimension)
    return () => {
      window.removeEventListener('resize', updateDimension)
    }
  }, [])

  return screenSize
}

export default useScreenSize
