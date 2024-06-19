import './App.css'
import { Nav, Header, SpeakOut, SubmitAName, Footer } from './components'

function App() {
  return (
    <body>
      <Nav />
      <Header />
      <div className="max-centered">
        <SpeakOut />
        <main role="main">
          {/* <!-- Start: Implementation -->
            👉 Your code goes here 👈
            <!-- End: Implementation --> */}
        </main>
        <SubmitAName />
        <hr role="separator"></hr>
        <Footer />
      </div>
    </body>
  )
}

export default App
