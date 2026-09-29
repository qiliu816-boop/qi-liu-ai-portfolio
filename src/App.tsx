import { useEffect } from 'react'
import HomePage from './pages/HomePage'
import TradePilotPage from './pages/TradePilotPage'

export default function App() {
  const isTradePilot = window.location.pathname.replace(/\/$/, '') === '/tradepilot'

  useEffect(() => {
    document.title = isTradePilot
      ? 'TradePilot AI Case Study | Qi Liu'
      : 'Qi Liu | AI Portfolio'
  }, [isTradePilot])

  return isTradePilot ? <TradePilotPage /> : <HomePage />
}
