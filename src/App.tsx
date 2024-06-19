import './App.css'
import {
  Nav,
  Header,
  SpeakOut,
  SubmitAName,
  Footer,
  PreviousRulings,
} from './components'

function App() {
  return (
    <body>
      <Nav />
      <Header />
      <div className="max-centered">
        <SpeakOut />
        <PreviousRulings />
        <SubmitAName />
        <hr role="separator"></hr>
        <Footer />
      </div>
    </body>
  )
}

export default App
