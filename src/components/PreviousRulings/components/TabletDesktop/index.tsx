import './styles.css'
import { TopDropdown } from './components'

interface TabletDesktopProps {
  className: string
}

const TabletDesktop = ({ className }: TabletDesktopProps) => {
  return (
    <main className={className} role="main">
      <div className="main__top">
        <h2>Previous Rulings</h2>
        <TopDropdown />
      </div>
    </main>
  )
}

export default TabletDesktop
