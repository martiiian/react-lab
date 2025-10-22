import { createPortal } from 'react-dom'

import styles from './ModalPortalComponent.module.scss'

export const ModalPortalComponent = ({
  open,
  handleClose,
}: {
  open: boolean
  handleClose: () => void
}) => {
  const modalEl = document.getElementById('modal')

  const modalComponent = (
    <div className={styles.modal} style={{ display: open ? 'block' : 'none' }}>
      <div className={styles.modalContent}>
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  )

  if (modalEl) {
    return createPortal(modalComponent, modalEl)
  }

  return <span> no such dom node</span>
}

export default ModalPortalComponent
