import React from 'react'
import { ThemeContext, Theme } from './context/Context'

import Routes from './Routes'

function App() {
  const [theme, setTheme] = React.useState(Theme.Blue)

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Routes />
    </ThemeContext.Provider>
  )
}
export default App
