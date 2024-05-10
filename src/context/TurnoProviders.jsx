import { TurnoContext } from './TurnoContext'

export const TurnoProviders = ({children}) => {
  return (
    <TurnoContext.Provider>
        {children}
    </TurnoContext.Provider>
  )
}
