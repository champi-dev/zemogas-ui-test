import './App.css'
import {
  Nav,
  Header,
  SpeakOut,
  SubmitAName,
  Footer,
  PreviousRulings,
} from './components'
import celebrities from './mockData/celebrities.json'

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <div className="max-centered">
        <SpeakOut />
        <PreviousRulings celebrities={celebrities.data} />
        <SubmitAName />
        <hr role="separator"></hr>
        <Footer />
      </div>
    </>
  )
}

export default App
