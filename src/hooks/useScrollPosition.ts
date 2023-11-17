import { useState, useEffect } from 'react'

const useScrollPosition = () => {
  const [scrollTop, setScrollTop] = useState<number>(0)
  const onScroll = (e: Event) => {
    if (!e.target) return
    const target = e.target as any
    setScrollTop(target?.documentElement?.scrollTop)
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollTop])
  return scrollTop
}

export default useScrollPosition
