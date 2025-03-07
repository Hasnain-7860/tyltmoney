import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Payment from './Components/Payment'
import Exchange from './Components/Exchange'
import Bacdeb from './Components/Bacdeb'
import Video from './Components/Video'
import Buy from './Components/buy'
import Trading from './Components/Trading'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      {/* <Payment/> */}
      <Exchange/>
      <Bacdeb/>
      <Video/>
      <Buy/>
      <Trading/>
    </div>
  )
}

export default App