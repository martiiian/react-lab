import styles from './StickyWrapper.module.scss'
import { ReactNode, RefObject, useLayoutEffect, useRef, useState } from 'react'
import { ScrollableElement } from '@/sticky/types.ts'

interface StickyWrapperPropsType {
  stickyRef: RefObject<HTMLDivElement | null>
  scrollRef: RefObject<ScrollableElement | null>
  children: (props: { atBottom: boolean }) => ReactNode
}

export const StickyWrapper = ({
  stickyRef,
  scrollRef,
  children,
}: StickyWrapperPropsType) => {
  const [atBottom, setAtBottom] = useState(false)
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current
    const sticky = stickyRef.current
    const scrollEl = scrollRef.current

    if (!wrapper || !sticky || !scrollEl) return

    let rafId: number

    const scrollHandler = () => {
      rafId = requestAnimationFrame(() => {
        const wrapperRect = wrapper.getBoundingClientRect()
        const stickyRect = sticky.getBoundingClientRect()

        const marginTop = parseFloat(getComputedStyle(sticky).marginTop) || 0
        const totalStickyHeight = stickyRect.height + marginTop
        const isAtBottom =
          wrapperRect.bottom < stickyRect.bottom + totalStickyHeight

        setAtBottom(isAtBottom)
      })
    }

    scrollHandler()

    scrollEl.addEventListener('scroll', scrollHandler, { passive: true })
    return () => {
      scrollEl.removeEventListener('scroll', scrollHandler)
      cancelAnimationFrame(rafId)
    }
  }, [scrollRef, stickyRef])

  return (
    <div ref={wrapperRef} className={styles.Wrapper}>
      {children({ atBottom })}
    </div>
  )
}
