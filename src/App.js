import './App.css'
import React from 'react'
import{Routes,Route} from 'react-router-dom'
import Home from './containers/home'
import About from './containers/about'
import Resume from './containers/resume'
import Skills from './containers/skills'
import Contact from './containers/contact'
import Portfolio from './containers/portfolio'


const App = () => {
  return (
    <div className='App'>
      {/*Particles */}

      {/* NavBar component*/}

      {/* Main Page content */}
      <Routes>
        {/* My routes */}

        <Route path='/' index element={<Home/>}/>
        <Route path='/about' index element={<About/>}/>
        <Route path='/resume' index element={<Resume/>}/>
        <Route path='/skills' index element={<Skills/>}/>
        <Route path='/contact' index element={<Contact/>}/>
        <Route path='/portfolio' index element={<Portfolio/>}/>

      </Routes>


    </div>
  )
}

export default App