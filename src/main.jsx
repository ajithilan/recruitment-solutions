import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SlideRoutes from 'react-slide-routes';
import { Auth } from './routes/Auth'
import { Homepage } from './routes/Homepage'
import { TalentSearch } from './routes/talentSearch'
import 'bootstrap-icons/font/bootstrap-icons.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <div className='brand'>
        <h2 className='brand_name'>Recruitment Solutions</h2>
        <h2 className='brand_logo'>RS</h2>
      </div>
      <SlideRoutes duration={1000} timing='ease-in-out'>
        <Route path='/' element={<Auth/>}/>
        <Route path='/homepage' element={<Homepage/>}/>
        <Route path='/talentsearch' element={<TalentSearch/>}/>
      </SlideRoutes>
    </Router>
  </React.StrictMode>,
)
