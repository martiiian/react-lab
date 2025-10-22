import { useContext, useState } from 'react'
import { SayHelloContext, SayHelloProvider } from './SayHelloProvider'

import ModalPortalComponent from './ModalPortalComponent.tsx'

import styles from '@/context/Context.module.scss'
import { ThemeContext, ThemeProvider } from '@/context/ThemeProvider.tsx'

const SayHelloComponent = () => {
  const { sayHello, setName, name } = useContext(SayHelloContext)
  const { theme } = useContext(ThemeContext)

  return (
    <div>
      <span>{sayHello()}</span>

      <div className={styles.root}>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          color={theme === 'dark' ? 'primary' : 'secondary'}
        />
      </div>
    </div>
  )
}

const WishGoodDayComponent = () => {
  const { name } = useContext(SayHelloContext)
  const { theme } = useContext(ThemeContext)

  console.log(theme)

  return (
    <div>
      {name ? (
        <span style={{ color: theme === 'dark' ? 'red' : 'black' }}>
          Have a good day, {name}!
        </span>
      ) : (
        <span>Hope, you are ok!</span>
      )}
    </div>
  )
}

const CurrentThemeNotice = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <>
      <span>Current theme is: {theme}</span>
      <button onClick={toggleTheme}>сменить тему</button>
    </>
  )
}

const ContextExample = () => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <ThemeProvider>
      <div id="modal" />

      <SayHelloProvider>
        <SayHelloComponent />
        <WishGoodDayComponent />
        <CurrentThemeNotice />
        <div>
          <h6>Portal Example:</h6>
          <button color="primary" onClick={handleClickOpen}>
            Open portal example dialog
          </button>
          <ModalPortalComponent open={open} handleClose={handleClose} />
        </div>
      </SayHelloProvider>
    </ThemeProvider>
  )
}

export default ContextExample
