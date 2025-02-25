import { useState } from 'react'

import ProfilePage from './Pages/ProfilePage'
import AboutSection from './Pages/AboutSection'
import InsightsSection from './Pages/InsightsSection'
import ClassesSection from './Pages/ClassesSection'
import Footer from './Pages/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProfilePage />
      <AboutSection />
      <InsightsSection />
      <ClassesSection />
      <Footer />
    </>
  )
}

export default App
