import './App.css'
import {
  Nav,
  Header,
  SpeakOut,
  SubmitAName,
  Footer,
  PreviousRulings,
} from './components'
import { ManagerProvider } from './context'

const App = () => {
  return (
    <ManagerProvider>
      <Nav />
      <Header />
      <div className="max-centered">
        <SpeakOut />
        <PreviousRulings />
        <SubmitAName />
        <hr role="separator"></hr>
        <Footer />
      </div>
    </ManagerProvider>
  )
}

export default App
