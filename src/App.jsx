import { Route, Routes } from 'react-router';
import './App.css';
import { Menu } from './components';
import Home from './components/pages/Home';
import Tickets from './components/pages/Tickets';
import Ideas from './components/pages/Ideas'
import Contacts from './components/pages/Contacts'
import Agents from './components/pages/Agents'
import Articles from './components/pages/Articles'
import Settings from './components/pages/Settings'
import Subscription from './components/pages/Subscription'

function App() {
  return (

    <div className="App">

        <Menu />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Tickets' element={<Tickets />} />
          <Route path='/Ideas' element={<Ideas />} />
          <Route path='/Contacts' element={<Contacts />} />
          <Route path='/Agents' element={<Agents />} />
          <Route path='/Articles' element={<Articles />} />
          <Route path='/Settings' element={<Settings />} />
          <Route path='/Subscription' element={<Subscription />} />
        </Routes>

        

    </div>
  );
}

export default App;
