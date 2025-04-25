
import { NavLink } from 'react-router'
import './menu.css'
import logo from '../../assets/images/logo.svg'
import Overview from '../../assets/images/overwiev.svg'
import Tickets from '../../assets/images/planshet.svg'
import Ideas from '../../assets/images/lampochka.svg'
import Contacts from '../../assets/images/contacts.svg'
import Agent from '../../assets/images/agent.svg'
import Articles from '../../assets/images/bool.svg'
import Settings from '../../assets/images/settings.svg'
import Subcsribe from '../../assets/images/sub.svg'


export function Menu() {
  return (

    <div className='menu'>
      <h1 className="menu_logo">
        <img src={logo} alt={logo} />
        Dashboard Kit
      </h1>
      <ul className="menu_list">
        <NavLink className='menu_pages' to='/'>
          <img src={Overview} alt={Overview} />
          <li >
            Overview
          </li>
        </NavLink>
        <NavLink className='menu_pages' to='/Tickets'>
          <img src={Tickets} alt={Tickets} />
          <li >
            Tickets
          </li>
        </NavLink>
        <NavLink className='menu_pages' to='/Ideas'>
          <img src={Ideas} alt={Ideas} />
          <li >
            Ideas
          </li>
        </NavLink>
        <NavLink className='menu_pages' to='/Contacts'>
          <img src={Contacts} alt={Contacts} />
          <li >
            Contacts
          </li>
        </NavLink>
        <NavLink className='menu_pages' to='/Agents'>
          <img src={Agent} alt={Agent} />
          <li >
            Agents
          </li>
        </NavLink>
        <NavLink className='menu_pages' to='/Articles'>
          <img src={Articles} alt={Articles} />
          <li >
            Articles
          </li>
        </NavLink>
        <hr />
        <NavLink className='menu_pages' to='/Settings'>
          <img src={Settings} alt={Settings} />
          <li >
            Settings
          </li>
        </NavLink>
        <NavLink className='menu_pages' to='/Subscription'>
          <img src={Subcsribe} alt={Subcsribe} />
          <li >
            Subscription
          </li>
        </NavLink>
      </ul>
    </div>
  )
}
