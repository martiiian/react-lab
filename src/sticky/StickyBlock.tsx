import styles from './StickyBlock.module.scss'
import { forwardRef } from 'react'
import cn from 'classnames'

interface StickyBlockProps {
  atBottom: boolean
}

export const StickyBlock = forwardRef<HTMLDivElement, StickyBlockProps>(
  ({ atBottom }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(styles.StickyBlock, { [styles.AtTheEnd]: atBottom })}
      >
        im sticky block
      </div>
    )
  }
)
