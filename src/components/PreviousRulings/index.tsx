import './styles.css'
import { type SingleCelebrity } from '@/models'
import { Mobile, TabletDesktop } from './components'

interface PreviousRulingsProps {
  celebrities: SingleCelebrity[]
}

const PreviousRulings = ({ celebrities }: PreviousRulingsProps) => {
  return (
    <>
      <Mobile className="mobile" celebrities={celebrities} />
      <TabletDesktop className="tablet-desktop" />
    </>
  )
}

export default PreviousRulings
