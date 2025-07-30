import { StickyWrapper } from '@/sticky/StickyWrapper.tsx'
import { StickyBlock } from '@/sticky/StickyBlock.tsx'
import { useRef } from 'react'
import { ScrollableElement } from '@/sticky/types.ts'

export const StickyPlayground = () => {
  const stickyRef = useRef<HTMLDivElement | null>(null)
  const scrollRef = useRef<ScrollableElement | null>(window)

  return (
    <div>
      <div style={{ height: '50vh' }}>here top content</div>
      <div style={{ height: '50vh' }}>here top content</div>

      <StickyWrapper stickyRef={stickyRef} scrollRef={scrollRef}>
        {({ atBottom }) => (
          <div>
            <div style={{ height: '300vh', background: 'red' }}>body here</div>
            <StickyBlock ref={stickyRef} atBottom={atBottom} />
          </div>
        )}
      </StickyWrapper>

      <div style={{ height: '50vh' }}>here top content</div>
    </div>
  )
}
