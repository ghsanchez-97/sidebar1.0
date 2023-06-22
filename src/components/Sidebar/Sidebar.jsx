import { useState } from 'react'
import { Links } from 'Data/Links'
import Item from 'components/Items'
import './index.scss'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={isOpen ? 'sidebarOpen' : 'sidebar'}>
      <svg
        className='hamburger'
        onClick={() => setIsOpen(!isOpen)}
        viewBox='0 0 18 12'>
        <path
          d='M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z'
          fill='#8F8F8F'
        />
      </svg>
      <div className='linksContainer'>
      {Links &&
          Links.map (({to, text, svg}) => (
            <Item to={to} text={text} svg={svg} open={isOpen} />
          ))}
      </div>
    </div>
  )
}
export default Sidebar
