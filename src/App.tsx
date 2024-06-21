import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Nav, Footer } from './components'
import { ManagerProvider } from './context'
import { Home, PastTrials } from './pages'

const App = () => {
  return (
    <ManagerProvider>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="past-trials" element={<PastTrials />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </ManagerProvider>
  )
}

export default App
