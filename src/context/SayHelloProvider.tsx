import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from 'react'
import { noop } from 'es-toolkit'

export const SayHelloContext = createContext<{
  name: string
  sayHello: () => string
  setName: Dispatch<SetStateAction<string>>
}>({
  name: '',
  sayHello: () => '',
  setName: noop,
})

export const SayHelloProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState('')

  const sayHello = useCallback(() => {
    if (name) {
      return `Hi, ${name}`
    }
    return 'Hi, what is your name?'
  }, [name])

  const values = useMemo(
    () => ({
      sayHello,
      name,
      setName,
    }),
    [sayHello, name, setName]
  )

  return (
    <SayHelloContext.Provider value={values}>
      {children}
    </SayHelloContext.Provider>
  )
}
