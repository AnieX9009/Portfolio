import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProfilePage from './Pages/ProfilePage'
import AboutSection from './Pages/AboutSection'
import InsightsSection from './Pages/InsightsSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProfilePage />
      <AboutSection />
      <InsightsSection />
    </>
  )
}

export default App
