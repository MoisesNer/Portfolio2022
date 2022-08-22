import React from 'react'
import { BrowserRouter as Router, Switch, Route} from  'react-router-dom'

import './App.css'

import Navbar from './components/NavBar/Navbar';
import Dropdown from './components/Dropdown/Dropdown';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Footer from './pages/Footer/Footer'
import Contact from './pages/Contact/Contact'
import Error from './pages/Error/Error'
import Project from './pages/Project/Project'

// import { InfoData } from './data/InfoData';
// import ProjectDetail from './pages/ProjectDetail/ProjectDetail'


function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Dropdown/>
      <Switch>
        <Route  path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/>
        <Route path='/contact' exact component={Contact}/>
          <Route path='/:slug' exact component={Project}/>
        <Route component={Error}/>
      </Switch>
      <Footer/>
    </Router>
    </>
  )
}

export default App;
