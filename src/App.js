import React from "react"
import Menu from './Components/Menu/Menu'
import Summary from './Components/Summary/Summary'
import Projects from './Components/Projects/Projects'
import Header from './Components/Header/Header'
import FindMe from './Components/Find Me/FindMe'
import Divider from './Components/Divider/Divider'
import './App.css'

function App() {
      return(
        <div class="page">
          <Header />
          <Summary />
          <Divider />
          <Projects />
          <FindMe />
          <Menu />
        </div>
      )
}

export default App