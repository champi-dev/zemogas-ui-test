import {
  Header,
  SpeakOut,
  SubmitAName,
  PreviousRulings,
} from '../../components'

const Home = () => {
  return (
    <>
      <Header />
      <div className="max-centered">
        <SpeakOut />
        <PreviousRulings />
        <SubmitAName />
        <hr role="separator"></hr>
      </div>
    </>
  )
}

export default Home
