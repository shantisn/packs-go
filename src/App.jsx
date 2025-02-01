import React from 'react'
import Navber from './layouts.jsx/Navber'
import Banner from './layouts.jsx/Banner'
import InputCard from './components/InputCard'
import Travel from './layouts.jsx/Travel'
import About from './layouts.jsx/About'
import Popular from './layouts.jsx/Popular'
const App = () => {
  return (
    <>
      <Navber/>
      <Banner/>
      <Travel/>
      <Popular/>
       <About/>
     
    </>
  )
}

export default App