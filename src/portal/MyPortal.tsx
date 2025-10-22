import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react'

export const MyPortal = () => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = document.getElementById('to-portal') as HTMLDivElement | null
    setContainer(el)
  }, [])

  if (!container) {
    return null
  }

  return (
    <div>
      here my portal test
      {createPortal('<p>my portal content</p>', container)}
    </div>
  )
}
