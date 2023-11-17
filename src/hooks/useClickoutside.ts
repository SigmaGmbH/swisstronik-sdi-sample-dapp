import { useEffect, useRef } from 'react'

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<any>(null)
  useEffect(() => {
    const clickOutside = (event: any) => {
      const currentParentLink = event?.target?.parentNode
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        currentParentLink &&
        !currentParentLink.hasAttribute('data-no-click-outside')
      ) {
        callback()
      }
    }
    document.addEventListener('click', clickOutside)
    return () => {
      document.removeEventListener('click', clickOutside)
    }
  }, [ref])
  return ref
}

export default useOutsideClick
